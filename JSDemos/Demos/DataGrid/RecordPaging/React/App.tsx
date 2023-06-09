import React from 'react';

import DataGrid, { Scrolling, Pager, Paging } from 'devextreme-react/data-grid';
import SelectBox from 'devextreme-react/select-box';
import CheckBox from 'devextreme-react/check-box';
import { generateData, displayModeLabel } from './data.js';

const displayModes = [{ text: 'Display Mode \'full\'', value: 'full' }, { text: 'Display Mode \'compact\'', value: 'compact' }];
const allowedPageSizes = [5, 10, 'all'];
const data = generateData(100000);
class App extends React.Component {
  setState: any;

  state: any;

  displayModeChange = (value) => {
    this.setState({ ...this.state, displayMode: value });
  }

  showPageSizeSelectorChange = (value) => {
    this.setState({ ...this.state, showPageSizeSelector: value });
  }

  showInfoChange = (value) => {
    this.setState({ ...this.state, showInfo: value });
  }

  showNavButtonsChange = (value) => {
    this.setState({ ...this.state, showNavButtons: value });
  }

  isCompactMode() {
    return this.state.displayMode === 'compact';
  }

  customizeColumns(columns) {
    columns[0].width = 70;
  }

  constructor(props) {
    super(props);
    this.state = {
      displayMode: 'full',
      showPageSizeSelector: true,
      showInfo: true,
      showNavButtons: true,
    };
  }

  render() {
    return (
      <div>
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid
          id='gridContainer'
          dataSource={data}
          keyExpr="id"
          showBorders={true}
          customizeColumns={this.customizeColumns}
        >
          // @ts-expect-error TS(2786): 'Scrolling' cannot be used as a JSX component.
          <Scrolling rowRenderingMode='virtual'></Scrolling>
          // @ts-expect-error TS(2786): 'Paging' cannot be used as a JSX component.
          <Paging defaultPageSize={10} />
          // @ts-expect-error TS(2786): 'Pager' cannot be used as a JSX component.
          <Pager
            // @ts-expect-error TS(2322): Type '{ visible: boolean; allowedPageSizes: (strin... Remove this comment to see the full error message
            visible={true}
            allowedPageSizes={allowedPageSizes}
            displayMode={this.state.displayMode}
            showPageSizeSelector={this.state.showPageSizeSelector}
            showInfo={this.state.showInfo}
            showNavigationButtons={this.state.showNavButtons} />
        </DataGrid>
        <div className='options'>
          <div className='caption'>Options</div>
          <div className='option-container'>
            <div className='option'>
              // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
              <SelectBox
                id='displayModes'
                items={displayModes}
                displayExpr='text'
                inputAttr={displayModeLabel}
                valueExpr='value'
                value={this.state.displayMode}
                onValueChange={this.displayModeChange} />
            </div>
            <div className='option'>
              // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
              <CheckBox
                id='showPageSizes'
                text='Show Page Size Selector'
                value={this.state.showPageSizeSelector}
                onValueChange={this.showPageSizeSelectorChange} />
            </div>
            <div className='option'>
              // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
              <CheckBox
                id='showInfo'
                text='Show Info Text'
                value={this.state.showInfo}
                onValueChange={this.showInfoChange} />
            </div>
            <div className='option'>
              // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
              <CheckBox
                id='showNavButtons'
                text='Show Navigation Buttons'
                value={this.state.showNavButtons}
                onValueChange={this.showNavButtonsChange}
                disabled={this.isCompactMode()} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
