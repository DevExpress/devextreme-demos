import React from 'react';

import FileManager, {
  Permissions, Toolbar, ContextMenu, Item, FileSelectionItem, ItemView, Details, Column,
} from 'devextreme-react/file-manager';

import { fileItems } from './data.js';

class App extends React.Component {
  changeCategoryMenuOptions: any;

  fileManagerRef: any;

  newFileMenuOptions: any;

  constructor(props) {
    super(props);

    this.fileManagerRef = React.createRef();

    this.newFileMenuOptions = {
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
      onItemClick: this.onItemClick.bind(this),
    };
    this.changeCategoryMenuOptions = {
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
      onItemClick: this.onItemClick.bind(this),
    };

    this.onItemClick = this.onItemClick.bind(this);
    this.createFile = this.createFile.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'FileManager' cannot be used as a JSX component.
      <FileManager
        ref={this.fileManagerRef}
        fileSystemProvider={fileItems}
        // @ts-expect-error TS(2322): Type '({ itemData, viewArea, fileSystemItem }: { i... Remove this comment to see the full error message
        onContextMenuItemClick={this.onItemClick}
        height={450}>
        // @ts-expect-error TS(2786): 'Permissions' cannot be used as a JSX component.
        <Permissions
          // @ts-expect-error TS(2322): Type '{ children: never[]; create: boolean; delete... Remove this comment to see the full error message
          create={true}
          delete={true}
          rename={true}
          download={true}>
        </Permissions>
        // @ts-expect-error TS(2786): 'ItemView' cannot be used as a JSX component.
        <ItemView showParentFolder={false}>
          // @ts-expect-error TS(2786): 'Details' cannot be used as a JSX component.
          <Details>
            // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
            <Column dataField="thumbnail"></Column>
            // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
            <Column dataField="name"></Column>
            // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
            <Column dataField="category" caption="Category" width="95"></Column>
            // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
            <Column dataField="dateModified"></Column>
            // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
            <Column dataField="size"></Column>
          </Details>
        </ItemView>
        // @ts-expect-error TS(2786): 'Toolbar' cannot be used as a JSX component.
        <Toolbar>
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item name="showNavPane" visible="true" />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item name="separator" />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item name="create" />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item widget="dxMenu" location="before" options={this.newFileMenuOptions} />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item name="refresh" />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item name="separator" location="after" />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item name="switchView" />

          // @ts-expect-error TS(2786): 'FileSelectionItem' cannot be used as a JSX compon... Remove this comment to see the full error message
          <FileSelectionItem name="rename" />
          // @ts-expect-error TS(2786): 'FileSelectionItem' cannot be used as a JSX compon... Remove this comment to see the full error message
          <FileSelectionItem name="separator" />
          // @ts-expect-error TS(2786): 'FileSelectionItem' cannot be used as a JSX compon... Remove this comment to see the full error message
          <FileSelectionItem name="delete" />
          // @ts-expect-error TS(2786): 'FileSelectionItem' cannot be used as a JSX compon... Remove this comment to see the full error message
          <FileSelectionItem name="separator" />
          // @ts-expect-error TS(2786): 'FileSelectionItem' cannot be used as a JSX compon... Remove this comment to see the full error message
          <FileSelectionItem widget="dxMenu" location="before" options={this.changeCategoryMenuOptions} />
          // @ts-expect-error TS(2786): 'FileSelectionItem' cannot be used as a JSX compon... Remove this comment to see the full error message
          <FileSelectionItem name="refresh" />
          // @ts-expect-error TS(2786): 'FileSelectionItem' cannot be used as a JSX compon... Remove this comment to see the full error message
          <FileSelectionItem name="clearSelection" />
        </Toolbar>
        // @ts-expect-error TS(2786): 'ContextMenu' cannot be used as a JSX component.
        <ContextMenu>
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item name="create" />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item text="Create new file" icon="plus">
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item text="Text Document" extension=".txt" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item text="RTF Document" extension=".rtf" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item text="Spreadsheet" extension=".xls" />
          </Item>
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item name="rename" beginGroup="true" />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item name="delete" />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item text="Category" icon="tags" beginGroup="true">
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item text="Work" category="Work" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item text="Important" category="Important" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item text="Home" category="Home" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item text="None" category="" />
          </Item>
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item name="refresh" />
        </ContextMenu>
      </FileManager>
    );
  }

  get fileManager() {
    return this.fileManagerRef.current.instance;
  }

  onItemClick({ itemData, viewArea, fileSystemItem }) {
    let updated = false;

    if (itemData.extension) {
      updated = this.createFile(itemData.extension, fileSystemItem);
    } else if (itemData.category !== undefined) {
      updated = this.updateCategory(itemData.category, fileSystemItem, viewArea);
    }

    if (updated) {
      this.fileManager.refresh();
    }
  }

  createFile(fileExtension, directory = this.fileManager.getCurrentDirectory()) {
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
  }

  updateCategory(newCategory, directory, viewArea) {
    let items = null;

    if (viewArea === 'navPane') {
      items = [directory];
    } else {
      items = this.fileManager.getSelectedItems();
    }

    items.forEach((item) => {
      if (item.dataItem) {
        item.dataItem.category = newCategory;
      }
    });

    return items.length > 0;
  }
}

export default App;
