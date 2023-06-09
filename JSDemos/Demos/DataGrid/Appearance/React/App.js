import React, { useState } from 'react';
import DataGrid, { Column } from 'devextreme-react/data-grid';
import CheckBox from 'devextreme-react/check-box';

import service from './data.js';

const App = () => {
  const [showColumnLines, setShowColumnLines] = useState(false);
  const [showRowLines, setShowRowLines] = useState(true);
  const [showBorders, setShowBorders] = useState(true);
  const [rowAlternationEnabled, setRowAlternationEnabled] = useState(true);

  const employees = service.getEmployees();

  const onValueChanged = (e) => {
    let optionName = null;
    switch (e.component.option('text')) {
      case 'Show Row Lines': {
        optionName = 'showRowLines';
        break;
      }
      case 'Show Borders': {
        optionName = 'showBorders';
        break;
      }
      case 'Alternating Row Color': {
        optionName = 'rowAlternationEnabled';
        break;
      }
      default: {
        optionName = 'showColumnLines';
        break;
      }
    }
    switch (optionName) {
      case 'showColumnLines':
        setShowColumnLines(e.value);
        break;
      case 'showRowLines':
        setShowRowLines(e.value);
        break;
      case 'showBorders':
        setShowBorders(e.value);
        break;
      case 'rowAlternationEnabled':
        setRowAlternationEnabled(e.value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <DataGrid
        dataSource={employees}
        keyExpr="ID"
        showColumnLines={showColumnLines}
        showRowLines={showRowLines}
        showBorders={showBorders}
        rowAlternationEnabled={rowAlternationEnabled}
      >
        <Column dataField="Prefix" width={80} caption="Title" />
        <Column dataField="FirstName" />
        <Column dataField="LastName" />
        <Column dataField="City" />
        <Column dataField="State" />
        <Column dataField="Position" width={130} />
        <Column dataField="BirthDate" width={100} dataType="date" />
        <Column dataField="HireDate" width={100} dataType="date" />
      </DataGrid>
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <CheckBox
            text="Show Column Lines"
            value={showColumnLines}
            onValueChanged={onValueChanged}
          />
        </div>
        &nbsp;
        <div className="option">
          <CheckBox
            text="Show Row Lines"
            value={showRowLines}
            onValueChanged={onValueChanged}
          />
        </div>
        &nbsp;
        <div className="option">
          <CheckBox
            text="Show Borders"
            value={showBorders}
            onValueChanged={onValueChanged}
          />
        </div>
        &nbsp;
        <div className="option">
          <CheckBox
            text="Alternating Row Color"
            value={rowAlternationEnabled}
            onValueChanged={onValueChanged}
          />
        </div>
      </div>
    </>
  );
};

export default App;