<template>
  <DxDataGrid
    :data-source="dataSource"
    key-expr="ID"
    :columns="columns"
    :show-borders="true"
  />
</template>
<script setup lang="ts">
import { ref } from 'vue';
import DxDataGrid from 'devextreme-vue/data-grid';
import { customers } from './data.js';

const dataSource = ref(customers);
const columns = ref(['CompanyName', 'City', 'State', 'Phone', 'Fax']);
</script>