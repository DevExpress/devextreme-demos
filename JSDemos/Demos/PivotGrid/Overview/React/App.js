import React, { useEffect, useRef } from 'react';
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

const App = () => {
  const pivotGridRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    pivotGridRef.current.bindChart(chartRef.current.instance, {
      dataFieldsDisplayMode: 'splitPanes',
      alternateDataFields: false,
    });
    setTimeout(() => {
      dataSource.expandHeaderItem('row', ['North America']);
      dataSource.expandHeaderItem('column', [2013]);
    });
  }, []);

  return (
    <>
      <Chart ref={chartRef}>
        <Size height={200} />
        <Tooltip enabled={true} customizeTooltip={customizeTooltip} />
        <CommonSeriesSettings type="bar" />
        <AdaptiveLayout width={450} />
      </Chart>

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
        ref={pivotGridRef}
      >
        <FieldChooser enabled={true} height={400} />
      </PivotGrid>
    </>
  );
};

export default App;