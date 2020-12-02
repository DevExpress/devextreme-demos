<template>
  <div :class="className(cellData)">
    <div class="current-value">{{ formatCurrency(cellData, 'USD') }}</div>
    <div class="diff">{{ fixed(abs(cellData), 2) }}</div>
  </div>
</template>
<script>
import {
  DxSparkline,
  DxSize,
  DxTooltip
} from 'devextreme-vue/sparkline';

const gridCellData = function(value) {
  return value.data[value.column.caption.toLowerCase()];
};

export default {
  components: {
    DxSparkline,
    DxSize,
    DxTooltip
  },
  props: {
    cellData: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    className(value) {
      return gridCellData(value).diff > 0 ? 'inc' : 'dec';
    },
    formatCurrency(value, currency) {
      return `$${gridCellData(value).value}`;
    },
    abs(value) {
      return Math.abs(gridCellData(value).diff);
    },
    fixed(value, precision) {
      return value.toFixed(precision);
    }
  }
};
</script>
