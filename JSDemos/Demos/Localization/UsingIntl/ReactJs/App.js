/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import DataGrid, { Column, Editing, FilterRow } from 'devextreme-react/data-grid';
import SelectBox from 'devextreme-react/select-box';
import deMessages from 'npm:devextreme/localization/messages/de.json!json';
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
const App = () => {
  const [localeState, setLocaleState] = React.useState(() => {
    const storageLocale = sessionStorage.getItem('locale');
    return storageLocale != null ? storageLocale : 'en';
  });
  const locales = service.getLocales();
  const payments = service.getPayments();
  const setLocale = (savingLocale) => {
    sessionStorage.setItem('locale', savingLocale);
  };
  const initMessages = () => {
    loadMessages(deMessages);
    loadMessages(ruMessages);
    loadMessages(service.getDictionary());
  };
  const changeLocale = (e) => {
    setLocale(e.value);
    setLocaleState(e.value);
    document.location.reload();
  };
  React.useEffect(() => {
    locale(localeState);
    initMessages();
  }, [localeState]);
  return (
    <div>
      <DataGrid
        dataSource={payments}
        keyExpr="PaymentId"
      >
        <Editing
          mode="popup"
          allowUpdating={true}
          popup={editPopupOptions}
        />
        <FilterRow
          visible={true}
          applyFilter="auto"
        />
        <Column
          dataField="PaymentId"
          caption={formatMessage('Number')}
          allowEditing={false}
          width={100}
        />
        <Column
          dataField="ContactName"
          caption={formatMessage('Contact')}
        />
        <Column
          dataField="CompanyName"
          caption={formatMessage('Company')}
        />
        <Column
          dataField="Amount"
          caption={formatMessage('Amount')}
          dataType="number"
          format="currency"
          editorOptions={amountEditorOptions}
        />
        <Column
          dataField="PaymentDate"
          caption={formatMessage('PaymentDate')}
          dataType="date"
        />
      </DataGrid>
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <label htmlFor="selectInput">Language</label>
          &nbsp;
          <SelectBox
            items={locales}
            valueExpr="Value"
            displayExpr="Name"
            value={localeState}
            onValueChanged={changeLocale}
            inputAttr={selectBoxInputAttr}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
