import React from 'react';

import HtmlEditor, { Toolbar, Item } from 'devextreme-react/html-editor';
import ButtonGroup, { Item as ButtonItem } from 'devextreme-react/button-group';
import prettier from 'prettier/standalone';
import parserHtml from 'prettier/parser-html';
import { markup } from './data.js';

import 'devextreme/ui/html_editor/converters/markdown';

const sizeValues = ['8pt', '10pt', '12pt', '14pt', '18pt', '24pt', '36pt'];
const fontValues = ['Arial', 'Courier New', 'Georgia', 'Impact', 'Lucida Console', 'Tahoma', 'Times New Roman', 'Verdana'];
const defaultSelectedItemKeys = ['Html'];

class App extends React.Component {
  setState: any;

  state: any;

  constructor() {
    super();

    this.state = {
      valueContent: markup,
      editorValueType: 'html',
    };

    this.valueChanged = this.valueChanged.bind(this);
    this.valueTypeChanged = this.valueTypeChanged.bind(this);
    this.prettierFormat = this.prettierFormat.bind(this);
  }

  render() {
    const { valueContent, editorValueType } = this.state;

    return (
      <div className="widget-container">
        // @ts-expect-error TS(2786): 'HtmlEditor' cannot be used as a JSX component.
        <HtmlEditor
          height={300}
          defaultValue={valueContent}
          valueType={editorValueType}
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
            <Item name="color" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="background" />
          </Toolbar>
        </HtmlEditor>

        <div className="options">
          // @ts-expect-error TS(2786): 'ButtonGroup' cannot be used as a JSX component.
          <ButtonGroup
            onSelectionChanged={this.valueTypeChanged}
            defaultSelectedItemKeys={defaultSelectedItemKeys}
          >
            // @ts-expect-error TS(2786): 'ButtonItem' cannot be used as a JSX component.
            <ButtonItem text="Html" />
            // @ts-expect-error TS(2786): 'ButtonItem' cannot be used as a JSX component.
            <ButtonItem text="Markdown" />
          </ButtonGroup>
          <div className="value-content">
            {this.prettierFormat(valueContent)}
          </div>
        </div>
      </div>
    );
  }

  valueChanged(e) {
    this.setState({
      valueContent: e.value,
    });
  }

  valueTypeChanged(e) {
    this.setState({
      editorValueType: e.addedItems[0].text.toLowerCase(),
    });
  }

  prettierFormat(text) {
    if (this.state.editorValueType === 'html') {
      return prettier.format(text, {
        parser: 'html',
        plugins: [parserHtml],
      });
    }
    return text;
  }
}

export default App;
