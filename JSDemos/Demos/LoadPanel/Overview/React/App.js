import React from 'react';
import { Button } from 'devextreme-react/button';
import { CheckBox } from 'devextreme-react/check-box';
import { LoadPanel } from 'devextreme-react/load-panel';
import { employee } from './data.js';

const position = { of: '#employee' };

const App = () => {
  const [employeeInfo, setEmployeeInfo] = React.useState({});
  const [loadPanelVisible, setLoadPanelVisible] = React.useState(false);
  const [showIndicator, setShowIndicator] = React.useState(true);
  const [shading, setShading] = React.useState(true);
  const [showPane, setShowPane] = React.useState(true);
  const [hideOnOutsideClick, setHideOnOutsideClick] = React.useState(false);

  const onClick = React.useCallback(() => {
    setEmployeeInfo({});
    setLoadPanelVisible(true);
    setTimeout(hideLoadPanel, 3000);
  });

  const hideLoadPanel = React.useCallback(() => {
    setLoadPanelVisible(false);
    setEmployeeInfo(employee);
  });

  const onShowIndicatorChange = React.useCallback((e) => {
    setShowIndicator(e.value);
  });

  const onShadingChange = React.useCallback((e) => {
    setShading(e.value);
  });

  const onShowPaneChange = React.useCallback((e) => {
    setShowPane(e.value);
  });

  const onHideOnOutsideClickChange = React.useCallback((e) => {
    setHideOnOutsideClick(e.value);
  });

  return (
    <React.Fragment>
      <h1>John Heart</h1>
      &nbsp;
      <Button text="Load Data" onClick={onClick}></Button>

      <div id="employee">
        <p>
          Birth date: <b>{employeeInfo.Birth_Date}</b>
        </p>

        <p className="address">
          Address:<br />
          <b>{employeeInfo.City}</b><br />
          <span>{employeeInfo.Zipcode}</span>
          <span>{employeeInfo.Address}</span>
        </p>

        <p>
          Phone: <b>{employeeInfo.Mobile_Phone}</b><br />
          Email: <b>{employeeInfo.Email}</b>
        </p>
      </div>

      <LoadPanel
        shadingColor="rgba(0,0,0,0.4)"
        position={position}
        onHiding={hideLoadPanel}
        visible={loadPanelVisible}
        showIndicator={showIndicator}
        shading={shading}
        showPane={showPane}
        hideOnOutsideClick={hideOnOutsideClick}
      />

      <div className="options">
        <div className="caption">Options</div>

        <div className="option">
          <CheckBox
            text="With indicator"
            value={showIndicator}
            onValueChanged={onShowIndicatorChange}
          />
        </div>

        <div className="option">
          <CheckBox
            text="With overlay"
            value={shading}
            onValueChanged={onShadingChange}
          />
        </div>

        <div className="option">
          <CheckBox
            text="With pane"
            value={showPane}
            onValueChanged={onShowPaneChange}
          />
        </div>

        <div className="option">
          <CheckBox
            text="Hide on outside click"
            value={hideOnOutsideClick}
            onValueChanged={onHideOnOutsideClickChange}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
