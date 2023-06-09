import React from 'react';

import FileManager, { Permissions } from 'devextreme-react/file-manager';

import { fileItems } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'FileManager' cannot be used as a JSX component.
      <FileManager
        height='450'
        fileSystemProvider={fileItems}>
        // @ts-expect-error TS(2786): 'Permissions' cannot be used as a JSX component.
        <Permissions
          // @ts-expect-error TS(2322): Type '{ children: never[]; create: boolean; copy: ... Remove this comment to see the full error message
          create={true}
          copy={true}
          move={true}
          delete={true}
          rename={true}
          upload={true}
          download={true}>
        </Permissions>
      </FileManager>
    );
  }
}

export default App;
