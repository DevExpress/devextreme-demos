import React from 'react';

import PivotGrid, {
  FieldChooser
} from 'devextreme-react/pivot-grid';
import CheckBox from 'devextreme-react/check-box';

import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
import sales from './data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeAllowCrossGroupCalculation = this.changeAllowCrossGroupCalculation.bind(this);
    this.state = {
      allowCrossGroupCalculation: true
    };
  }

  changeAllowCrossGroupCalculation(e) {
    this.setState({ allowCrossGroupCalculation: e.value });
    dataSource.field(5, { allowCrossGroupCalculation: this.state.allowCrossGroupCalculation });
    dataSource.load();
  }

  onCellPrepared(e) {
    if(e.area === 'data' && e.cell.dataIndex === 2) {
      e.cellElement.style.color = e.cell.value < 0
        ? 'red'
        : 'green';
    }
  }

  render() {
    return (
      <React.Fragment>
        <PivotGrid
          id="sales"
          dataSource={dataSource}
          allowSortingBySummary={true}
          allowSorting={true}
          allowFiltering={true}
          allowExpandAll={true}
          showBorders={true}
          showTotalsPrior="rows"
          showColumnTotals={false}
          onCellPrepared={this.onCellPrepared}>
          <FieldChooser enabled={false} />
        </PivotGrid>
        <CheckBox
          value={this.state.allowCrossGroupCalculation}
          text="Allow cross-group running totals accumulation"
          onValueChanged={this.changeAllowCrossGroupCalculation}
        />
      </React.Fragment>
    );
  }
}

const dataSource = new PivotGridDataSource({
  fields: [{
    caption: 'Region',
    width: 120,
    dataField: 'region',
    area: 'row'
  }, {
    caption: 'City',
    dataField: 'city',
    width: 150,
    area: 'row'
  }, {
    dataField: 'date',
    dataType: 'date',
    groupInterval: 'year',
    area: 'column',
    expanded: true
  }, {
    area: 'column',
    expanded: true,
    selector: function({date}) {
      var currDate = new Date(date);
      var currMonth = currDate.getMonth();
      return currMonth <= 5
        ? 'H1'
        : 'H2';
    }
  }, {
    caption: 'Total',
    dataField: 'amount',
    dataType: 'number',
    summaryType: 'sum',
    format: 'currency',
    area: 'data'
  }, {
    caption: 'Running Total',
    dataField: 'amount',
    dataType: 'number',
    summaryType: 'sum',
    format: 'currency',
    area: 'data',
    runningTotal: 'row',
    allowCrossGroupCalculation: true
  }, {
    caption: 'Profit/Loss',
    dataType: 'number',
    format: 'currency',
    area: 'data',
    calculateSummaryValue: function(summaryCell) {
      const prevCell = summaryCell.prev('column', true);
      if(prevCell) {
        const prevVal = prevCell.value('Total');
        const currVal = summaryCell.value('Total');
        return currVal - prevVal;
      }
      return null;
    }
  }],
  store: sales
});

export default App;
