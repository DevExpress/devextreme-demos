window.onload = function () {
  const editorValueType = ko.observable('html');

  const viewModel = {
    valueContent: ko.observable(),
    htmlEditorOptions: {
      height: 300,
      valueType: editorValueType,
      toolbar: {
        items: [
          'undo', 'redo', 'separator',
          {
            name: 'size',
            acceptedValues: ['8pt', '10pt', '12pt', '14pt', '18pt', '24pt', '36pt'],
          },
          {
            name: 'font',
            acceptedValues: ['Arial', 'Courier New', 'Georgia', 'Impact', 'Lucida Console', 'Tahoma', 'Times New Roman', 'Verdana'],
          },
          'separator',
          'bold', 'italic', 'strike', 'underline', 'separator',
          'alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'separator',
          'color', 'background',
        ],
      },
      onValueChanged(e) {
        this.valueContent(e.value);
      },
    },
    buttonGroupOptions: {
      items: [{ text: 'Html' }, { text: 'Markdown' }],
      selectedItemKeys: ['Html'],
      onSelectionChanged(e) {
        editorValueType(e.addedItems[0].text.toLowerCase());
      },
    },
  };

  ko.applyBindings(viewModel, document.getElementById('demo'));
};
