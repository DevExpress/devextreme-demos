import React from 'react';

import HtmlEditor, {
  Toolbar, MediaResizing, ImageUpload, Item,
} from 'devextreme-react/html-editor';
import CheckBox from 'devextreme-react/check-box';
import SelectBox from 'devextreme-react/select-box';

import { markup, tabs, tabLabel } from './data.js';

const sizeValues = ['8pt', '10pt', '12pt', '14pt', '18pt', '24pt', '36pt'];
const fontValues = ['Arial', 'Courier New', 'Georgia', 'Impact', 'Lucida Console', 'Tahoma', 'Times New Roman', 'Verdana'];
const headerValues = [false, 1, 2, 3, 4, 5];

class App extends React.Component {
  setState: any;

  state: any;

  tabs: any;

  constructor() {
    super();

    this.state = {
      isMultiline: true,
      currentTab: tabs[2].value,
    };

    this.tabs = tabs;
    this.multilineChanged = this.multilineChanged.bind(this);
    this.currentTabChanged = this.currentTabChanged.bind(this);
  }

  render() {
    return (
      <div className="widget-container">
        // @ts-expect-error TS(2786): 'HtmlEditor' cannot be used as a JSX component.
        <HtmlEditor
          height="725px"
          defaultValue={markup}
        >
          // @ts-expect-error TS(2786): 'MediaResizing' cannot be used as a JSX component.
          <MediaResizing enabled={true} />
          // @ts-expect-error TS(2786): 'ImageUpload' cannot be used as a JSX component.
          <ImageUpload tabs={this.state.currentTab} fileUploadMode="base64" />
          // @ts-expect-error TS(2786): 'Toolbar' cannot be used as a JSX component.
          <Toolbar multiline={this.state.isMultiline}>
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="undo" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="redo" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="separator" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item
              // @ts-expect-error TS(2322): Type '{ name: string; acceptedValues: string[]; }'... Remove this comment to see the full error message
              name="size"
              acceptedValues={sizeValues}
            />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item
              // @ts-expect-error TS(2322): Type '{ name: string; acceptedValues: string[]; }'... Remove this comment to see the full error message
              name="font"
              acceptedValues={fontValues}
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
            <Item name="orderedList" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="bulletList" />
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
            <Item name="color" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="background" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="separator" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="link" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="image" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="separator" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="clear" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="codeBlock" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="blockquote" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="separator" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="insertTable" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="deleteTable" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="insertRowAbove" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="insertRowBelow" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="deleteRow" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="insertColumnLeft" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="insertColumnRight" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="deleteColumn" />
          </Toolbar>
        </HtmlEditor>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
            <CheckBox
              text="Multiline toolbar"
              value={this.state.isMultiline}
              onValueChanged={this.multilineChanged}
            />
          </div>
          <div className="option">
            <div className="label">Image upload tabs:</div>
            // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
            <SelectBox
              items={this.tabs}
              value={this.state.currentTab}
              valueExpr="value"
              inputAttr={tabLabel}
              displayExpr="name"
              onValueChanged={this.currentTabChanged}
            />
          </div>
        </div>
      </div>
    );
  }

  multilineChanged(e) {
    this.setState({
      isMultiline: e.value,
    });
  }

  currentTabChanged(e) {
    this.setState({
      currentTab: e.value,
    });
  }
}

export default App;
