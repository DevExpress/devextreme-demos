import React from 'react';

import HtmlEditor, { Toolbar, Item } from 'devextreme-react/html-editor';
import Popup from 'devextreme-react/popup';
import { markup } from './data.js';

const headerValues = [false, 1, 2, 3, 4, 5];

class App extends React.Component {
  setState: any;

  state: any;

  toolbarButtonOptions: any;

  constructor() {
    super();

    this.state = {
      value: markup,
      popupVisible: false,
    };

    this.toolbarButtonOptions = {
      text: 'Show markup',
      stylingMode: 'text',
      onClick: this.customButtonClick.bind(this),
    };

    this.valueChanged = this.valueChanged.bind(this);
    this.popupHiding = this.popupHiding.bind(this);
  }

  render() {
    const { value, popupVisible } = this.state;

    return (
      <div className="widget-container">
        // @ts-expect-error TS(2786): 'HtmlEditor' cannot be used as a JSX component.
        <HtmlEditor
          value={value}
          onValueChanged={this.valueChanged}
        >
          // @ts-expect-error TS(2786): 'Toolbar' cannot be used as a JSX component.
          <Toolbar>
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="undo" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="redo" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="separator" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item
              // @ts-expect-error TS(2322): Type '{ name: string; acceptedValues: (number | bo... Remove this comment to see the full error message
              name="header"
              acceptedValues={headerValues}
            />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="separator" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="bold" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="italic" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="strike" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="underline" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="separator" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="alignLeft" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="alignCenter" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="alignRight" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="alignJustify" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="separator" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item
              // @ts-expect-error TS(2322): Type '{ widget: string; options: any; }' is not as... Remove this comment to see the full error message
              widget="dxButton"
              options={this.toolbarButtonOptions}
            />
          </Toolbar>
        </HtmlEditor>
        // @ts-expect-error TS(2786): 'Popup' cannot be used as a JSX component.
        <Popup
          showTitle={true}
          title="Markup"
          visible={popupVisible}
          onHiding={this.popupHiding}
        >
          {value}
        </Popup>
      </div>
    );
  }

  valueChanged(e) {
    this.setState({
      value: e.value,
    });
  }

  popupHiding() {
    this.setState({
      popupVisible: false,
    });
  }

  customButtonClick() {
    this.setState({
      popupVisible: true,
    });
  }
}

export default App;
