import React from 'react';

import OData from 'devextreme/data/odata/store';
import { Autocomplete } from 'devextreme-react/autocomplete';
import CustomStore from 'devextreme/data/custom_store';
import 'whatwg-fetch';

import {
  names, surnames, positions,
} from './data.js';

function isNotEmpty(value) {
  return value !== undefined && value !== null && value !== '';
}

const states = new OData({
  url: 'https://js.devexpress.com/Demos/DevAV/odata/States?$select=Sate_ID,State_Long,State_Short',
  key: 'Sate_ID',
  keyType: 'Int32',
});

const clientsStore = new CustomStore({
  key: 'Value',
  useDefaultSearch: true,
  load(loadOptions) {
    let params = '?';
    [
      'skip',
      'take',
      'filter',
    ].forEach((i) => {
      if (i in loadOptions && isNotEmpty(loadOptions[i])) { params += `${i}=${JSON.stringify(loadOptions[i])}&`; }
    });
    params = params.slice(0, -1);
    return fetch(`https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi/CustomersLookup${params}`)
      .then((response) => response.json())
      .then((data) => ({
        data: data.data,
      }))
      .catch(() => { throw new Error('Data Loading Error'); });
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      position: positions[0],
      state: '',
      currentClient: '',
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleCurrentClientChange = this.handleCurrentClientChange.bind(this);
  }

  render() {
    let fullInfo = '';
    fullInfo += (`${this.state.firstName || ''} ${this.state.lastName || ''}`).trim();
    fullInfo += (fullInfo && this.state.position) ? (`, ${this.state.position}`) : this.state.position || '';
    fullInfo += (fullInfo && this.state.state) ? (`, ${this.state.state}`) : this.state.state || '';
    fullInfo += (fullInfo && this.state.currentClient) ? (`, ${this.state.currentClient}`) : this.state.currentClient || '';

    return (
      <div className="form">

        <div className="dx-fieldset">
          <div className="dx-fieldset-header">Default Mode</div>
          <div className="dx-field">
            <div className="dx-field-label">First Name</div>
            <div className="dx-field-value">
              <Autocomplete
                dataSource={names}
                value={this.state.firstName}
                onValueChanged={this.handleFirstNameChange}
                placeholder="Type first name..."
              />
            </div>
          </div>
        </div>

        <div className="dx-fieldset">
          <div className="dx-fieldset-header">With Clear Button</div>
          <div className="dx-field">
            <div className="dx-field-label">Last Name</div>
            <div className="dx-field-value">
              <Autocomplete
                dataSource={surnames}
                value={this.state.lastName}
                onValueChanged={this.handleLastNameChange}
                showClearButton={true}
                placeholder="Type last name..."
              />
            </div>
          </div>
        </div>

        <div className="dx-fieldset">
          <div className="dx-fieldset-header">Disabled</div>
          <div className="dx-field">
            <div className="dx-field-label">Position</div>
            <div className="dx-field-value">
              <Autocomplete
                dataSource={positions}
                value={this.state.position}
                disabled={true}
              />
            </div>
          </div>
        </div>

        <div className="dx-fieldset">
          <div className="dx-fieldset-header">Custom Item Template and Data Source Usage</div>
          <div className="dx-field">
            <div className="dx-field-label">State</div>
            <div className="dx-field-value">
              <Autocomplete
                dataSource={states}
                value={this.state.state}
                valueExpr="State_Long"
                onValueChanged={this.handleStateChange}
                placeholder="Type state name..."
                itemRender={this.renderState}
              />
            </div>
          </div>
        </div>

        <div className="dx-fieldset">
          <div className="dx-fieldset-header">With Custom Store and Search Options</div>
          <div className="dx-field">
            <div className="dx-field-label">Current Client</div>
            <div className="dx-field-value">
              <Autocomplete
                dataSource={clientsStore}
                value={this.state.currentClient}
                valueExpr="Text"
                onValueChanged={this.handleCurrentClientChange}
                minSearchLength={2}
                searchTimeout={500}
                placeholder="Type client name..."
              />
            </div>
          </div>
        </div>

        <div className="dx-fieldset">
          <div className="dx-fieldset-header">Event Handling</div>
          <div className="employees-data">
            Employee data: <span>{fullInfo}</span>
          </div>
        </div>
      </div>
    );
  }

  renderState(data) {
    return <span>{data.State_Long} ({data.State_Short})</span>;
  }

  handleFirstNameChange(e) {
    this.setState({
      firstName: e.value,
    });
  }

  handleLastNameChange(e) {
    this.setState({
      lastName: e.value,
    });
  }

  handleStateChange(e) {
    this.setState({
      state: e.value,
    });
  }

  handleCurrentClientChange(e) {
    this.setState({
      currentClient: e.value,
    });
  }
}

export default App;
