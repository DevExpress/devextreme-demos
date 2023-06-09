import React from 'react';
import DataGrid, { Paging, Scrolling, Column } from 'devextreme-react/data-grid';
import Resizable from 'devextreme-react/resizable';
import CheckBox from 'devextreme-react/check-box';
import TagBox from 'devextreme-react/tag-box';

import { orders, handleLabel } from './data.js';

const handleValues = ['left', 'top', 'right', 'bottom'];

function App() {
  const [keepAspectRatio, setKeepAspectRatio] = React.useState(true);
  const [handles, setHandles] = React.useState(handleValues);
  const [resizableClasses, setResizableClasses] = React.useState('');

  const keepAspectRatioValueChange = React.useCallback((value) => {
    setKeepAspectRatio(value);
  }, [setKeepAspectRatio]);

  const handlesValueChange = React.useCallback((value) => {
    const classes = handleValues.reduce((acc, handle) => {
      const newClass = value.includes(handle) ? '' : ` no-${handle}-handle`;
      return acc + newClass;
    }, '');

    setHandles(value);
    setResizableClasses(classes);
  }, [setHandles]);

  return <React.Fragment>
    <div className='widget-container'>
      <div className='dx-fieldset'>
        <div className='dx-fieldset-header'>Resizable DataGrid</div>
        <div className='dx-field'>
          // @ts-expect-error TS(2786): 'Resizable' cannot be used as a JSX component.
          <Resizable
            className={resizableClasses}
            id='gridContainer'
            minWidth={400}
            minHeight={150}
            maxHeight={370}
            keepAspectRatio={keepAspectRatio}
            handles={handles.join(' ')}
            area='.widget-container .dx-field'
          >
            // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
            <DataGrid
              id='grid'
              dataSource={orders}
              keyExpr='ID'
              showBorders={true}
              height='100%'
            >
              // @ts-expect-error TS(2786): 'Paging' cannot be used as a JSX component.
              <Paging pageSize={8} />
              // @ts-expect-error TS(2786): 'Scrolling' cannot be used as a JSX component.
              <Scrolling mode='virtual' />
              // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
              <Column allowGrouping={false} dataField='OrderNumber' width={130} caption='Invoice Number' />
              // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
              <Column dataField='CustomerStoreCity' caption='City' />
              // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
              <Column dataField='CustomerStoreState' caption='State' />
              // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
              <Column dataField='Employee' />
              // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
              <Column dataField='OrderDate' dataType='date' />
              // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
              <Column dataField='SaleAmount' format='currency' />
            </DataGrid>
          </Resizable>
        </div>
      </div>
    </div>
    <div className='options'>
      <div className='caption'>Resizable Options</div>
      <div className='option'>
        <div>Handles</div>
        // @ts-expect-error TS(2786): 'TagBox' cannot be used as a JSX component.
        <TagBox
          items={handleValues}
          value={handles}
          inputAttr={handleLabel}
          onValueChange={handlesValueChange}
        />
      </div>
      <div className='option'>
        // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
        <CheckBox
          text='Keep aspect ratio'
          value={true}
          onValueChange={keepAspectRatioValueChange}
        />
      </div>
    </div>
  </React.Fragment>;
}

export default App;
