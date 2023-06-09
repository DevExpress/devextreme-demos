import React from 'react';
import { SelectBox } from 'devextreme-react/select-box';
import { createStore } from 'devextreme-aspnet-data-nojquery';

const url = 'https://js.devexpress.com/Demos/Mvc/api/DataGridAdvancedMasterDetailView';
const productLabel = { 'aria-label': 'Product' };

interface ProductSelectBoxProps {
supplierId: any;
productId: any;
onProductChanged: (productId: any) => void;
}

class ProductSelectBox extends React.Component<ProductSelectBoxProps> {
  constructor(props) {
    super(props);

    this.productsData = createStore({
      key: 'ProductID',
      loadParams: { SupplierID: this.props.supplierId },
      loadUrl: `${url}/GetProductsBySupplier`,
      onLoaded: this.setDefaultValue.bind(this),
    });

    this.valueChanged = this.valueChanged.bind(this);
  }

  render() {
    return (
      <SelectBox
        value={this.props.productId}
        deferRendering={false}
        inputAttr={productLabel}
        dataSource={this.productsData}
        valueExpr="ProductID"
        displayExpr="ProductName"
        onValueChanged={this.valueChanged}
      />
    );
  }

  setDefaultValue(items: any[]) {
    const firstItem = items[0];
    if (firstItem && this.props.productId === null) {
      this.props.onProductChanged(firstItem.ProductID);
    }
  }

  valueChanged(e: { value: any; }) {
    this.props.onProductChanged(e.value);
  }
}

export default ProductSelectBox;
