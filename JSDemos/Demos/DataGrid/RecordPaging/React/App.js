import React, { useState } from 'react';
import DataGrid, { Scrolling, Pager, Paging } from 'devextreme-react/data-grid';
import SelectBox from 'devextreme-react/select-box';
import CheckBox from 'devextreme-react/check-box';
import { generateData, displayModeLabel } from './data.js';

const displayModes = [{ text: 'Display Mode \'full\'', value: 'full' }, { text: 'Display Mode \'compact\'', value: 'compact' }];
const allowedPageSizes = [5, 10, 'all'];
const data = generateData(100000);

const App = () => {
  const [state, setState] = useState({
    displayMode: 'full',
    showPageSizeSelector: true,
    showInfo: true,
    showNavButtons: true,
  });

  const displayModeChange = (value) => {
    setState({ ...state, displayMode: value });
  }

  const showPageSizeSelectorChange = (value) => {
    setState({ ...state, showPageSizeSelector: value });
  }

  const showInfoChange = (value) => {
    setState({ ...state, showInfo: value });
  }

  const showNavButtonsChange = (value) => {
    setState({ ...state, showNavButtons: value });
  }

  const isCompactMode = () => {
    return state.displayMode === 'compact';
  }

  const customizeColumns = (columns) => {
    columns[0].width = 70;
  }

  return (
    <div>
      <DataGrid
        id='gridContainer'
        dataSource={data}
        keyExpr="id"
        showBorders={true}
        customizeColumns={customizeColumns}
      >
        <Scrolling rowRenderingMode='virtual'></Scrolling>
        <Paging defaultPageSize={10} />
        <Pager
          visible={true}
          allowedPageSizes={allowedPageSizes}
          displayMode={state.displayMode}
          showPageSizeSelector={state.showPageSizeSelector}
          showInfo={state.showInfo}
          showNavigationButtons={state.showNavButtons} />
      </DataGrid>
      <div className='options'>
        <div className='caption'>Options</div>
        <div className='option-container'>
          <div className='option'>
            <SelectBox
              id='displayModes'
              items={displayModes}
              displayExpr='text'
              inputAttr={displayModeLabel}
              valueExpr='value'
              value={state.displayMode}
              onValueChange={displayModeChange} />
          </div>
          <div className='option'>
            <CheckBox
              id='showPageSizes'
              text='Show Page Size Selector'
              value={state.showPageSizeSelector}
              onValueChange={showPageSizeSelectorChange} />
          </div>
          <div className='option'>
            <CheckBox
              id='showInfo'
              text='Show Info Text'
              value={state.showInfo}
              onValueChange={showInfoChange} />
          </div>
          <div className='option'>
            <CheckBox
              id='showNavButtons'
              text='Show Navigation Buttons'
              value={state.showNavButtons}
              onValueChange={showNavButtonsChange}
              disabled={isCompactMode()} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;