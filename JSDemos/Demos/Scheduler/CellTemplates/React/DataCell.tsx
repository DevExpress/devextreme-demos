import React from 'react';
import Utils from './utils.ts';

type DataCellProps = {
  className: string
  data: {
    startDate: Date;
  }
};

const DataCell: React.FunctionComponent<React.PropsWithChildren<DataCellProps>> = (props) => {
  const { startDate } = props.data;
  const isDinner = Utils.isDinner(startDate);
  let cssClasses = props.className || '';

  if (Utils.isDisableDate(startDate)) {
    cssClasses += ' disable-date';
  } else if (isDinner) {
    cssClasses += ' dinner';
  }

  return (
    <div className={cssClasses}>
      {props.children}
    </div>
  );
};

export default DataCell;
