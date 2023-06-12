<template>
  <div class="form">
    <div class="dx-fieldset">
      <div class="dx-field">
        <div class="dx-field-label">Checked</div>
        <div class="dx-field-value">
          <DxCheckBox :value="true" :elementAttr="checkedLabel" />
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Unchecked</div>
        <div class="dx-field-value">
          <DxCheckBox :value="false" :elementAttr="unCheckedLabel" />
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Indeterminate</div>
        <div class="dx-field-value">
          <DxCheckBox :value="null" :elementAttr="indeterminateLabel" />
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Three state mode</div>
        <div class="dx-field-value">
          <DxCheckBox
            :enable-three-state-behavior="true"
            :value="null"
            :elementAttr="threeStateModeLabel"
          />
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Handle value change</div>
        <div class="dx-field-value">
          <DxCheckBox v-model:value="checkBoxValue" :elementAttr="handleValueChangeLabel" />
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Disabled</div>
        <div class="dx-field-value">
          <DxCheckBox
            :disabled="true"
            :value="checkBoxValue"
            :elementAttr="disabledLabel" 
          />
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Custom size</div>
        <div class="dx-field-value">
          <DxCheckBox
            :value="null"
            :icon-size="30"
            :elementAttr="customSizeLabel" 
          />
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">With label</div>
        <div class="dx-field-value">
          <DxCheckBox
            text="Label"
            :value="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { DxCheckBox } from 'devextreme-vue/check-box';

export default {
  components: {
    DxCheckBox,
  },

  data() {
    return {
      checkBoxValue: null,
    };
  },

  computed: {
    checkedLabel() {
      return { 'aria-label': 'Checked' };
    },
    unCheckedLabel() {
      return { 'aria-label': 'Unchecked' };
    },
    indeterminateLabel() {
      return { 'aria-label': 'Indeterminate' };
    },
    threeStateModeLabel() {
      return { 'aria-label': 'Three state mode' };
    },
    handleValueChangeLabel() {
      return { 'aria-label': 'Handle value change' };
    },
    disabledLabel() {
      return { 'aria-label': 'Disabled' };
    },
    customSizeLabel() {
      return { 'aria-label': 'Custom size' };
    },
  },
};
</script>
