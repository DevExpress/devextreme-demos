import React from 'react';
import CheckBox from 'devextreme-react/check-box';
import SelectBox from 'devextreme-react/select-box';
import TextArea from 'devextreme-react/text-area';

import service from './data.js';

const { valueChangeEvents } = service;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: service.getContent(),
      valueForEditableTestArea: service.getContent(),
      maxLength: null,
      eventValue: valueChangeEvents[0].name,
      autoResizeEnabled: false,
      height: 90,
    };
    this.onCheckboxValueChanged = this.onCheckboxValueChanged.bind(this);
    this.onSelectBoxValueChanged = this.onSelectBoxValueChanged.bind(this);
    this.onTextAreaValueChanged = this.onTextAreaValueChanged.bind(this);
    this.onAutoResizeChanged = this.onAutoResizeChanged.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <div className="dx-fieldset">
          <div className="dx-fieldset-header">Default Mode</div>
          <div className="dx-field">
            <CheckBox
              defaultValue={false}
              onValueChanged={this.onCheckboxValueChanged}
              text="Limit text length"></CheckBox>
          </div>
          <div className="dx-field">
            <CheckBox
              value={this.state.autoResizeEnabled}
              onValueChanged={this.onAutoResizeChanged}
              text="Enable auto resize"></CheckBox>
          </div>
        </div>
        <div className="left-content">
          <TextArea
            height={this.state.height}
            maxLength={this.state.maxLength}
            defaultValue={this.state.value}
            autoResizeEnabled={this.state.autoResizeEnabled} />
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
                  value={this.state.eventValue}
                  onValueChanged={this.onSelectBoxValueChanged}
                />
              </div>
            </div>
          </div>
          <TextArea
            height={90}
            value={this.state.valueForEditableTestArea}
            valueChangeEvent={this.state.eventValue}
            onValueChanged={this.onTextAreaValueChanged}
          />
          <TextArea
            height={90}
            value={this.state.valueForEditableTestArea}
            readOnly={true}
            valueChangeEvent={this.state.eventValue} />
        </div>
      </React.Fragment>
    );
  }

  onCheckboxValueChanged(e) {
    if (e.value) {
      this.setState({
        value: service.getContent().substring(0, 100),
        maxLength: 100,
      });
    } else {
      this.setState({
        value: service.getContent(),
        maxLength: null,
      });
    }
  }

  onAutoResizeChanged(e) {
    if (e.value) {
      this.setState({
        autoResizeEnabled: true,
        height: null,
      });
    } else {
      this.setState({
        autoResizeEnabled: false,
        height: 90,
      });
    }
  }

  onSelectBoxValueChanged(e) {
    this.setState({
      eventValue: e.value,
    });
  }

  onTextAreaValueChanged(e) {
    this.setState({
      valueForEditableTestArea: e.value,
    });
  }
}

export default App;
