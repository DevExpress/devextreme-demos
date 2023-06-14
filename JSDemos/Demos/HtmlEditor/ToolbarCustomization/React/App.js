import React, { useState } from 'react';
import HtmlEditor, { Toolbar, Item } from 'devextreme-react/html-editor';
import Popup from 'devextreme-react/popup';
import { markup } from './data.js';

const headerValues = [false, 1, 2, 3, 4, 5];

const App = () => {
  const [value, setValue] = useState(markup);
  const [popupVisible, setPopupVisible] = useState(false);

  const toolbarButtonOptions = {
    text: 'Show markup',
    stylingMode: 'text',
    onClick: customButtonClick,
  };

  const valueChanged = (e) => {
    setValue(e.value);
  };

  const popupHiding = () => {
    setPopupVisible(false);
  };

  const customButtonClick = () => {
    setPopupVisible(true);
  };

  return (
    <div className="widget-container">
      <HtmlEditor value={value} onValueChanged={valueChanged}>
        <Toolbar>
          <Item name="undo" />
          <Item name="redo" />
          <Item name="separator" />
          <Item name="header" acceptedValues={headerValues} />
          <Item name="separator" />
          <Item name="bold" />
          <Item name="italic" />
          <Item name="strike" />
          <Item name="underline" />
          <Item name="separator" />
          <Item name="alignLeft" />
          <Item name="alignCenter" />
          <Item name="alignRight" />
          <Item name="alignJustify" />
          <Item name="separator" />
          <Item widget="dxButton" options={toolbarButtonOptions} />
        </Toolbar>
      </HtmlEditor>
      <Popup
        showTitle={true}
        title="Markup"
        visible={popupVisible}
        onHiding={popupHiding}
      >
        {value}
      </Popup>
    </div>
  );
};

export default App;
