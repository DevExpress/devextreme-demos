import React from 'react';
import CheckBox from 'devextreme-react/check-box';
import SelectBox from 'devextreme-react/select-box';
import Calendar from 'devextreme-react/calendar';

const selectionModes = ['single', 'multiple', 'range'];
const selectionModeLabel = { 'aria-label': 'Selection Mode' };
const isWeekend = (date) => {
  const day = date.getDay();
  return day === 0 || day === 6;
};
const isDateDisabled = ({ view, date }) => view === 'month' && isWeekend(date);
const now = new Date().getTime();
const msInDay = 1000 * 60 * 60 * 24;
const initialValues = [now, now + msInDay];
export default function App() {
  const [showWeekNumbers, setShowWeekNumbers] = React.useState(true);
  const [selectWeekOnClick, setSelectWeekOnClick] = React.useState(true);
  const [selectionMode, setSelectionMode] = React.useState('multiple');
  const [minDateValue, setMinDateValue] = React.useState(null);
  const [maxDateValue, setMaxDateValue] = React.useState(null);
  const [weekendDisabled, setWeekendDisabled] = React.useState(null);
  const onShowWeekNumbersChange = React.useCallback(
    ({ value }) => {
      setShowWeekNumbers(value);
    },
    [setShowWeekNumbers],
  );
  const onSelectWeekOnClickChange = React.useCallback(
    ({ value }) => {
      setSelectWeekOnClick(value);
    },
    [setSelectWeekOnClick],
  );
  const onSelectionModeChange = React.useCallback(
    ({ value }) => {
      setSelectionMode(value);
    },
    [setSelectionMode],
  );
  const onMinDateChange = React.useCallback(
    ({ value }) => {
      setMinDateValue(value ? new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 3) : null);
    },
    [setMinDateValue],
  );
  const onMaxDateChange = React.useCallback(
    ({ value }) => {
      setMaxDateValue(value ? new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 3) : null);
    },
    [setMaxDateValue],
  );
  const onDisableWeekendChange = React.useCallback(
    ({ value }) => {
      setWeekendDisabled(value);
    },
    [setWeekendDisabled],
  );
  return (
    <div id="container">
      <div className="calendar-container">
        <Calendar
          showWeekNumbers={showWeekNumbers}
          selectWeekOnClick={selectWeekOnClick}
          selectionMode={selectionMode}
          min={minDateValue}
          max={maxDateValue}
          values={initialValues}
          disabledDates={weekendDisabled ? isDateDisabled : null}
        />
      </div>
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <CheckBox
            defaultValue={true}
            text="Show week numbers"
            onValueChanged={onShowWeekNumbersChange}
          />
        </div>
        <div className="option">
          <CheckBox
            defaultValue={true}
            text="Select week on click"
            onValueChanged={onSelectWeekOnClickChange}
          />
        </div>
        <div className="option">
          <span>Selection Mode</span>
          <SelectBox
            dataSource={selectionModes}
            value={selectionMode}
            inputAttr={selectionModeLabel}
            onValueChanged={onSelectionModeChange}
          />
        </div>
        <div className="caption option">
          <span>Dates availability</span>
        </div>
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
      </div>
    </div>
  );
}
