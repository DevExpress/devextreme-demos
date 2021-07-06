import LooksSame from 'looks-same';
import path from 'path';
import fs from 'fs';
import { PNG } from 'pngjs';

const testRoot = './testing/'; // TODO
const screenshotsPath = path.join(testRoot, '/screenshots');
const artifactsPath = path.join(testRoot, '/artifacts');

const screenshotComparerDefault = {
  highlightColor: { r: 0xff, g: 0, b: 0xff },
  maskRadius: 5,
  attempts: 3,
  attemptTimeout: 500,
  looksSameComparisonOptions: {
    strict: false,
    tolerance: 5,
    ignoreAntialiasing: true,
    antialiasingTolerance: 5,
    ignoreCaret: true,
  },
};

function ensureArtifactsPath() {
  if (!fs.existsSync(artifactsPath)) {
    fs.mkdirSync(artifactsPath, { recursive: true });
  }
}

function saveArtifacts({
  screenshotFileName, etalonFileName,
}) {
  function copyToArtifacts(sourcePath, postfix = '') {
    const fileName = path.basename(sourcePath, '.png');
    const targetPath = path.join(artifactsPath, `${fileName}${postfix}.png`);
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, targetPath);
    }
  }

  copyToArtifacts(screenshotFileName);
  copyToArtifacts(etalonFileName, '_etalon');
}

export async function looksSame({ etalonFileName, screenshotBuffer, comparisonOptions }) {
  return new Promise((resolve, reject) => {
    LooksSame(etalonFileName, screenshotBuffer, comparisonOptions,
      async (_error, result) => {
        if (_error) {
          reject(_error);
        } else {
          resolve(result.equal);
        }
      });
  });
}

async function getMaskedScreenshotBuffer({
  screenshotFileName, etalonFileName, maskFileName,
}) {
  function isSizeEqual(image1, image2) {
    return image1.height === image2.height && image1.width === image2.width;
  }
  function getImage(imagePath) {
    const imageData = fs.readFileSync(imagePath);
    return PNG.sync.read(imageData, { filterType: -1 });
  }
  function applyMask(etalonImg, screenshotImg, maskImg) {
    for (let y = 0; y < screenshotImg.height; y += 1) {
      for (let x = 0; x < screenshotImg.width; x += 1) {
        // eslint-disable-next-line no-bitwise
        const index = (screenshotImg.width * y + x) << 2;
        if (maskImg.data[index + 0] < 255
          && maskImg.data[index + 1] < 255
          && maskImg.data[index + 2] < 255) {
          screenshotImg.data[index + 0] = etalonImg.data[index + 0];
          screenshotImg.data[index + 1] = etalonImg.data[index + 1];
          screenshotImg.data[index + 2] = etalonImg.data[index + 2];
          screenshotImg.data[index + 3] = etalonImg.data[index + 3];
        }
      }
    }
    return PNG.sync.write(screenshotImg);
  }
  if (!fs.existsSync(etalonFileName)) {
    throw new Error(`Etalon file not found: ${etalonFileName}`);
  }
  const etalonImg = getImage(etalonFileName);
  const screenshotImg = getImage(screenshotFileName);
  if (!isSizeEqual(etalonImg, screenshotImg)) {
    throw new Error(`The screenshot size (W:${screenshotImg.width}, H:${screenshotImg.height}) does not match the etalon size (W:${etalonImg.width}, H:${etalonImg.height}) for: ${screenshotFileName}`);
  }

  if (!fs.existsSync(maskFileName)) {
    return fs.readFileSync(screenshotFileName);
  }
  const maskImg = getImage(maskFileName);
  if (!isSizeEqual(etalonImg, maskImg)) {
    throw new Error(`Mask size does not match etalon size for screenshot: ${screenshotFileName}`);
  }
  const targetImageBuffer = applyMask(etalonImg, screenshotImg, maskImg);
  return targetImageBuffer;
}

async function getDiff({
  etalonFileName, screenshotBuffer, options,
}) {
  function colorToString(color) {
    return `#${Object.values(color).map((n) => n.toString(16).padStart(2, '0')).join('')}`;
  }
  const highlightColor = colorToString(options.highlightColor);
  return new Promise((resolve, reject) => {
    const diffOptions = {
      reference: etalonFileName,
      current: screenshotBuffer,
      highlightColor,
      ...options.looksSameComparisonOptions,
    };
    LooksSame.createDiff(diffOptions, (error, buffer) => {
      if (error) {
        reject(error);
      } else {
        resolve(buffer);
      }
    });
  });
}

function getMask(diffBuffer, maskFileName, options) {
  function transformImage(image, func) {
    for (let y = 0; y < image.height; y += 1) {
      for (let x = 0; x < image.width; x += 1) {
        // eslint-disable-next-line no-bitwise
        const index = (image.width * y + x) << 2;
        func(image.data, index, x, y);
      }
    }
  }

  function makeTransparentExceptColor(image, { r, g, b }) {
    transformImage(image, (data, index) => {
      const isHighlighted = (
        data[index + 0] === r
        && data[index + 1] === g
        && data[index + 2] === b);
      const color = isHighlighted ? 0 : 255;

      data[index + 0] = color;
      data[index + 1] = color;
      data[index + 2] = color;
    });
  }

  function applyMaskRadius(image, mr) {
    const aroundColor = 7;
    transformImage(image, (data, index, x, y) => {
      const isHighlighted = data[index] === 0;

      if (isHighlighted) {
        const yBegin = Math.max(0, y - mr);
        const xBegin = Math.max(0, x - mr);
        const yEnd = Math.min(image.height, y + mr);
        const xEnd = Math.min(image.width, x + mr);

        for (let ry = yBegin; ry < yEnd; ry += 1) {
          for (let rx = xBegin; rx < xEnd; rx += 1) {
          // eslint-disable-next-line no-bitwise
            const roundIndex = (image.width * ry + rx) << 2;
            if (data[roundIndex] === 255) {
              data[roundIndex] = aroundColor;
            }
          }
        }
      }
    });

    transformImage(image, (data, index) => {
      if (data[index] === aroundColor) {
        data[index + 0] = 0;
        data[index + 1] = 0;
        data[index + 2] = 0;
      }
    });
  }

  function applyPrevMask(image, prevMaskImage) {
    transformImage(image, (data, index) => {
      const isPrevHighlighted = prevMaskImage.data[index] === 0;

      if (isPrevHighlighted) {
        data[index + 0] = 0;
        data[index + 1] = 0;
        data[index + 2] = 0;
      }
    });
  }

  const image = PNG.sync.read(diffBuffer);
  const maskBuffer = fs.existsSync(maskFileName) && fs.readFileSync(maskFileName);
  const maskImg = maskBuffer && PNG.sync.read(maskBuffer);
  makeTransparentExceptColor(image, options.highlightColor);
  if (options.maskRadius) {
    applyMaskRadius(image, options.maskRadius);
  }
  if (maskImg) {
    applyPrevMask(image, maskImg);
  }

  return PNG.sync.write(image);
}

async function tryGetValidScreenshot({
  element, t, screenshotFileName, etalonFileName, maskFileName, options,
}) {
  let equal = false;
  let attempt = 0;
  let screenshotBuffer;
  while (!equal && attempt < options.attempts) {
    attempt += 1;
    if (attempt > 1) {
      fs.unlinkSync(screenshotFileName);
    }
    await (element
      ? t.takeElementScreenshot(element, screenshotFileName)
      : t.takeScreenshot(screenshotFileName));

    screenshotBuffer = await getMaskedScreenshotBuffer({
      screenshotFileName, etalonFileName, maskFileName,
    });
    equal = await looksSame({
      etalonFileName,
      screenshotBuffer,
      comparisonOptions: options.looksSameComparisonOptions,
    });
    if (attempt < options.attempts) {
      await t.wait(options.attemptTimeout);
    }
  }
  return { equal, screenshotBuffer };
}

export async function compareScreenshot(
  t,
  screenshotName,
  element = null,
  comparisonOptions,
) {
  if (!screenshotName.endsWith('.png')) {
    // eslint-disable-next-line no-param-reassign
    screenshotName += '.png';
  }
  const screenshotFileName = path.join(screenshotsPath, screenshotName);
  const etalonsPath = path.join(path.dirname(t.testRun.test.testFile.filename), 'etalons');
  const etalonFileName = path.join(etalonsPath, screenshotName);
  const maskFileName = path.join(etalonsPath, screenshotName.replace('.png', '_mask.png'));
  const options = {
    ...screenshotComparerDefault,
    ...(comparisonOptions || {}),
  };
  try {
    ensureArtifactsPath();
    const { equal, screenshotBuffer } = await tryGetValidScreenshot({
      t, element, screenshotFileName, etalonFileName, maskFileName, options,
    });
    if (!equal) {
      const diffFileName = path.join(artifactsPath, screenshotName.replace('.png', '_diff.png'));
      const diffMaskFileName = path.join(artifactsPath, screenshotName.replace('.png', '_mask.png'));
      const diffBuffer = await getDiff({
        etalonFileName, screenshotBuffer, options,
      });
      const maskBuffer = getMask(diffBuffer, maskFileName, options);
      fs.writeFileSync(diffFileName, diffBuffer);
      fs.writeFileSync(diffMaskFileName, maskBuffer);
      saveArtifacts({ screenshotFileName, etalonFileName });
      return false;
    }
    return true;
  } catch (e) {
    saveArtifacts({ screenshotFileName, etalonFileName });
    throw e;
  }
}

export function createScreenshotsComparer(t) {
  const errorMessages = [];
  const takeScreenshot = async (
    screenshotName,
    element = null,
    comparisonOptions,
  ) => {
    try {
      const isValid = await compareScreenshot(t, screenshotName, element, comparisonOptions);
      if (!isValid) {
        errorMessages.push(`Screenshot:'${screenshotName}' invalid`);
      }
    } catch (e) {
      errorMessages.push(`Screenshot:'${screenshotName}' invalid, internalError: ${e.message}`);
    }
    return true;
  };
  return {
    takeScreenshot,
    compareResults: {
      isValid: () => errorMessages.length === 0,
      errorMessages: () => errorMessages.join('\r\n'),
    },
  };
}
