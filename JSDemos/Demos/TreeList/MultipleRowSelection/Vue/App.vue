<template>
  <div>
    <DxTreeList
      id="employees"
      ref="treeList"
      :data-source="employees"
      :show-row-lines="true"
      :show-borders="true"
      :column-auto-width="true"
      :expanded-row-keys="expandedRowKeys"
      v-model:selected-row-keys="selectedRowKeys"
      key-expr="ID"
      parent-id-expr="Head_ID"
      @selection-changed="onSelectionChanged"
    >
      <DxSelection
        :recursive="recursive"
        mode="multiple"
      />
      <DxColumn
        data-field="Full_Name"
      />
      <DxColumn
        data-field="Title"
        caption="Position"
      />
      <DxColumn
        data-field="City"
      />
      <DxColumn
        data-field="State"
      />
      <DxColumn
        :width="120"
        data-field="Hire_Date"
        data-type="date"
      />
    </DxTreeList>
    <div class="options">
      <div class="caption">Options</div>
      <div class="option">
        <DxCheckBox
          v-model:value="recursive"
          text="Recursive Selection"
          @value-changed="onRecursiveChanged"
        />
      </div>
      <div class="selected-data">
        <span class="caption">Selected Records:</span>
        <span id="selected-items-container">{{ selectedEmployeeNames }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { employees } from './data.js';
import { DxTreeList, DxSelection, DxColumn } from 'devextreme-vue/tree-list';
import { DxCheckBox } from 'devextreme-vue/check-box';

export default {
  components: {
    DxTreeList, DxSelection, DxColumn,
    DxCheckBox
  },
  data() {
    return {
      employees: employees,
      expandedRowKeys: [1, 2, 10],
      selectedRowKeys: [],
      recursive: false,
      selectedEmployeeNames: 'Nobody has been selected'
    };
  },
  methods: {
    onRecursiveChanged() {
      this.selectedRowKeys = [];
    },
    onSelectionChanged({ component }) {
      const selectedData = component.getSelectedRowsData('all');
      this.selectedEmployeeNames = this.getEmployeeNames(selectedData);
    },
    getEmployeeNames(employees) {
      if (employees.length > 0) {
        return employees.map(employee => employee.Full_Name).join(', ');
      } else {
        return 'Nobody has been selected'; 
      }
    }
  }
};
</script>
<style scoped>
#employees {
    max-height: 440px;
}

.options {
    padding: 20px;
    margin-top: 20px;
    background-color: rgba(191, 191, 191, 0.15);
}

.caption {
    font-size: 18px;
    font-weight: 500;
}

.option {
    margin-top: 10px;
}

.selected-data {
    margin-top: 20px;
}

.selected-data .caption {
    margin-right: 4px;
}
</style>
