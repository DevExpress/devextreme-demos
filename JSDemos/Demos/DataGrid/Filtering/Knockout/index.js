window.onload = function () {
  const applyFilterTypes = [{
    key: 'auto',
    name: 'Immediately',
  }, {
    key: 'onClick',
    name: 'On Button Click',
  }];

  function getOrderDay(rowData) {
    return (new Date(rowData.OrderDate)).getDay();
  }

  const filterRowVisible = ko.observable(true);
  const filterType = ko.observable('auto');
  const headerFilterVisible = ko.observable(true);
  let dataGrid;

  const viewModel = {
    gridOptions: {
      onInitialized(e) {
        dataGrid = e.component;
      },
      dataSource: orders,
      showBorders: true,
      filterRow: {
        visible: filterRowVisible,
        applyFilter: filterType,
      },
      headerFilter: {
        visible: headerFilterVisible,
      },
      searchPanel: {
        visible: true,
        width: 240,
        placeholder: 'Search...',
      },
      columns: [{
        dataField: 'OrderNumber',
        width: 140,
        caption: 'Invoice Number',
        headerFilter: {
          groupInterval: 10000,
        },
      }, {
        dataField: 'OrderDate',
        alignment: 'right',
        dataType: 'date',
        width: 120,
        calculateFilterExpression(value, selectedFilterOperations, target) {
          if (target === 'headerFilter' && value === 'weekends') {
            return [[getOrderDay, '=', 0], 'or', [getOrderDay, '=', 6]];
          }
          return this.defaultCalculateFilterExpression(...arguments);
        },
        headerFilter: {
          dataSource(data) {
            data.dataSource.postProcess = function (results) {
              results.push({
                text: 'Weekends',
                value: 'weekends',
              });
              return results;
            };
          },
        },
      }, {
        dataField: 'DeliveryDate',
        alignment: 'right',
        dataType: 'datetime',
        width: 180,
        format: 'M/d/yyyy, HH:mm',
      }, {
        dataField: 'SaleAmount',
        alignment: 'right',
        format: 'currency',
        headerFilter: {
          dataSource: [{
            text: 'Less than $3000',
            value: ['SaleAmount', '<', 3000],
          }, {

            text: '$3000 - $5000',
            value: [['SaleAmount', '>=', 3000], ['SaleAmount', '<', 5000]],
          }, {

            text: '$5000 - $10000',
            value: [['SaleAmount', '>=', 5000], ['SaleAmount', '<', 10000]],
          }, {

            text: '$10000 - $20000',
            value: [['SaleAmount', '>=', 10000], ['SaleAmount', '<', 20000]],
          }, {

            text: 'Greater than $20000',
            value: ['SaleAmount', '>=', 20000],
          }],
        },
      }, 'Employee', {
        caption: 'City',
        dataField: 'CustomerStoreCity',
        headerFilter: {
          allowSearch: true,
        },
      }],
    },
    filterTypesOptions: {
      items: applyFilterTypes,
      valueExpr: 'key',
      displayExpr: 'name',
      value: filterType,
      disabled: ko.computed(() => !filterRowVisible()),
    },
    filterVisibleOptions: {
      text: 'Filter Row',
      value: filterRowVisible,
      onValueChanged() {
        dataGrid.clearFilter();
      },
    },
    headerFilterOptions: {
      text: 'Header Filter',
      value: headerFilterVisible,
      onValueChanged() {
        dataGrid.clearFilter();
      },
    },
  };

  ko.applyBindings(viewModel, document.getElementById('grid'));
};
