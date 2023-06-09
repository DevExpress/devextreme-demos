import React from 'react';
import { Lookup, DropDownOptions } from 'devextreme-react/lookup';
import DataSource from 'devextreme/data/data_source';
import { employeesList, employeesTasks } from './data.js';

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
            // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
            <Lookup
              items={employeesList}
              defaultValue={employeesList[0]}
            >
              // @ts-expect-error TS(2786): 'DropDownOptions' cannot be used as a JSX componen... Remove this comment to see the full error message
              <DropDownOptions showTitle={false} />
            </Lookup>
          </div>
        </div>
        <div className="dx-fieldset">
          <div className="dx-fieldset-header">Grouped lookup</div>
          <div className="dx-field">
            // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
            <Lookup
              dataSource={groupedData}
              grouped={true}
              displayExpr="Subject"
            >
              // @ts-expect-error TS(2786): 'DropDownOptions' cannot be used as a JSX componen... Remove this comment to see the full error message
              <DropDownOptions
                // @ts-expect-error TS(2322): Type '{ hideOnOutsideClick: boolean; showTitle: bo... Remove this comment to see the full error message
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
