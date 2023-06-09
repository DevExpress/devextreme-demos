import React from 'react';
import { Lookup, DropDownOptions } from 'devextreme-react/lookup';

import { employees } from './data.js';
import Field from './Field.js';
import Item from './Item.js';

const searchExpression = ['FirstName', 'LastName', 'Prefix'];

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="dx-fieldset">
          <div className="dx-fieldset-header">Custom Field Template</div>
          <div className="dx-field">
            // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
            <Lookup className="field-customization"
              defaultValue={employees[0].ID}
              displayExpr={this.getDisplayExpr}
              valueExpr="ID"
              items={employees}
              searchEnabled={true}
              fieldRender={Field}>
              // @ts-expect-error TS(2786): 'DropDownOptions' cannot be used as a JSX componen... Remove this comment to see the full error message
              <DropDownOptions title="Select employee" />
            </Lookup>
          </div>
        </div>
        <div className="dx-fieldset">
          <div className="dx-fieldset-header">Custom Item Template</div>
          <div className="dx-field">
            // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
            <Lookup
              items={employees}
              displayExpr={this.getDisplayExpr}
              searchExpr={searchExpression}
              valueExpr="ID"
              placeholder="Select employee"
              itemRender={Item}>
              // @ts-expect-error TS(2786): 'DropDownOptions' cannot be used as a JSX componen... Remove this comment to see the full error message
              <DropDownOptions title="Select employee" />
            </Lookup>
          </div>
        </div>
      </div>
    );
  }

  getDisplayExpr(item) {
    return item ? `${item.FirstName} ${item.LastName}` : '';
  }
}

export default App;
