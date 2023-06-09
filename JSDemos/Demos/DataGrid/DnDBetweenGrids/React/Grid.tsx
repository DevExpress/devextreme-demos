import React from 'react';
import DataGrid, {
  Column, RowDragging, Scrolling, Lookup,
} from 'devextreme-react/data-grid';

class Grid extends React.Component {
  dataSource: any;

  filterExpr: any;

  priorities: any;

  props: any;

  constructor(props) {
    super(props);

    this.priorities = [{
      id: 1, text: 'Low',
    }, {
      id: 2, text: 'Normal',
    }, {
      id: 3, text: 'High',
    }, {
      id: 4, text: 'Urgent',
    }];
    this.filterExpr = ['Status', '=', this.props.status];

    this.onAdd = this.onAdd.bind(this);

    this.dataSource = {
      store: this.props.tasksStore,
      reshapeOnPush: true,
    };
  }

  onAdd(e) {
    const key = e.itemData.ID;
    const values = { Status: e.toData };

    this.props.tasksStore.update(key, values).then(() => {
      this.props.tasksStore.push([{
        type: 'update', key, data: values,
      }]);
    });
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid
        dataSource={this.dataSource}
        height={440}
        showBorders={true}
        filterValue={this.filterExpr}
      >
        // @ts-expect-error TS(2786): 'RowDragging' cannot be used as a JSX component.
        <RowDragging
          // @ts-expect-error TS(2322): Type '{ data: any; group: string; onAdd: (e: any) ... Remove this comment to see the full error message
          data={this.props.status}
          group="tasksGroup"
          onAdd={this.onAdd}
        />
        // @ts-expect-error TS(2786): 'Scrolling' cannot be used as a JSX component.
        <Scrolling mode="virtual" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; dataType: string; }' is... Remove this comment to see the full error message
          dataField="Subject"
          dataType="string"
        />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ children: Element; dataField: string; data... Remove this comment to see the full error message
          dataField="Priority"
          dataType="number"
          width={80}
        >
          // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
          <Lookup
            // @ts-expect-error TS(2322): Type '{ dataSource: any; valueExpr: string; displa... Remove this comment to see the full error message
            dataSource={this.priorities}
            valueExpr="id"
            displayExpr="text"
          />
        </Column>
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; dataType: string; visib... Remove this comment to see the full error message
          dataField="Status"
          dataType="number"
          visible={false}
        />

      </DataGrid>
    );
  }
}

export default Grid;
