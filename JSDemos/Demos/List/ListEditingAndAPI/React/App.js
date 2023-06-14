import React, { useState } from 'react';
import SelectBox from 'devextreme-react/select-box';
import CheckBox from 'devextreme-react/check-box';
import List from 'devextreme-react/list';
import { tasks, deleteModeLabel } from './data.js';

const itemDeleteModes = ['static', 'toggle', 'slideButton', 'slideItem', 'swipe', 'context'];

const App = () => {
  const [allowDeletion, setAllowDeletion] = useState(false);
  const [itemDeleteMode, setItemDeleteMode] = useState('toggle');

  const onAllowDeletionChange = (args) => {
    setAllowDeletion(args.value);
  };

  const onItemDeleteModeChange = (args) => {
    setItemDeleteMode(args.value);
  };

  return (
    <React.Fragment>
      <div className="widget-container">
        <List
          dataSource={tasks}
          height={400}
          allowItemDeleting={allowDeletion}
          itemDeleteMode={itemDeleteMode}>
        </List>
      </div>
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <CheckBox
            text="Allow deletion"
            value={allowDeletion}
            onValueChanged={onAllowDeletionChange}>
          </CheckBox>
        </div>
        <div className="option">
          <span>Item delete mode </span>
          <SelectBox
            disabled={!allowDeletion}
            items={itemDeleteModes}
            inputAttr={deleteModeLabel}
            value={itemDeleteMode}
            onValueChanged={onItemDeleteModeChange}>
          </SelectBox>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
