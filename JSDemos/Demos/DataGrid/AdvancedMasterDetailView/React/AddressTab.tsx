import React from 'react';
import { Form, Item } from 'devextreme-react/form';

const items = ['Address', 'City', 'Region', 'PostalCode', 'Country', 'Phone'];

class AddressTab extends React.Component {
  props: any;

  render() {
    return (
      // @ts-expect-error TS(2786): 'Form' cannot be used as a JSX component.
      <Form
        formData={this.props.data}
        colCount={2}
        className="address-form form-container"
      >
        {
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          items.map((item, index) => <Item
            // @ts-expect-error TS(2322): Type '{ dataField: string; key: number; render: (i... Remove this comment to see the full error message
            dataField={item}
            key={index}
            render={this.renderFormItem}
          />)
        }
      </Form>
    );
  }

  renderFormItem(item) {
    return <span>{item.editorOptions.value}</span>;
  }
}

export default AddressTab;
