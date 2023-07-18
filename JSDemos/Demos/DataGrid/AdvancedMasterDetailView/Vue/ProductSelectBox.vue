<template>
  <DxSelectBox
    :defer-rendering="false"
    :data-source="dataSource"
    :input-attr="{ 'aria-label': 'Product' }"
    :value="value"
    value-expr="ProductID"
    display-expr="ProductName"
    @valueChanged="$emit('product-changed', $event.value)"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DxSelectBox from 'devextreme-vue/select-box';
import { createStore } from 'devextreme-aspnet-data-nojquery';

const props = withDefaults(defineProps<{
  supplierId?: number
}>(), {
  supplierId: null,
});

const url = 'https://js.devexpress.com/Demos/Mvc/api/DataGridAdvancedMasterDetailView';
const dataSource = createStore({
  key: 'ProductID',
  loadParams: { SupplierID: props.supplierId },
  loadUrl: `${url}/GetProductsBySupplier`,
  onLoaded: setDefaultValue,
});
const value = ref(null);

function setDefaultValue(items) {
  const firstItem = items[0];
  if (firstItem && value.value === null) {
    value.value = firstItem.ProductID;
  }
}
</script>
