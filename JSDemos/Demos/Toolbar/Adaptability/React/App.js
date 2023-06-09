import React, { useState, useCallback } from 'react';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import { Button } from 'devextreme-react/button';
import { ButtonGroup } from 'devextreme-react/button-group';
import Resizable from 'devextreme-react/resizable';
import CheckBox from 'devextreme-react/check-box';
import DropDownButton from 'devextreme-react/drop-down-button';
import SelectBox from 'devextreme-react/select-box';
import notify from 'devextreme/ui/notify';
import 'devextreme/ui/select_box';
import {
  fontSizes,
  lineHeights,
  fontFamilies,
  fontStyles,
  headings,
  textAlignItems,
  textAlignItemsExtended,
  listTypes,
  fontInputAttr,
  textStyleInputAttr,
} from './data.js';

const lineHeightDefault = lineHeights[1].lineHeight;
const textAlignDefault = [textAlignItems[0].alignment];
const fontSizeDefault = fontSizes[2].size;
const headingDefault = headings[0].text;

function onButtonClick(name) {
  notify(`The "${name}" button has been clicked`);
}

function onSelectionChanged(name) {
  notify(`The "${name}" value has been changed`);
}

function App() {
  const [lineHeight, setLineHeight] = useState(lineHeightDefault);
  const [textAlign, setTextAlign] = useState(textAlignDefault);
  const [fontSize, setFontSize] = useState(fontSizeDefault);
  const [heading, setHeading] = useState(headingDefault);
  const [multiline, setMultiline] = useState(true);

  const onFontFamilyClick = useCallback(() => {
    notify('The "Font Family" value has been changed');
  }, []);

  const onUndoButtonClick = useCallback(() => {
    onButtonClick('Undo');
  }, []);

  const onButtonGroupClick = useCallback((e) => {
    onButtonClick(e.itemData.hint);
  }, []);

  const onRedoButtonClick = useCallback(() => {
    onButtonClick('Redo');
  }, []);

  const onLinkButtonClick = useCallback(() => {
    onButtonClick('Link');
  }, []);

  const onAddImageButtonClick = useCallback(() => {
    onButtonClick('Add Image');
  }, []);

  const onClearButtonClick = useCallback(() => {
    onButtonClick('Clear Formating');
  }, []);

  const onCodeBlockButtonClick = useCallback(() => {
    onButtonClick('Code Block');
  }, []);

  const onQuoteButtonClick = useCallback(() => {
    onButtonClick('Blockquote');
  }, []);

  const onAttachButtonClick = useCallback(() => {
    onButtonClick('Attach');
  }, []);

  const onAboutButtonClick = useCallback(() => {
    onButtonClick('Attach');
  }, []);

  const onHeadingClick = useCallback(
    (e) => {
      setHeading(e.itemData.text);
      notify('The "Heading" value has been changed');
    },
    [setHeading],
  );

  const onLineHeightChanged = useCallback(
    (e) => {
      setLineHeight(e.item.lineHeight);
      onSelectionChanged('Line Height');
    },
    [setLineHeight],
  );

  const onFontSizeChange = useCallback(
    (e) => {
      setFontSize(e.item.size);
      onSelectionChanged('Font Size');
    },
    [setFontSize],
  );

  const onTextAlignChanged = useCallback(
    (e) => {
      const { alignment, hint } = e.itemData;

      setTextAlign([alignment]);
      onButtonClick(hint);
    },
    [setTextAlign],
  );

  const onToolbarLineModeChanged = useCallback(
    ({ value }) => {
      setMultiline(value);
    },
    [setMultiline],
  );

  const renderFontSize = useCallback(
    (itemData) => (
      <div style={{ fontSize: `${itemData.size}px` }}>{itemData.text}</div>
    ),
    [],
  );

  const renderTextAlign = useCallback(
    () => (
      <ButtonGroup
        keyExpr="alignment"
        stylingMode="outlined"
        items={textAlignItems}
        selectedItemKeys={textAlign}
        onItemClick={onTextAlignChanged}
      ></ButtonGroup>
    ),
    [textAlign, textAlignItems, onTextAlignChanged],
  );

  const renderTextAlignMenu = useCallback(
    () => (
      <ButtonGroup
        displayExpr="text"
        keyExpr="alignment"
        stylingMode="outlined"
        items={textAlignItemsExtended}
        selectedItemKeys={textAlign}
        onItemClick={onTextAlignChanged}
      ></ButtonGroup>
    ),
    [textAlign, textAlignItemsExtended, onTextAlignChanged],
  );

  const renderMenuSeparator = useCallback(
    () => <div className="toolbar-menu-separator"></div>,
    [],
  );

  return (
    <>
      <div className="widget-container">
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
              <Button icon="undo" onClick={onUndoButtonClick}></Button>
            </Item>

            <Item location="before">
              <Button icon="redo" onClick={onRedoButtonClick}></Button>
            </Item>

            <Item
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
                onSelectionChanged={onLineHeightChanged}
              ></DropDownButton>
            </Item>

            <Item location="before" locateInMenu="auto">
              <SelectBox
                placeholder="Font"
                displayExpr="text"
                inputAttr={fontInputAttr}
                dataSource={fontFamilies}
                onItemClick={onFontFamilyClick}
              ></SelectBox>
            </Item>

            <Item
              location="before"
              locateInMenu="auto"
              menuItemRender={renderMenuSeparator}
            >
              <div className="toolbar-separator"></div>
            </Item>

            <Item location="before">
              <ButtonGroup
                keyExpr="icon"
                stylingMode="outlined"
                selectionMode="multiple"
                items={fontStyles}
                onItemClick={onButtonGroupClick}
              ></ButtonGroup>
            </Item>

            <Item location="before">
              <div className="toolbar-separator"></div>
            </Item>

            <Item
              widget="dxButtonGroup"
              location="before"
              locateInMenu="auto"
              render={renderTextAlign}
              menuItemRender={renderTextAlignMenu}
            ></Item>

            <Item location="before">
              <ButtonGroup
                keyExpr="alignment"
                stylingMode="outlined"
                items={listTypes}
                onItemClick={onButtonGroupClick}
              ></ButtonGroup>
            </Item>

            <Item
              location="before"
              locateInMenu="auto"
              menuItemRender={renderMenuSeparator}
            >
              <div className="toolbar-separator"></div>
            </Item>

            <Item location="before" locateInMenu="auto">
              <SelectBox
                displayExpr="text"
                valueExpr="text"
                inputAttr={textStyleInputAttr}
                dataSource={headings}
                defaultValue={heading}
                onItemClick={onHeadingClick}
              ></SelectBox>
            </Item>

            <Item
              location="before"
              locateInMenu="auto"
              menuItemRender={renderMenuSeparator}
            >
              <div className="toolbar-separator"></div>
            </Item>

            <Item
              location="before"
              locateInMenu="auto"
              showText="inMenu"
              widget="dxButton"
            >
              <Button
                icon="link"
                text="Link"
                onClick={onLinkButtonClick