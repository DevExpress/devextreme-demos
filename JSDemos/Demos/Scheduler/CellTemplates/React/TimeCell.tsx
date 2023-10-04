import React from 'react';
import Utils from './utils.ts';

const TimeCell = (props: { data: { date: any; text: any; }; }) => {
  const { date, text } = props.data;

  const isDinner = Utils.isDinner(date);
  const hasCoffeeCupIcon = Utils.hasCoffeeCupIcon(date);

  return (
    <div className={isDinner ? 'dinner' : null}>
      {text}
      {hasCoffeeCupIcon ? <div className='cafe' /> : null}
    </div>
  );
};

export default TimeCell;
