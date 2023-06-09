import React from 'react';

import DataGrid, {
  Column,
  Editing,
  Paging,
  RequiredRule,
  PatternRule,
  EmailRule,
  AsyncRule,
} from 'devextreme-react/data-grid';

import { createStore } from 'devextreme-aspnet-data-nojquery';

const url = 'https://js.devexpress.com/Demos/Mvc/api/DataGridEmployeesValidation';
const dataSource = createStore({
  key: 'ID',
  loadUrl: url,
  insertUrl: url,
  updateUrl: url,
  deleteUrl: url,
  onBeforeSend: (method, ajaxOptions) => {
    ajaxOptions.xhrFields = { withCredentials: true };
  },
});

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid
          dataSource={dataSource}
          showBorders={true}
          columnAutoWidth={true}
          repaintChangesOnly={true}
        >
          // @ts-expect-error TS(2786): 'Paging' cannot be used as a JSX component.
          <Paging enabled={false} />
          // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
          <Editing
            // @ts-expect-error TS(2322): Type '{ mode: string; allowUpdating: boolean; allo... Remove this comment to see the full error message
            mode="batch"
            allowUpdating={true}
            allowAdding={true} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="FirstName">
            // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
            <RequiredRule />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="LastName">
            // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
            <RequiredRule />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Position">
            // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
            <RequiredRule />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Phone">
            // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
            <RequiredRule />
            // @ts-expect-error TS(2786): 'PatternRule' cannot be used as a JSX component.
            <PatternRule
              // @ts-expect-error TS(2322): Type '{ message: string; pattern: RegExp; }' is no... Remove this comment to see the full error message
              message={'Your phone must have "(555) 555-5555" format!'}
              pattern={/^\(\d{3}\) \d{3}-\d{4}$/i}
            />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Email">
            // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
            <RequiredRule />
            // @ts-expect-error TS(2786): 'EmailRule' cannot be used as a JSX component.
            <EmailRule />
            // @ts-expect-error TS(2786): 'AsyncRule' cannot be used as a JSX component.
            <AsyncRule
              // @ts-expect-error TS(2322): Type '{ message: string; validationCallback: (para... Remove this comment to see the full error message
              message="Email address is not unique"
              validationCallback={asyncValidation}
            />
          </Column>
        </DataGrid>
      </React.Fragment>
    );
  }
}

function asyncValidation(params) {
  return fetch('https://js.devexpress.com/Demos/Mvc/RemoteValidation/CheckUniqueEmailAddress', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;',
    },
    body: JSON.stringify({
      id: params.data.ID,
      email: params.value,
    }),
  }).then((response) => response.json());
}

export default App;
