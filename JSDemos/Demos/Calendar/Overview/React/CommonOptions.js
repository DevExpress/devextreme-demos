import { CheckBox, SelectBox } from 'devextreme-react';
import React from 'react';

const zoomLevels = ['month', 'year', 'decade', 'century'];
const selectionModes = ['single', 'multiple', 'range'];
const zoomLevelLabel = { 'aria-label': 'Zoom Level' };
const selectionModeLabel = { 'aria-label': 'Selection Mode' };

function CommonOptions(props) {
  const {
    zoomLevel,
    onZoomLevelChange,
    onSelectionModeChange,
    onUseCellTemplateChange,
    onDisabledChange,
  } = props;

  return (
    <React.Fragment>
      <div className="option">
        <span>Zoom level</span>
        <SelectBox
          dataSource={zoomLevels}
          value={zoomLevel}
          inputAttr={zoomLevelLabel}
          onValueChanged={onZoomLevelChange}
        />
      </div>
      <div className="option">
        <span>Selection mode</span>
        <SelectBox
          dataSource={selectionModes}
          defaultValue='single'
          inputAttr={selectionModeLabel}
          onValueChanged={onSelectionModeChange}
        />
      </div>
      <div className="option">
        <CheckBox
          text='Use custom cell template'
          onValueChanged={onUseCellTemplateChange}
        />
      </div>
      <div className="option">
        <CheckBox
          text='Disable the calendar'
          onValueChanged={onDisabledChange}
        />
      </div>
    </React.Fragment>
  );
}

export default CommonOptions;
