import React from 'react';
import DataCell from './DataCell.tsx';

type DataCellMonthProps = {
  data: { startDate: Date; };
}

const DataCellMonth: React.FunctionComponent<DataCellMonthProps> = (props) => {
  const { startDate } = props.data;

  return (
    <DataCell data={props.data} className='dx-scheduler-date-table-cell-text'>
      {startDate.getDate()}
    </DataCell>
  );
};

export default DataCellMonth;
