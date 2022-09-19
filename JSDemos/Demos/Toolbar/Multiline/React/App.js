import React from 'react';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import { Button } from 'devextreme-react/button';
import { ButtonGroup } from 'devextreme-react/button-group';
import RadioGroup from 'devextreme-react/radio-group';
import Resizable from 'devextreme-react/resizable';
import CheckBox from 'devextreme-react/check-box';
import DateBox from 'devextreme-react/date-box';
import DropDownButton from 'devextreme-react/drop-down-button';
import SelectBox from 'devextreme-react/select-box';
import notify from 'devextreme/ui/notify';
import 'devextreme/ui/select_box';
import {
  fontSizes,
  lineHeights,
  fonts,
  fontStyles,
  textAligns,
  listTypes,
} from './data.js';

function getTextAlignItems(isExtended) {
  return !isExtended
    ? textAligns.map(({ icon, alignment, hint }) => ({ icon, alignment, hint }))
    : textAligns;
}

const toolbarLineModes = ['Multiline mode', 'Singleline mode'];

const attachButtonOptions = {
  icon: 'attach',
  text: 'Attach',
  onClick: () => {
    notify('Attach button has been clicked!');
  },
};

const addButtonOptions = {
  icon: 'add',
  text: 'Add',
  onClick: () => {
    notify('Add button has been clicked!');
  },
};

const removeButtonOptions = {
  icon: 'trash',
  text: 'Remove',
  onClick: () => {
    notify('Remove button has been clicked!');
  },
};

const aboutButtonOptions = {
  icon: 'help',
  text: 'About',
  onClick: () => {
    notify('About button has been clicked!');
  },
};

function App() {
  const [lineHeight, setLineHeight] = React.useState(lineHeights[1].lineHeight);
  const [fontSize, setFontSize] = React.useState(fontSizes[2].size);
  const [textAlign, setTextAlign] = React.useState([textAligns[0].alignment]);
  const [toolbarLineMode, setToolbarLineMode] = React.useState(
    toolbarLineModes[0],
  );
  const [multiline, setMultiline] = React.useState(true);
  const [checkBoxValue, setCheckBoxValue] = React.useState(false);

  const onCheckBoxChange = React.useCallback(({ value }) => {
    setCheckBoxValue(value);
    notify('Checkbox value has been changed!');
  }, []);

  const onLineHeightChange = React.useCallback(
    (e) => setLineHeight(e.item.lineHeight),
    [],
  );

  const onFontSizeChange = React.useCallback(
    (e) => setFontSize(e.item.size),
    [],
  );

  const onTextAlignChange = React.useCallback((e) => {
    setTextAlign([e.itemData.alignment]);
  }, []);

  const onToolbarLineModeChange = React.useCallback(({ value }) => {
    setMultiline(value === toolbarLineModes[0]);
    setToolbarLineMode(value);
  }, []);

  const renderFontSize = React.useCallback(
    (itemData) => (
      <div style={{ fontSize: `${itemData.size}px` }}>{itemData.text}</div>
    ),
    [],
  );

  const renderTextAlign = React.useCallback(() => {
    const isMenu = false;

    return (
      <ButtonGroup
        items={getTextAlignItems(isMenu)}
        keyExpr="alignment"
        stylingMode="outlined"
        selectedItemKeys={textAlign}
        onItemClick={onTextAlignChange}
      ></ButtonGroup>
    );
  }, [textAlign]);

  const renderTextAlignMenu = React.useCallback(() => {
    const isMenu = true;

    return (
      <ButtonGroup
        items={getTextAlignItems(isMenu)}
        displayExpr="text"
        keyExpr="alignment"
        stylingMode="outlined"
        selectedItemKeys={textAlign}
        onItemClick={onTextAlignChange}
      ></ButtonGroup>
    );
  }, [textAlign]);

  const renderMenuSeparator = React.useCallback(() => <div className="toolbar-menu-separator"></div>, []);

  return (
    <React.Fragment>
      <div className='widget-container'>
        <Resizable
          className="resizable-container"
          minWidth={500}
          minHeight={150}
          maxHeight={370}
          handles="right"
          area=".widget-container"
        >
          <Toolbar multiline={multiline}>
            <Item location="before">
              <Button
                icon="undo"
                onClick={() => {
                  notify('Undo button has been clicked!');
                }}
              ></Button>
            </Item>

            <Item location="before">
              <Button
                icon="redo"
                onClick={() => {
                  notify('Redo button has been clicked!');
                }}
              ></Button>
            </Item>

            <Item
              cssClass="toolbar-separator-container"
              location="before"
              locateInMenu="auto"
              menuItemRender={renderMenuSeparator}
            >
              <div className="toolbar-separator"></div>
            </Item>

            <Item location="before" locateInMenu="auto">
              <DropDownButton
                width="100%"
                displayExpr="text"
                keyExpr="size"
                useSelectMode={true}
                items={fontSizes}
                selectedItemKey={fontSize}
                itemRender={renderFontSize}
                onSelectionChanged={onFontSizeChange}
              ></DropDownButton>
            </Item>

            <Item location="before" locateInMenu="auto">
              <DropDownButton
                width="100%"
                icon="indent"
                displayExpr="text"
                keyExpr="lineHeight"
                useSelectMode={true}
                items={lineHeights}
                selectedItemKey={lineHeight}
                onSelectionChanged={onLineHeightChange}
              ></DropDownButton>
            </Item>

            <Item location="before" locateInMenu="auto">
              <SelectBox
                placeholder="Font"
                displayExpr="text"
                dataSource={fonts}
              ></SelectBox>
            </Item>

            <Item
              cssClass="toolbar-separator-container"
              location="before"
              locateInMenu="auto"
              menuItemRender={renderMenuSeparator}
            >
              <div className="toolbar-separator"></div>
            </Item>

            <Item location="before">
              <ButtonGroup
                displayExpr="text"
                keyExpr="style"
                stylingMode="outlined"
                selectionMode="multiple"
                items={fontStyles}
                onItemClick={(e) => notify(`The "${e.itemData.hint}" button was clicked`)
                }
              ></ButtonGroup>
            </Item>

            <Item location="before">
              <div className="toolbar-separator"></div>
            </Item>

            <Item
              cssClass="dx-toolbar-hidden-button-group"
              location="before"
              locateInMenu="auto"
              render={renderTextAlign}
              menuItemRender={renderTextAlignMenu}
            ></Item>

            <Item location="before" displayExpr="text">
              <ButtonGroup
                keyExpr="alignment"
                stylingMode="outlined"
                items={listTypes}
                onItemClick={(e) => notify(`The "${e.itemData.hint}" button was clicked`)
                }
              ></ButtonGroup>
            </Item>

            <Item
              cssClass="toolbar-separator-container"
              location="before"
              locateInMenu="auto"
              menuItemRender={renderMenuSeparator}
            >
              <div className="toolbar-separator"></div>
            </Item>

            <Item location="before" locateInMenu="auto">
              <DateBox
                width={200}
                type="date"
                value={new Date(2022, 9, 7)}
              ></DateBox>
            </Item>

            <Item
              cssClass="toolbar-separator-container"
              location="before"
              locateInMenu="auto"
              menuItemRender={renderMenuSeparator}
            >
              <div className="toolbar-separator"></div>
            </Item>

            <Item location="before" locateInMenu="auto">
              <CheckBox
                value={checkBoxValue}
                text="Checkbox text"
                onValueChanged={onCheckBoxChange}
              ></CheckBox>
            </Item>

            <Item
              location="after"
              showText="inMenu"
              widget="dxButton"
              options={attachButtonOptions}
            ></Item>

            <Item
              location="after"
              locateInMenu="auto"
              showText="inMenu"
              widget="dxButton"
              options={addButtonOptions}
            ></Item>

            <Item
              location="after"
              locateInMenu="auto"
              showText="inMenu"
              widget="dxButton"
              options={removeButtonOptions}
            ></Item>

            <Item
              locateInMenu="always"
              showText="inMenu"
              widget="dxButton"
              options={aboutButtonOptions}
            ></Item>
          </Toolbar>
        </Resizable>
      </div>

      <div className="options-container">
        <div className="caption">Options</div>

        <RadioGroup
          items={toolbarLineModes}
          value={toolbarLineMode}
          layout="horizontal"
          onValueChanged={onToolbarLineModeChange}
        ></RadioGroup>
      </div>
    </React.Fragment>
  );
}

export default App;
