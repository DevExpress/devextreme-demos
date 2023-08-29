<template>
  <div id="container">
    <div class="calendar-container">
      <DxCalendar
        :values="initialValues"
        :show-week-numbers="showWeekNumbers"
        :select-week-on-click="selectWeekOnClick"
        :selection-mode="selectionMode"
        :min="minDateValue"
        :max="maxDateValue"
        :disabled-dates="disabledDates"
      />
    </div>
    <div class="options">
      <div class="caption">Options</div>
      <div class="option">
        <DxCheckBox
          v-model:value="showWeekNumbers"
          text="Show week numbers"
        />
      </div>
      <div class="option">
        <DxCheckBox
          v-model:value="selectWeekOnClick"
          text="Select week on click"
        />
      </div>
      <div class="option">
        <span>Selection Mode</span>
        <DxSelectBox
          v-model:value="selectionMode"
          :data-source="selectionModes"
          :input-attr="{ 'aria-label': 'Selection Mode' }"
        />
      </div>
      <div class="section">
        <span>Dates availability</span>
      </div>
      <div class="option">
        <DxCheckBox
          :value="false"
          text="Set minimum date"
          @value-changed="setMinDate"
        />
      </div>
      <div class="option">
        <DxCheckBox
          :value="false"
          text="Set maximum date"
          @value-changed="setMaxDate"
        />
      </div>
      <div class="option">
        <DxCheckBox
          :value="false"
          text="Disable weekends"
          @value-changed="disableWeekend"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import DxCheckBox from 'devextreme-vue/check-box';
import DxSelectBox from 'devextreme-vue/select-box';
import DxCalendar from 'devextreme-vue/calendar';

const initialValues = [new Date(), new Date(new Date().getTime() + 1000 * 60 * 60 * 24)];
const showWeekNumbers = ref(true);
const selectWeekOnClick = ref(true);
const selectionMode = ref('multiple');
const minDateValue = ref(null);
const maxDateValue = ref(null);
const disabledDates = ref(null);
const selectionModes = ['single', 'multiple', 'range'];

function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

function setMinDate({ value }) {
  minDateValue.value = value
    ? new Date((new Date()).getTime() - 1000 * 60 * 60 * 24 * 3)
    : null;
}

function setMaxDate({ value }) {
  maxDateValue.value = value
    ? new Date((new Date()).getTime() + 1000 * 60 * 60 * 24 * 3)
    : null;
}

function disableWeekend({ value }) {
  disabledDates.value = value
    ? (data) => data.view === 'month' && isWeekend(data.date)
    : null;
}

</script>
<style scoped>
#container {
  display: flex;
}

.calendar-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
}

.caption {
  font-weight: 500;
  font-size: 18px;
}

.options {
  padding: 20px;
  background-color: rgba(191, 191, 191, 0.15);
}

.option {
  margin-top: 10px;
}

.section {
  margin-top: 10px;
  text-decoration: underline;
}
</style>
