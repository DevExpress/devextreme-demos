/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import DataGrid, { Column, Editing, FilterRow } from 'devextreme-react/data-grid';
import SelectBox from 'devextreme-react/select-box';

// @ts-expect-error TS(2307): Cannot find module 'npm:devextreme/localization/me... Remove this comment to see the full error message
import deMessages from 'npm:devextreme/localization/messages/de.json!json';
// @ts-expect-error TS(2307): Cannot find module 'npm:devextreme/localization/me... Remove this comment to see the full error message
import ruMessages from 'npm:devextreme/localization/messages/ru.json!json';

import { locale, loadMessages, formatMessage } from 'devextreme/localization';

import service from './data.js';

const editPopupOptions = {
  width: 700,
  height: 345,
};
const amountEditorOptions = {
  format: 'currency',
  showClearButton: true,
};
const selectBoxInputAttr = { id: 'selectInput' };

class App extends React.Component {
  locales: any;

  payments: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      locale: this.getLocale(),
    };
    this.locales = service.getLocales();
    this.payments = service.getPayments();
    this.initMessages();
    locale(this.state.locale);
    this.changeLocale = this.changeLocale.bind(this);
  }

  getLocale() {
    const storageLocale = sessionStorage.getItem('locale');
    return storageLocale != null ? storageLocale : 'en';
  }

  setLocale(savingLocale) {
    sessionStorage.setItem('locale', savingLocale);
  }

  initMessages() {
    loadMessages(deMessages);
    loadMessages(ruMessages);
    loadMessages(service.getDictionary());
  }

  changeLocale(e) {
    this.setState({
      locale: e.value,
    });
    this.setLocale(e.value);
    document.location.reload();
  }

  render() {
    return (
      <div>
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid dataSource={this.payments}
          keyExpr="PaymentId">
          // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
          <Editing mode="popup"
            allowUpdating={true}
            popup={editPopupOptions} />
          // @ts-expect-error TS(2786): 'FilterRow' cannot be used as a JSX component.
          <FilterRow visible={true}
            applyFilter="auto" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="PaymentId"
            caption={formatMessage('Number')}
            allowEditing={false}
            width={100} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="ContactName"
            caption={formatMessage('Contact')} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="CompanyName"
            caption={formatMessage('Company')} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Amount"
            caption={formatMessage('Amount')}
            dataType="number"
            format="currency"
            editorOptions={amountEditorOptions} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="PaymentDate"
            caption={formatMessage('PaymentDate')}
            dataType="date" />
        </DataGrid>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <label htmlFor="selectInput">Language</label>
            &nbsp;
            // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
            <SelectBox items={this.locales}
              valueExpr="Value"
              displayExpr="Name"
              value={this.state.locale}
              onValueChanged={this.changeLocale}
              inputAttr={selectBoxInputAttr} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
