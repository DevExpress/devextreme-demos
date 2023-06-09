import React from 'react';
import DataGrid, {
  Column,
  Paging,
  Scrolling,
  Selection,
} from 'devextreme-react/data-grid';
import DropDownBox from 'devextreme-react/drop-down-box';

const dropDownOptions = { width: 500 };
const ownerLabel = { 'aria-label': 'Owner' };

export default class EmployeeDropDownBoxComponent extends React.Component {
  props: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: [props.data.value],
      isDropDownOpened: false,
    };
    this.onSelectionChanged = this.onSelectionChanged.bind(this);
    this.contentRender = this.contentRender.bind(this);
    this.boxOptionChanged = this.boxOptionChanged.bind(this);
  }

  boxOptionChanged(e) {
    if (e.name === 'opened') {
      this.setState({
        isDropDownOpened: e.value,
      });
    }
  }

  contentRender() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid
        dataSource={this.props.data.column.lookup.dataSource}
        remoteOperations={true}
        height={250}
        selectedRowKeys={this.state.selectedRowKeys}
        hoverStateEnabled={true}
        onSelectionChanged={this.onSelectionChanged}
        focusedRowEnabled={true}
        defaultFocusedRowKey={this.state.selectedRowKeys[0]}
      >
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="FullName" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Title" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Department" />
        // @ts-expect-error TS(2786): 'Paging' cannot be used as a JSX component.
        <Paging enabled={true} defaultPageSize={10} />
        // @ts-expect-error TS(2786): 'Scrolling' cannot be used as a JSX component.
        <Scrolling mode="virtual" />
        // @ts-expect-error TS(2786): 'Selection' cannot be used as a JSX component.
        <Selection mode="single" />
      </DataGrid>
    );
  }

  onSelectionChanged(selectionChangedArgs) {
    this.setState({
      selectedRowKeys: selectionChangedArgs.selectedRowKeys,
      isDropDownOpened: false,
    });
    this.props.data.setValue(this.state.selectedRowKeys[0]);
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'DropDownBox' cannot be used as a JSX component.
      <DropDownBox
        onOptionChanged={this.boxOptionChanged}
        opened={this.state.isDropDownOpened}
        dropDownOptions={dropDownOptions}
        dataSource={this.props.data.column.lookup.dataSource}
        value={this.state.selectedRowKeys[0]}
        displayExpr="FullName"
        valueExpr="ID"
        inputAttr={ownerLabel}
        contentRender={this.contentRender}>
      </DropDownBox>
    );
  }
}
