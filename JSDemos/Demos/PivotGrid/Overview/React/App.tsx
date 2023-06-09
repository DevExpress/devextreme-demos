import React from 'react';

import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

import Chart, {
  AdaptiveLayout,
  CommonSeriesSettings,
  Size,
  Tooltip,
} from 'devextreme-react/chart';

import PivotGrid, {
  FieldChooser,
} from 'devextreme-react/pivot-grid';

import { sales } from './data.js';

class App extends React.Component {
  chart: any;

  pivotGrid: any;

  componentDidMount() {
    this.pivotGrid.bindChart(this.chart, {
      dataFieldsDisplayMode: 'splitPanes',
      alternateDataFields: false,
    });
    setTimeout(() => {
      dataSource.expandHeaderItem('row', ['North America']);
      dataSource.expandHeaderItem('column', [2013]);
    });
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
        <Chart ref={(ref) => { this.chart = ref.instance; }}>
          // @ts-expect-error TS(2786): 'Size' cannot be used as a JSX component.
          <Size height={200} />
          // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
          <Tooltip enabled={true} customizeTooltip={customizeTooltip} />
          // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
          <CommonSeriesSettings type="bar" />
          // @ts-expect-error TS(2786): 'AdaptiveLayout' cannot be used as a JSX component... Remove this comment to see the full error message
          <AdaptiveLayout width={450} />
        </Chart>

        // @ts-expect-error TS(2786): 'PivotGrid' cannot be used as a JSX component.
        <PivotGrid
          id="pivotgrid"
          dataSource={dataSource}
          allowSortingBySummary={true}
          allowFiltering={true}
          showBorders={true}
          showColumnTotals={false}
          showColumnGrandTotals={false}
          showRowTotals={false}
          showRowGrandTotals={false}
          ref={(ref) => { this.pivotGrid = ref.instance; }}
        >
          // @ts-expect-error TS(2786): 'FieldChooser' cannot be used as a JSX component.
          <FieldChooser enabled={true} height={400} />
        </PivotGrid>
      </React.Fragment>
    );
  }
}

const dataSource = new PivotGridDataSource({
  fields: [{
    caption: 'Region',
    width: 120,
    dataField: 'region',
    area: 'row',
    sortBySummaryField: 'Total',
  }, {
    caption: 'City',
    dataField: 'city',
    width: 150,
    area: 'row',
  }, {
    dataField: 'date',
    dataType: 'date',
    area: 'column',
  }, {
    groupName: 'date',
    groupInterval: 'month',
    visible: false,
  }, {
    caption: 'Total',
    dataField: 'amount',
    dataType: 'number',
    summaryType: 'sum',
    format: 'currency',
    area: 'data',
  }],
  store: sales,
});

const currencyFormatter = new Intl.NumberFormat(
  'en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  },
);

function customizeTooltip(args) {
  const valueText = currencyFormatter.format(args.originalValue);
  return {
    html: `${args.seriesName} | Total<div class="currency">${valueText}</div>`,
  };
}

export default App;
