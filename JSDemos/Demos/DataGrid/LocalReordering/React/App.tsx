import React from 'react';
import DataGrid, {
  Column, RowDragging, Scrolling, Lookup, Sorting,
} from 'devextreme-react/data-grid';
import { CheckBox } from 'devextreme-react/check-box';
import { tasks, employees } from './data.js';

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);

    this.onReorder = this.onReorder.bind(this);
    this.onShowDragIconsChanged = this.onShowDragIconsChanged.bind(this);

    this.state = {
      tasks,
      showDragIcons: true,
    };
  }

  onReorder(e) {
    const visibleRows = e.component.getVisibleRows();
    const newTasks = [...this.state.tasks];

    const toIndex = newTasks.findIndex((item) => item.ID === visibleRows[e.toIndex].data.ID);
    const fromIndex = newTasks.findIndex((item) => item.ID === e.itemData.ID);

    newTasks.splice(fromIndex, 1);
    newTasks.splice(toIndex, 0, e.itemData);

    this.setState({
      tasks: newTasks,
    });
  }

  onShowDragIconsChanged(args) {
    this.setState({
      showDragIcons: args.value,
    });
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid
          height={440}
          dataSource={this.state.tasks}
          keyExpr="ID"
          showBorders={true}
        >
          // @ts-expect-error TS(2786): 'RowDragging' cannot be used as a JSX component.
          <RowDragging
            // @ts-expect-error TS(2322): Type '{ allowReordering: boolean; onReorder: (e: a... Remove this comment to see the full error message
            allowReordering={true}
            onReorder={this.onReorder}
            showDragIcons={this.state.showDragIcons}
          />
          // @ts-expect-error TS(2786): 'Scrolling' cannot be used as a JSX component.
          <Scrolling mode="virtual" />
          // @ts-expect-error TS(2786): 'Sorting' cannot be used as a JSX component.
          <Sorting mode="none" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="ID" width={55} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Owner" width={150}>
            // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
            <Lookup
              // @ts-expect-error TS(2322): Type '{ dataSource: { ID: number; FullName: string... Remove this comment to see the full error message
              dataSource={employees}
              valueExpr="ID"
              displayExpr="FullName"
            />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ children: Element; dataField: string; capt... Remove this comment to see the full error message
            dataField="AssignedEmployee"
            caption="Assignee"
            width={150}>
            // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
            <Lookup
              // @ts-expect-error TS(2322): Type '{ dataSource: { ID: number; FullName: string... Remove this comment to see the full error message
              dataSource={employees}
              valueExpr="ID"
              displayExpr="FullName"
            />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Subject" />
        </DataGrid>

        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
            <CheckBox
              value={this.state.showDragIcons}
              text="Show Drag Icons"
              onValueChanged={this.onShowDragIconsChanged}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
