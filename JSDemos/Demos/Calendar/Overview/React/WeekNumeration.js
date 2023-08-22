import { CheckBox, SelectBox } from 'devextreme-react';
import React from 'react';

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

const dayLabel = { 'aria-label': 'First Day of Week' };
const ruleLabel = { 'aria-label': 'Week Number Rule' };

function WeekNumeration(props) {
  const {
    onShowWeekNumbersChange,
    onFirstDayChange,
    onWeekNumberRuleChange,
  } = props;

  return (
    <React.Fragment>
      <div className="option">
        <CheckBox
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
          defaultValue={0}
          onValueChanged={onFirstDayChange}
        />
      </div>
      <div className="option">
        <span>Week number rule</span>
        <SelectBox
          dataSource={weekNumberRules}
          inputAttr={ruleLabel}
          defaultValue='auto'
          onValueChanged={onWeekNumberRuleChange}
        />
      </div>
    </React.Fragment>
  );
}

export default WeekNumeration;
