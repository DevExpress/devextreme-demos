import React from "react";

import { CheckBox } from "devextreme-react/check-box";

export function ProductItem(props) {
  return (
    <React.Fragment>
      <img src={props.product.ImageSrc} alt="monitor" />
      <div id="name">{props.product.Name}</div>
      <CheckBox
        text="Available"
        onValueChanged={(e) => props.checkAvailability(e, props.product)}
      />
    </React.Fragment>
  );
}
