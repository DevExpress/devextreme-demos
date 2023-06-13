import React, { useState, useCallback } from 'react';
import CheckBox from 'devextreme-react/check-box';
import SelectBox from 'devextreme-react/select-box';
import DateBox from 'devextreme-react/date-box';
import Calendar from 'devextreme-react/calendar';
import CustomCell, { isWeekend } from './CustomCell.js';

const zoomLevels = ['month', 'year', 'decade', 'century'];
const weekNumberRules = ['auto', 'firstDay', 'firstFourDays', 'fullWeek'];
const weekDays = [
  { id: 0, text: 'Sunday' },
  { id: 1, text: 'Monday' },
  { id: 2, text: 'Tuesday' },
  { id: 3, text: 'Wednesday' },
  { id: 4, text: 'Thursday' },
  { id: 5, text: 'Friday' },
  { id: 6, text: 'Saturday' },
];

const dateBoxLabel = { 'aria-label': 'Date' };
const zoomLevelLabel = { 'aria-label': 'Zoom Level' };
const dayLabel = { 'aria-label': 'First Day of Week' };
const ruleLabel = { 'aria-label': 'Week Number Rule' };

export default function App() {
  const [minDateValue, setMinDateValue] = useState(null);
  const [maxDateValue, setMaxDateValue] = useState(null);
  const [weekendDisabled, setWeekendDisabled] = useState(null);
  const [firstDay, setFirstDay] = useState(0);
  const [weekNumberRule, setWeekNumberRule] = useState('auto');
  const [showWeekNumbers, setShowWeekNumbers] = useState(false);
  const [currentValue, setCurrentValue] = useState(new Date());
  const [useCellTemplate, setUseCellTemplate] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [zoomLevel, setZoomLevel] = useState('month');

  const onCurrentValueChange = useCallback(({ value }) => {
    setCurrentValue(value);
  }, [setCurrentValue]);

  const onDisabledChange = useCallback(({ value }) => {
    setDisabled(value);
  }, [setDisabled]);

  const onZoomLevelChange = useCallback(({ value }) => {
    setZoomLevel(value);
  }, [setZoomLevel]);

  const onMinDateChange = useCallback(({ value }) => {
    setMinDateValue(
      value ? new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 3) : null,
    );
  }, [setMinDateValue]);

  const onMaxDateChange = useCallback(({ value }) => {
    setMaxDateValue(
      value ? new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 3) : null,
    );
  }, [setMaxDateValue]);

  const onDisableWeekendChange = useCallback(({ value }) => {
    setWeekendDisabled(value);
  }, [setWeekendDisabled]);

  const onFirstDayChange = useCallback(({ value }) => {
    setFirstDay(value);
  }, [setFirstDay]);

  const onWeekNumberRuleChange = useCallback(({ value }) => {
    setWeekNumberRule(value);
  }, [setWeekNumberRule]);

  const onShowWeekNumbersChange = useCallback(({ value }) => {
    setShowWeekNumbers(value);
  }, [setShowWeekNumbers]);

  const onUseCellTemplateChange = useCallback(({ value }) => {
    setUseCellTemplate(!!value);
  }, [setUseCellTemplate]);

  const isDateDisabled = useCallback(({ view, date }) => view === 'month' && isWeekend(date), []);

  const onOptionChange = useCallback((e) => {
    if (e.name === 'zoomLevel') {
      onZoomLevelChange(e);
    }
  }, [onZoomLevelChange]);

  return (
    <div id="container">
      <div className="calendar-container">
        <Calendar
          value={currentValue}
          onValueChanged={onCurrentValueChange}
          onOptionChanged={onOptionChange}
          min={minDateValue}
          max={maxDateValue}
          disabledDates={weekendDisabled ? isDateDisabled : null}
          firstDayOfWeek={firstDay}
          weekNumberRule={weekNumberRule}
          showWeekNumbers={showWeekNumbers}
          disabled={disabled}
          zoomLevel={zoomLevel}
          cellRender={useCellTemplate ? CustomCell : null}
        />
      </div>
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <CheckBox
            defaultValue={false}
            text="Set minimum date"
            onValueChanged={onMinDateChange}
          />
        </div>
        <div className="option">
          <CheckBox
            defaultValue={false}
            text="Set maximum date"
            onValueChanged={onMaxDateChange}
          />
        </div>
        <div className="option">
          <CheckBox
            defaultValue={false}
            text="Disable weekends"
            onValueChanged={onDisableWeekendChange}
          />
        </div>
        <div className="option">
          <CheckBox
            defaultValue={false}
            text="Show week numbers"
            onValueChanged={onShowWeekNumbersChange}
          />
        </div>
        <div className="option">
          <CheckBox
            defaultValue={false}
            text="Use custom cell template"
            onValueChanged={onUseCellTemplateChange}
          />
        </div>
        <div className="option">
          <CheckBox
            value={disabled}
            text="Disable the calendar"
            onValueChanged={onDisabledChange}
          />
        </div>
        <div className="option">
          <span>First day of week</span>
          <SelectBox
            dataSource={weekDays}
            inputAttr={dayLabel}
            displayExpr="text"
            valueExpr="id"
            value={firstDay}
            onValueChanged={onFirstDayChange}
          />
        </div>
        <div className="option">
          <span>Week number rule</span>
          <SelectBox
            dataSource={weekNumberRules}
            inputAttr={ruleLabel}
            value={weekNumberRule}
            onValueChanged={onWeekNumberRuleChange}
          />
        </div>
        <div className="option">
          <span>Zoom level</span>
          <SelectBox
            dataSource={zoomLevels}
            value={zoomLevel}
            inputAttr={zoomLevelLabel}
            onValueChanged={onZoomLevelChange}
          />
        </div>
        <div className="option">
          <span>Selected date</span>
          <DateBox
            id="selected-date"
            value={currentValue}
            onValueChanged={onCurrentValueChange}
            min={minDateValue}
            max={maxDateValue}
            inputAttr={dateBoxLabel}
          />
        </div>
      </div>
    </div>
  );
}