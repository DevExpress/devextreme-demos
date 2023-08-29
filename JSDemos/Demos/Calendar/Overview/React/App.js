import React from 'react';
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

const isDateDisabled = ({ view, date }) => view === 'month' && isWeekend(date);

export default function App() {
  const [zoomLevel, setZoomLevel] = React.useState('month');
  const [currentValue, setCurrentValue] = React.useState(new Date());
  const [useCellTemplate, setUseCellTemplate] = React.useState(null);
  const [disabled, setDisabled] = React.useState(false);
  const [showWeekNumbers, setShowWeekNumbers] = React.useState(false);
  const [firstDay, setFirstDay] = React.useState(0);
  const [weekNumberRule, setWeekNumberRule] = React.useState('auto');

  const onCurrentValueChange = React.useCallback(({ value }) => {
    setCurrentValue(value);
  }, [setCurrentValue]);

  const onDisabledChange = React.useCallback(({ value }) => {
    setDisabled(value);
  }, [setDisabled]);

  const onZoomLevelChange = React.useCallback(({ value }) => {
    setZoomLevel(value);
  }, [setZoomLevel]);

  const onFirstDayChange = React.useCallback(({ value }) => {
    setFirstDay(value);
  }, [setFirstDay]);

  const onWeekNumberRuleChange = React.useCallback(({ value }) => {
    setWeekNumberRule(value);
  }, [setWeekNumberRule]);

  const onShowWeekNumbersChange = React.useCallback(({ value }) => {
    setShowWeekNumbers(value);
  }, [setShowWeekNumbers]);

  const onUseCellTemplateChange = React.useCallback(({ value }) => {
    setUseCellTemplate(!!value);
  }, [setUseCellTemplate]);

  const onOptionChange = React.useCallback((e) => {
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
            inputAttr={dateBoxLabel}
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
        <div className="section">
          <span>Week numeration</span>
        </div>
        <div className="option">
          <CheckBox
            defaultValue={false}
            text="Show week numbers"
            onValueChanged={onShowWeekNumbersChange}
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
      </div>
    </div>
  );
}
