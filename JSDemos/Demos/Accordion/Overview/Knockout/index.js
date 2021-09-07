window.onload = function () {
  const ViewModel = function () {
    const that = this;

    that.animationDuration = ko.observable(300);
    that.collapsible = ko.observable(false);
    that.multiple = ko.observable(false);
    that.selectedItems = ko.observableArray([accordionItems[0]]);

    that.accordionOptions = {
      dataSource: accordionItems,
      itemTemplate: 'customer',
      animationDuration: that.animationDuration,
      collapsible: that.collapsible,
      multiple: that.multiple,
      selectedItems: that.selectedItems,
    };

    that.tagBoxOptions = {
      dataSource: accordionItems,
      displayExpr: 'CompanyName',
      value: that.selectedItems,
      disabled: ko.computed(
        () => !that.multiple(),
      ),
    };
  };

  ko.applyBindings(new ViewModel(), document.getElementById('accordion'));
};
