import React from 'react';
import DataGrid, {
  Column, RowDragging, Scrolling, Lookup,
} from 'devextreme-react/data-grid';

const priorities = [{
  id: 1, text: 'Low',
}, {
  id: 2, text: 'Normal',
}, {
  id: 3, text: 'High',
}, {
  id: 4, text: 'Urgent',
}];

interface GridProps {
tasksStore: CustomStore<any, any>;
status: number;
}

const Grid = ({ tasksStore, status }: GridProps) => {
  const [filterExpr] = React.useState(['Status', '=', status]);
  const [dataSource] = React.useState({
    store: tasksStore,
    reshapeOnPush: true,
  });

  const onAdd = React.useCallback((e: { itemData: { ID: any; }; toData: any; }) => {
    const key = e.itemData.ID;
    const values = { Status: e.toData };

    tasksStore.update(key, values).then(() => {
      tasksStore.push([{
        type: 'update', key, data: values,
      }]);
    });
  }, [tasksStore]);

  return (
    <DataGrid
      dataSource={dataSource}
      height={440}
      showBorders={true}
      filterValue={filterExpr}
    >
      <RowDragging
        data={status}
        group="tasksGroup"
        onAdd={onAdd}
      />
      <Scrolling mode="virtual" />
      <Column
        dataField="Subject"
        dataType="string"
      />
      <Column
        dataField="Priority"
        dataType="number"
        width={80}
      >
        <Lookup
          dataSource={priorities}
          valueExpr="id"
          displayExpr="text"
        />
      </Column>
      <Column
        dataField="Status"
        dataType="number"
        visible={false}
      />
    </DataGrid>
  );
};

export default Grid;
