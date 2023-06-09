import React from 'react';
import { Form, Item } from 'devextreme-react/form';

const items = ['Address', 'City', 'Region', 'PostalCode', 'Country', 'Phone'];

interface AddressTabProps {
data: any;
}

class AddressTab extends React.Component<AddressTabProps> {
  render() {
    return (
      <Form
        formData={this.props.data}
        colCount={2}
        className="address-form form-container"
      >
        {
          items.map((item, index) => <Item
            dataField={item}
            key={index}
            render={this.renderFormItem}
          />)
        }
      </Form>
    );
  }

  renderFormItem(item: { editorOptions: { value: any; }; }) {
    return <span>{item.editorOptions.value}</span>;
  }
}

export default AddressTab;
