<template>
  <DxForm
    :on-content-ready="validateForm"
    :form-data="employee"
  >
    <DxGroupItem
      :col-count="2"
      caption="Employee Details"
    >
      <DxItem
        :editor-options="nameEditorOptions"
        data-field="FirstName"
      />
      <DxItem
        :editor-options="positionEditorOptions"
        :validation-rules="validationRules.position"
        data-field="Position"
        editor-type="dxSelectBox"
      />
      <DxItem
        :editor-options="nameEditorOptions"
        data-field="LastName"
      />
      <DxItem
        :editor-options="hireDateEditorOptions"
        :validation-rules="validationRules.hireDate"
        data-field="HireDate"
        editor-type="dxDateBox"
      />
      <DxItem
        :editor-options="birthDateEditorOptions"
        data-field="BirthDate"
        editor-type="dxDateBox"
      />
      <DxItem
        data-field="Address"
      />
      <DxItem
        :col-span="2"
        :editor-options="notesEditorOptions"
        data-field="Notes"
        editor-type="dxTextArea"
      />
      <DxItem
        :editor-options="phonesEditorOptions"
        data-field="Phone"
      />
      <DxItem
        data-field="Email"
      />
    </DxGroupItem>
  </DxForm>
</template>
<script>
import { DxForm, DxItem } from 'devextreme-vue/form';
import service from './data.js';
import 'devextreme-vue/text-area';

export default {
  components: {
    DxForm,
    DxItem,
  },
  data() {
    const employee = service.getEmployee();
    const positions = service.getPositions();
    return {
      employee,
      positions,
      validationRules: {
        position: [
          { type: 'required', message: 'Position is required.' },
        ],
        hireDate: [
          { type: 'required', message: 'Hire Date is required.' },
        ],
      },
      nameEditorOptions: { disabled: true },
      positionEditorOptions: { items: positions, searchEnabled: true, value: '' },
      hireDateEditorOptions: { width: '100%', value: null },
      birthDateEditorOptions: { width: '100%', disabled: true },
      notesEditorOptions: { height: 90, maxLength: 200 },
      phonesEditorOptions: { mask: '+1 (X00) 000-0000', maskRules: { X: /[02-9]/ } },
    };
  },
  methods: {
    validateForm(e) {
      e.component.validate();
    },
  },
};
</script>
<style scoped>
#helpedInfo {
  color: #42a5f5;
}
</style>
