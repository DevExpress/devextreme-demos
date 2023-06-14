import React, { useState } from 'react';
import SelectBox from 'devextreme-react/select-box';

import { Template } from 'devextreme-react/core/template';
import {
  products, simpleProducts, simpleProductLabel, deferredProductLabel, productLabel,
} from './data.js';
import ImageIcon from './imageIcon.js';
import IndicatorIcon from './indicatorIcon.js';
import ConditionalIcon from './conditionalIcon.js';
import Item from './item.js';

function App() {
  const [selectedItem, setSelectedItem] = useState(products[0]);
  const [isLoaded, setIsLoaded] = useState(true);

  const deferredProducts = {
    loadMode: 'raw',
    load: () => {
      setIsLoaded(false);
      const promise = new Promise((resolve) => {
        setTimeout(() => {
          resolve(simpleProducts);
          setIsLoaded(true);
        }, 3000);
      });

      return promise;
    },
  };

  function renderLoadIndicator() {
    return <IndicatorIcon isLoaded={isLoaded} />;
  }

  function renderConditionalIcon() {
    return <ConditionalIcon value={selectedItem} />;
  }

  function selectionChanged({ selectedItem }) {
    setSelectedItem(selectedItem);
  }

  return (
    <div className='dx-fieldset'>
      <div className='dx-field'>
        <div className='dx-field-label'>Image as the icon</div>
        <div className='dx-field-value'>
          <SelectBox dataSource={simpleProducts}
            inputAttr={simpleProductLabel}
            dropDownButtonRender={ImageIcon} />
        </div>
      </div>
      <div className='dx-field'>
        <div className='dx-field-label'>Load indicator as the icon</div>
        <div className='dx-field-value'>
          <SelectBox dataSource={deferredProducts}
            inputAttr={deferredProductLabel}
            dropDownButtonTemplate='loadIndicator'>
            <Template name='loadIndicator' render={renderLoadIndicator} />
          </SelectBox>
        </div>
      </div>
      <div className='dx-field'>
        <div className='dx-field-label'>Value-dependent icon</div>
        <div className='dx-field-value'>
          <SelectBox dataSource={products}
            defaultValue={products[0].ID}
            selectedItem={selectedItem}
            displayExpr='Name'
            inputAttr={productLabel}
            showClearButton={true}
            valueExpr='ID'
            itemRender={Item}
            dropDownButtonTemplate='conditionalIcon'
            onSelectionChanged={selectionChanged}
          >
            <Template name='conditionalIcon' render={renderConditionalIcon} />
          </SelectBox>
        </div>
      </div>
    </div>
  );
}

export default App;
