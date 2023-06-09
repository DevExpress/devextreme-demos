import React from 'react';

import FileManager, { Permissions } from 'devextreme-react/file-manager';
import CustomFileSystemProvider from 'devextreme/file_management/custom_provider';
import { LoadPanel } from 'devextreme-react/load-panel';
import { AzureGateway, AzureFileSystem } from './azure.file.system.js'; // eslint-disable-line import/no-unresolved

const endpointUrl = 'https://js.devexpress.com/Demos/Mvc/api/file-manager-azure-access';
const allowedFileExtensions = [];
const loadPanelPosition = { of: '#file-manager' };

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      requests: [],
      loadPanelVisible: true,
      wrapperClassName: '',
    };
    this.onRequestExecuted = this.onRequestExecuted.bind(this);

    gateway = new AzureGateway(endpointUrl, this.onRequestExecuted);
    azure = new AzureFileSystem(gateway);

    this.fileSystemProvider = new CustomFileSystemProvider({
      getItems,
      createDirectory,
      renameItem,
      deleteItem,
      copyItem,
      moveItem,
      uploadFileChunk,
      downloadItems,
    });

    this.checkAzureStatus();
  }

  render() {
    return (
      <div id="wrapper" className={this.state.wrapperClassName}>
        <LoadPanel visible={this.state.loadPanelVisible} position={loadPanelPosition} />
        <div id="widget-area">
          <FileManager id="file-manager" fileSystemProvider={this.fileSystemProvider} allowedFileExtensions={allowedFileExtensions}>
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
              this.state.requests.map((r: { method: any; urlPath: any; queryString: any; }, i) => <div key={i} className="request-info">
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

  checkAzureStatus() {
    fetch('https://js.devexpress.com/Demos/Mvc/api/file-manager-azure-status?widgetType=fileManager')
      .then((response) => response.json())
      .then((result) => {
        const className = result.active ? 'show-widget' : 'show-message';
        this.setState({
          wrapperClassName: className,
          loadPanelVisible: false,
        });
      });
  }

  onRequestExecuted({ method, urlPath, queryString }) {
    const request = { method, urlPath, queryString };
    this.setState({ requests: [request, ...this.state.requests] });
  }
}

function getItems(parentDirectory: { path: any; }) {
  return azure.getItems(parentDirectory.path);
}

function createDirectory(parentDirectory: { path: any; }, name) {
  return azure.createDirectory(parentDirectory.path, name);
}

function renameItem(item: { isDirectory: any; path: any; }, name) {
  return item.isDirectory
    ? azure.renameDirectory(item.path, name)
    : azure.renameFile(item.path, name);
}

function deleteItem(item: { isDirectory: any; path: any; }) {
  return item.isDirectory ? azure.deleteDirectory(item.path) : azure.deleteFile(item.path);
}

function copyItem(item: { name: any; isDirectory: any; path: any; }, destinationDirectory: { path: any; }) {
  const destinationPath = destinationDirectory.path ? `${destinationDirectory.path}/${item.name}` : item.name;
  return item.isDirectory
    ? azure.copyDirectory(item.path, destinationPath)
    : azure.copyFile(item.path, destinationPath);
}

function moveItem(item: { name: any; isDirectory: any; path: any; }, destinationDirectory: { path: any; }) {
  const destinationPath = destinationDirectory.path ? `${destinationDirectory.path}/${item.name}` : item.name;
  return item.isDirectory
    ? azure.moveDirectory(item.path, destinationPath)
    : azure.moveFile(item.path, destinationPath);
}

function uploadFileChunk(fileData: { name: any; }, uploadInfo: { chunkIndex: number; customData: { accessUrl: any; }; chunkBlob: any; chunkCount: number; }, destinationDirectory: { path: any; }) {
  let promise = null;

  if (uploadInfo.chunkIndex === 0) {
    const filePath = destinationDirectory.path ? `${destinationDirectory.path}/${fileData.name}` : fileData.name;
    // eslint-disable-next-line spellcheck/spell-checker
    promise = gateway.getUploadAccessUrl(filePath).then((accessUrls: { url1: any; }) => {
      // eslint-disable-next-line spellcheck/spell-checker
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

function downloadItems(items: { path: any; }[]) {
  azure.downloadFile(items[0].path);
}

let gateway = null;
let azure = null;

export default App;
