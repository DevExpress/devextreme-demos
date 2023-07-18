<template>
  <div>
    <DxDataGrid
      id="gridContainer"
      :data-source="employees"
      :show-borders="true"
      key-expr="ID"
      @row-validating="rowValidating"
      @editor-preparing="editorPreparing"
    >

      <DxPaging :enabled="false"/>
      <DxEditing
        :allow-updating="true"
        :allow-deleting="allowDeleting"
        :use-icons="true"
        mode="row"
      />

      <DxColumn
        type="buttons"
        :width="110"
      >
        <DxButton name="edit"/>
        <DxButton name="delete"/>
        <DxButton
          hint="Clone"
          icon="copy"
          :visible="isCloneIconVisible"
          :disabled="isCloneIconDisabled"
          @click="cloneIconClick"
        />
      </DxColumn>
      <DxColumn
        data-field="Prefix"
        caption="Title"
      />
      <DxColumn data-field="FirstName"/>
      <DxColumn data-field="LastName"/>
      <DxColumn
        :width="130"
        data-field="Position"
      />
      <DxColumn
        :width="125"
        data-field="StateID"
        caption="State"
      >
        <DxLookup
          :data-source="states"
          display-expr="Name"
          value-expr="ID"
        />
      </DxColumn>
      <DxColumn
        :width="125"
        data-field="BirthDate"
        data-type="date"
      />
    </DxDataGrid>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import {
  DxDataGrid,
  DxColumn,
  DxEditing,
  DxButton,
  DxPaging,
  DxLookup,
} from 'devextreme-vue/data-grid';
import service from './data.js';

const employees = ref(service.getEmployees());
const states = service.getStates();

function isChief(position) {
  return position && ['CEO', 'CMO'].indexOf(position.trim().toUpperCase()) >= 0;
}

function isCloneIconVisible(e) {
  return !e.row.isEditing;
}

function isCloneIconDisabled(e) {
  return isChief(e.row.data.Position);
}

function cloneIconClick(e) {
  const updatedEmployees = [...employees.value];
  const clonedItem = { ...e.row.data, ID: service.getMaxID() };

  updatedEmployees.splice(e.row.rowIndex, 0, clonedItem);
  employees.value = updatedEmployees;
  e.event.preventDefault();
}

function rowValidating(e) {
  const position = e.newData.Position;

  if (isChief(position)) {
    e.errorText = `The company can have only one ${position.toUpperCase()}. Please choose another position.`;
    e.isValid = false;
  }
}

function editorPreparing(e) {
  if (e.parentType === 'dataRow' && e.dataField === 'Position') {
    e.editorOptions.readOnly = isChief(e.value);
  }
}

function allowDeleting(e) {
  return !isChief(e.row.data.Position);
}
</script>
