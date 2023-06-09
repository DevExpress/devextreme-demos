import React, { useState, useRef } from 'react';
import DropDownButton from 'devextreme-react/drop-down-button';
import Toolbar from 'devextreme-react/toolbar';
import { Template } from 'devextreme-react/core/template';
import notify from 'devextreme/ui/notify';
import service from './data.js';
import ColorIcon from './ColorIcon.js';
import 'whatwg-fetch';

const buttonDropDownOptions = { width: 230 };

const App = () => {
  const [alignment, setAlignment] = useState('left');
  const [color, setColor] = useState(null);
  const [fontSize, setFontSize] = useState(14);
  const [lineHeight, setLineHeight] = useState(1.35);

  const colorPicker = useRef(null);

  const onButtonClick = (e) => {
    notify(`Go to ${e.component.option('text')}'s profile`, 'success', 600);
  };

  const onItemClick = (e) => {
    notify(e.itemData.name || e.itemData, 'success', 600);
  };

  const onColorClick = (color) => {
    setColor(color);
    colorPicker.current.element().getElementsByClassName('dx-icon-square')[0].style.color = color;
    colorPicker.current.close();
  };

  const itemTemplateRender = (item) => {
    return (<div style={{ fontSize: `${item.size}px` }}>
      {item.text}
    </div>);
  };

  const data = service.getData();

  const toolbarItems = [
    {
      location: 'before',
      widget: 'dxDropDownButton',
      options: {
        displayExpr: 'name',
        keyExpr: 'id',
        selectedItemKey: 3,
        width: 125,
        stylingMode: 'text',
        useSelectMode: true,
        onSelectionChanged: (e) => {
          setAlignment(e.item.name.toLowerCase());
        },
        items: data.alignments,
      },
    },
    {
      location: 'before',
      widget: 'dxDropDownButton',
      options: {
        items: data.colors,
        icon: 'square',
        stylingMode: 'text',
        dropDownOptions: { width: 'auto' },
        onInitialized: ({ component }) => {
          colorPicker.current = component;
        },
        dropDownContentTemplate: 'colorpicker',
      },
    },
    {
      location: 'before',
      widget: 'dxDropDownButton',
      options: {
        stylingMode: 'text',
        displayExpr: 'text',
        keyExpr: 'size',
        useSelectMode: true,
        items: data.fontSizes,
        selectedItemKey: 14,
        onSelectionChanged: (e) => {
          setFontSize(e.item.size);
        },
        itemTemplate: 'fontItem',
      },
    },
    {
      location: 'before',
      widget: 'dxDropDownButton',
      options: {
        stylingMode: 'text',
        icon: 'indent',
        displayExpr: 'text',
        keyExpr: 'lineHeight',
        useSelectMode: true,
        items: data.lineHeights,
        selectedItemKey: 1.35,
        onSelectionChanged: (e) => {
          setLineHeight(e.item.lineHeight);
        },
      },
    },
  ];

  return (
    <div>
      <div className="dx-fieldset">
        <div className="dx-fieldset-header">Single usage</div>
        <div className="dx-field">
          <div className="dx-field-label">
              Custom static text
          </div>
          <div className="dx-field-value">
            <DropDownButton
              text="Download Trial"
              icon="save"
              dropDownOptions={buttonDropDownOptions}
              items={data.downloads}
              onItemClick={onItemClick}
            />
          </div>
        </div>

        <div className="dx-field">
          <div className="dx-field-label">
                  Custom main button action
          </div>
          <div className="dx-field-value">
            <DropDownButton
              splitButton={true}
              useSelectMode={false}
              text="Sandra Johnson"
              icon="../../../../images/gym/coach-woman.png"
              items={data.profileSettings}
              displayExpr="name"
              keyExpr="id"
              onButtonClick={onButtonClick}
              onItemClick={onItemClick}
            />
          </div>
        </div>
      </div>

      <div className="dx-fieldset">
        <div className="dx-fieldset-header">Usage in a toolbar</div>
        <div className="dx-field">
          <Toolbar items={toolbarItems}>
            <Template name="colorpicker">
              <div className="custom-color-picker">
                {data.colors.map((color, i) => (
                  <ColorIcon key={i} color={color} onClick={onColorClick} />
                ))}
              </div>
            </Template>
            <Template name="fontItem" render={ itemTemplateRender }>
            </Template>
          </Toolbar>
        </div>
        <div className={ color ? 'dx-field' : 'dx-field dx-theme-text-color' } style={{
          color: color,
          textAlign: alignment,
          lineHeight: lineHeight,
          fontSize: `${fontSize}px`,
        }}>
          <p id="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
};

export default App;