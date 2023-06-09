import React from 'react';

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

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);

    this.state = {
      ordersData: new CustomStore({
        key: 'OrderID',
        load: () => this.sendRequest(`${URL}/Orders`),
        insert: (values) => this.sendRequest(`${URL}/InsertOrder`, 'POST', {
          values: JSON.stringify(values),
        }),
        update: (key, values) => this.sendRequest(`${URL}/UpdateOrder`, 'PUT', {
          key,
          values: JSON.stringify(values),
        }),
        remove: (key) => this.sendRequest(`${URL}/DeleteOrder`, 'DELETE', {
          key,
        }),
      }),
      customersData: new CustomStore({
        key: 'Value',
        loadMode: 'raw',
        load: () => this.sendRequest(`${URL}/CustomersLookup`),
      }),
      shippersData: new CustomStore({
        key: 'Value',
        loadMode: 'raw',
        load: () => this.sendRequest(`${URL}/ShippersLookup`),
      }),
      requests: [],
      refreshMode: 'reshape',
    };

    this.clearRequests = this.clearRequests.bind(this);
    this.handleRefreshModeChange = this.handleRefreshModeChange.bind(this);
  }

  sendRequest(url, method = 'GET', data = {}) {
    this.logRequest(method, url, data);

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
  }

  logRequest(method, url, data) {
    const args = Object.keys(data || {}).map((key) => `${key}=${data[key]}`).join(' ');

    const time = formatDate(new Date(), 'HH:mm:ss');
    const request = [time, method, url.slice(URL.length), args].join(' ');

    this.setState((state) => ({ requests: [request].concat(state.requests) }));
  }

  clearRequests() {
    this.setState({ requests: [] });
  }

  handleRefreshModeChange(e) {
    this.setState({ refreshMode: e.value });
  }

  render() {
    const {
      refreshMode, ordersData, customersData, shippersData,
    } = this.state;
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid
          id="grid"
          showBorders={true}
          dataSource={ordersData}
          repaintChangesOnly={true}
        >
          // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
          <Editing
            // @ts-expect-error TS(2322): Type '{ refreshMode: any; mode: string; allowAddin... Remove this comment to see the full error message
            refreshMode={refreshMode}
            mode="cell"
            allowAdding={true}
            allowDeleting={true}
            allowUpdating={true}
          />

          // @ts-expect-error TS(2786): 'Scrolling' cannot be used as a JSX component.
          <Scrolling
            // @ts-expect-error TS(2322): Type '{ mode: string; }' is not assignable to type... Remove this comment to see the full error message
            mode="virtual"
          />

          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="CustomerID" caption="Customer">
            // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
            <Lookup dataSource={customersData} valueExpr="Value" displayExpr="Text" />
          </Column>

          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="OrderDate" dataType="date">
          </Column>

          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Freight">
          </Column>

          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="ShipCountry">
          </Column>

          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ children: Element; dataField: string; capt... Remove this comment to see the full error message
            dataField="ShipVia"
            caption="Shipping Company"
            dataType="number"
          >
            // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
            <Lookup dataSource={shippersData} valueExpr="Value" displayExpr="Text" />
          </Column>
          // @ts-expect-error TS(2786): 'Summary' cannot be used as a JSX component.
          <Summary>
            // @ts-expect-error TS(2786): 'TotalItem' cannot be used as a JSX component.
            <TotalItem column="CustomerID" summaryType="count" />
            // @ts-expect-error TS(2786): 'TotalItem' cannot be used as a JSX component.
            <TotalItem column="Freight" summaryType="sum" valueFormat="#0.00" />
          </Summary>
        </DataGrid>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Refresh Mode: </span>
            // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
            <SelectBox
              value={refreshMode}
              inputAttr={refreshModeLabel}
              items={REFRESH_MODES}
              onValueChanged={this.handleRefreshModeChange}
            />
          </div>
          <div id="requests">
            <div>
              <div className="caption">Network Requests</div>
              // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
              <Button id="clear" text="Clear" onClick={this.clearRequests} />
            </div>
            <ul>
              {this.state.requests.map((request, index) => <li key={index}>{request}</li>)}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
