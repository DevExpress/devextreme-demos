import React from 'react';

import DataGrid, {
  Column,
  Selection,
  FilterRow,
  Paging,
} from 'devextreme-react/data-grid';
import { SelectBox } from 'devextreme-react/select-box';
import themes from 'devextreme/ui/themes';
import { sales, showCheckboxesModeLabel, selectAllModeLabel } from './data.js';

const showCheckBoxesModes = ['none', 'onClick', 'onLongTap', 'always'];
const selectAllModes = ['allPages', 'page'];

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);

    this.state = {
      allMode: 'allPages',
      checkBoxesMode: themes.current().startsWith('material') ? 'always' : 'onClick',
    };

    this.onCheckBoxesModeChanged = this.onCheckBoxesModeChanged.bind(this);
    this.onAllModeChanged = this.onAllModeChanged.bind(this);
  }

  render() {
    const { allMode, checkBoxesMode } = this.state;

    return (
      <div>
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid
          dataSource={sales}
          showBorders={true}
          keyExpr="orderId"
        >
          // @ts-expect-error TS(2786): 'Selection' cannot be used as a JSX component.
          <Selection
            // @ts-expect-error TS(2322): Type '{ mode: string; selectAllMode: any; showChec... Remove this comment to see the full error message
            mode="multiple"
            selectAllMode={allMode}
            showCheckBoxesMode={checkBoxesMode}
          />
          // @ts-expect-error TS(2786): 'FilterRow' cannot be used as a JSX component.
          <FilterRow visible={true} />
          // @ts-expect-error TS(2786): 'Paging' cannot be used as a JSX component.
          <Paging defaultPageSize={10} />

          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="orderId" caption="Order ID" width={90} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="city" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="country" width={180} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="region" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="date" dataType="date" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="amount" format="currency" width={90} />
        </DataGrid>

        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Select All Mode </span>
            // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
            <SelectBox
              id="select-all-mode"
              dataSource={selectAllModes}
              value={allMode}
              inputAttr={selectAllModeLabel}
              disabled={checkBoxesMode === 'none'}
              // @ts-expect-error TS(2322): Type '({ value }: { value: any; }) => void' is not... Remove this comment to see the full error message
              onValueChanged={this.onAllModeChanged}
            />
          </div>
          <div className="option checkboxes-mode">
            <span>Show Checkboxes Mode </span>
            // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
            <SelectBox
              id="show-checkboxes-mode"
              inputAttr={showCheckboxesModeLabel}
              dataSource={showCheckBoxesModes}
              value={checkBoxesMode}
              // @ts-expect-error TS(2322): Type '({ value }: { value: any; }) => void' is not... Remove this comment to see the full error message
              onValueChanged={this.onCheckBoxesModeChanged}
            />
          </div>
        </div>
      </div>
    );
  }

  onCheckBoxesModeChanged({ value }) {
    this.setState({ checkBoxesMode: value });
  }

  onAllModeChanged({ value }) {
    this.setState({ allMode: value });
  }
}

export default App;
