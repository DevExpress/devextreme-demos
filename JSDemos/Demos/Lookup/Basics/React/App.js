import React from 'react';
import { Lookup, DropDownOptions } from 'devextreme-react/lookup';
import DataSource from 'devextreme/data/data_source';
import { employeesList, employeesTasks } from './data.js';

const simpleLookupLabel = { 'aria-lebel': 'Simple lookup' };
const groupedLookupLabel = { 'aria-lebel': 'Grouped lookup' };

const groupedData = new DataSource({
  store: employeesTasks,
  key: 'ID',
  group: 'Assigned',
});

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="dx-fieldset">
          <div className="dx-fieldset-header">Simple lookup</div>
          <div className="dx-field">
            <Lookup
              items={employeesList}
              defaultValue={employeesList[0]}
              inputAttr={simpleLookupLabel}
            >
              <DropDownOptions showTitle={false} />
            </Lookup>
          </div>
        </div>
        <div className="dx-fieldset">
          <div className="dx-fieldset-header">Grouped lookup</div>
          <div className="dx-field">
            <Lookup
              dataSource={groupedData}
              grouped={true}
              displayExpr="Subject"
              inputAttr={groupedLookupLabel}
            >
              <DropDownOptions
                hideOnOutsideClick={true}
                showTitle={false}
              />
            </Lookup>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
