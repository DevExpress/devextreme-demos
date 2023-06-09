import React from 'react';

import PivotGrid, {
  FieldChooser,
  FieldPanel,
  StateStoring,
} from 'devextreme-react/pivot-grid';
import Button from 'devextreme-react/button';

import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

import sales from './data.js';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="pivotgrid-demo">
          <div className="desc-container">Expand, filter, sort and perform other operations
            on&nbsp;the PivotGrid&rsquo;s columns and
            rows. <a onClick={this.onRefreshClick}>Refresh</a> the web page and note that
            the PivotGrid&rsquo;s state is&nbsp;automatically persisted.
          </div>
          // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
          <Button
            text={"Reset the PivotGrid's State"}
            onClick={this.onResetClick}
          />
          // @ts-expect-error TS(2786): 'PivotGrid' cannot be used as a JSX component.
          <PivotGrid
            id="sales"
            dataSource={dataSource}
            allowSortingBySummary={true}
            allowSorting={true}
            allowFiltering={true}
            allowExpandAll={true}
            showBorders={true}
            height={570}
            onContextMenuPreparing={this.onContextMenuPreparing}
          >
            // @ts-expect-error TS(2786): 'StateStoring' cannot be used as a JSX component.
            <StateStoring
              // @ts-expect-error TS(2322): Type '{ enabled: boolean; type: string; storageKey... Remove this comment to see the full error message
              enabled={true}
              type="localStorage"
              storageKey="dx-widget-gallery-pivotgrid-storing"
            />
            // @ts-expect-error TS(2786): 'FieldPanel' cannot be used as a JSX component.
            <FieldPanel
              // @ts-expect-error TS(2322): Type '{ visible: boolean; }' is not assignable to ... Remove this comment to see the full error message
              visible={true}
            />
            // @ts-expect-error TS(2786): 'FieldChooser' cannot be used as a JSX component.
            <FieldChooser enabled={true} />
          </PivotGrid>
        </div>
      </React.Fragment>
    );
  }

  onRefreshClick() {
    window.location.reload();
  }

  onResetClick() {
    dataSource.state({});
  }

  onContextMenuPreparing(e) {
    const dataSource = e.component.getDataSource();
    const sourceField = e.field;

    if (sourceField) {
      if (!sourceField.groupName || sourceField.groupIndex === 0) {
        e.items.push({
          text: 'Hide field',
          onItemClick() {
            let fieldIndex;
            if (sourceField.groupName) {
              fieldIndex = dataSource
                .getAreaFields(sourceField.area, true)[sourceField.areaIndex]
                .index;
            } else {
              fieldIndex = sourceField.index;
            }

            dataSource.field(fieldIndex, {
              area: null,
            });
            dataSource.load();
          },
        });
      }

      if (sourceField.dataType === 'number') {
        const menuItems = [];

        e.items.push({ text: 'Summary Type', items: menuItems });

        ['Sum', 'Avg', 'Min', 'Max'].forEach((summaryType) => {
          const summaryTypeValue = summaryType.toLowerCase();

          menuItems.push({
            text: summaryType,
            value: summaryType.toLowerCase(),
            onItemClick(args) {
              setSummaryType(args, sourceField);
            },
            selected: e.field.summaryType === summaryTypeValue,
          });
        });
      }
    }
  }
}

const dataSource = new PivotGridDataSource({
  fields: [{
    caption: 'Region',
    width: 120,
    dataField: 'region',
    area: 'row',
    sortBySummaryField: 'sales',
  }, {
    caption: 'City',
    dataField: 'city',
    width: 150,
    area: 'row',
  }, {
    dataField: 'date',
    dataType: 'date',
    area: 'column',
  }, {
    groupName: 'date',
    groupInterval: 'year',
  }, {
    groupName: 'date',
    groupInterval: 'quarter',
  }, {
    dataField: 'sales',
    dataType: 'number',
    summaryType: 'sum',
    format: 'currency',
    area: 'data',
  }],
  store: sales,
});

function setSummaryType(args, sourceField) {
  dataSource.field(sourceField.index, {
    summaryType: args.itemData.value,
  });

  dataSource.load();
}

export default App;
