import React from 'react';

import HtmlEditor, {
  TableContextMenu,
  TableResizing,
  Toolbar,
  Item,
} from 'devextreme-react/html-editor';
import { CheckBox } from 'devextreme-react/check-box';
import { markup } from './data.js';

class App extends React.Component {
  setState: any;

  state: any;

  constructor() {
    super();

    this.state = {
      allowResizing: true,
      contextMenuEnabled: true,
    };

    this.tableResizingChanged = this.tableResizingChanged.bind(this);
    this.tableContextMenuChanged = this.tableContextMenuChanged.bind(this);
  }

  render() {
    return (
      <div className="widget-container">
        // @ts-expect-error TS(2786): 'HtmlEditor' cannot be used as a JSX component.
        <HtmlEditor
          height="750px"
          defaultValue={markup}
        >
          // @ts-expect-error TS(2786): 'TableContextMenu' cannot be used as a JSX compone... Remove this comment to see the full error message
          <TableContextMenu enabled={this.state.contextMenuEnabled} />
          // @ts-expect-error TS(2786): 'TableResizing' cannot be used as a JSX component.
          <TableResizing enabled={this.state.allowResizing} />
          // @ts-expect-error TS(2786): 'Toolbar' cannot be used as a JSX component.
          <Toolbar>
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="bold" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="color" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="separator" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="alignLeft" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="alignCenter" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="alignRight" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="separator" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="insertTable" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="insertHeaderRow" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="insertRowAbove" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="insertRowBelow" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="separator" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="insertColumnLeft" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="insertColumnRight" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="separator" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="deleteColumn" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="deleteRow" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="deleteTable" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="separator" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="cellProperties" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="tableProperties" />
          </Toolbar>
        </HtmlEditor>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
            <CheckBox
              text="Allow Table Resizing"
              value={this.state.allowResizing}
              onValueChanged={this.tableResizingChanged}
            />
          </div>
          <div className="option">
            // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
            <CheckBox
              text="Enable Table Context Menu"
              value={this.state.contextMenuEnabled}
              onValueChanged={this.tableContextMenuChanged}
            />
          </div>
        </div>
      </div>
    );
  }

  tableResizingChanged(e) {
    this.setState({
      allowResizing: e.value,
    });
  }

  tableContextMenuChanged(e) {
    this.setState({
      contextMenuEnabled: e.value,
    });
  }
}

export default App;
