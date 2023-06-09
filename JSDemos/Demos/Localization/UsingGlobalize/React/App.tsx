/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import DataGrid, { Column, Editing, FilterRow } from 'devextreme-react/data-grid';
import SelectBox from 'devextreme-react/select-box';

import 'devextreme/localization/globalize/number';
import 'devextreme/localization/globalize/date';
import 'devextreme/localization/globalize/currency';
import 'devextreme/localization/globalize/message';

// @ts-expect-error TS(2307): Cannot find module 'npm:devextreme/localization/me... Remove this comment to see the full error message
import deMessages from 'npm:devextreme/localization/messages/de.json!json';
// @ts-expect-error TS(2307): Cannot find module 'npm:devextreme/localization/me... Remove this comment to see the full error message
import ruMessages from 'npm:devextreme/localization/messages/ru.json!json';

// @ts-expect-error TS(2307): Cannot find module 'npm:devextreme-cldr-data/de.js... Remove this comment to see the full error message
import deCldrData from 'npm:devextreme-cldr-data/de.json!json';
// @ts-expect-error TS(2307): Cannot find module 'npm:devextreme-cldr-data/ru.js... Remove this comment to see the full error message
import ruCldrData from 'npm:devextreme-cldr-data/ru.json!json';
// @ts-expect-error TS(2307): Cannot find module 'npm:devextreme-cldr-data/suppl... Remove this comment to see the full error message
import supplementalCldrData from 'npm:devextreme-cldr-data/supplemental.json!json';

import Globalize from 'globalize';

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
    this.initGlobalize();
    this.changeLocale = this.changeLocale.bind(this);
  }

  getLocale() {
    const locale = sessionStorage.getItem('locale');
    return locale != null ? locale : 'en';
  }

  setLocale(locale) {
    sessionStorage.setItem('locale', locale);
  }

  initGlobalize() {
    Globalize.load(
      deCldrData,
      ruCldrData,
      supplementalCldrData,
    );
    Globalize.loadMessages(deMessages);
    Globalize.loadMessages(ruMessages);
    Globalize.loadMessages(service.getDictionary());
    Globalize.locale(this.state.locale);
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
            caption={Globalize.formatMessage('Number')}
            allowEditing={false}
            width={100} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="ContactName"
            caption={Globalize.formatMessage('Contact')} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="CompanyName"
            caption={Globalize.formatMessage('Company')} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Amount"
            caption={Globalize.formatMessage('Amount')}
            dataType="number"
            format="currency"
            editorOptions={amountEditorOptions} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="PaymentDate"
            caption={Globalize.formatMessage('PaymentDate')}
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
