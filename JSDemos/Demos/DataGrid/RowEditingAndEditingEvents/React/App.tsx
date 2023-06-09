import React from 'react';
import Button from 'devextreme-react/button';
import DataGrid, {
  Column, Editing, Paging, Lookup,
} from 'devextreme-react/data-grid';

import { employees, states } from './data.js';

class App extends React.Component {
  onEditCanceled: any;

  onEditCanceling: any;

  onEditingStart: any;

  onInitNewRow: any;

  onRowInserted: any;

  onRowInserting: any;

  onRowRemoved: any;

  onRowRemoving: any;

  onRowUpdated: any;

  onRowUpdating: any;

  onSaved: any;

  onSaving: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = { events: [] };
    this.logEvent = this.logEvent.bind(this);
    this.onEditingStart = this.logEvent.bind(this, 'EditingStart');
    this.onInitNewRow = this.logEvent.bind(this, 'InitNewRow');
    this.onRowInserting = this.logEvent.bind(this, 'RowInserting');
    this.onRowInserted = this.logEvent.bind(this, 'RowInserted');
    this.onRowUpdating = this.logEvent.bind(this, 'RowUpdating');
    this.onRowUpdated = this.logEvent.bind(this, 'RowUpdated');
    this.onRowRemoving = this.logEvent.bind(this, 'RowRemoving');
    this.onRowRemoved = this.logEvent.bind(this, 'RowRemoved');
    this.onSaving = this.logEvent.bind(this, 'Saving');
    this.onSaved = this.logEvent.bind(this, 'Saved');
    this.onEditCanceling = this.logEvent.bind(this, 'EditCanceling');
    this.onEditCanceled = this.logEvent.bind(this, 'EditCanceled');

    this.clearEvents = this.clearEvents.bind(this);
  }

  logEvent(eventName) {
    this.setState((state) => ({ events: [eventName].concat(state.events) }));
  }

  clearEvents() {
    this.setState({ events: [] });
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid
          id="gridContainer"
          dataSource={employees}
          keyExpr="ID"
          allowColumnReordering={true}
          showBorders={true}
          onEditingStart={this.onEditingStart}
          onInitNewRow={this.onInitNewRow}
          onRowInserting={this.onRowInserting}
          onRowInserted={this.onRowInserted}
          onRowUpdating={this.onRowUpdating}
          onRowUpdated={this.onRowUpdated}
          onRowRemoving={this.onRowRemoving}
          onRowRemoved={this.onRowRemoved}
          onSaving={this.onSaving}
          onSaved={this.onSaved}
          onEditCanceling={this.onEditCanceling}
          onEditCanceled={this.onEditCanceled}>

          // @ts-expect-error TS(2786): 'Paging' cannot be used as a JSX component.
          <Paging enabled={true} />
          // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
          <Editing
            // @ts-expect-error TS(2322): Type '{ mode: string; allowUpdating: boolean; allo... Remove this comment to see the full error message
            mode="row"
            allowUpdating={true}
            allowDeleting={true}
            allowAdding={true} />

          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Prefix" caption="Title" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="FirstName" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="LastName" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Position" width={130} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ children: Element; dataField: string; capt... Remove this comment to see the full error message
            dataField="StateID"
            caption="State"
            width={125}
          >
            // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
            <Lookup dataSource={states} displayExpr="Name" valueExpr="ID" />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ dataField: string; width: number; dataType... Remove this comment to see the full error message
            dataField="BirthDate"
            width={125}
            dataType="date" />
        </DataGrid>

        <div id="events">
          <div>

            <div className="caption">Fired events</div>
            // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
            <Button id="clear" text="Clear" onClick={this.clearEvents} />
          </div>
          <ul>
            {this.state.events.map((event, index) => <li key={index}>{event}</li>)}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
