import React from 'react';

import DataGrid, { Column, ColumnChooser } from 'devextreme-react/data-grid';
import { countries } from './data.js';

const gdpFormat = {
  type: 'percent',
  precision: 1,
};

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid
        id="grid"
        dataSource={countries}
        keyExpr="ID"
        columnAutoWidth={true}
        allowColumnReordering={true}
        showBorders={true}
      >
        // @ts-expect-error TS(2786): 'ColumnChooser' cannot be used as a JSX component.
        <ColumnChooser enabled={true} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Country" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Area" headerCellRender={this.renderAreaCellHeader} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column caption="Population">
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; format... Remove this comment to see the full error message
            dataField="Population_Total"
            caption="Total"
            format="fixedPoint"
          />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; format... Remove this comment to see the full error message
            dataField="Population_Urban"
            caption="Urban"
            format="percent"
          />
        </Column>
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column caption="Nominal GDP">
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; format... Remove this comment to see the full error message
            dataField="GDP_Total"
            caption="Total, mln $"
            format="fixedPoint"
            sortOrder="desc"
          />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column caption="By Sector">
            // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
            <Column
              // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; format... Remove this comment to see the full error message
              dataField="GDP_Agriculture"
              caption="Agriculture"
              format={gdpFormat}
              width={95}
            />
            // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
            <Column
              // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; format... Remove this comment to see the full error message
              dataField="GDP_Industry"
              caption="Industry"
              format={gdpFormat}
              width={80}
            />
            // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
            <Column
              // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; format... Remove this comment to see the full error message
              dataField="GDP_Services"
              caption="Services"
              format={gdpFormat}
              width={85}
            />
          </Column>
        </Column>
      </DataGrid>
    );
  }

  renderAreaCellHeader() {
    return <div>Area, km<sup>2</sup></div>;
  }
}

export default App;
