window.onload = function () {
  const viewModel = {
    chart: null,
    chartOptions: {
      commonSeriesSettings: {
        type: 'bar',
      },
      tooltip: {
        enabled: true,
        format: 'currency',
        customizeTooltip(args) {
          return {
            html: `${args.seriesName} | Total<div class='currency'>${args.valueText}</div>`,
          };
        },
      },
      size: {
        height: 200,
      },
      adaptiveLayout: {
        width: 450,
      },
      onInitialized(e) {
        viewModel.chart = e.component;
      },
    },
    pivotGridOptions: {
      allowSortingBySummary: true,
      allowFiltering: true,
      showBorders: true,
      showColumnGrandTotals: false,
      showRowGrandTotals: false,
      showRowTotals: false,
      showColumnTotals: false,
      fieldChooser: {
        enabled: true,
        height: 400,
      },
      onInitialized(e) {
        e.component.bindChart(viewModel.chart, {
          dataFieldsDisplayMode: 'splitPanes',
          alternateDataFields: false,
        });
        expand(e.component.getDataSource());
      },
      dataSource: {
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
      },
    },
  };

  ko.applyBindings(viewModel, document.getElementById('pivotgrid-demo'));

  function expand(dataSource) {
    setTimeout(() => {
      dataSource.expandHeaderItem('row', ['North America']);
      dataSource.expandHeaderItem('column', [2013]);
    }, 0);
  }
};
