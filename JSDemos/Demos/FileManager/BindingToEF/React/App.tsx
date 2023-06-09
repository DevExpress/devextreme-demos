import React from 'react';

import FileManager, {
  Permissions, ItemView, Details, Column,
} from 'devextreme-react/file-manager';
import RemoteFileSystemProvider from 'devextreme/file_management/remote_provider';

const remoteProvider = new RemoteFileSystemProvider({
  endpointUrl: 'https://js.devexpress.com/Demos/Mvc/api/file-manager-db',
});

const allowedFileExtensions = [];

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      currentPath: 'Documents/Reports',
    };

    this.onCurrentDirectoryChanged = this.onCurrentDirectoryChanged.bind(this);
  }

  onCurrentDirectoryChanged(e) {
    this.setState({
      currentPath: e.component.option('currentPath'),
    });
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'FileManager' cannot be used as a JSX component.
      <FileManager
        currentPath={this.state.currentPath}
        fileSystemProvider={remoteProvider}
        allowedFileExtensions={allowedFileExtensions}
        height={550}
        onCurrentDirectoryChanged={this.onCurrentDirectoryChanged}>
        // @ts-expect-error TS(2786): 'Permissions' cannot be used as a JSX component.
        <Permissions
          // @ts-expect-error TS(2322): Type '{ children: never[]; create: boolean; copy: ... Remove this comment to see the full error message
          create={true}
          copy={true}
          move={true}
          delete={true}
          rename={true}>
        </Permissions>
        // @ts-expect-error TS(2786): 'ItemView' cannot be used as a JSX component.
        <ItemView>
          // @ts-expect-error TS(2786): 'Details' cannot be used as a JSX component.
          <Details>
            // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
            <Column dataField="thumbnail"></Column>
            // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
            <Column dataField="name"></Column>
            // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
            <Column dataField="dateModified" caption="Modified"></Column>
            // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
            <Column dataField="created" caption="Created" dataType="date"></Column>
            // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
            <Column dataField="modifiedBy" caption="Modified By" visibleIndex="2"></Column>
          </Details>
        </ItemView>
      </FileManager>
    );
  }
}

export default App;
