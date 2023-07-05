<template>
  <DxDataGrid data-source="../../../../data/customers.json" />
</template>

<script>
import 'devextreme/dist/css/dx.light.css';

import DxDataGrid from 'devextreme-vue/data-grid';

export default {
  components: {
    DxDataGrid,
  }
};
</script>
