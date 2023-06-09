import React from 'react';
import FilterBuilder, { CustomOperation } from 'devextreme-react/filter-builder';
import { filter, fields, groupOperations } from './data.js';
import { formatValue } from './helpers.js';
import { EditorComponent } from './EditorComponent.js';

class App extends React.Component {
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
        <FilterBuilder
          fields={fields}
          value={this.state.value}
          onInitialized={this.updateTexts}
          groupOperations={groupOperations}
          onValueChanged={this.onValueChanged}
        >
          <CustomOperation
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

  updateTexts(e: { component: { option: (arg0: string) => any; getFilterExpression: () => any; }; }) {
    this.setState({
      filterText: formatValue(e.component.option('value')),
      dataSourceText: formatValue(e.component.getFilterExpression()),
    });
  }

  onValueChanged(e: { value: any; }) {
    this.setState({ value: e.value });
    this.updateTexts(e);
  }
}

function calculateFilterExpression(filterValue: any[], field: { dataField: any; }) {
  return filterValue && filterValue.length
    && Array.prototype.concat.apply([], filterValue.map((value) => [[field.dataField, '=', value], 'or'])).slice(0, -1);
}

export default App;
