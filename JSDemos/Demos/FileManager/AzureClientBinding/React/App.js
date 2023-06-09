import React, { useState, useEffect } from 'react';
import FileManager, { Permissions } from 'devextreme-react/file-manager';
import CustomFileSystemProvider from 'devextreme/file_management/custom_provider';
import { LoadPanel } from 'devextreme-react/load-panel';
import { AzureGateway, AzureFileSystem } from './azure.file.system.js';

const endpointUrl = 'https://js.devexpress.com/Demos/Mvc/api/file-manager-azure-access';
const allowedFileExtensions = [];
const loadPanelPosition = { of: '#file-manager' };

function App() {
  const [requests, setRequests] = useState([]);
  const [loadPanelVisible, setLoadPanelVisible] = useState(true);
  const [wrapperClassName, setWrapperClassName] = useState('');

  useEffect(() => {
    const gateway = new AzureGateway(endpointUrl, onRequestExecuted);
    const azure = new AzureFileSystem(gateway);

    const fileSystemProvider = new CustomFileSystemProvider({
      getItems,
      createDirectory,
      renameItem,
      deleteItem,
      copyItem,
      moveItem,
      uploadFileChunk,
      downloadItems,
    });

    checkAzureStatus();

    function checkAzureStatus() {
      fetch('https://js.devexpress.com/Demos/Mvc/api/file-manager-azure-status?widgetType=fileManager')
        .then((response) => response.json())
        .then((result) => {
          const className = result.active ? 'show-widget' : 'show-message';
          setWrapperClassName(className);
          setLoadPanelVisible(false);
        });
    }

    function onRequestExecuted({ method, urlPath, queryString }) {
      const request = { method, urlPath, queryString };
      setRequests([request, ...requests]);
    }

    function getItems(parentDirectory) {
      return azure.getItems(parentDirectory.path);
    }

    function createDirectory(parentDirectory, name) {
      return azure.createDirectory(parentDirectory.path, name);
    }

    function renameItem(item, name) {
      return item.isDirectory
        ? azure.renameDirectory(item.path, name)
        : azure.renameFile(item.path, name);
    }

    function deleteItem(item) {
      return item.isDirectory ? azure.deleteDirectory(item.path) : azure.deleteFile(item.path);
    }

    function copyItem(item, destinationDirectory) {
      const destinationPath = destinationDirectory.path ? `${destinationDirectory.path}/${item.name}` : item.name;
      return item.isDirectory
        ? azure.copyDirectory(item.path, destinationPath)
        : azure.copyFile(item.path, destinationPath);
    }

    function moveItem(item, destinationDirectory) {
      const destinationPath = destinationDirectory.path ? `${destinationDirectory.path}/${item.name}` : item.name;
      return item.isDirectory
        ? azure.moveDirectory(item.path, destinationPath)
        : azure.moveFile(item.path, destinationPath);
    }

    function uploadFileChunk(fileData, uploadInfo, destinationDirectory) {
      let promise = null;

      if (uploadInfo.chunkIndex === 0) {
        const filePath = destinationDirectory.path ? `${destinationDirectory.path}/${fileData.name}` : fileData.name;
        promise = gateway.getUploadAccessUrl(filePath).then((accessUrls) => {
          uploadInfo.customData.accessUrl = accessUrls.url1;
        });
      } else {
        promise = Promise.resolve();
      }

      promise = promise.then(() => gateway.putBlock(
        uploadInfo.customData.accessUrl,
        uploadInfo.chunkIndex,
        uploadInfo.chunkBlob,
      ));

      if (uploadInfo.chunkIndex === uploadInfo.chunkCount - 1) {
        promise = promise.then(() => gateway.putBlockList(
          uploadInfo.customData.accessUrl,
          uploadInfo.chunkCount,
        ));
      }

      return promise;
    }

    function downloadItems(items) {
      azure.downloadFile(items[0].path);
    }
  }, []);

  return (
    <div id="wrapper" className={wrapperClassName}>
      <LoadPanel visible={loadPanelVisible} position={loadPanelPosition} />
      <div id="widget-area">
        <FileManager id="file-manager" fileSystemProvider={fileSystemProvider} allowedFileExtensions={allowedFileExtensions}>
          <Permissions
            download={true}>
          </Permissions>
          {/* uncomment the code below to enable file/directory management */}
          {/* <Permissions
            create={true}
            copy={true}
            move={true}
            delete={true}
            rename={true}
            upload={true}
            download={true}>
          </Permissions> */}
        </FileManager>
        <div id="request-panel">
          {
            requests.map((r, i) => <div key={i} className="request-info">
              <div className="parameter-info">
                <div className="parameter-name">Method:</div>
                <div className="parameter-value dx-theme-accent-as-text-color">{r.method}</div>
              </div>
              <div className="parameter-info">
                <div className="parameter-name">Url path:</div>
                <div className="parameter-value dx-theme-accent-as-text-color">{r.urlPath}</div>
              </div>
              <div className="parameter-info">
                <div className="parameter-name">Query string:</div>
                <div className="parameter-value dx-theme-accent-as-text-color">{r.queryString}</div>
              </div>
              <br />
            </div>)
          }
        </div>
      </div>
      <div id="message-box">
        To run the demo locally, specify your Azure storage account name,
        access key and container name in the web.config file.
        Refer to the <a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/AzureClientBinding/React/Light/"
          target="_blank" rel="noopener noreferrer">
          https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/AzureClientBinding/React/Light/</a>
        to see the demo online.
      </div>
    </div>
  );
}

export default App;