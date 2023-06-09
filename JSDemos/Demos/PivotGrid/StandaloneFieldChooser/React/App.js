import React, { useState, useRef } from 'react';
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

const App = () => {
  const [applyChangesMode, setApplyChangesMode] = useState('instantly');
  const [layout, setLayout] = useState(0);
  const fieldChooserRef = useRef(null);

  const changeMode = (e) => {
    setApplyChangesMode(e.value);
  };

  const changeLayout = (e) => {
    setLayout(e.value);
  };

  const applyClick = () => {
    fieldChooserRef.current.instance.applyChanges();
  };

  const cancelClick = () => {
    fieldChooserRef.current.instance.cancelChanges();
  };

  return (
    <React.Fragment>
      <PivotGrid
        dataSource={dataSource}
        allowSortingBySummary={true}
        allowFiltering={true}
        allowSorting={true}
        showBorders={true}
      >
        <FieldChooser enabled={false} />
      </PivotGrid>

      <div className="container">
        <PivotGridFieldChooser
          ref={fieldChooserRef}
          dataSource={dataSource}
          width={400}
          height={400}
          layout={layout}
          applyChangesMode={applyChangesMode}
        >
          <Texts
            allFields="All"
            columnFields="Columns"
            dataFields="Data"
            rowFields="Rows"
            filterFields="Filter"
          ></Texts>
        </PivotGridFieldChooser>
        { applyChangesMode === 'onDemand'
              && <div className="bottom-bar">
                <Button
                  text="Apply"
                  type="default"
                  onClick={applyClick}
                ></Button>
                <Button
                  text="Cancel"
                  onClick={cancelClick}
                ></Button>
              </div>
        }

        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Choose layout:</span>
            <RadioGroup
              items={layouts}
              value={layout}
              className="option-editor"
              layout="vertical"
              valueExpr="key"
              displayExpr="name"
              onValueChanged={changeLayout}>
            </RadioGroup>
          </div>
          <div className="option">
            <span>Apply Changes Mode:</span>
            <SelectBox
              className="option-editor"
              items={applyChangesModes}
              inputAttr={applyChangesModeLabel}
              width={180}
              value={applyChangesMode}
              onValueChanged={changeMode}>
            </SelectBox>
          </div>
        </div>

      </div>

    </React.Fragment>
  );
};

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