import React from 'react';

import {
  PivotGrid,
  FieldChooser,
} from 'devextreme-react/pivot-grid';

import {
  PivotGridFieldChooser,
  Texts,
} from 'devextreme-react/pivot-grid-field-chooser';

import {
  SelectBox,
} from 'devextreme-react/select-box';

import {
  Button,
} from 'devextreme-react/button';

import {
  RadioGroup,
} from 'devextreme-react/radio-group';

import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

import service from './data.js';

const applyChangesModeLabel = { 'aria-label': 'Apply Changes Mode' };

class App extends React.Component {
  fieldChooser: any;

  setFieldChooser: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);

    this.state = {
      applyChangesMode: 'instantly',
      layout: 0,
    };

    this.changeMode = this.changeMode.bind(this);
    this.changeLayout = this.changeLayout.bind(this);
    this.applyClick = this.applyClick.bind(this);
    this.cancelClick = this.cancelClick.bind(this);

    this.fieldChooser = null;

    this.setFieldChooser = (ref) => {
      this.fieldChooser = ref.instance;
    };
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'PivotGrid' cannot be used as a JSX component.
        <PivotGrid
          dataSource={dataSource}
          allowSortingBySummary={true}
          allowFiltering={true}
          allowSorting={true}
          showBorders={true}
        >
          // @ts-expect-error TS(2786): 'FieldChooser' cannot be used as a JSX component.
          <FieldChooser enabled={false} />
        </PivotGrid>

        <div className="container">
          // @ts-expect-error TS(2786): 'PivotGridFieldChooser' cannot be used as a JSX co... Remove this comment to see the full error message
          <PivotGridFieldChooser
            ref={this.setFieldChooser}
            dataSource={dataSource}
            width={400}
            height={400}
            layout={this.state.layout}
            applyChangesMode={this.state.applyChangesMode}
          >
            // @ts-expect-error TS(2786): 'Texts' cannot be used as a JSX component.
            <Texts
              // @ts-expect-error TS(2322): Type '{ allFields: string; columnFields: string; d... Remove this comment to see the full error message
              allFields="All"
              columnFields="Columns"
              dataFields="Data"
              rowFields="Rows"
              filterFields="Filter"
            ></Texts>
          </PivotGridFieldChooser>
          { this.state.applyChangesMode === 'onDemand'
                && <div className="bottom-bar">
                  // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
                  <Button
                    text="Apply"
                    type="default"
                    onClick={this.applyClick}
                  ></Button>
                  // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
                  <Button
                    text="Cancel"
                    onClick={this.cancelClick}
                  ></Button>
                </div>
          }

          <div className="options">
            <div className="caption">Options</div>
            <div className="option">
              <span>Choose layout:</span>
              // @ts-expect-error TS(2786): 'RadioGroup' cannot be used as a JSX component.
              <RadioGroup
                items={layouts}
                value={this.state.layout}
                className="option-editor"
                layout="vertical"
                valueExpr="key"
                displayExpr="name"
                onValueChanged={this.changeLayout}>
              </RadioGroup>
            </div>
            <div className="option">
              <span>Apply Changes Mode:</span>
              // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
              <SelectBox
                className="option-editor"
                items={applyChangesModes}
                inputAttr={applyChangesModeLabel}
                width={180}
                value={this.state.applyChangesMode}
                onValueChanged={this.changeMode}>
              </SelectBox>
            </div>
          </div>

        </div>

      </React.Fragment>
    );
  }

  changeMode(e) {
    this.setState({
      applyChangesMode: e.value,
    });
  }

  changeLayout(e) {
    this.setState({
      layout: e.value,
    });
  }

  applyClick() {
    this.fieldChooser.applyChanges();
  }

  cancelClick() {
    this.fieldChooser.cancelChanges();
  }
}

const dataSource = new PivotGridDataSource({
  fields: [{
    caption: 'Region',
    width: 120,
    dataField: 'region',
    area: 'row',
    headerFilter: {
      search: {
        enabled: true,
      },
    },
  }, {
    caption: 'City',
    dataField: 'city',
    width: 150,
    area: 'row',
    headerFilter: {
      search: {
        enabled: true,
      },
    },
    selector(data) {
      return `${data.city} (${data.country})`;
    },
  }, {
    dataField: 'date',
    dataType: 'date',
    area: 'column',
  }, {
    caption: 'Sales',
    dataField: 'amount',
    dataType: 'number',
    summaryType: 'sum',
    format: 'currency',
    area: 'data',
  }],
  store: service.getSales(),
});

const applyChangesModes = ['instantly', 'onDemand'];
const layouts = service.getLayouts();

export default App;
