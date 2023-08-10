<template>
  <DxDataGrid
    id="gridContainer"
    :customize-columns="customizeColumns"
    :data-source="dataSource"
    key-expr="id"
    :show-borders="true"
    @content-ready="onContentReady"
  >
    <DxLoadPanel :enabled="true"/>
    <DxScrolling mode="virtual"/>
    <DxSorting mode="none"/>
  </DxDataGrid>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import {
  DxDataGrid, DxScrolling, DxSorting, DxLoadPanel,
} from 'devextreme-vue/data-grid';
import { generateData } from './data.js';

const dataSource = computed(() => generateData(100000));

function onContentReady(e) {
  e.component.option('loadPanel.enabled', false);
}
function customizeColumns(columns) {
  columns[0].width = 70;
}
</script>
<style>
#gridContainer {
  height: 440px;
}
</style>
