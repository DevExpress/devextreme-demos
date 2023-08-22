<template>
  <div id="container">
    <div class="calendar-container">
      <DxCalendar
        v-model:zoom-level="zoomLevel"
        selection-mode="selectionMode"
        :min="minDateValue"
        :max="maxDateValue"
        :disabled-dates="disabledDates"
        :first-day-of-week="firstDay"
        :show-week-numbers="showWeekNumbers"
        :week-number-rule="weekNumberRule"
        :disabled="disabled"
        :cell-template="cellTemplate"
      >
        <template #custom="{ data: cell }">
          <span :class="getCellCssClass(cell)">
            {{ cell.text }}
          </span>
        </template>
      </DxCalendar>
    </div>
    <div class="options">
      <div class="caption">Options</div>
      <DxAccordion
        id="accordion"
        :collapsible="true"
        :active-state-enabled="false"
        :hover-state-enabled="false"
        :focus-state-enabled="false"
        :multiple="false"
      >
        <DxItem
          title="Common options"
          template="common-options"
        />
        <template #common-options>
          <div className="option">
            <span>Zoom level</span>
            <DxSelectBox
              v-model:value="zoomLevel"
              :data-source="zoomLevels"
              :input-attr="{ 'aria-label': 'Zoom Level' }"
            />
          </div>
          <div className="option">
            <span>Selection mode</span>
            <DxSelectBox
              v-model:value="selectionMode"
              :data-source="selectionModes"
              :input-attr="{ 'aria-label': 'Selection Mode' }"
            />
          </div>
          <div class="option">
            <DxCheckBox
              :value="false"
              text="Use custom cell template"
              @value-changed="useCellTemplate"
            />
          </div>
          <div class="option">
            <DxCheckBox
              v-model:value="disabled"
              text="Disable the calendar"
            />
          </div>
        </template>
        <DxItem
          title="Week numeration"
          template="week-numeration"
        />
        <template #week-numeration>
          <div class="option">
            <DxCheckBox
              v-model:value="showWeekNumbers"
              text="Show week numbers"
            />
          </div>
          <div class="option">
            <span>First day of week</span>
            <DxSelectBox
              v-model:value="firstDay"
              :data-source="weekDays"
              :input-attr="{ 'aria-label': 'First Day of Week' }"
              value-expr="id"
              display-expr="text"
            />
          </div>
          <div class="option">
            <span>Week number rule</span>
            <DxSelectBox
              v-model:value="weekNumberRule"
              :input-attr="{ 'aria-label': 'Week Number Rule' }"
              :data-source="weekNumberRules"
            />
          </div>
        </template>
        <DxItem
          title="Dates availability"
          template="dates-availability"
        />
        <template #dates-availability>
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
        </template>
      </DxAccordion>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import DxAccordion, { DxItem } from 'devextreme-vue/accordion';
import DxCheckBox from 'devextreme-vue/check-box';
import DxSelectBox from 'devextreme-vue/select-box';
import DxCalendar from 'devextreme-vue/calendar';

const zoomLevel = ref('month');
const selectionMode = ref('single');
const cellTemplate = ref('cell');
const disabled = ref(false);
const showWeekNumbers = ref(false);
const firstDay = ref(0);
const weekNumberRule = ref('auto');
const minDateValue = ref(null);
const maxDateValue = ref(null);
const disabledDates = ref(null);
const zoomLevels = ['month', 'year', 'decade', 'century'];
const selectionModes = ['single', 'multiple', 'range'];

const weekDays = [
  { id: 0, text: 'Sunday' },
  { id: 1, text: 'Monday' },
  { id: 2, text: 'Tuesday' },
  { id: 3, text: 'Wednesday' },
  { id: 4, text: 'Thursday' },
  { id: 5, text: 'Friday' },
  { id: 6, text: 'Saturday' },
];
const weekNumberRules = ['auto', 'firstDay', 'firstFourDays', 'fullWeek'];

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

function useCellTemplate({ value }) {
  cellTemplate.value = value ? 'custom' : 'cell';
}

function getCellCssClass({ date, view }) {
  let cssClass = '';
  const holidays = [[1, 0], [4, 6], [25, 11]];

  if (view === 'month') {
    if (!date) {
      cssClass = 'week-number';
    } else {
      if (isWeekend(date)) { cssClass = 'weekend'; }

      holidays.forEach((item) => {
        if (date.getDate() === item[0] && date.getMonth() === item[1]) {
          cssClass = 'holiday';
        }
      });
    }
  }

  return cssClass;
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

#accordion {
  background-color: transparent;
}

#accordion .dx-accordion-item {
  border: none;
  margin-top: 20px;
  background-color: transparent;
  box-shadow: none;
  overflow: visible;
}

#accordion .dx-item-content.dx-accordion-item-title {
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
  background-color: transparent;
}

#accordion .dx-item-content {
  padding: 10px 0 0 0;
  background-color: transparent;
  overflow: visible;
}

.dx-calendar-cell:not(.dx-calendar-other-month) .weekend,
.dx-calendar-cell:not(.dx-calendar-other-month) .holiday {
  text-shadow: none;
  font-weight: bold;
}

.dx-calendar-cell:not(.dx-calendar-other-month) .weekend {
  color: #3030ff;
}

.dx-state-disabled.dx-calendar .dx-calendar-cell:not(.dx-calendar-other-month) .weekend {
  color: #8080ff;
}

.dx-calendar-cell:not(.dx-calendar-other-month) .holiday {
  color: #ff3030;
}

.dx-state-disabled.dx-calendar .dx-calendar-cell:not(.dx-calendar-other-month) .holiday {
  color: #ff8080;
}

.dx-calendar-week-number-cell .week-number {
  font-style: italic;
}

.caption {
  font-weight: 500;
  font-size: 18px;
}

.options {
  padding: 20px;
  height: 540px;
  background-color: rgba(191, 191, 191, 0.15);
}

.option {
  margin-top: 10px;
}
</style>
