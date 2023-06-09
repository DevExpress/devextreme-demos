import React from 'react';

import FileManager, { Permissions, ItemView } from 'devextreme-react/file-manager';

import { fileItems } from './data.js';

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      itemViewMode: 'thumbnails',
    };

    this.onOptionChanged = this.onOptionChanged.bind(this);
  }

  onOptionChanged(e) {
    if (e.fullName === 'itemView.mode') {
      this.setState({
        itemViewMode: e.value,
      });
    }
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'FileManager' cannot be used as a JSX component.
      <FileManager
        fileSystemProvider={fileItems}
        customizeThumbnail={this.customizeIcon}
        height={450}
        onOptionChanged={this.onOptionChanged}>
        // @ts-expect-error TS(2786): 'ItemView' cannot be used as a JSX component.
        <ItemView
          // @ts-expect-error TS(2322): Type '{ children: never[]; mode: any; }' is not as... Remove this comment to see the full error message
          mode={this.state.itemViewMode}>
        </ItemView>
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

  customizeIcon(fileSystemItem) {
    if (fileSystemItem.isDirectory) {
      return '../../../../images/thumbnails/folder.svg';
    }

    const fileExtension = fileSystemItem.getFileExtension();
    switch (fileExtension) {
      case '.txt':
        return '../../../../images/thumbnails/doc-txt.svg';
      case '.rtf':
        return '../../../../images/thumbnails/doc-rtf.svg';
      case '.xml':
        return '../../../../images/thumbnails/doc-xml.svg';
      default:
        return '../../../../images/thumbnails/doc-txt.svg';
    }
  }
}

export default App;
