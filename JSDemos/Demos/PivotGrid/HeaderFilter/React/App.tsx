import React from 'react';
import {
  PivotGrid, HeaderFilter, Search, FieldChooser, FieldPanel,
} from 'devextreme-react/pivot-grid';
import { CheckBox } from 'devextreme-react/check-box';

import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
import XmlaStore from 'devextreme/ui/pivot_grid/xmla_store';

const dataSource = new PivotGridDataSource({
  fields: [
    { dataField: '[Product].[Category]', area: 'column' },
    { dataField: '[Product].[Subcategory]', area: 'column' },
    { dataField: '[Customer].[City]', area: 'row' },
    { dataField: '[Measures].[Internet Total Product Cost]', area: 'data', format: 'currency' },
    {
      dataField: '[Customer].[Country]',
      area: 'filter',
      filterValues: ['[Customer].[Country].&[United Kingdom]'],
    },
    {
      dataField: '[Ship Date].[Calendar Year]',
      area: 'filter',
      filterValues: ['[Ship Date].[Calendar Year].&[2004]'],
    },
  ],
  store: new XmlaStore({
    // @ts-expect-error TS(2345): Argument of type '{ type: string; url: string; cat... Remove this comment to see the full error message
    type: 'xmla',
    url: 'https://demos.devexpress.com/Services/OLAP/msmdpump.dll',
    catalog: 'Adventure Works DW Standard Edition',
    cube: 'Adventure Works',
  }),
});

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);

    this.state = {
      searchEnabled: true,
      showRelevantValues: true,
    };

    this.onSearchEnabledChanged = this.onSearchEnabledChanged.bind(this);
    this.onShowRelevantValuesChanged = this.onShowRelevantValuesChanged.bind(this);
  }

  render() {
    const { searchEnabled, showRelevantValues } = this.state;

    return (
      <div>
        // @ts-expect-error TS(2786): 'PivotGrid' cannot be used as a JSX component.
        <PivotGrid
          id="sales"
          allowFiltering={true}
          allowSorting={true}
          allowSortingBySummary={true}
          height={570}
          showBorders={true}
          dataSource={dataSource}
        >
          // @ts-expect-error TS(2786): 'HeaderFilter' cannot be used as a JSX component.
          <HeaderFilter
            // @ts-expect-error TS(2322): Type '{ children: Element; showRelevantValues: any... Remove this comment to see the full error message
            showRelevantValues={showRelevantValues}
            width={300}
            height={400}
          >
            // @ts-expect-error TS(2786): 'Search' cannot be used as a JSX component.
            <Search enabled={searchEnabled} />
          </HeaderFilter>
          // @ts-expect-error TS(2786): 'FieldChooser' cannot be used as a JSX component.
          <FieldChooser allowSearch={true} />
          // @ts-expect-error TS(2786): 'FieldPanel' cannot be used as a JSX component.
          <FieldPanel visible={true} />
        </PivotGrid>
        <div className="options">
          <div className="caption">Options</div>
          <div className="options-container">
            <div className="option">
              // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
              <CheckBox
                value={searchEnabled}
                text="Allow Search"
                onValueChanged={this.onSearchEnabledChanged}
              />
            </div>
            <div className="option">
              // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
              <CheckBox
                value={showRelevantValues}
                text="Show Relevant Values"
                onValueChanged={this.onShowRelevantValuesChanged}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  onSearchEnabledChanged(data) {
    this.setState({
      searchEnabled: data.value,
    });
  }

  onShowRelevantValuesChanged(data) {
    this.setState({
      showRelevantValues: data.value,
    });
  }
}

export default App;
