$(() => {
  const searchBox = $('#searchBox').dxSelectBox({
    dataSource: products,
    displayExpr: 'Name',
    valueExpr: 'ID',
    searchEnabled: true,
  }).dxSelectBox('instance');

  const productsDataSource = new DevExpress.data.DataSource({
    store: {
      data: simpleProducts,
      type: 'array',
      key: 'ID',
    },
  });

  $('#editBox').dxSelectBox({
    dataSource: productsDataSource,
    displayExpr: 'Name',
    valueExpr: 'ID',
    value: simpleProducts[0].ID,
    acceptCustomValue: true,
    onValueChanged(data) {
      const $result = $('.current-value');

      if (data.value !== null) {
        const selectedItem = data.component.option('selectedItem');
        $result.text(`${selectedItem.Name} (ID: ${selectedItem.ID})`);
      } else {
        $result.text('Not selected');
      }
    },
    onCustomItemCreating(data) {
      if (!data.text) {
        data.customItem = null;
        return;
      }

      const productIds = simpleProducts.map((item) => item.ID);
      const incrementedId = Math.max.apply(null, productIds) + 1;
      const newItem = {
        Name: data.text,
        ID: incrementedId,
      };
      data.customItem = productsDataSource.store().insert(newItem)
        .then(() => productsDataSource.load())
        .then(() => newItem)
        .catch((error) => {
          throw error;
        });
    },
  });

  $('#searchModeOption').dxSelectBox({
    items: ['contains', 'startswith'],
    value: 'contains',
    onValueChanged(e) {
      searchBox.option('searchMode', e.value);
    },
  });

  $('#searchExprOption').dxSelectBox({
    items: [{
      name: "'Name'",
      value: 'Name',
    }, {
      name: "['Name', 'Category']",
      value: ['Name', 'Category'],
    }],
    displayExpr: 'name',
    valueExpr: 'value',
    value: 'Name',
    onValueChanged(e) {
      searchBox.option('searchExpr', e.value);
    },
  });

  $('#searchTimeoutOption').dxNumberBox({
    min: 0,
    max: 5000,
    value: 200,
    showSpinButtons: true,
    step: 100,
    onValueChanged(e) {
      searchBox.option('searchTimeout', e.value);
    },
  });

  $('#minSearchLengthOption').dxNumberBox({
    min: 0,
    max: 5,
    value: 0,
    showSpinButtons: true,
    onValueChanged(e) {
      searchBox.option('minSearchLength', e.value);
    },
  });

  $('#showDataBeforeSearchOption').dxCheckBox({
    value: false,
    text: 'Show Data Before Search',
    onValueChanged(e) {
      searchBox.option('showDataBeforeSearch', e.value);
    },
  });
});
