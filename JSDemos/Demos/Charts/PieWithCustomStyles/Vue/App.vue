<template>
  <DxPieChart
    id="pie"
    :data-source="data"
    :customize-point="customizePoint"
  >
    <DxSeries
      argument-field="type"
      value-field="value"
    >
      <DxLabel
        :visible="true"
        :customize-text="customizeText"
      >
        <DxConnector :visible="true"/>
      </DxLabel>
    </DxSeries>
    <DxExport :enabled="true"/>
  </DxPieChart>
</template>
<script>

import DxPieChart, {
  DxSeries,
  DxLabel,
  DxConnector,
  DxExport,
} from 'devextreme-vue/pie-chart';
import Charts from 'devextreme/common/charts';
import { data } from './data.js';

const imagePatternSize = 12;
const shapePatternSize = 6;

export default {
  components: {
    DxPieChart,
    DxExport,
    DxConnector,
    DxLabel,
    DxSeries,
  },
  data() {
    return {
      data,
    };
  },
  methods: {
    customizePoint(point) {
      const color = point.series.getPointsByArg(point.argument)[0].getColor();
      const pointSettings = { color };
      if (point.argument === 'Stroke Pattern') {
        pointSettings.color = { fillId: this.strokePattern(color) };
      }
      if (point.argument === 'Square Pattern') {
        pointSettings.color = { fillId: this.squarePattern(color) };
      }
      if (point.argument === 'Linear Gradient') {
        pointSettings.color = { fillId: this.linearGradient(color) };
      }
      if (point.argument === 'Radial Gradient') {
        pointSettings.color = { fillId: this.radialGradient(color) };
      }
      if (point.argument === 'Pattern with image') {
        pointSettings.color = { fillId: this.patternImage(color) };
      }

      return pointSettings;
    },

    customizeText(info) {
      return info.argument;
    },

    hexToRgb(hex, opacity = 1) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${opacity})`;
    },

    gradient(type, color1, color2) {
      return Charts.registerGradient(type, {
        colors: [{
          offset: '20%',
          color: color1,
        }, {
          offset: '90%',
          color: color2,
        }],
      });
    },

    linearGradient(color) { return this.gradient('linear', color, this.hexToRgb(color, 0.5)); },

    radialGradient(color) { return this.gradient('radial', this.hexToRgb(color, 0.5), color); },

    patternImage(color) {
      return Charts.registerPattern({
        width: imagePatternSize,
        height: imagePatternSize,
        template: (container) => {
          container.innerHTML = ['<svg>',
            `<rect width=${imagePatternSize} height=${imagePatternSize} fill=${color} />`,
            `<image width=${imagePatternSize} height=${imagePatternSize}
              href='../../../../images/Charts/PieWithCustomStyles/diamond.png'
              opacity=0.6
            />`,
            '</svg>'].join('');
        },
      });
    },

    strokePattern(color) {
      return Charts.registerPattern({
        width: shapePatternSize,
        height: shapePatternSize,
        template: (container) => {
          const halfSize = shapePatternSize / 2;
          const oneHalfSize = shapePatternSize * 1.5;
          const d = `M ${halfSize} ${-halfSize} L ${-halfSize} ${halfSize} M 0 ${shapePatternSize} L ${shapePatternSize} 0 M ${oneHalfSize} ${halfSize} L ${halfSize} ${oneHalfSize}`;

          container.innerHTML = ['<svg>',
            `<path stroke=${color} stroke-width=2 d="${d}" />`,
            '</svg>'].join('');
        },
      });
    },

    squarePattern(color) {
      return Charts.registerPattern({
        width: shapePatternSize,
        height: shapePatternSize,
        template: (container) => {
          container.innerHTML = ['<svg>',
            `<rect width=${shapePatternSize} height=${shapePatternSize} stroke=${color} stroke-width=2 />`,
            '</svg>'].join('');
        },
      });
    },
  },
};
</script>

<style>
#pie {
  height: 440px;
}
</style>
