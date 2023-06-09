import React from 'react';
import FilterBuilder from 'devextreme-react/filter-builder';
import Button from 'devextreme-react/button';
import List from 'devextreme-react/list';
import DataSource from 'devextreme/data/data_source';
import { filter, fields, products } from './data.js';
import CustomItem from './CustomItem.js';

class App extends React.Component {
  dataSource: any;

  filterBuilderInstance: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.dataSource = new DataSource({
      store: products,
    });
    this.filterBuilderInstance = null;
    this.state = {
      value: filter,
    };
    this.onValueChanged = this.onValueChanged.bind(this);
    this.refreshDataSource = this.refreshDataSource.bind(this);
    this.setFilterBuilderInstance = this.setFilterBuilderInstance.bind(this);
  }

  render() {
    return (
      <div>
        <div className="filter-container">
          // @ts-expect-error TS(2786): 'FilterBuilder' cannot be used as a JSX component.
          <FilterBuilder ref={this.setFilterBuilderInstance}
            // @ts-expect-error TS(2322): Type '({ dataField: string; dataType: string; form... Remove this comment to see the full error message
            fields={fields}
            value={this.state.value}
            onValueChanged={this.onValueChanged} />
          // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
          <Button
            text="Apply Filter"
            type="default"
            onClick={this.refreshDataSource} />
          <div className="dx-clearfix"></div>
        </div>
        <div className="list-container">
          // @ts-expect-error TS(2786): 'List' cannot be used as a JSX component.
          <List dataSource={this.dataSource} itemRender={CustomItem} />
        </div>
      </div>
    );
  }

  setFilterBuilderInstance(ref) {
    this.filterBuilderInstance = ref.instance;
    this.refreshDataSource();
  }

  onValueChanged(e) {
    this.setState({
      value: e.value,
    });
  }

  refreshDataSource() {
    this.dataSource.filter(this.filterBuilderInstance.getFilterExpression());
    this.dataSource.load();
  }
}

export default App;
