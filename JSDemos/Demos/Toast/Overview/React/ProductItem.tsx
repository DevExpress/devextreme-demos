

interface ProductItemProps {
product: { ID: number; Name: string; Price: number; Current_Inventory: number; Backorder: number; Manufacturing: number; Category: string; ImageSrc: string; };
checkAvailability: (e: any, product: any) => void;
}import React from 'react';

import { CheckBox } from 'devextreme-react/check-box';

export function ProductItem(props: ProductItemProps) {
  const onValueChanged = React.useCallback((e) => {
    props.checkAvailability(e, props.product);
  }, []);

  return (
    <React.Fragment>
      <img src={props.product.ImageSrc} alt="monitor" />
      <div>{props.product.Name}</div>
      <CheckBox
        text="Available"
        onValueChanged={onValueChanged}
      />
    </React.Fragment>
  );
}
