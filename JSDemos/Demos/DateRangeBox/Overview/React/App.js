import React from 'react';
import DateRangeBox from 'devextreme-react/date-range-box';

const msInDay = 1000 * 60 * 60 * 24;
const now = new Date();
const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
const initialValue = [new Date(now.getTime() - msInDay * 3), new Date(now.getTime() + msInDay * 3)];
const min = new Date(now.setDate(1));
const max = new Date(now.setDate(lastDay));

function convertRangeToDays(value) {
  const diffInDay = Math.floor(Math.abs((value[1] - value[0]) / (24 * 60 * 60 * 1000)));

  return diffInDay + 1;
}

export default function App() {
  const [selectedDays, setSelectedDays] = React.useState(convertRangeToDays(initialValue));

  const onCurrentValueChange = React.useCallback(({ value }) => {
    let daysCount;

    if (!value[0] || !value[1]) {
      daysCount = 0;
    } else {
      daysCount = convertRangeToDays(value);
    }
    setSelectedDays(daysCount);
  }, [setSelectedDays]);

  return (
    <div className="dx-fieldset">
      <div className="dx-field">
        <div className="dx-field-label multiline-label">
          <span>Range selection</span>
          <div className="selected-days-wrapper ">
            <span>Days selected: </span>
            <span>{ selectedDays }</span>
          </div>
        </div>
        <div className="dx-field-value">
          <DateRangeBox
            defaultValue={initialValue}
            onValueChanged={onCurrentValueChange}
          />
        </div>
      </div>
      <div className="dx-field">
        <div className="dx-field-label">Custom format</div>
        <div className="dx-field-value">
          <DateRangeBox
            defaultValue={initialValue}
            displayFormat="EEEE, MMM dd"
          />
        </div>
      </div>
      <div className="dx-field">
        <div className="dx-field-label">Apply value mode: Use buttons</div>
        <div className="dx-field-value">
          <DateRangeBox applyValueMode="useButtons" />
        </div>
      </div>
      <div className="dx-field">
        <div className="dx-field-label">One view</div>
        <div className="dx-field-value">
          <DateRangeBox multiView={false} />
        </div>
      </div>
      <div className="dx-field">
        <div className="dx-field-label">Open by icon click only</div>
        <div className="dx-field-value">
          <DateRangeBox openOnFieldClick={false} />
        </div>
      </div>
      <div className="dx-field">
        <div className="dx-field-label">Access current month only</div>
        <div className="dx-field-value">
          <DateRangeBox min={min} max={max} />
        </div>
      </div>
      <div className="dx-field">
        <div className="dx-field-label">Clear button</div>
        <div className="dx-field-value">
          <DateRangeBox defaultValue={initialValue} showClearButton />
        </div>
      </div>
    </div>
  );
}
