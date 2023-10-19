$(() => {
  const tab1 = $('#withText').dxTabs({
    width: 'auto',
    showNavButtons: false,
    dataSource: tabsText,
    selectedIndex: 0,
  }).dxTabs('instance');

  const tab2 = $('#withIconAndText').dxTabs({
    width: 'auto',
    showNavButtons: false,
    dataSource: tabsIconAndText,
    iconPosition: iconPositions[0],
    selectedIndex: 0,
  }).dxTabs('instance');

  const tab3 = $('#withIcon').dxTabs({
    width: 'auto',
    showNavButtons: false,
    dataSource: tabsIcon,
    selectedIndex: 0,
  }).dxTabs('instance');

  $('#orientation').dxSelectBox({
    showNavButtons: false,
    items: orientations,
    value: 'horizontal',
    inputAttr: { 'aria-label': 'Orientation' },
    onValueChanged(data) {
      const $widgetWrapper = $('.widget-wrapper');

      $widgetWrapper.removeClass();
      $widgetWrapper.addClass(`widget-wrapper widget-wrapper-${data.value}`);

      setTabsOption('orientation', data.value);
    },
  });

  $('#styling-mode').dxSelectBox({
    items: stylingModes,
    value: stylingModes[0],
    inputAttr: { 'aria-label': 'Styling Mode' },
    onValueChanged(data) {
      setTabsOption('stylingMode', data.value);
    },
  });

  $('#icon-position').dxSelectBox({
    items: iconPositions,
    inputAttr: { 'aria-label': 'Icon Position' },
    value: iconPositions[0],
    onValueChanged(data) {
      setTabsOption('iconPosition', data.value);
    },
  });

  $('#show-navigation-buttons').dxCheckBox({
    text: 'Show navigation buttons',
    inputAttr: { 'aria-label': 'Show Navigation Buttons' },
    value: false,
    onValueChanged(data) {
      setTabsOption('showNavButtons', data.value);
    },
  });

  $('#scroll-content').dxCheckBox({
    text: 'Scroll content',
    inputAttr: { 'aria-label': 'Scroll content' },
    value: false,
    onValueChanged(data) {
      setTabsOption('scrollByContent', data.value);
    },
  });

  $('#full-width').dxCheckBox({
    text: 'Full width',
    inputAttr: { 'aria-label': 'Full width' },
    value: false,
    onValueChanged(data) {
      setTabsOption('width', data.value ? '100%' : 'auto');
    },
  });

  function setTabsOption(option, value) {
    tab1.option(option, value);
    tab2.option(option, value);
    tab3.option(option, value);
  }
});
