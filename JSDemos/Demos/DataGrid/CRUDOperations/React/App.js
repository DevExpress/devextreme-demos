import React, { useState } from 'react';
import {
  DataGrid, Column, Editing, Scrolling, Lookup, Summary, TotalItem,
} from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react/button';
import { SelectBox } from 'devextreme-react/select-box';

import CustomStore from 'devextreme/data/custom_store';
import { formatDate } from 'devextreme/localization';
import 'whatwg-fetch';

const refreshModeLabel = { 'aria-label': 'Refresh Mode' };
const URL = 'https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi';

const REFRESH_MODES = ['full', 'reshape', 'repaint'];

const App = () => {
  const [ordersData, setOrdersData] = useState(new CustomStore({
    key: 'OrderID',
    load: () => sendRequest(`${URL}/Orders`),
    insert: (values) => sendRequest(`${URL}/InsertOrder`, 'POST', {
      values: JSON.stringify(values),
    }),
    update: (key, values) => sendRequest(`${URL}/UpdateOrder`, 'PUT', {
      key,
      values: JSON.stringify(values),
    }),
    remove: (key) => sendRequest(`${URL}/DeleteOrder`, 'DELETE', {
      key,
    }),
  }));
  const [customersData, setCustomersData] = useState(new CustomStore({
    key: 'Value',
    loadMode: 'raw',
    load: () => sendRequest(`${URL}/CustomersLookup`),
  }));
  const [shippersData, setShippersData] = useState(new CustomStore({
    key: 'Value',
    loadMode: 'raw',
    load: () => sendRequest(`${URL}/ShippersLookup`),
  }));
  const [requests, setRequests] = useState([]);
  const [refreshMode, setRefreshMode] = useState('reshape');

  const handleRefreshModeChange = (e) => {
    setRefreshMode(e.value);
  };

  const clearRequests = () => {
    setRequests([]);
  };

  const sendRequest = (url, method = 'GET', data = {}) => {
    logRequest(method, url, data);

    if (method === 'GET') {
      return fetch(url, {
        method,
        credentials: 'include',
      }).then((result) => result.json().then((json) => {
        if (result.ok) return json.data;
        throw json.Message;
      }));
    }

    const params = Object.keys(data).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join('&');

    return fetch(url, {
      method,
      body: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      credentials: 'include',
    }).then((result) => {
      if (result.ok) {
        return result.text().then((text) => text && JSON.parse(text));
      }
      return result.json().then((json) => {
        throw json.Message;
      });
    });
  };

  const logRequest = (method, url, data) => {
    const args = Object.keys(data || {}).map((key) => `${key}=${data[key]}`).join(' ');

    const time = formatDate(new Date(), 'HH:mm:ss');
    const request = [time, method, url.slice(URL.length), args].join(' ');

    setRequests((prevRequests) => [request].concat(prevRequests));
  };

  return (
    <React.Fragment>
      <DataGrid
        id="grid"
        showBorders={true}
        dataSource={ordersData}
        repaintChangesOnly={true}
      >
        <Editing
          refreshMode={refreshMode}
          mode="cell"
          allowAdding={true}
          allowDeleting={true}
          allowUpdating={true}
        />

        <Scrolling
          mode="virtual"
        />

        <Column dataField="CustomerID" caption="Customer">
          <Lookup dataSource={customersData} valueExpr="Value" displayExpr="Text" />
        </Column>

        <Column dataField="OrderDate" dataType="date">
        </Column>

        <Column dataField="Freight">
        </Column>

        <Column dataField="ShipCountry">
        </Column>

        <Column
          dataField="ShipVia"
          caption="Shipping Company"
          dataType="number"
        >
          <Lookup dataSource={shippersData} valueExpr="Value" displayExpr="Text" />
        </Column>
        <Summary>
          <TotalItem column="CustomerID" summaryType="count" />
          <TotalItem column="Freight" summaryType="sum" valueFormat="#0.00" />
        </Summary>
      </DataGrid>
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <span>Refresh Mode: </span>
          <SelectBox
            value={refreshMode}
            inputAttr={refreshModeLabel}
            items={REFRESH_MODES}
            onValueChanged={handleRefreshModeChange}
          />
        </div>
        <div id="requests">
          <div>
            <div className="caption">Network Requests</div>
            <Button id="clear" text="Clear" onClick={clearRequests} />
          </div>
          <ul>
            {requests.map((request, index) => <li key={index}>{request}</li>)}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
