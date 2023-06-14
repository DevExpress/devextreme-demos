import React, { useState } from 'react';
import FileManager, { Permissions, ItemView } from 'devextreme-react/file-manager';
import { fileItems } from './data.js';

const App = () => {
  const [itemViewMode, setItemViewMode] = useState('thumbnails');

  const onOptionChanged = (e) => {
    if (e.fullName === 'itemView.mode') {
      setItemViewMode(e.value);
    }
  };

  const customizeIcon = (fileSystemItem) => {
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
  };

  return (
    <FileManager
      fileSystemProvider={fileItems}
      customizeThumbnail={customizeIcon}
      height={450}
      onOptionChanged={onOptionChanged}>
      <ItemView
        mode={itemViewMode}>
      </ItemView>
      <Permissions
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
};

export default App;
