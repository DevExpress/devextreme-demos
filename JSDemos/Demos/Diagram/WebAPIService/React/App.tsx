import React from 'react';
import Diagram, {
  Nodes, AutoLayout, ContextToolbox, Toolbox, Group,
} from 'devextreme-react/diagram';
import { createStore } from 'devextreme-aspnet-data-nojquery';

const url = 'https://js.devexpress.com/Demos/Mvc/api/DiagramEmployees';

const dataSource = createStore({
  key: 'ID',
  loadUrl: `${url}/Employees`,
  insertUrl: `${url}/InsertEmployee`,
  updateUrl: `${url}/UpdateEmployee`,
  deleteUrl: `${url}/DeleteEmployee`,
  onBeforeSend(method, ajaxOptions) {
    ajaxOptions.xhrFields = { withCredentials: true };
  },
  onInserting(values) {
    values.ID = 0;
    values.Title = values.Title || 'New Position';
    values.Prefix = 'Mr';
    values.FullName = 'New Employee';
    values.City = 'LA';
    values.State = 'CA';
    values.HireDate = new Date();
  },
});

const shapes = ['rectangle'];

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Diagram' cannot be used as a JSX component.
      <Diagram id="diagram">
        // @ts-expect-error TS(2786): 'Nodes' cannot be used as a JSX component.
        <Nodes dataSource={dataSource} keyExpr="ID" textExpr="Title" parentKeyExpr="HeadID">
          // @ts-expect-error TS(2786): 'AutoLayout' cannot be used as a JSX component.
          <AutoLayout type="tree" />
        </Nodes>
        // @ts-expect-error TS(2786): 'ContextToolbox' cannot be used as a JSX component... Remove this comment to see the full error message
        <ContextToolbox shapeIconsPerRow={2} width={100} shapes={shapes}>
        </ContextToolbox>
        // @ts-expect-error TS(2786): 'Toolbox' cannot be used as a JSX component.
        <Toolbox showSearch={false} shapeIconsPerRow={2}>
          // @ts-expect-error TS(2786): 'Group' cannot be used as a JSX component.
          <Group title="Items" shapes={shapes} />
        </Toolbox>
      </Diagram>
    );
  }
}

export default App;
