<template>
  <DxDataGrid
    :data-source="dataSource"
    :show-borders="true"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DxDataGrid from 'devextreme-vue/data-grid';
import { createStore } from 'devextreme-aspnet-data-nojquery';

const props = withDefaults(defineProps<{
  id?: number
  url?: string
}>(), {
  id: () => 0,
  url: () => '',
});

const getMasterDetailGridDataSource = (id, url) => ({
  store: createStore({
    loadUrl: `${url}/OrderDetails`,
    loadParams: { orderID: id },
    onBeforeSend: (method, ajaxOptions) => {
      ajaxOptions.xhrFields = { withCredentials: true };
    },
  }),
});
const dataSource = ref(getMasterDetailGridDataSource(props.id, props.url));

</script>
