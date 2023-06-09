import React from 'react';
import FilterBuilder, { CustomOperation } from 'devextreme-react/filter-builder';
import { filter, fields, groupOperations } from './data.js';
import { formatValue } from './helpers.js';
import { EditorComponent } from './EditorComponent.js';

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      value: filter,
    };
    this.onValueChanged = this.onValueChanged.bind(this);
    this.updateTexts = this.updateTexts.bind(this);
  }

  render() {
    return (
      <div>
        // @ts-expect-error TS(2786): 'FilterBuilder' cannot be used as a JSX component.
        <FilterBuilder
          // @ts-expect-error TS(2322): Type '({ dataField: string; dataType?: undefined; ... Remove this comment to see the full error message
          fields={fields}
          value={this.state.value}
          onInitialized={this.updateTexts}
          // @ts-expect-error TS(2322): Type 'string[]' is not assignable to type 'GroupOp... Remove this comment to see the full error message
          groupOperations={groupOperations}
          onValueChanged={this.onValueChanged}
        >
          // @ts-expect-error TS(2786): 'CustomOperation' cannot be used as a JSX componen... Remove this comment to see the full error message
          <CustomOperation
            // @ts-expect-error TS(2322): Type '{ name: string; caption: string; icon: strin... Remove this comment to see the full error message
            name="anyof"
            caption="Is any of"
            icon="check"
            editorComponent={EditorComponent}
            calculateFilterExpression={calculateFilterExpression}
          />
        </FilterBuilder>
        <div className="results">
          <div>
            <b>Value</b>
            <pre>{this.state.filterText}</pre>
          </div>
          <div>
            <b>DataSource&apos;s filter expression</b>
            <pre>{this.state.dataSourceText}</pre>
          </div>
        </div>
      </div>
    );
  }

  updateTexts(e) {
    this.setState({
      filterText: formatValue(e.component.option('value')),
      dataSourceText: formatValue(e.component.getFilterExpression()),
    });
  }

  onValueChanged(e) {
    this.setState({ value: e.value });
    this.updateTexts(e);
  }
}

function calculateFilterExpression(filterValue, field) {
  return filterValue && filterValue.length
    && Array.prototype.concat.apply([], filterValue.map((value) => [[field.dataField, '=', value], 'or'])).slice(0, -1);
}

export default App;
