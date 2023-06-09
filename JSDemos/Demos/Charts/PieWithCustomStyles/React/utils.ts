import { registerGradient, registerPattern } from 'devextreme/common/charts';

const imagePatternSize = 12;
const shapePatternSize = 6;

function hexToRgb(hex, opacity = 1) {
  const hexColorParts = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return `rgba(${parseInt(hexColorParts[1], 16)}, ${parseInt(hexColorParts[2], 16)}, ${parseInt(hexColorParts[3], 16)}, ${opacity})`;
}

function getGradient(type, color1, color2) {
  return registerGradient(type, {
    colors: [{
      offset: '20%',
      color: color1,
    }, {
      offset: '90%',
      color: color2,
    }],
  });
}

export function getLinearGradient(color) { return getGradient('linear', color, hexToRgb(color, 0.5)); }

export function getRadialGradient(color) { return getGradient('radial', hexToRgb(color, 0.5), color); }

export function getPatternImage(color) {
  return registerPattern({
    width: imagePatternSize,
    height: imagePatternSize,
    template: (container) => {
      // @ts-expect-error TS(2554): Expected 4 arguments, but got 2.
      const rect = createRect(imagePatternSize, color);
      const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
      // @ts-expect-error TS(2769): No overload matches this call.
      image.setAttribute('x', 0);
      // @ts-expect-error TS(2769): No overload matches this call.
      image.setAttribute('y', 0);
      // @ts-expect-error TS(2769): No overload matches this call.
      image.setAttribute('width', imagePatternSize);
      // @ts-expect-error TS(2769): No overload matches this call.
      image.setAttribute('height', imagePatternSize);
      image.setAttribute('href', '../../../../images/Charts/PieWithCustomStyles/diamond.svg');
      // @ts-expect-error TS(2769): No overload matches this call.
      image.setAttribute('opacity', 0.6);

      container.appendChild(rect);
      container.appendChild(image);
    },
  });
}

export function getStrokePattern(color) {
  return registerPattern({
    width: shapePatternSize,
    height: shapePatternSize,
    template: (container) => {
      const halfSize = shapePatternSize / 2;
      const oneAndAHalfSize = shapePatternSize * 1.5;
      const d = `M ${halfSize} ${-halfSize} L ${-halfSize} ${halfSize} M 0 ${shapePatternSize} L ${shapePatternSize} 0 M ${oneAndAHalfSize} ${halfSize} L ${halfSize} ${oneAndAHalfSize}`;
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

      path.setAttribute('stroke', color);
      // @ts-expect-error TS(2769): No overload matches this call.
      path.setAttribute('stroke-width', 2);
      path.setAttribute('d', d);
      container.appendChild(path);
    },
  });
}

export function getSquarePattern(color) {
  return registerPattern({
    width: shapePatternSize,
    height: shapePatternSize,
    template: (container) => {
      const rect = createRect(shapePatternSize, null, color, 2);
      container.appendChild(rect);
    },
  });
}

export function createRect(size, fill, stroke, strokeWidth) {
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

  // @ts-expect-error TS(2769): No overload matches this call.
  rect.setAttribute('x', 0);
  // @ts-expect-error TS(2769): No overload matches this call.
  rect.setAttribute('y', 0);
  rect.setAttribute('width', size);
  rect.setAttribute('height', size);
  rect.setAttribute('fill', fill);
  rect.setAttribute('stroke', stroke);
  rect.setAttribute('stroke-width', strokeWidth);

  return rect;
}
