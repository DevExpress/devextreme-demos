import React from 'react';
import Item from './Item.js';

const itemStyle = {
  width: 200,
  padding: 10,
  fontWeight: 'bold',
};

export default function DragItem({ data }) {
  return (
    // @ts-expect-error TS(2741): Property 'handle' is missing in type '{ text: any;... Remove this comment to see the full error message
    <Item
      text={data.itemData.Task_Subject}
      style={itemStyle}
    />
  );
}
