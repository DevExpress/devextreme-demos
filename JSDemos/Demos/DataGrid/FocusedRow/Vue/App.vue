<template>
  <div>
    <DxDataGrid
      id="gridContainer"
      ref="dataGridRef"
      :data-source="dataSource"
      :columns="columns"
      :show-borders="true"
      :focused-row-enabled="true"
      :auto-navigate-to-focused-row="autoNavigateToFocusedRow"
      v-model:focused-row-key="focusedRowKey"
      @focused-row-changing="onFocusedRowChanging"
      @focused-row-changed="onFocusedRowChanged"
    >
      <DxPaging :page-size="10"/>
    </DxDataGrid>

    <div class="task-info">
      <div class="info">
        <div id="taskSubject">{{ taskSubject }}</div>
        <p
          id="taskDetails"
          v-html="taskDetails"
        />
      </div>
      <div class="progress">
        <span id="taskStatus">{{ taskStatus }}</span>
        <span id="taskProgress">{{ taskProgress }}</span>
      </div>
    </div>

    <div class="options">
      <div class="caption">Options</div>
      <div class="options-container">
        <div class="option">
          <span>Focused Row Key </span>
          <DxNumberBox
            id="taskId"
            ref="taskIdEditorRef"
            :min="1"
            :max="183"
            :step="0"
            v-model:value="focusedRowKey"
            :input-attr="{ 'aria-label': 'Focused Row Key' }"
          />
        </div>
        <div class="option">
          <DxCheckBox
            :text="'Auto Navigate To Focused Row'"
            v-model:value="autoNavigateToFocusedRow"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import 'devextreme/data/odata/store';
import { DxDataGrid, DxPaging } from 'devextreme-vue/data-grid';
import DxNumberBox from 'devextreme-vue/number-box';
import DxCheckBox from 'devextreme-vue/check-box';

const taskIdEditorRef = ref(null);
const dataGridRef = ref(null);
const taskSubject = ref('');
const taskDetails = ref('');
const taskStatus = ref('');
const taskProgress = ref('');

const focusedRowKey = ref(117);
const autoNavigateToFocusedRow = ref(true);
const dataSource = {
  store: {
    type: 'odata',
    key: 'Task_ID',
    url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks',
  },
  expand: 'ResponsibleEmployee',
  select: [
    'Task_ID',
    'Task_Subject',
    'Task_Start_Date',
    'Task_Status',
    'Task_Description',
    'Task_Completion',
    'ResponsibleEmployee/Employee_Full_Name',
  ],
};
const columns = [
  {
    dataField: 'Task_ID',
    width: 80,
  }, {
    caption: 'Start Date',
    dataField: 'Task_Start_Date',
    dataType: 'date',
  }, {
    caption: 'Assigned To',
    dataField: 'ResponsibleEmployee.Employee_Full_Name',
    cssClass: 'employee',
    allowSorting: false,
  }, {
    caption: 'Subject',
    dataField: 'Task_Subject',
    width: 350,
  }, {
    caption: 'Status',
    dataField: 'Task_Status',
  },
];

function onFocusedRowChanging(e) {
  const pageSize = e.component.pageSize();
  const pageIndex = e.component.pageIndex();
  const isLoading = e.component.getController('data').isLoading();
  const key = e.event && e.event.key;

  if (!isLoading) {
    if (key && e.prevRowIndex === e.newRowIndex) {
      if (e.newRowIndex === pageSize - 1) {
        e.component.pageIndex(pageIndex + 1).done(() => {
          e.component.option('focusedRowIndex', 0);
        });
      } else if (e.newRowIndex === 0) {
        e.component.pageIndex(pageIndex - 1).done(() => {
          e.component.option('focusedRowIndex', pageSize - 1);
        });
      }
    }
  }
}

function onFocusedRowChanged(e) {
  const data = e.row && e.row.data;
  taskSubject.value = data && data.Task_Subject;
  taskDetails.value = data && data.Task_Description;
  taskStatus.value = data && data.Task_Status;
  taskProgress.value = data && data.Task_Completion ? `${data.Task_Completion}%` : '';
  focusedRowKey.value = e.component.option('focusedRowKey');
}
</script>
