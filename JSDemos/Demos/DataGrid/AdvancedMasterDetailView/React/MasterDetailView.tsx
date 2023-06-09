import React from 'react';
import { TabPanel, Item } from 'devextreme-react/tab-panel';

import AddressTab from './AddressTab.js';
import OrdersTab from './OrdersTab.js';

class MasterDetailView extends React.Component {
  props: any;

  constructor(props) {
    super(props);
    this.renderOrdersTab = this.renderOrdersTab.bind(this);
    this.renderAddressTab = this.renderAddressTab.bind(this);
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'TabPanel' cannot be used as a JSX component.
      <TabPanel>
        // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
        <Item title="Orders" render={this.renderOrdersTab} />
        // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
        <Item title="Address" render={this.renderAddressTab} />
      </TabPanel>
    );
  }

  renderOrdersTab() {
    // @ts-expect-error TS(2786): 'OrdersTab' cannot be used as a JSX component.
    return <OrdersTab supplierId={this.props.data.key} />;
  }

  renderAddressTab() {
    // @ts-expect-error TS(2786): 'AddressTab' cannot be used as a JSX component.
    return <AddressTab data={this.props.data.data} />;
  }
}

export default MasterDetailView;
