import React, { useState } from 'react';
import CheckBox from 'devextreme-react/check-box';
import SelectBox from 'devextreme-react/select-box';
import NumberBox from 'devextreme-react/number-box';
import Form from 'devextreme-react/form';
import service from './data.js';

const labelModes = ['outside', 'static', 'floating', 'hidden'];
const labelLocations = ['left', 'top'];
const columnsCount = ['auto', 1, 2, 3];
const minColumnWidths = [150, 200, 300];
const widthLabel = { 'aria-label': 'Width' };
const companyLabel = { 'aria-label': 'Company' };
const labelModeLabel = { 'aria-label': 'Label Mode' };
const labelLocationLabel = { 'aria-label': 'Label Location' };
const columnCountLabel = { 'aria-label': 'Column Count' };
const minCountWidthLabel = { 'aria-label': 'Min Count Width' };

const App = () => {
  const companies = service.getCompanies();
  const [labelMode, setLabelMode] = useState('floating');
  const [labelLocation, setLabelLocation] = useState('left');
  const [readOnly, setReadOnly] = useState(false);
  const [showColon, setShowColon] = useState(true);
  const [minColWidth, setMinColWidth] = useState(300);
  const [colCount, setColCount] = useState(2);
  const [company, setCompany] = useState(companies[0]);
  const [width, setWidth] = useState();

  const onCompanyChanged = (e) => {
    setCompany(e.value);
  };

  const onLabelModeChanged = (e) => {
    setLabelMode(e.value);
  };

  const onLabelLocationChanged = (e) => {
    setLabelLocation(e.value);
  };

  const onReadOnlyChanged = (e) => {
    setReadOnly(e.value);
  };

  const onShowColonChanged = (e) => {
    setShowColon(e.value);
  };

  const onMinColWidthChanged = (e) => {
    setMinColWidth(e.value);
  };

  const onColumnsCountChanged = (e) => {
    setColCount(e.value);
  };

  const onFormWidthChanged = (e) => {
    setWidth(e.value);
  };

  const companySelectorLabelMode = labelMode === 'outside'
    ? 'hidden'
    : labelMode;

  return (
    <div id="form-demo">
      <div className="widget-container">
        {labelMode === 'outside' && (<div>Select company:</div>)}
        <SelectBox
          displayExpr="Name"
          dataSource={companies}
          inputAttr={companyLabel}
          labelMode={companySelectorLabelMode}
          label='Select company'
          value={company}
          onValueChanged={onCompanyChanged}
        />
        <Form
          id="form"
          labelMode={labelMode}
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
          <span>Label mode:</span>
          <SelectBox
            items={labelModes}
            inputAttr={labelModeLabel}
            value={labelMode}
            onValueChanged={onLabelModeChanged}
          />
        </div>
        <div className="option">
          <span>Label location:</span>
          <SelectBox
            items={labelLocations}
            inputAttr={labelLocationLabel}
            value={labelLocation}
            onValueChanged={onLabelLocationChanged}
          />
        </div>
        <div className="option">
          <span>Columns count:</span>
          <SelectBox
            items={columnsCount}
            value={colCount}
            inputAttr={columnCountLabel}
            onValueChanged={onColumnsCountChanged}
          />
        </div>
        <div className="option">
          <span>Min column width:</span>
          <SelectBox
            items={minColumnWidths}
            value={minColWidth}
            inputAttr={minCountWidthLabel}
            onValueChanged={onMinColWidthChanged}
          />
        </div>
        <div className="option">
          <span>Form width:</span>
          <NumberBox
            max={550}
            value={width}
            inputAttr={widthLabel}
            onValueChanged={onFormWidthChanged}
          />
        </div>
        <div className="option">
          <CheckBox
            text="readOnly"
            value={readOnly}
            onValueChanged={onReadOnlyChanged}
          />
        </div>
        <div className="option">
          <CheckBox
            text="showColonAfterLabel"
            value={showColon}
            onValueChanged={onShowColonChanged}
          />
        </div>
      </div>
    </div>
  );
};

export default App;