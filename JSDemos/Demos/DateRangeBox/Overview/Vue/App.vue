<template>
  <div>
    <div class="dx-fieldset">
      <div class="dx-field">
        <div class="dx-field-label multiline-label">
          <span>Range selection</span>
          <div class="selected-days-wrapper ">
            <span>Days selected: </span>
            <span>{{ selectedDays }}</span>
          </div>
        </div>
        <div class="dx-field-value">
          <DxDateRangeBox v-model:value="currentValue" />
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Custom format</div>
        <div class="dx-field-value">
          <DxDateRangeBox
            :value="initialValue"
            display-format="EEEE, MMM dd"
          />
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Apply value mode: Use buttons</div>
        <div class="dx-field-value">
          <DxDateRangeBox apply-value-mode="useButtons"/>
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">One view</div>
        <div class="dx-field-value">
          <DxDateRangeBox :multi-view="false"/>
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Open by icon click only</div>
        <div class="dx-field-value">
          <DxDateRangeBox :open-on-field-click="false" />
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Access current month only</div>
        <div class="dx-field-value">
          <DxDateRangeBox
            :min="min"
            :max="max" 
          />
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Clear button</div>
        <div class="dx-field-value">
          <DxDateRangeBox
            :show-clear-button="true"
            :value="initialValue"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DxDateRangeBox from 'devextreme-vue/date-range-box';

const msInDay = 1000 * 60 * 60 * 24;
const now = new Date();
const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
const initialValue = [new Date(now.getTime() - msInDay * 3), new Date(now.getTime() + msInDay * 3)];

export default {
  components: {
    DxDateRangeBox,
  },
  data() {
    return {
      currentValue: initialValue,
      initialValue,
      min: new Date(now.setDate(1)),
      max: new Date(now.setDate(lastDay))
    };
  },
  computed: {
    selectedDays: {
      get() {
        return this.convertRangeToDays(this.currentValue);
      },
    },
  },
  methods: {
    convertRangeToDays(value) {
      if (!value[0] || !value[1]) {
        return 0;
      }
      const diffInDay = Math.floor(Math.abs((value[1] - value[0]) / (24 * 60 * 60 * 1000)));
      return diffInDay + 1;
    },
  }
};
</script>
<style scoped>
.dx-field {
  padding: 8px;
}

.selected-days-wrapper {
  font-size: 12px;
  opacity: 0.5;
}

.multiline-label {
  padding-top: 0;
}
</style>
