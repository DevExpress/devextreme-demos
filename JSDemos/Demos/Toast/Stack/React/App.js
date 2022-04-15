import React from 'react';
import Button from 'devextreme-react/button';
import RadioGroup from 'devextreme-react/radio-group';
import SelectBox from 'devextreme-react/select-box';
import NumberBox from 'devextreme-react/number-box';
import Notify from 'devextreme/ui/notify';
import HideToasts from 'devextreme/ui/toast/hide_toasts';

import { directions, positions, types } from './data.js';

function App() {
  const [id, setId] = React.useState(1);
  const [isAlias, setIsAlias] = React.useState(true);
  const [aliasPosition, setAliasPosition] = React.useState('bottom center');
  const [coordinatePosition, setCoordinatePosition] = React.useState({
    top: undefined,
    left: undefined,
    bottom: undefined,
    right: undefined,
  });
  const [direction, setDirection] = React.useState('up');

  const showNotify = () => {
    const position = isAlias ? aliasPosition : coordinatePosition;

    Notify({
      message: `Toast ${id}`,
      height: 45,
      width: 150,
      type: types[Math.floor(Math.random() * 4)],
      displayTime: 3500,
      animation: {
        show: {
          type: 'fade', duration: 400, from: 0, to: 1,
        },
        hide: { type: 'fade', duration: 40, to: 0 },
      },
    }, {
      position,
      direction,
    });
    setId(id + 1);
  };

  const radioGroupValueChanged = (value) => setIsAlias(value === 'alias');
  const positionSelectionChanged = ({ selectedItem }) => setAliasPosition(selectedItem);
  const directionSelectionChanged = ({ selectedItem }) => setDirection(selectedItem);
  const topNumberBoxValueChanged = (top) => setCoordinatePosition({ ...coordinatePosition, top });
  const bottomNumberBoxValueChanged = (bottom) => setCoordinatePosition({ ...coordinatePosition, bottom });
  const leftNumberBoxValueChanged = (left) => setCoordinatePosition({ ...coordinatePosition, left });
  const rightNumberBoxValueChanged = (right) => setCoordinatePosition({ ...coordinatePosition, right });

  return <React.Fragment>
    <div className='options'>
      <div className='caption'>Notify stack</div>
      <div>position by</div>
      <RadioGroup
        layout='horizontal'
        defaultValue='alias'
        items={['alias', 'coordinates']}
        onValueChange={radioGroupValueChanged} />
      <SelectBox
        items={positions}
        value={aliasPosition}
        onSelectionChanged={positionSelectionChanged}
        visible={isAlias} />
      <div className='section'>
        <NumberBox
          visible={!isAlias}
          label='top'
          defaultValue=''
          valueChangeEvent='keyup'
          disabled={!!coordinatePosition.bottom}
          onValueChange={topNumberBoxValueChanged} />
        <NumberBox
          visible={!isAlias}
          label='bottom'
          defaultValue=''
          valueChangeEvent='keyup'
          disabled={!!coordinatePosition.top}
          onValueChange={bottomNumberBoxValueChanged} />
      </div>
      <div className='section'>
        <NumberBox
          visible={!isAlias}
          label='left'
          defaultValue=''
          valueChangeEvent='keyup'
          disabled={!!coordinatePosition.right}
          onValueChange={leftNumberBoxValueChanged} />
        <NumberBox
          visible={!isAlias}
          label='right'
          defaultValue=''
          valueChangeEvent='keyup'
          disabled={!!coordinatePosition.left}
          onValueChange={rightNumberBoxValueChanged} />
      </div>
      <div>direction</div>
      <SelectBox
        items={directions}
        value={direction}
        onSelectionChanged={directionSelectionChanged} />
      <div className='section'>
        <Button text='Show' width='48%' onClick={() => showNotify()} />
        <Button text='Hide all' width='48%' onClick={() => HideToasts()} />
      </div>
    </div>
  </React.Fragment>;
}

export default App;
