import React from 'react';
import DataGrid, {
  Column, RowDragging, Scrolling, Lookup, Sorting,
} from 'devextreme-react/data-grid';
import { createStore } from 'devextreme-aspnet-data-nojquery';

const url = 'https://js.devexpress.com/Demos/Mvc/api/RowReordering';

const tasksStore = createStore({
  key: 'ID',
  loadUrl: `${url}/Tasks`,
  updateUrl: `${url}/UpdateTask`,
  onBeforeSend: (method, ajaxOptions) => {
    ajaxOptions.xhrFields = { withCredentials: true };
  },
});

const employeesStore = createStore({
  key: 'ID',
  loadUrl: `${url}/Employees`,
  onBeforeSend: (method, ajaxOptions) => {
    ajaxOptions.xhrFields = { withCredentials: true };
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onReorder = this.onReorder.bind(this);
  }

  onReorder(e) {
    e.promise = this.processReorder(e);
  }

  async processReorder(e) {
    const visibleRows = e.component.getVisibleRows();
    const newOrderIndex = visibleRows[e.toIndex].data.OrderIndex;

    await tasksStore.update(e.itemData.ID, { OrderIndex: newOrderIndex });
    await e.component.refresh();
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid
          height={440}
          dataSource={tasksStore}
          showBorders={true}
        >
          // @ts-expect-error TS(2786): 'RowDragging' cannot be used as a JSX component.
          <RowDragging
            // @ts-expect-error TS(2322): Type '{ allowReordering: boolean; onReorder: (e: a... Remove this comment to see the full error message
            allowReordering={true}
            onReorder={this.onReorder}
            dropFeedbackMode="push"
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
              // @ts-expect-error TS(2322): Type '{ dataSource: CustomStore<any, any>; valueEx... Remove this comment to see the full error message
              dataSource={employeesStore}
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
              // @ts-expect-error TS(2322): Type '{ dataSource: CustomStore<any, any>; valueEx... Remove this comment to see the full error message
              dataSource={employeesStore}
              valueExpr="ID"
              displayExpr="FullName"
            />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Subject" />
        </DataGrid>
      </React.Fragment>
    );
  }
}

export default App;
