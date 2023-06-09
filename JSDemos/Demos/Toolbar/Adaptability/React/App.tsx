import React from 'react';
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
  const [lineHeight, setLineHeight] = React.useState(lineHeightDefault);
  const [textAlign, setTextAlign] = React.useState(textAlignDefault);
  const [fontSize, setFontSize] = React.useState(fontSizeDefault);
  const [heading, setHeading] = React.useState(headingDefault);
  const [multiline, setMultiline] = React.useState(true);

  const onFontFamilyClick = React.useCallback(() => {
    notify('The "Font Family" value has been changed');
  }, []);

  const onUndoButtonClick = React.useCallback(() => {
    onButtonClick('Undo');
  }, []);

  const onButtonGroupClick = React.useCallback((e) => {
    onButtonClick(e.itemData.hint);
  }, []);

  const onRedoButtonClick = React.useCallback(() => {
    onButtonClick('Redo');
  }, []);

  const onLinkButtonClick = React.useCallback(() => {
    onButtonClick('Link');
  }, []);

  const onAddImageButtonClick = React.useCallback(() => {
    onButtonClick('Add Image');
  }, []);

  const onClearButtonClick = React.useCallback(() => {
    onButtonClick('Clear Formating');
  }, []);

  const onCodeBlockButtonClick = React.useCallback(() => {
    onButtonClick('Code Block');
  }, []);

  const onQuoteButtonClick = React.useCallback(() => {
    onButtonClick('Blockquote');
  }, []);

  const onAttachButtonClick = React.useCallback(() => {
    onButtonClick('Attach');
  }, []);

  const onAboutButtonClick = React.useCallback(() => {
    onButtonClick('Attach');
  }, []);

  const onHeadingClick = React.useCallback(
    (e) => {
      setHeading(e.itemData.text);
      notify('The "Heading" value has been changed');
    },
    [setHeading],
  );

  const onLineHeightChanged = React.useCallback(
    (e) => {
      setLineHeight(e.item.lineHeight);
      onSelectionChanged('Line Height');
    },
    [setLineHeight],
  );

  const onFontSizeChange = React.useCallback(
    (e) => {
      setFontSize(e.item.size);
      onSelectionChanged('Font Size');
    },
    [setFontSize],
  );

  const onTextAlignChanged = React.useCallback(
    (e) => {
      const { alignment, hint } = e.itemData;

      setTextAlign([alignment]);
      onButtonClick(hint);
    },
    [setTextAlign],
  );

  const onToolbarLineModeChanged = React.useCallback(
    ({ value }) => {
      setMultiline(value);
    },
    [setMultiline],
  );

  const renderFontSize = React.useCallback(
    (itemData) => (
      <div style={{ fontSize: `${itemData.size}px` }}>{itemData.text}</div>
    ),
    [],
  );

  const renderTextAlign = React.useCallback(
    () => (
      // @ts-expect-error TS(2786): 'ButtonGroup' cannot be used as a JSX component.
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

  const renderTextAlignMenu = React.useCallback(
    () => (
      // @ts-expect-error TS(2786): 'ButtonGroup' cannot be used as a JSX component.
      <ButtonGroup
        // @ts-expect-error TS(2322): Type '{ displayExpr: string; keyExpr: string; styl... Remove this comment to see the full error message
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

  const renderMenuSeparator = React.useCallback(
    () => <div className="toolbar-menu-separator"></div>,
    [],
  );

  return (
    <React.Fragment>
      <div className="widget-container">
        // @ts-expect-error TS(2786): 'Resizable' cannot be used as a JSX component.
        <Resizable
          className="resizable-container"
          minWidth={500}
          minHeight={150}
          maxHeight={370}
          handles="right"
          area=".widget-container"
        >
          // @ts-expect-error TS(2786): 'Toolbar' cannot be used as a JSX component.
          <Toolbar multiline={multiline}>
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item location="before">
              // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
              <Button icon="undo" onClick={onUndoButtonClick}></Button>
            </Item>

            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item location="before">
              // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
              <Button icon="redo" onClick={onRedoButtonClick}></Button>
            </Item>

            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item
              // @ts-expect-error TS(2322): Type '{ children: Element; location: string; locat... Remove this comment to see the full error message
              location="before"
              locateInMenu="auto"
              menuItemRender={renderMenuSeparator}
            >
              <div className="toolbar-separator"></div>
            </Item>

            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item location="before" locateInMenu="auto">
              // @ts-expect-error TS(2786): 'DropDownButton' cannot be used as a JSX component... Remove this comment to see the full error message
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

            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item location="before" locateInMenu="auto">
              // @ts-expect-error TS(2786): 'DropDownButton' cannot be used as a JSX component... Remove this comment to see the full error message
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

            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item location="before" locateInMenu="auto">
              // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
              <SelectBox
                placeholder="Font"
                displayExpr="text"
                inputAttr={fontInputAttr}
                dataSource={fontFamilies}
                onItemClick={onFontFamilyClick}
              ></SelectBox>
            </Item>

            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item
              // @ts-expect-error TS(2322): Type '{ children: Element; location: string; locat... Remove this comment to see the full error message
              location="before"
              locateInMenu="auto"
              menuItemRender={renderMenuSeparator}
            >
              <div className="toolbar-separator"></div>
            </Item>

            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item location="before">
              // @ts-expect-error TS(2786): 'ButtonGroup' cannot be used as a JSX component.
              <ButtonGroup
                keyExpr="icon"
                stylingMode="outlined"
                selectionMode="multiple"
                items={fontStyles}
                onItemClick={onButtonGroupClick}
              ></ButtonGroup>
            </Item>

            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item location="before">
              <div className="toolbar-separator"></div>
            </Item>

            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item
              // @ts-expect-error TS(2322): Type '{ widget: string; location: string; locateIn... Remove this comment to see the full error message
              widget="dxButtonGroup"
              location="before"
              locateInMenu="auto"
              render={renderTextAlign}
              menuItemRender={renderTextAlignMenu}
            ></Item>

            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item location="before">
              // @ts-expect-error TS(2786): 'ButtonGroup' cannot be used as a JSX component.
              <ButtonGroup
                keyExpr="alignment"
                stylingMode="outlined"
                items={listTypes}
                onItemClick={onButtonGroupClick}
              ></ButtonGroup>
            </Item>

            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item
              // @ts-expect-error TS(2322): Type '{ children: Element; location: string; locat... Remove this comment to see the full error message
              location="before"
              locateInMenu="auto"
              menuItemRender={renderMenuSeparator}
            >
              <div className="toolbar-separator"></div>
            </Item>

            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item location="before" locateInMenu="auto">
              // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
              <SelectBox
                displayExpr="text"
                valueExpr="text"
                inputAttr={textStyleInputAttr}
                dataSource={headings}
                defaultValue={heading}
                onItemClick={onHeadingClick}
              ></SelectBox>
            </Item>

            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item
              // @ts-expect-error TS(2322): Type '{ children: Element; location: string; locat... Remove this comment to see the full error message
              location="before"
              locateInMenu="auto"
              menuItemRender={renderMenuSeparator}
            >
              <div className="toolbar-separator"></div>
            </Item>

            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item
              // @ts-expect-error TS(2322): Type '{ children: Element; location: string; locat... Remove this comment to see the full error message
              location="before"
              locateInMenu="auto"
              showText="inMenu"
              widget="dxButton"
            >
              // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
              <Button
                icon="link"
                text="Link"
                onClick={onLinkButtonClick}
              ></Button>
            </Item>

            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item
              // @ts-expect-error TS(2322): Type '{ children: Element; location: string; locat... Remove this comment to see the full error message
              location="before"
              locateInMenu="auto"
              showText="inMenu"
              widget="dxButton"
            >
              // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
              <Button
                icon="image"
                text="Add image"
                onClick={onAddImageButtonClick}
              ></Button>
            </Item>

            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item
              // @ts-expect-error TS(2322): Type '{ children: Element; location: string; locat... Remove this comment to see the full error message
              location="before"
              locateInMenu="auto"
              menuItemRender={renderMenuSeparator}
            >
              <div className="toolbar-separator"></div>
            </Item>

            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item
              // @ts-expect-error TS(2322): Type '{ children: Element; location: string; locat... Remove this comment to see the full error message
              location="before"
              locateInMenu="auto"
              showText="inMenu"
              widget="dxButton"
            >
              // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
              <Button
                icon="clearformat"
                text="Clear formating"
                onClick={onClearButtonClick}
              ></Button>
            </Item>

            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item
              // @ts-expect-error TS(2322): Type '{ children: Element; location: string; locat... Remove this comment to see the full error message
              location="before"
              locateInMenu="auto"
              showText="inMenu"
              widget="dxButton"
            >
              // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
              <Button
                icon="codeblock"
                text="Code block"
                onClick={onCodeBlockButtonClick}
              ></Button>
            </Item>

            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item
              // @ts-expect-error TS(2322): Type '{ children: Element; location: string; locat... Remove this comment to see the full error message
              location="before"
              locateInMenu="auto"
              showText="inMenu"
              widget="dxButton"
            >
              // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
              <Button
                icon="blockquote"
                text="Blockquote"
                onClick={onQuoteButtonClick}
              ></Button>
            </Item>

            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item
              // @ts-expect-error TS(2322): Type '{ children: Element; location: string; locat... Remove this comment to see the full error message
              location="before"
              locateInMenu="auto"
              menuItemRender={renderMenuSeparator}
            >
              <div className="toolbar-separator"></div>
            </Item>

            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item location="after" showText="inMenu" widget="dxButton">
              // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
              <Button
                icon="attach"
                text="Attach"
                onClick={onAttachButtonClick}
              ></Button>
            </Item>

            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item locateInMenu="always" showText="inMenu" widget="dxButton">
              // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
              <Button
                icon="help"
                text="About"
                onClick={onAboutButtonClick}
              ></Button>
            </Item>
          </Toolbar>
        </Resizable>
      </div>

      <div className="options-container">
        <div className="caption">Options</div>

        // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
        <CheckBox
          text="Multiline mode"
          value={multiline}
          onValueChanged={onToolbarLineModeChanged}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
