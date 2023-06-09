import React, { useRef } from 'react';
import FileManager, {
  Permissions,
  Toolbar,
  ContextMenu,
  Item,
  FileSelectionItem,
  ItemView,
  Details,
  Column,
} from 'devextreme-react/file-manager';
import { fileItems } from './data.js';

const App = () => {
  const fileManagerRef = useRef(null);

  const newFileMenuOptions = {
    items: [
      {
        text: 'Create new file',
        icon: 'plus',
        items: [
          {
            text: 'Text Document',
            extension: '.txt',
          },
          {
            text: 'RTF Document',
            extension: '.rtf',
          },
          {
            text: 'Spreadsheet',
            extension: '.xls',
          },
        ],
      },
    ],
    onItemClick,
  };
  const changeCategoryMenuOptions = {
    items: [
      {
        text: 'Category',
        icon: 'tags',
        items: [
          {
            text: 'Work',
            category: 'Work',
          },
          {
            text: 'Important',
            category: 'Important',
          },
          {
            text: 'Home',
            category: 'Home',
          },
          {
            text: 'None',
            category: '',
          },
        ],
      },
    ],
    onItemClick,
  };

  const createFile = (fileExtension, directory = fileManager.currentDirectory) => {
    const newItem = {
      __KEY__: Date.now(),
      name: `New file${fileExtension}`,
      isDirectory: false,
      size: 0,
    };

    if (!directory.isDirectory) {
      return false;
    }

    let array = null;
    if (!directory.dataItem) {
      array = fileItems;
    } else {
      array = directory.dataItem.items;
      if (!array) {
        array = [];
        directory.dataItem.items = array;
      }
    }

    array.push(newItem);
    return true;
  };

  const updateCategory = (newCategory, directory, viewArea) => {
    let items = null;

    if (viewArea === 'navPane') {
      items = [directory];
    } else {
      items = fileManager.getSelectedItems();
    }

    items.forEach((item) => {
      if (item.dataItem) {
        item.dataItem.category = newCategory;
      }
    });

    return items.length > 0;
  };

  const onItemClick = ({ itemData, viewArea, fileSystemItem }) => {
    let updated = false;

    if (itemData.extension) {
      updated = createFile(itemData.extension, fileSystemItem);
    } else if (itemData.category !== undefined) {
      updated = updateCategory(itemData.category, fileSystemItem, viewArea);
    }

    if (updated) {
      fileManager.refresh();
    }
  };

  return (
    <FileManager
      ref={fileManagerRef}
      fileSystemProvider={fileItems}
      onContextMenuItemClick={onItemClick}
      height={450}
    >
      <Permissions create delete rename download>
      </Permissions>
      <ItemView showParentFolder={false}>
        <Details>
          <Column dataField="thumbnail"></Column>
          <Column dataField="name"></Column>
          <Column dataField="category" caption="Category" width="95"></Column>
          <Column dataField="dateModified"></Column>
          <Column dataField="size"></Column>
        </Details>
      </ItemView>
      <Toolbar>
        <Item name="showNavPane" visible="true" />
        <Item name="separator" />
        <Item name="create" />
        <Item widget="dxMenu" location="before" options={newFileMenuOptions} />
        <Item name="refresh" />
        <Item name="separator" location="after" />
        <Item name="switchView" />

        <FileSelectionItem name="rename" />
        <FileSelectionItem name="separator" />
        <FileSelectionItem name="delete" />
        <FileSelectionItem name="separator" />
        <FileSelectionItem widget="dxMenu" location="before" options={changeCategoryMenuOptions} />
        <FileSelectionItem name="refresh" />
        <FileSelectionItem name="clearSelection" />
      </Toolbar>
      <ContextMenu>
        <Item name="create" />
        <Item text="Create new file" icon="plus">
          <Item text="Text Document" extension=".txt" />
          <Item text="RTF Document" extension=".rtf" />
          <Item text="Spreadsheet" extension=".xls" />
        </Item>
        <Item name="rename" beginGroup="true" />
        <Item name="delete" />
        <Item text="Category" icon="tags" beginGroup="true">
          <Item text="Work" category="Work" />
          <Item text="Important" category="Important" />
          <Item text="Home" category="Home" />
          <Item text="None" category="" />
        </Item>
        <Item name="refresh" />
      </ContextMenu>
    </FileManager>
  );
};

export default App;