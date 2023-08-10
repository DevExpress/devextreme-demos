<template>
  <DxDataGrid
    :columns="columns"
    :show-borders="true"
    data-source="../../../../data/customers.json"
  />
</template>
<script setup lang="ts">
import { ref } from 'vue';
import DxDataGrid from 'devextreme-vue/data-grid';

const columns = ref(['CompanyName', 'City', 'State', 'Phone', 'Fax']);
</script>
