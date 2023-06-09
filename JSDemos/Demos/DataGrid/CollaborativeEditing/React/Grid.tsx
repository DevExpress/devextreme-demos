import React from 'react';
import DataGrid, {
  Column, Editing, Paging, RequiredRule, RangeRule, Lookup,
} from 'devextreme-react/data-grid';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';

class Grid extends React.Component {
  maxDate: any;

  props: any;

  statesStore: any;

  constructor(props) {
    super(props);

    this.maxDate = new Date(3000, 0);
    this.statesStore = AspNetData.createStore({
      key: 'ID',
      loadUrl: 'https://js.devexpress.com/Demos/NetCore/api/DataGridStatesLookup',
    });
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid
        dataSource={this.props.dataSource}
        height={600}
        showBorders={true}
        repaintChangesOnly={true}
        highlightChanges={true}
      >
        // @ts-expect-error TS(2786): 'Paging' cannot be used as a JSX component.
        <Paging
          // @ts-expect-error TS(2322): Type '{ enabled: boolean; }' is not assignable to ... Remove this comment to see the full error message
          enabled={false}
        />

        // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
        <Editing
          // @ts-expect-error TS(2322): Type '{ mode: string; refreshMode: string; allowUp... Remove this comment to see the full error message
          mode="cell"
          refreshMode="reshape"
          allowUpdating={true}
          allowDeleting={true}
          allowAdding={true}
          useIcons={true}
        />

        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ children: Element; dataField: string; capt... Remove this comment to see the full error message
          dataField="Prefix"
          caption="Title"
          width={50}
        >
          // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
          <RequiredRule />
        </Column>

        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ children: Element; dataField: string; }' i... Remove this comment to see the full error message
          dataField="FirstName"
        >
          // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
          <RequiredRule />
        </Column>

        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ children: Element[]; dataField: string; ca... Remove this comment to see the full error message
          dataField="StateID"
          caption="State"
        >
          // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
          <Lookup
            // @ts-expect-error TS(2322): Type '{ dataSource: any; displayExpr: string; valu... Remove this comment to see the full error message
            dataSource={this.statesStore}
            displayExpr="Name"
            valueExpr="ID"
          />
          // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
          <RequiredRule />
        </Column>

        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ children: Element; dataField: string; data... Remove this comment to see the full error message
          dataField="BirthDate"
          dataType="date"
        >
          // @ts-expect-error TS(2786): 'RangeRule' cannot be used as a JSX component.
          <RangeRule
            // @ts-expect-error TS(2322): Type '{ max: any; message: string; }' is not assig... Remove this comment to see the full error message
            max={this.maxDate}
            message="Date can not be greater than 01/01/3000"
          />
        </Column>

      </DataGrid>
    );
  }
}

export default Grid;
