$(() => {
  const updateOutput = (value, valueType) => {
    const formattedValue = valueType === 'html' ? format(value) : value;
    $('.value-content').text(formattedValue);
  };

  const editorInstance = $('.html-editor').dxHtmlEditor({
    height: 300,
    value: markup,
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
    onValueChanged({ component, value }) {
      updateOutput(value, component.option('valueType'));
    },
  }).dxHtmlEditor('instance');

  $('.value-types').dxButtonGroup({
    items: [{ text: 'Html' }, { text: 'Markdown' }],
    selectedItemKeys: ['Html'],
    onSelectionChanged(e) {
      const valueType = e.addedItems[0].text.toLowerCase();
      editorInstance.option({ valueType });
      const value = editorInstance.option('value');
      updateOutput(value, valueType);
    },
  });

  updateOutput(markup, 'html');
});

function format(markup) {
  return prettier.format(markup, {
    parser: 'html',
    plugins: prettierPlugins,
  });
}
