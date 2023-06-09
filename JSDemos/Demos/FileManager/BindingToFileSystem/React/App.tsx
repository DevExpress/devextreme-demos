import React from 'react';

import FileManager, { Permissions } from 'devextreme-react/file-manager';
import RemoteFileSystemProvider from 'devextreme/file_management/remote_provider';

const remoteProvider = new RemoteFileSystemProvider({
  endpointUrl: 'https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-scripts',
});

const allowedFileExtensions = ['.js', '.json', '.css'];

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'FileManager' cannot be used as a JSX component.
      <FileManager
        fileSystemProvider={remoteProvider}
        allowedFileExtensions={allowedFileExtensions}>
        {/* uncomment the code below to enable file/directory management */}
        // @ts-expect-error TS(2786): 'Permissions' cannot be used as a JSX component.
        <Permissions
          // create={true}
          // copy={true}
          // move={true}
          // delete={true}
          // rename={true}
          // upload={true}
          // @ts-expect-error TS(2322): Type '{ children: never[]; download: boolean; }' i... Remove this comment to see the full error message
          download={true}>
        </Permissions>
      </FileManager>
    );
  }
}

export default App;
