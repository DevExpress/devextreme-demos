import React, { useState } from 'react';
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

function App() {
  const [allMode, setAllMode] = useState('allPages');
  const [checkBoxesMode, setCheckBoxesMode] = useState(
    themes.current().startsWith('material') ? 'always' : 'onClick',
  );

  const onCheckBoxesModeChanged = ({ value }) => {
    setCheckBoxesMode(value);
  };

  const onAllModeChanged = ({ value }) => {
    setAllMode(value);
  };

  return (
    <div>
      <DataGrid dataSource={sales} showBorders={true} keyExpr="orderId">
        <Selection
          mode="multiple"
          selectAllMode={allMode}
          showCheckBoxesMode={checkBoxesMode}
        />
        <FilterRow visible={true} />
        <Paging defaultPageSize={10} />

        <Column dataField="orderId" caption="Order ID" width={90} />
        <Column dataField="city" />
        <Column dataField="country" width={180} />
        <Column dataField="region" />
        <Column dataField="date" dataType="date" />
        <Column dataField="amount" format="currency" width={90} />
      </DataGrid>

      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <span>Select All Mode </span>
          <SelectBox
            id="select-all-mode"
            dataSource={selectAllModes}
            value={allMode}
            inputAttr={selectAllModeLabel}
            disabled={checkBoxesMode === 'none'}
            onValueChanged={onAllModeChanged}
          />
        </div>
        <div className="option checkboxes-mode">
          <span>Show Checkboxes Mode </span>
          <SelectBox
            id="show-checkboxes-mode"
            inputAttr={showCheckboxesModeLabel}
            dataSource={showCheckBoxesModes}
            value={checkBoxesMode}
            onValueChanged={onCheckBoxesModeChanged}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
