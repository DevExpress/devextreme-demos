import React from 'react';

import Bullet, {
  Font, Margin, Size, Tooltip,
} from 'devextreme-react/bullet';

export default function DiscountCell(cellData) {
  return (
    // @ts-expect-error TS(2786): 'Bullet' cannot be used as a JSX component.
    <Bullet
      showTarget={false}
      showZeroLevel={true}
      value={cellData.value * 100}
      startScaleValue={0}
      endScaleValue={100}
    >
      // @ts-expect-error TS(2786): 'Size' cannot be used as a JSX component.
      <Size width={150} height={35} />
      // @ts-expect-error TS(2786): 'Margin' cannot be used as a JSX component.
      <Margin top={5} bottom={0} left={5} />
      // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
      <Tooltip
        // @ts-expect-error TS(2322): Type '{ children: Element; enabled: boolean; paddi... Remove this comment to see the full error message
        enabled={true}
        paddingTopBottom={2}
        zIndex={5}
        customizeTooltip={customizeTooltip}
      >
        // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
        <Font size={18} />
      </Tooltip>
    </Bullet>
  );
}

function customizeTooltip(data) {
  return {
    text: `${parseInt(data.value, 10)}%`,
  };
}
