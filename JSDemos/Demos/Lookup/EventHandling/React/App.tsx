import React from 'react';
import { Lookup, DropDownOptions } from 'devextreme-react/lookup';
import { SelectBox } from 'devextreme-react';
import { employees, applyValueModeLabel } from './data.js';

const applyValueModes = ['instantly', 'useButtons'];

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      selectedValue: null,
      applyValueMode: 'instantly',
    };
    this.onValueChanged = this.onValueChanged.bind(this);
    this.changeApplyValueMode = this.changeApplyValueMode.bind(this);
  }

  render() {
    const { selectedValue, applyValueMode } = this.state;
    return (
      <div>
        <div className="dx-fieldset">
          <div className="dx-field">
            // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
            <Lookup
              value={selectedValue}
              items={employees}
              displayExpr={getDisplayExpr}
              placeholder="Select employee"
              onValueChanged={this.onValueChanged}
              applyValueMode={applyValueMode}
            >
              // @ts-expect-error TS(2786): 'DropDownOptions' cannot be used as a JSX componen... Remove this comment to see the full error message
              <DropDownOptions showTitle={false} />
            </Lookup>
          </div>
        </div>
        {selectedValue
          && <div className="selected">
            <div className="frame">
              <img src={selectedValue.Picture} />
            </div>
            <div id="selected-employee-notes">{selectedValue.Notes}</div>
          </div>
        }

        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <div className="label">Apply Value Mode</div>
            // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
            <SelectBox
              items={applyValueModes}
              inputAttr={applyValueModeLabel}
              value={applyValueMode}
              onValueChanged={this.changeApplyValueMode} />
          </div>
        </div>
      </div>
    );
  }

  onValueChanged(e) {
    this.setState({
      selectedValue: e.value,
    });
  }

  changeApplyValueMode(e) {
    this.setState({
      applyValueMode: e.value,
    });
  }
}

function getDisplayExpr(item) {
  return item ? `${item.FirstName} ${item.LastName}` : '';
}

export default App;
