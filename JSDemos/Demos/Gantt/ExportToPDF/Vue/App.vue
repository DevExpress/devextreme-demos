<template>
  <div>
    <DxGantt
      :ref="ganttRef"
      :task-list-width="500"
      :height="700"
      scale-type="weeks"
      :root-value="-1"
    >

      <DxTasks :data-source="tasks"/>
      <DxDependencies :data-source="dependencies"/>
      <DxResources :data-source="resources"/>
      <DxResourceAssignments :data-source="resourceAssignments"/>

      <DxToolbar>
        <DxItem name="undo"/>
        <DxItem name="redo"/>
        <DxItem name="separator"/>
        <DxItem name="zoomIn"/>
        <DxItem name="zoomOut"/>
        <DxItem name="separator"/>
        <DxItem
          :options="exportButtonOptions"
          widget="dxButton"
        />
      </DxToolbar>

      <DxEditing :enabled="true"/>

      <DxColumn
        :width="300"
        data-field="title"
        caption="Subject"
      />
      <DxColumn
        data-field="start"
        caption="Start Date"
      />
      <DxColumn
        data-field="end"
        caption="End Date"
      />
    </DxGantt>
    <div class="options">
      <div class="column">
        <div class="option">
          <div class="label">Document format:
          </div>
          <div class="value">
            <DxDropDownBox
              :ref="formatBoxRefName"
              v-model:value="formatBoxValue"
              :data-source="formats"
            >
              <template #content="{ data }">
                <DxList
                  :data-source="formats"
                  :selection-mode="single"
                  @selection-changed="formatBoxSelectionChanged($event)"
                />
              </template>
            </DxDropDownBox>
          </div>
        </div>
        <div class="option">
          <div class="label">Landscape orientation:</div>
          <div class="value">
            <DxCheckBox v-model:value="landscapeCheckBoxValue"/>
          </div>
        </div>
        <div class="option">
          <div class="label">Export mode:</div>
          <div class="value">
            <DxDropDownBox
              :ref="exportModeBoxRefName"
              v-model:value="exportModeBoxValue"
              :data-source="exportModes"
            >
              <template #content="{ data }">
                <DxList
                  :data-source="exportModes"
                  :selection-mode="single"
                  @selection-changed="exportModeBoxSelectionChanged($event)"
                />
              </template>
            </DxDropDownBox>
          </div>
        </div>
        <div class="option">
          <div class="label">Date range:</div>
          <div class="value">
            <DxDropDownBox
              :ref="dateRangeBoxRefName"
              v-model:value="dateRangeBoxValue"
              :data-source="dateRanges"
            >
              <template #content="{ data }">
                <DxList
                  :data-source="dateRanges"
                  :selection-mode="single"
                  @selection-changed="dateRangeBoxSelectionChanged($event)"
                />
              </template>
            </DxDropDownBox>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="option">
          <div class="label">Start task (index):</div>
          <div class="value">
            <DxNumberBox
              :value="startTaskIndex"
              :min="0"
              :max="endTaskIndex"
              :show-spin-buttons="true"
              @value-changed="startTaskIndexChanged"
            />
          </div>
        </div>
        <div class="option">
          <div class="label">End task (index):</div>
          <div class="value">
            <DxNumberBox
              :value="endTaskIndex"
              :min="startTaskIndex"
              :max="tasks.length - 1"
              :show-spin-buttons="true"
              @value-changed="endTaskIndexChanged"
            />
          </div>
        </div>
        <div class="option">
          <div class="label">Start date:</div>
          <div class="value">
            <DxDateBox
              v-model:value="startDate"
              :max="endDate"
              type="date"
              apply-value-mode="useButtons"
            />
          </div>
        </div>
        <div class="option">
          <div class="label">End date:</div>
          <div class="value">
            <DxDateBox
              v-model:value="endDate"
              :min="startDate"
              type="date"
              apply-value-mode="useButtons"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  DxGantt,
  DxTasks,
  DxDependencies,
  DxResources,
  DxResourceAssignments,
  DxColumn,
  DxEditing,
  DxToolbar,
  DxItem
} from 'devextreme-vue/gantt';

import DxDropDownBox from 'devextreme-vue/drop-down-box';
import DxList from 'devextreme-vue/list';
import DxCheckBox from 'devextreme-vue/check-box';
import DxNumberBox from 'devextreme-vue/number-box';
import DxDateBox from 'devextreme-vue/date-box';

import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

import {
  tasks,
  dependencies,
  resources,
  resourceAssignments,
  formats,
  exportModes,
  dateRanges
} from './data.js';

const ganttRef = 'gantt';

export default {
  components: {
    DxGantt,
    DxTasks,
    DxDependencies,
    DxResources,
    DxResourceAssignments,
    DxColumn,
    DxEditing,
    DxToolbar,
    DxItem,
    DxDropDownBox,
    DxList,
    DxCheckBox,
    DxNumberBox,
    DxDateBox
  },
  data() {
    return {
      ganttRef,
      tasks: tasks,
      dependencies: dependencies,
      resources: resources,
      resourceAssignments: resourceAssignments,
      exportButtonOptions: {
        hint: 'Export to PDF',
        icon: 'exportpdf',
        stylingMode: 'text',
        onClick: () => {
          this.exportGantt();
        }
      },
      formats: formats,
      exportModes: exportModes,
      dateRanges: dateRanges,

      formatBoxRefName: 'format-box',
      exportModeBoxRefName: 'export-mode-box',
      dateRangeBoxRefName: 'date-range-box',

      formatBoxValue: null,
      exportModeBoxValue: null,
      dateRangeBoxValue: null,
      landscapeCheckBoxValue: true,

      startTaskIndex: 0,
      endTaskIndex: 3,
      startDate: null,
      endDate: null
    };
  },
  computed: {
    gantt: function() {
      return this.$refs[ganttRef].instance;
    }
  },
  created() {
    this.formatBoxValue = formats[0];
    this.exportModeBoxValue = exportModes[0];
    this.dateRangeBoxValue = dateRanges[1];
    this.startDate = tasks[0].start;
    this.endDate = tasks[0].end;
  },
  methods: {
    exportGantt() {
      const format = this.formatBoxValue.toLowerCase();
      const isLandscape = this.landscapeCheckBoxValue;
      const exportMode = this.exportModeBoxValue === 'Tree List' ? 'treeList' : this.exportModeBoxValue.toLowerCase();
      const dataRangeMode = this.dateRangeBoxValue.toLowerCase();
      let dataRange;
      if(dataRangeMode === 'custom') {
        dataRange = {
          startIndex: this.startTaskIndex,
          endIndex: this.endTaskIndex,
          startDate:  this.startDate,
          endDate: this.endDate
        };
      }
      else {
        dataRange = dataRangeMode;
      }
      this.gantt.exportToPdf({
        docCreateMethod: jsPDF,
        format: format,
        landscape: isLandscape,
        exportMode: exportMode,
        dateRange: dataRange
      }).then(doc => doc.save('gantt.pdf'));
    },
    formatBoxSelectionChanged(e) {
      this.formatBoxValue = e.addedItems[0];
      this.$refs[this.formatBoxRefName].instance.close();
    },
    exportModeBoxSelectionChanged(e) {
      this.exportModeBoxValue = e.addedItems[0];
      this.$refs[this.exportModeBoxRefName].instance.close();
    },
    dateRangeBoxSelectionChanged(e) {
      this.dateRangeBoxValue = e.addedItems[0];
      this.$refs[this.dateRangeBoxRefName].instance.close();
    },
    startTaskIndexChanged(e) {
      this.startTaskIndex = e.value;
    },
    endTaskIndexChanged(e) {
      this.endTaskIndex = e.value;
    }
  }
};
</script>
<style>
  #gantt {
    height: 700px;
  }
  .options {
    background-color: rgba(191, 191, 191, 0.15);
    margin-top: 20px;
  }

  .column {
    width: 40%;
    display: inline-block;
    margin: 15px 3%;
    text-align: left;
    vertical-align: top;
  }

  .column:last-child .option {
      margin-left: 4px;
  }

  .option {
    padding: 5px 0;
  }

  .label, .value {
    display: inline-block;
    vertical-align: middle;
  }

  .label {
    width: 184px;
  }

  .value {
    width: 30%;
  }
</style>
