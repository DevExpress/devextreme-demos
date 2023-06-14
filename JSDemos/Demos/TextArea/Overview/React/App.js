import React, { useState } from 'react';
import CheckBox from 'devextreme-react/check-box';
import SelectBox from 'devextreme-react/select-box';
import TextArea from 'devextreme-react/text-area';

import service from './data.js';

const { valueChangeEvents } = service;
const notesLabel = { 'aria-label': 'Notes' };
const eventLabel = { 'aria-label': 'Event' };

const App = () => {
  const [value, setValue] = useState(service.getContent());
  const [valueForEditableTestArea, setValueForEditableTestArea] = useState(service.getContent());
  const [maxLength, setMaxLength] = useState(null);
  const [eventValue, setEventValue] = useState(valueChangeEvents[0].name);
  const [autoResizeEnabled, setAutoResizeEnabled] = useState(false);
  const [height, setHeight] = useState(90);

  const onCheckboxValueChanged = (e) => {
    const str = service.getContent();
    setValue(e.value ? str.substring(0, 100) : str);
    setMaxLength(e.value ? 100 : null);
  };

  const onAutoResizeChanged = (e) => {
    setAutoResizeEnabled(e.value);
    setHeight(e.value ? undefined : 90);
  };

  const onSelectBoxValueChanged = (e) => {
    setEventValue(e.value);
  };

  const onTextAreaValueChanged = (e) => {
    setValueForEditableTestArea(e.value);
  };

  return (
    <React.Fragment>
      <div className="dx-fieldset">
        <div className="dx-fieldset-header">Default Mode</div>
        <div className="dx-field">
          <CheckBox
            defaultValue={false}
            onValueChanged={onCheckboxValueChanged}
            text="Limit text length"
          />
        </div>
        <div className="dx-field">
          <CheckBox
            value={autoResizeEnabled}
            onValueChanged={onAutoResizeChanged}
            text="Enable auto resize"
          />
        </div>
      </div>
      <div className="left-content">
        <TextArea
          height={height}
          maxLength={maxLength}
          defaultValue={value}
          inputAttr={notesLabel}
          autoResizeEnabled={autoResizeEnabled}
        />
      </div>
      <div className="full-width-content">
        <div className="dx-fieldset">
          <div className="dx-fieldset-header">Event Handling and API</div>
          <div className="dx-field">
            <div className="dx-field-label">Synchronize text areas </div>
            <div className="dx-field-value">
              <SelectBox
                items={valueChangeEvents}
                valueExpr="name"
                displayExpr="title"
                inputAttr={eventLabel}
                value={eventValue}
                onValueChanged={onSelectBoxValueChanged}
              />
            </div>
          </div>
        </div>
        <TextArea
          height={90}
          value={valueForEditableTestArea}
          valueChangeEvent={eventValue}
          inputAttr={notesLabel}
          onValueChanged={onTextAreaValueChanged}
        />
        <TextArea
          height={90}
          value={valueForEditableTestArea}
          readOnly={true}
          inputAttr={notesLabel}
          valueChangeEvent={eventValue}
        />
      </div>
    </React.Fragment>
  );
};

export default App;
