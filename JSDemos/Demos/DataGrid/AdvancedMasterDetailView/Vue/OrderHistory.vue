<template>
  <div>
    <DxDataGrid
      :data-source="orderHistoryStore"
      :show-borders="true"
    >
      <DxPaging :page-size="5"/>

      <DxColumn data-field="OrderID"/>
      <DxColumn
        data-field="OrderDate"
        data-type="date"
      />
      <DxColumn data-field="ShipCountry"/>
      <DxColumn data-field="ShipCity"/>
      <DxColumn
        data-field="UnitPrice"
        format="currency"
      />
      <DxColumn data-field="Quantity"/>
      <DxColumn
        data-field="Discount"
        format="percent"
      />

      <DxSummary>
        <DxTotalItem
          column="UnitPrice"
          summary-type="sum"
        >
          <DxValueFormat
            :precision="2"
            format="currency"
          />
        </DxTotalItem>
        <DxTotalItem
          column="Quantity"
          summary-type="count"
        />
      </DxSummary>
    </DxDataGrid>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import {
  DxDataGrid,
  DxColumn,
  DxPaging,
  DxSummary,
  DxTotalItem,
  DxValueFormat,
} from 'devextreme-vue/data-grid';
import { createStore } from 'devextreme-aspnet-data-nojquery';

const props = withDefaults(defineProps<{
  productId?: number
}>(), {
  productId: null,
});

const url = 'https://js.devexpress.com/Demos/Mvc/api/DataGridAdvancedMasterDetailView';
const orderHistoryStore = computed(() => {
  return props.productId === null ? null : {
    store: createStore({
      key: 'OrderID',
      loadParams: { ProductID: props.productId },
      loadUrl: `${url}/GetOrdersByProduct`,
    }),
  };
});
</script>
