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
  colors,
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

const dropDownOptions = { width: 'auto' };
const priorities = ['Multiline mode', 'Singleline mode'];

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
  const colorPicker = React.useRef(null);

  const [lineHeight, setLineHeight] = React.useState(lineHeights[1].lineHeight);
  const [fontSize, setFontSize] = React.useState(fontSizes[2].size);
  const [textAlign, setTextAlign] = React.useState([textAligns[0].alignment]);
  const [priority, setPriority] = React.useState(priorities[0]);
  const [multiline, setMultiline] = React.useState(true);
  const [checkBoxValue, setCheckBox] = React.useState(false);

  const onCheckBoxChangedHandler = React.useCallback(
    ({ value }) => {
      setCheckBox(value);
      notify('Private option has been changed!');
    },
    [checkBoxValue, setCheckBox],
  );

  const onSelectionChangedHandler = React.useCallback(
    (e) => {
      setLineHeight(e.item.lineHeight);
    },
    [lineHeight, setLineHeight],
  );

  const onFontSizeChangedHandler = React.useCallback(
    (e) => setFontSize(e.item.size),
    [fontSize, setFontSize],
  );

  const onTextAlignChangedHandler = React.useCallback(
    (e) => setTextAlign([e.item.alignment]),
    [textAlign, setTextAlign],
  );

  const onChangeHandler = React.useCallback(({ value }) => {
    setMultiline(value === priorities[0]);
    setPriority(value);
  }, []);

  const onColorClick = React.useCallback((colorCode) => {
    const instance = colorPicker.current.instance;

    instance.element().getElementsByClassName('dx-icon-square')[0].style.color = colorCode.target.style.color;
    instance.close();
  });

  const renderColorPicker = React.useCallback(() => (
    <div className="custom-color-picker">
      {colors.map((colorCode, i) => (
        <i
          key={i}
          style={{ color: colorCode }}
          className={
            colorCode
              ? 'color dx-icon dx-icon-square'
              : 'color dx-icon dx-icon-square dx-theme-text-color'
          }
          onClick={onColorClick}
        ></i>
      ))}
    </div>
  ));

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
        onSelectionChanged={onTextAlignChangedHandler}
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
        onSelectionChanged={onTextAlignChangedHandler}
      ></ButtonGroup>
    );
  }, [textAlign]);

  return (
    <React.Fragment>
      <Resizable
        className="resizable-container"
        minWidth={655}
        minHeight={150}
        maxHeight={370}
        handles="right"
      >
        <Toolbar multiline={multiline}>
          <Item location="before" locateInMenu="never">
            <Button
              icon="undo"
              onClick={() => {
                notify('Undo button has been clicked!');
              }}
            ></Button>
          </Item>

          <Item location="before" locateInMenu="never">
            <Button
              icon="redo"
              onClick={() => {
                notify('Redo button has been clicked!');
              }}
            ></Button>
          </Item>

          <Item location="before" locateInMenu="never">
            <div className="separator"></div>
          </Item>

          <Item location="before">
            <DropDownButton
              ref={colorPicker}
              icon="square"
              items={colors}
              dropDownOptions={dropDownOptions}
              dropDownContentRender={renderColorPicker}
            ></DropDownButton>
          </Item>

          <Item location="before">
            <DropDownButton
              displayExpr="text"
              keyExpr="size"
              useSelectMode={true}
              items={fontSizes}
              selectedItemKey={fontSize}
              itemRender={renderFontSize}
              onSelectionChanged={onFontSizeChangedHandler}
            ></DropDownButton>
          </Item>

          <Item location="before">
            <DropDownButton
              icon="indent"
              displayExpr="text"
              keyExpr="lineHeight"
              useSelectMode={true}
              items={lineHeights}
              selectedItemKey={lineHeight}
              onSelectionChanged={onSelectionChangedHandler}
            ></DropDownButton>
          </Item>

          <Item location="before" locateInMenu="never">
            <div className="separator"></div>
          </Item>

          <Item location="before" locateInMenu="auto">
            <SelectBox
              placeholder="Font"
              displayExpr="text"
              dataSource={fonts}
            ></SelectBox>
          </Item>

          <Item
            location="before"
            locateInMenu="auto"
            template='<div class="separator"></div>'
            menuItemTemplate='<div class="menu-separator"></div>'
          ></Item>

          <Item location="before" locateInMenu="never">
            <ButtonGroup
              displayExpr="text"
              keyExpr="style"
              stylingMode="outlined"
              selectionMode="multiple"
              items={fontStyles}
              onItemClick={(e) => notify(`The "${e.itemData.hint}" button was clicked`)}
            ></ButtonGroup>
          </Item>

          <Item location="before" locateInMenu="never">
            <div className="separator"></div>
          </Item>

          <Item
            location="before"
            locateInMenu="auto"
            render={renderTextAlign}
            menuItemRender={renderTextAlignMenu}
          ></Item>

          <Item location="before" locateInMenu="never" displayExpr="text">
            <ButtonGroup
              keyExpr="alignment"
              stylingMode="outlined"
              items={listTypes}
              onItemClick={(e) => notify(`The "${e.itemData.hint}" button was clicked`)}
            ></ButtonGroup>
          </Item>

          <Item
            location="before"
            locateInMenu="auto"
            template='<div class="separator"></div>'
            menuItemTemplate='<div class="menu-separator"></div>'
          ></Item>

          <Item location="before" locateInMenu="auto">
            <DateBox
              width={200}
              type="date"
              value={new Date(2022, 9, 7)}
            ></DateBox>
          </Item>

          <Item
            location="before"
            locateInMenu="auto"
            template='<div class="separator"></div>'
            menuItemTemplate='<div class="menu-separator"></div>'
          ></Item>

          <Item location="before" locateInMenu="auto">
            <CheckBox
              value={checkBoxValue}
              text="Private"
              onValueChanged={onCheckBoxChangedHandler}
            ></CheckBox>
          </Item>

          <Item
            location="after"
            locateInMenu="never"
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
            location="after"
            locateInMenu="auto"
            showText="inMenu"
            widget="dxButton"
            options={aboutButtonOptions}
          ></Item>
        </Toolbar>
      </Resizable>

      <div className="options-container">
        <div className="caption">Options</div>

        <RadioGroup
          items={priorities}
          value={priority}
          layout="horizontal"
          onValueChanged={onChangeHandler}
        ></RadioGroup>
      </div>
    </React.Fragment>
  );
}

export default App;
