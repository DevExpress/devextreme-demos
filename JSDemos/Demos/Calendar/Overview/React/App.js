import React from 'react';
import Accordion, { Item } from 'devextreme-react/accordion';
import Calendar from 'devextreme-react/calendar';
import CustomCell, { isWeekend } from './CustomCell.js';
import CommonOptions from './CommonOptions.js';
import WeekNumeration from './WeekNumeration.js';
import DatesAvailability from './DatesAvailability.js';

const isDateDisabled = ({ view, date }) => view === 'month' && isWeekend(date);

export default function App() {
  const [zoomLevel, setZoomLevel] = React.useState('month');
  const [selectionMode, setSelectionMode] = React.useState('single');
  const [useCellTemplate, setUseCellTemplate] = React.useState(null);
  const [disabled, setDisabled] = React.useState(false);
  const [showWeekNumbers, setShowWeekNumbers] = React.useState(false);
  const [firstDay, setFirstDay] = React.useState(0);
  const [weekNumberRule, setWeekNumberRule] = React.useState('auto');
  const [minDateValue, setMinDateValue] = React.useState(null);
  const [maxDateValue, setMaxDateValue] = React.useState(null);
  const [weekendDisabled, setWeekendDisabled] = React.useState(null);

  const onZoomLevelChange = React.useCallback(({ value }) => {
    setZoomLevel(value);
  }, [setZoomLevel]);

  const onSelectionModeChange = React.useCallback(({ value }) => {
    setSelectionMode(value);
  }, [setSelectionMode]);

  const onUseCellTemplateChange = React.useCallback(({ value }) => {
    setUseCellTemplate(!!value);
  }, [setUseCellTemplate]);

  const onDisabledChange = React.useCallback(({ value }) => {
    setDisabled(value);
  }, [setDisabled]);

  const onShowWeekNumbersChange = React.useCallback(({ value }) => {
    setShowWeekNumbers(value);
  }, [setShowWeekNumbers]);

  const onFirstDayChange = React.useCallback(({ value }) => {
    setFirstDay(value);
  }, [setFirstDay]);

  const onWeekNumberRuleChange = React.useCallback(({ value }) => {
    setWeekNumberRule(value);
  }, [setWeekNumberRule]);

  const onMinDateChange = React.useCallback(({ value }) => {
    setMinDateValue(
      value ? new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 3) : null,
    );
  }, [setMinDateValue]);

  const onMaxDateChange = React.useCallback(({ value }) => {
    setMaxDateValue(
      value ? new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 3) : null,
    );
  }, [setMaxDateValue]);

  const onDisableWeekendChange = React.useCallback(({ value }) => {
    setWeekendDisabled(value);
  }, [setWeekendDisabled]);

  const onOptionChange = React.useCallback((e) => {
    if (e.name === 'zoomLevel') {
      onZoomLevelChange(e);
    }
  }, [onZoomLevelChange]);

  const renderCommonOptions = React.useCallback(
    () => (
      <CommonOptions
        zoomLevel={zoomLevel}
        onZoomLevelChange={onZoomLevelChange}
        onSelectionModeChange={onSelectionModeChange}
        onUseCellTemplateChange={onUseCellTemplateChange}
        onDisabledChange={onDisabledChange}
      />),
    [
      zoomLevel,
      onZoomLevelChange,
      onSelectionModeChange,
      onUseCellTemplateChange,
      onDisabledChange,
    ],
  );

  const renderWeekNumeration = React.useCallback(
    () => (
      <WeekNumeration
        onShowWeekNumbersChange={onShowWeekNumbersChange}
        onFirstDayChange={onFirstDayChange}
        onWeekNumberRuleChange={onWeekNumberRuleChange}
      />),
    [onShowWeekNumbersChange, onFirstDayChange, onWeekNumberRuleChange],
  );

  const renderDatesAvailability = React.useCallback(
    () => (
      <DatesAvailability
        onMinDateChange={onMinDateChange}
        onMaxDateChange={onMaxDateChange}
        onDisableWeekendChange={onDisableWeekendChange}
      />),
    [onMinDateChange, onMaxDateChange, onDisableWeekendChange],
  );

  return (
    <div id="container">
      <div className="calendar-container">
        <Calendar
          onOptionChanged={onOptionChange}
          min={minDateValue}
          max={maxDateValue}
          disabledDates={weekendDisabled ? isDateDisabled : null}
          firstDayOfWeek={firstDay}
          weekNumberRule={weekNumberRule}
          showWeekNumbers={showWeekNumbers}
          disabled={disabled}
          zoomLevel={zoomLevel}
          selectionMode={selectionMode}
          cellRender={useCellTemplate ? CustomCell : null}
        />
      </div>
      <div className="options">
        <div className="caption">Options</div>
        <Accordion
          id='accordion'
          collapsible={true}
          activeStateEnabled={false}
          hoverStateEnabled={false}
          focusStateEnabled={false}
        >
          <Item
            title='Common options'
            render={renderCommonOptions}
          />
          <Item
            title='Week numeration'
            render={renderWeekNumeration}
          />
          <Item
            title='Dates availability'
            render={renderDatesAvailability}
          />
        </Accordion>
      </div>
    </div>
  );
}
