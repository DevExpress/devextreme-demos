﻿import React from 'react';
import CheckBox from 'devextreme-react/check-box';
import SelectBox from 'devextreme-react/select-box';
import NumberBox from 'devextreme-react/number-box';
import Form from 'devextreme-react/form';
import service from './data.js';

const labelLocations = ['left', 'top'];
const columnsCount = ['auto', 1, 2, 3];
const minColumnWidths = [150, 200, 300];

class App extends React.Component {
  constructor() {
    super();
    this.companies = service.getCompanies();
    this.state = {
      labelLocation: 'top',
      readOnly: false,
      showColon: true,
      minColWidth: 300,
      colCount: 2,
      company: this.companies[0]
    };
    this.onCompanyChanged = this.onCompanyChanged.bind(this);
    this.onLabelLocationChanged = this.onLabelLocationChanged.bind(this);
    this.onReadOnlyChanged = this.onReadOnlyChanged.bind(this);
    this.onShowColonChanged = this.onShowColonChanged.bind(this);
    this.onMinColWidthChanged = this.onMinColWidthChanged.bind(this);
    this.onColumnsCountChanged = this.onColumnsCountChanged.bind(this);
    this.onFormWidthChanged = this.onFormWidthChanged.bind(this);
  }

  render() {
    const {
      labelLocation,
      readOnly,
      showColon,
      minColWidth,
      colCount,
      company,
      width
    } = this.state;
    return (
      <div id="form-demo">
        <div className="widget-container">
          <div>Select company:</div>
          <SelectBox
            displayExpr="Name"
            dataSource={this.companies}
            value={company}
            onValueChanged={this.onCompanyChanged}
          />
          <Form
            id="form"
            formData={company}
            readOnly={readOnly}
            showColonAfterLabel={showColon}
            labelLocation={labelLocation}
            minColWidth={minColWidth}
            colCount={colCount}
            width={width}
          />
        </div>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Label location:</span>
            <SelectBox
              items={labelLocations}
              value={labelLocation}
              onValueChanged={this.onLabelLocationChanged}
            />
          </div>
          <div className="option">
            <span>Columns count:</span>
            <SelectBox
              items={columnsCount}
              value={colCount}
              onValueChanged={this.onColumnsCountChanged}
            />
          </div>
          <div className="option">
            <span>Min column width:</span>
            <SelectBox
              items={minColumnWidths}
              value={minColWidth}
              onValueChanged={this.onMinColWidthChanged}
            />
          </div>
          <div className="option">
            <span>Form width:</span>
            <NumberBox
              max={550}
              value={width}
              onValueChanged={this.onFormWidthChanged}
            />
          </div>
          <div className="option">
            <CheckBox
              text="readOnly"
              value={readOnly}
              onValueChanged={this.onReadOnlyChanged}
            />
          </div>
          <div className="option">
            <CheckBox
              text="showColonAfterLabel"
              value={showColon}
              onValueChanged={this.onShowColonChanged}
            />
          </div>
        </div>
      </div>
    );
  }

  onCompanyChanged(e) {
    this.setState({
      company: e.value
    });
  }

  onLabelLocationChanged(e) {
    this.setState({
      labelLocation: e.value
    });
  }

  onReadOnlyChanged(e) {
    this.setState({
      readOnly: e.value
    });
  }

  onShowColonChanged(e) {
    this.setState({
      showColon: e.value
    });
  }

  onMinColWidthChanged(e) {
    this.setState({
      minColWidth: e.value
    });
  }

  onColumnsCountChanged(e) {
    this.setState({
      colCount: e.value
    });
  }

  onFormWidthChanged(e) {
    this.setState({
      width: e.value
    });
  }
}

export default App;
