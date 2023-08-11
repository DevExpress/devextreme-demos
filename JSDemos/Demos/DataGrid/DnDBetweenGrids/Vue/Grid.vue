<template>
  <DxDataGrid
    :data-source="dataSource"
    :height="440"
    :show-borders="true"
    :filter-value="filterExpr"
  >
    <DxRowDragging
      :data="status"
      :on-add="onAdd"
      group="tasksGroup"
    />
    <DxScrolling mode="virtual"/>
    <DxColumn
      data-field="Subject"
      data-type="string"
    />
    <DxColumn
      :width="80"
      data-field="Priority"
      data-type="number"
    >
      <DxLookup
        :data-source="priorities"
        value-expr="id"
        display-expr="text"
      />
    </DxColumn>
    <DxColumn
      :visible="false"
      data-field="Status"
      data-type="number"
    />

  </DxDataGrid>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import {
  DxDataGrid, DxColumn, DxRowDragging, DxScrolling, DxLookup,
} from 'devextreme-vue/data-grid';

const props = withDefaults(defineProps<{
  tasksStore?: object
  status?: number
}>(), {
  tasksStore: () => ({}),
  status: 0,
});

const priorities = [{
  id: 1, text: 'Low',
}, {
  id: 2, text: 'Normal',
}, {
  id: 3, text: 'High',
}, {
  id: 4, text: 'Urgent',
}];

const tasksStore = computed(() => props.tasksStore);
const dataSource = computed(() => ({
  store: tasksStore.value,
  reshapeOnPush: true,
}));
const filterExpr = ['Status', '=', props.status];

function onAdd(e) {
  const key = e.itemData.ID;
  const values = { Status: e.toData };

  tasksStore.value.update(key, values).then(() => {
    tasksStore.value.push([{
      type: 'update', key, data: values,
    }]);
  });
}
</script>
