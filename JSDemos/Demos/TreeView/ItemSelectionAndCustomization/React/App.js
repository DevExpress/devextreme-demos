import React, { useState, useRef } from 'react';
import TreeView from 'devextreme-react/tree-view';
import List from 'devextreme-react/list';
import SelectBox from 'devextreme-react/select-box';
import CheckBox from 'devextreme-react/check-box';

import { employees, showCheckboxesModeLabel, selectionModeLabel } from './data.js';

function App() {
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [selectNodesRecursive, setSelectNodesRecursive] = useState(true);
  const [selectByClick, setSelectByClick] = useState(false);
  const [showCheckBoxesModes] = useState(['normal', 'selectAll', 'none']);
  const [showCheckBoxesMode, setShowCheckBoxesMode] = useState(showCheckBoxesModes[0]);
  const [selectionModes] = useState(['multiple', 'single']);
  const [selectionMode, setSelectionMode] = useState(selectionModes[0]);
  const [isSelectionModeDisabled, setIsSelectionModeDisabled] = useState(false);
  const [isRecursiveDisabled, setIsRecursiveDisabled] = useState(false);
  const treeViewRef = useRef();

  const treeViewSelectionChanged = (e) => {
    syncSelection(e.component);
  };

  const treeViewContentReady = (e) => {
    syncSelection(e.component);
  };

  const syncSelection = (treeView) => {
    const selectedEmployees = treeView.getSelectedNodes()
      .map((node) => node.itemData);

    setSelectedEmployees(selectedEmployees);
  };

  const showCheckBoxesModeValueChanged = (e) => {
    const showCheckBoxesMode = e.value;

    if (showCheckBoxesMode === 'selectAll') {
      setSelectionMode('multiple');
      setIsRecursiveDisabled(false);
    }
    setIsSelectionModeDisabled(showCheckBoxesMode === 'selectAll');
    setShowCheckBoxesMode(showCheckBoxesMode);
  };

  const selectionModeValueChanged = (e) => {
    const selectionMode = e.value;

    if (selectionMode === 'single') {
      setSelectNodesRecursive(false);
      treeViewRef.current.instance.unselectAll();
    }
    setIsRecursiveDisabled(selectionMode === 'single');
    setSelectionMode(selectionMode);
  };

  const selectNodesRecursiveValueChanged = (e) => {
    setSelectNodesRecursive(e.value);
  };

  const selectByClickValueChanged = (e) => {
    setSelectByClick(e.value);
  };

  const renderTreeViewItem = (item) => {
    return `${item.fullName} (${item.position})`;
  };

  const renderListItem = (item) => {
    return `${item.prefix} ${item.fullName} (${item.position})`;
  };

  return (
    <div>
      <div className="form">
        <h4>Employees</h4>
        <TreeView
          id="treeview"
          ref={treeViewRef}
          width={340}
          height={320}
          items={employees}
          selectNodesRecursive={selectNodesRecursive}
          selectByClick={selectByClick}
          showCheckBoxesMode={showCheckBoxesMode}
          selectionMode={selectionMode}
          onSelectionChanged={treeViewSelectionChanged}
          onContentReady={treeViewContentReady}
          itemRender={renderTreeViewItem}
        />
        {' '}
        <div className="selected-container">Selected employees
          <List
            id="selected-employees"
            width={400}
            height={200}
            showScrollbar="always"
            items={selectedEmployees}
            itemRender={renderListItem}
          />
        </div>
      </div>
      <div className="options">
        <div className="caption">Options</div>
        <div className="options-container">
          <div className="option">
            <span>Show Check Boxes Mode:</span>
            <div className="editor-container">
              <SelectBox
                items={showCheckBoxesModes}
                value={showCheckBoxesMode}
                inputAttr={showCheckboxesModeLabel}
                onValueChanged={showCheckBoxesModeValueChanged} />
            </div>
          </div>
          <div className="option">
            <span>Selection Mode:</span>
            <div className="editor-container">
              <SelectBox
                items={selectionModes}
                value={selectionMode}
                inputAttr={selectionModeLabel}
                disabled={isSelectionModeDisabled}
                onValueChanged={selectionModeValueChanged} />
            </div>
          </div>
          <div className="option">
            <div className="caption-placeholder">&nbsp;</div>
            <div className="editor-container">
              <CheckBox
                text="Select Nodes Recursive"
                value={selectNodesRecursive}
                disabled={isRecursiveDisabled}
                onValueChanged={selectNodesRecursiveValueChanged} />
            </div>
          </div>
          <div className="option">
            <div className="caption-placeholder">&nbsp;</div>
            <div className="editor-container">
              <CheckBox
                text="Select By Click"
                value={selectByClick}
                onValueChanged={selectByClickValueChanged} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;