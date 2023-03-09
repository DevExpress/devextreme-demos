$(() => {
  $('#show-scrollable-popup').dxButton({
    text: 'Show Popup',
    width: 300,
    type: 'default',
    onClick() {
      popupWithScrollableContainer.show();
    },
  });

  $('#show-popup-with-scrollview').dxButton({
    text: 'Show Popup',
    width: 300,
    onClick() {
      popupWithScrollView.show();
    },
  });

  const popupWithScrollableContainer = $('#scrollable-popup')
    .dxPopup({
      width: 500,
      height: 400,
      visible: false,
      showTitle: true,
      hideOnOutsideClick: true,
      toolbarItems: [
        {
          widget: 'dxButton',
          toolbar: 'bottom',
          location: 'center',
          options: {
            width: 220,
            text: 'Print',
            type: 'default',
            onClick() {
              popupWithScrollableContainer.hide();
            },
          },
        },
      ],
    })
    .dxPopup('instance');

  const popupWithScrollView = $('#popup-with-scrollview')
    .dxPopup({
      width: 500,
      height: 400,
      visible: false,
      showTitle: true,
      hideOnOutsideClick: true,
      toolbarItems: [
        {
          widget: 'dxButton',
          toolbar: 'bottom',
          location: 'center',
          options: {
            width: 220,
            text: 'Print',
            type: 'default',
            onClick() {
              popupWithScrollView.hide();
            },
          },
        },
      ],
      contentTemplate() {
        const scrollView = $('<div />');

        scrollView.append(
          $('<img />', {
            src:
              'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/Popup-Scrolling-Image.jpg',
            class: 'center',
          }),
        );
        scrollView.append($('<div id="textBlock" />').html(longText));

        scrollView.dxScrollView({
          width: '100%',
          height: '100%',
        });

        return scrollView;
      },
    })
    .dxPopup('instance');
});
