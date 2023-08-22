import { CheckBox } from 'devextreme-react';
import React from 'react';

function DatesAvailability(props) {
  const {
    onMinDateChange,
    onMaxDateChange,
    onDisableWeekendChange,
  } = props;

  return (
    <React.Fragment>
      <div className="option">
        <CheckBox
          defaultValue={false}
          text="Set minimum date"
          onValueChanged={onMinDateChange}
        />
      </div>
      <div className="option">
        <CheckBox
          text="Set maximum date"
          onValueChanged={onMaxDateChange}
        />
      </div>
      <div className="option">
        <CheckBox
          text="Disable weekends"
          onValueChanged={onDisableWeekendChange}
        />
      </div>
    </React.Fragment>
  );
}

export default DatesAvailability;
