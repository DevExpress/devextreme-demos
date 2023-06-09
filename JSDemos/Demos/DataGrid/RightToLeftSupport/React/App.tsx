import React from 'react';
import DataGrid, { Column, Paging, SearchPanel } from 'devextreme-react/data-grid';
import SelectBox from 'devextreme-react/select-box';

import service from './data.js';

const populationFormat = { type: 'fixedPoint', precision: 0 };
const areaFormat = { type: 'fixedPoint', precision: 0 };
const languageLabel = { 'aria-label': 'Language' };

class App extends React.Component {
  dataSource: any;

  languages: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.dataSource = service.getEuropeanUnion();
    this.languages = ['Arabic (Right-to-Left direction)', 'English (Left-to-Right direction)'];
    this.state = {
      placeholder: 'Search...',
      rtlEnabled: false,
      selectedValue: this.languages[1],
    };
    this.selectLanguage = this.selectLanguage.bind(this);
    this.headerCellRender = this.headerCellRender.bind(this);
  }

  selectLanguage(e) {
    const newRtlEnabled = e.value === this.languages[0];
    this.setState({
      rtlEnabled: newRtlEnabled,
      placeholder: newRtlEnabled ? 'بحث' : 'Search...',
      selectedValue: e.value,
    });
  }

  headerCellRender() {
    return (
      <div>
        {this.state.rtlEnabled ? (
          <div>المساحة (كم<sup>2</sup>)</div>
        ) : (
          <div>Area (km<sup>2</sup>)</div>
        )}
      </div>
    );
  }

  render() {
    const { rtlEnabled, placeholder, selectedValue } = this.state;
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid id="gridContainer"
          dataSource={this.dataSource}
          keyExpr="nameEn"
          rtlEnabled={rtlEnabled}
          showBorders={true}>
          // @ts-expect-error TS(2786): 'Paging' cannot be used as a JSX component.
          <Paging defaultPageSize={15} />
          // @ts-expect-error TS(2786): 'SearchPanel' cannot be used as a JSX component.
          <SearchPanel visible={true} placeholder={placeholder} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField={rtlEnabled ? 'nameAr' : 'nameEn'}
            caption={rtlEnabled ? 'الدولة' : 'Name'} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField={rtlEnabled ? 'capitalAr' : 'capitalEn'}
            caption={rtlEnabled ? 'عاصمة' : 'Capital'} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="population"
            caption={rtlEnabled ? 'عدد السكان (نسمة) 2013' : 'Population'}
            format={populationFormat} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="area"
            headerCellRender={this.headerCellRender}
            format={areaFormat} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="accession" visible={false} />
        </DataGrid>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Language: </span>
            // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
            <SelectBox id="select-language"
              items={this.languages}
              value={selectedValue}
              inputAttr={languageLabel}
              width={250}
              onValueChanged={this.selectLanguage} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
