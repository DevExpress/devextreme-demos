<template>
  <DxTagBox
    :data-source="dataSource"
    v-model:value="currentValue"
    :show-selection-controls="true"
    :input-attr="{ 'aria-label': 'Name' }"
    :max-displayed-tags="3"
    :show-multi-tag-only="false"
    :on-value-changed="(e) => onValueChanged(e.value)"
    :on-selection-changed="onSelectionChanged"
    :search-enabled="true"
    value-expr="ID"
    display-expr="FullName"
    apply-value-mode="useButtons"
  />
</template>
<script setup lang="ts">
import { ref } from 'vue';
import DxTagBox from 'devextreme-vue/tag-box';

const props = withDefaults(defineProps<{
  value?: any[]
  onValueChanged?: Function
  dataSource?: object
  dataGridComponent?: object
}>(), {
  value: () => [],
  onValueChanged: () => function() {},
  dataSource: () => {},
  dataGridComponent: () => {},
});

const currentValue = ref(props.value);

function onSelectionChanged() {
  props.dataGridComponent.updateDimensions();
};
</script>