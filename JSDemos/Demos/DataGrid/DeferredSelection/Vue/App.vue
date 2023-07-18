<template>
  <div>
    <DxDataGrid
      id="grid-container"
      :data-source="dataSource"
      :show-borders="true"
      :selection-filter="selectionFilter"
      :on-initialized="onInitialized"
    >
      <DxSelection
        :deferred="true"
        mode="multiple"
      />
      <DxFilterRow :visible="true"/>
      <DxColumn
        caption="Subject"
        data-field="Task_Subject"
      />
      <DxColumn
        caption="Start Date"
        data-field="Task_Start_Date"
        width="auto"
        data-type="date"
      />
      <DxColumn
        caption="Due Date"
        data-field="Task_Due_Date"
        width="auto"
        data-type="date"
      />
      <DxColumn
        :allow-sorting="false"
        caption="Assigned To"
        data-field="ResponsibleEmployee.Employee_Full_Name"
        width="auto"
      />
      <DxColumn
        caption="Status"
        width="auto"
        data-field="Task_Status"
      />
    </DxDataGrid>
    <div class="selection-summary center">
      <DxButton
        id="calculateButton"
        :on-click="calculateStatistics"
        text="Get statistics on the selected tasks"
        type="default"
      />
      <div>
        <div class="column">
          <span class="text count">Task count: </span>
          <span class="value">{{ taskCount }}</span>
        </div>
        <div class="column">
          <span class="text people-count">People assigned: </span>
          <span class="value">{{ peopleCount }}</span>
        </div>
        <div class="column">
          <span class="text avg-duration">Average task duration (days): </span>
          <span class="value">{{ avgDuration }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import {
  DxDataGrid, DxColumn, DxFilterRow, DxSelection,
} from 'devextreme-vue/data-grid';
import DxButton from 'devextreme-vue/button';
import query from 'devextreme/data/query';
import 'devextreme/data/odata/store';

const dataSource = {
  store: {
    type: 'odata',
    url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks',
    key: 'Task_ID',
  },
  expand: 'ResponsibleEmployee',
  select: [
    'Task_ID',
    'Task_Subject',
    'Task_Start_Date',
    'Task_Due_Date',
    'Task_Status',
    'ResponsibleEmployee/Employee_Full_Name',
  ],
};
const selectionFilter = ['Task_Status', '=', 'Completed'];
const dataGrid = ref({});
const taskCount = ref(0);
const peopleCount = ref(0);
const avgDuration = ref(0);
const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;

function onInitialized(e) {
  dataGrid.value = e.component;
  calculateStatistics();
}

function calculateStatistics() {
  dataGrid.value.getSelectedRowsData().then((rowData) => {
    let commonDuration = 0;

    for (let i = 0; i < rowData.length; i += 1) {
      commonDuration += rowData[i].Task_Due_Date - rowData[i].Task_Start_Date;
    }
    commonDuration /= MILLISECONDS_IN_DAY;
    taskCount.value = rowData.length;
    peopleCount.value = query(rowData)
      .groupBy('ResponsibleEmployee.Employee_Full_Name')
      .toArray()
      .length;
    avgDuration.value = Math.round(commonDuration / rowData.length) || 0;
  });
}
</script>

<style>
#grid-container {
  height: 400px;
}

.center {
  text-align: center;
}

.selection-summary {
  border: 1px solid rgba(161, 161, 161, 0.2);
  padding: 25px;
}

.column {
  margin: 20px 30px 0 0;
  display: inline-block;
  white-space: nowrap;
  text-align: right;
}

.column:nth-child(2) {
  padding: 0 4px;
}

.value {
  font-size: 40px;
  display: inline-block;
  vertical-align: middle;
}

.text {
  text-align: left;
  white-space: normal;
  display: inline-block;
  vertical-align: middle;
  margin-right: 4px;
}

.avg-duration {
  width: 100px;
}

.count {
  width: 40px;
}

.people-count {
  width: 65px;
}
</style>
