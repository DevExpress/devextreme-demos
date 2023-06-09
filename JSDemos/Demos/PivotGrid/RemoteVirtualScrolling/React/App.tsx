import React from 'react';

import PivotGrid, {
  FieldPanel,
  FieldChooser,
  HeaderFilter,
  Search,
  Scrolling,
} from 'devextreme-react/pivot-grid';

import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
import XmlaStore from 'devextreme/ui/pivot_grid/xmla_store';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="long-title">
          <h3>Sales Statistics</h3>
        </div>
        // @ts-expect-error TS(2786): 'PivotGrid' cannot be used as a JSX component.
        <PivotGrid
          dataSource={dataSource}
          allowSorting={true}
          allowFiltering={true}
          height={570}
          showBorders={true}
        >
          // @ts-expect-error TS(2786): 'FieldPanel' cannot be used as a JSX component.
          <FieldPanel visible={true} showFilterFields={false} />
          // @ts-expect-error TS(2786): 'FieldChooser' cannot be used as a JSX component.
          <FieldChooser allowSearch={true} />
          // @ts-expect-error TS(2786): 'HeaderFilter' cannot be used as a JSX component.
          <HeaderFilter>
            // @ts-expect-error TS(2786): 'Search' cannot be used as a JSX component.
            <Search enabled={true} />
          </HeaderFilter>
          // @ts-expect-error TS(2786): 'Scrolling' cannot be used as a JSX component.
          <Scrolling mode="virtual" />
        </PivotGrid>
      </React.Fragment>
    );
  }
}

const dataSource = new PivotGridDataSource({
  paginate: true,
  fields: [
    { dataField: '[Customer].[Customer]', area: 'row' },
    { dataField: '[Ship Date].[Calendar Year]', area: 'column' },
    { dataField: '[Ship Date].[Month of Year]', area: 'column' },
    { dataField: '[Measures].[Internet Sales Amount]', area: 'data' },
  ],
  store: new XmlaStore({
    // @ts-expect-error TS(2345): Argument of type '{ type: string; url: string; cat... Remove this comment to see the full error message
    type: 'xmla',
    url: 'https://demos.devexpress.com/Services/OLAP/msmdpump.dll',
    catalog: 'Adventure Works DW Standard Edition',
    cube: 'Adventure Works',
  }),
});

export default App;
