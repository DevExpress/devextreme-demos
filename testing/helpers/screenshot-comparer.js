import LooksSame from 'looks-same';
import path from 'path';
import fs from 'fs';
import { PNG } from 'pngjs';

const testRoot = './testing/'; //TODO
const screenshotsPath = path.join(testRoot, '/screenshots');
const artifactsPath = path.join(testRoot, '/artifacts');

const screenshotComparerDefault = {
  highlightColor: { r: 0xff, g: 0, b: 0xff },
  attempts: 3,
  attemptTimeout: 500,
  looksSameComparisonOptions: {
    strict: false,
    tolerance: 30,
    ignoreAntialiasing: true,
    antialiasingTolerance: 10,
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
        const idx = (screenshotImg.width * y + x) << 2;
        if (maskImg.data[idx + 0] < 255
          && maskImg.data[idx + 1] < 255
          && maskImg.data[idx + 2] < 255) {
          screenshotImg.data[idx + 0] = etalonImg.data[idx + 0];
          screenshotImg.data[idx + 1] = etalonImg.data[idx + 1];
          screenshotImg.data[idx + 2] = etalonImg.data[idx + 2];
          screenshotImg.data[idx + 3] = etalonImg.data[idx + 3];
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
    throw new Error('Screenshot size does not match etalon size');
  }

  if (!fs.existsSync(maskFileName)) {
    return fs.readFileSync(screenshotFileName);
  }
  const maskImg = getImage(maskFileName);
  if (!isSizeEqual(etalonImg, maskImg)) {
    throw new Error('Mask size does not match etalon size');
  }
  const targetImageBuffer = applyMask(etalonImg, screenshotImg, maskImg);
  return targetImageBuffer;
}

async function getDiff({
  etalonFileName, screenshotBuffer, options,
})
  {
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
  function makeTransparentExceptColor(image, maskImg, { r, g, b }) {
    for (let y = 0; y < image.height; y++) {
      for (let x = 0; x < image.width; x++) {
        const idx = (image.width * y + x) << 2;
        const isHighlighted = (
          image.data[idx + 0] === r
          && image.data[idx + 1] === g
          && image.data[idx + 2] === b) || (maskImg && maskImg.data[idx] === 0);
        Array.from({ length: 3 }).forEach((_, i) => {
          image.data[idx + i] = isHighlighted ? 0 : 255;
        });
      }
    }
  }
  const image = PNG.sync.read(diffBuffer);
  const maskBuffer = fs.existsSync(maskFileName) && fs.readFileSync(maskFileName);
  const maskImg = maskBuffer && PNG.sync.read(maskBuffer);

  makeTransparentExceptColor(image, maskImg, options.highlightColor);
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
    console.log("takeScreenshot", screenshotFileName);
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
  if(!screenshotName.endsWith('.png')) {
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

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
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