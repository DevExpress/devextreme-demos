<template>
  <div style="width: 200px;">
    <DxList
      :data-source="navigation"
      :active-state-enabled="false"
      :hover-state-enabled="false"
      :focus-state-enabled="false"
      :element-attr="{class: `panel-list dx-theme-${themes.current().split('.')[0]}-typography`}"
      class="panel-list"
    />
  </div>
</template>
<script setup lang="ts">
import { DxList } from 'devextreme-vue/list';
import themes from 'devextreme/ui/themes';
import { navigation } from './data.js';
</script>
