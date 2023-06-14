import React, { useState, useEffect } from 'react';
import DataGrid, { Column, Editing, FilterRow } from 'devextreme-react/data-grid';
import SelectBox from 'devextreme-react/select-box';

import 'devextreme/localization/globalize/number';
import 'devextreme/localization/globalize/date';
import 'devextreme/localization/globalize/currency';
import 'devextreme/localization/globalize/message';

import deMessages from 'npm:devextreme/localization/messages/de.json!json';
import ruMessages from 'npm:devextreme/localization/messages/ru.json!json';

import deCldrData from 'npm:devextreme-cldr-data/de.json!json';
import ruCldrData from 'npm:devextreme-cldr-data/ru.json!json';
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

function App() {
  const [locale, setLocale] = useState(getLocale());
  const locales = service.getLocales();
  const payments = service.getPayments();

  useEffect(() => {
    initGlobalize();
  }, [locale]);

  function getLocale() {
    const locale = sessionStorage.getItem('locale');
    return locale != null ? locale : 'en';
  }

  function initGlobalize() {
    Globalize.load(
      deCldrData,
      ruCldrData,
      supplementalCldrData,
    );
    Globalize.loadMessages(deMessages);
    Globalize.loadMessages(ruMessages);
    Globalize.loadMessages(service.getDictionary());
    Globalize.locale(locale);
  }

  function changeLocale(e) {
    setLocale(e.value);
    sessionStorage.setItem('locale', e.value);
    document.location.reload();
  }

  return (
    <div>
      <DataGrid dataSource={payments}
        keyExpr="PaymentId">
        <Editing mode="popup"
          allowUpdating={true}
          popup={editPopupOptions} />
        <FilterRow visible={true}
          applyFilter="auto" />
        <Column dataField="PaymentId"
          caption={Globalize.formatMessage('Number')}
          allowEditing={false}
          width={100} />
        <Column dataField="ContactName"
          caption={Globalize.formatMessage('Contact')} />
        <Column dataField="CompanyName"
          caption={Globalize.formatMessage('Company')} />
        <Column dataField="Amount"
          caption={Globalize.formatMessage('Amount')}
          dataType="number"
          format="currency"
          editorOptions={amountEditorOptions} />
        <Column dataField="PaymentDate"
          caption={Globalize.formatMessage('PaymentDate')}
          dataType="date" />
      </DataGrid>
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <label htmlFor="selectInput">Language</label>
          &nbsp;
          <SelectBox items={locales}
            valueExpr="Value"
            displayExpr="Name"
            value={locale}
            onValueChanged={changeLocale}
            inputAttr={selectBoxInputAttr} />
        </div>
      </div>
    </div>
  );
}

export default App;
