import React from 'react';
import { Form, Item, Label } from 'devextreme-react/form';

import ProductSelectBox from './ProductSelectBox.js';
import OrderHistory from './OrderHistory.js';

class OrdersTab extends React.Component {
  props: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      chosenProductId: null,
    };
    this.productChanged = this.productChanged.bind(this);
    this.renderSelectBox = this.renderSelectBox.bind(this);
    this.renderOrderHistory = this.renderOrderHistory.bind(this);
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'Form' cannot be used as a JSX component.
      <Form
        labelLocation="top"
        className="form-container"
      >
        // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
        <Item render={this.renderSelectBox}>
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label text="Product" />
        </Item>
        // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
        <Item render={this.renderOrderHistory}>
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label text="Order History" />
        </Item>
      </Form>
    );
  }

  renderSelectBox() {
    // @ts-expect-error TS(2786): 'ProductSelectBox' cannot be used as a JSX compone... Remove this comment to see the full error message
    return <ProductSelectBox
      supplierId={this.props.supplierId}
      productId={this.state.chosenProductId}
      onProductChanged={this.productChanged} />;
  }

  renderOrderHistory() {
    // @ts-expect-error TS(2786): 'OrderHistory' cannot be used as a JSX component.
    return <OrderHistory productId={this.state.chosenProductId} />;
  }

  productChanged(productId) {
    this.setState({
      chosenProductId: productId,
    });
  }
}

export default OrdersTab;
