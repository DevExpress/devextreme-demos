<template>
  <DxForm
    :form-data="data"
    :items="items"
    :col-count="2"
    :customize-item="customizeItem"
    class="address-form form-container"
  >
    <template #form-item="{ data: item }">
      <span>
        {{ item.editorOptions.value }}
      </span>
    </template>
  </DxForm>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { DxForm } from 'devextreme-vue/form';

withDefaults(defineProps<{
  data?: object
}>(), {
  data: () => ({}),
});

const items = ['Address', 'City', 'Region', 'PostalCode', 'Country', 'Phone'];

function customizeItem(item) {
  item.template = 'form-item';
}
</script>
