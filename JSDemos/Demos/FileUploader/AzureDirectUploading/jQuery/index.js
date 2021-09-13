$(() => {
  const loadPanel = $('#load-panel').dxLoadPanel({
    position: { of: '#file-uploader' },
  }).dxLoadPanel('instance');

  $.ajax({
    url: 'https://js.devexpress.com/Demos/Mvc/api/file-manager-azure-status?widgetType=fileUploader',
    success(result) {
      const className = result.active ? 'show-widget' : 'show-message';
      $('#wrapper').addClass(className);
      loadPanel.hide();
    },
  });

  const endpointUrl = 'https://js.devexpress.com/Demos/Mvc/api/file-uploader-azure-access';
  gateway = new AzureGateway(endpointUrl, onRequestExecuted);

  $('#file-uploader').dxFileUploader({
    chunkSize: 200000,
    maxFileSize: 1048576,
    uploadChunk,
  });
});

function uploadChunk(file, uploadInfo) {
  let deferred = null;

  if (uploadInfo.chunkIndex === 0) {
    deferred = gateway.getUploadAccessUrl(file.name).done((accessUrl) => {
      uploadInfo.customData.accessUrl = accessUrl;
    });
  } else {
    deferred = $.Deferred().resolve().promise();
  }

  deferred = deferred.then(() => gateway.putBlock(uploadInfo.customData.accessUrl, uploadInfo.chunkIndex, uploadInfo.chunkBlob));

  if (uploadInfo.chunkIndex === uploadInfo.chunkCount - 1) {
    deferred = deferred.then(() => gateway.putBlockList(uploadInfo.customData.accessUrl, uploadInfo.chunkCount));
  }

  return deferred.promise();
}

function onRequestExecuted(e) {
  $('<div>').addClass('request-info').append(
    createParameterInfoDiv('Method:', e.method),
    createParameterInfoDiv('Url path:', e.urlPath),
    createParameterInfoDiv('Query string:', e.queryString),
    $('<br>'),
  )
    .prependTo('#request-panel');
}

function createParameterInfoDiv(name, value) {
  return $('<div>').addClass('parameter-info').append(
    $('<div>').addClass('parameter-name').text(name),
    $('<div>').addClass('parameter-value dx-theme-accent-as-text-color').text(value).attr('title', value),
  );
}

let gateway = null;
