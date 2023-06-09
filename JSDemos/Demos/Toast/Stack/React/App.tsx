import React from 'react';
import Button from 'devextreme-react/button';
import RadioGroup from 'devextreme-react/radio-group';
import SelectBox from 'devextreme-react/select-box';
import NumberBox from 'devextreme-react/number-box';
import Notify from 'devextreme/ui/notify';
import HideToasts from 'devextreme/ui/toast/hide_toasts';

import {
  directions, positions, types, radioGroupItems, positionTopLabel, directionLabel,
  positionBottomLabel, positionLeftLabel, positionRightLabel, positionLabel,
} from './data.js';

function App() {
  const [id, setId] = React.useState(1);
  const [isPredefined, setIsPredefined] = React.useState(true);
  const [predefinedPosition, setPredefinedPosition] = React.useState('bottom center');
  const [coordinatePosition, setCoordinatePosition] = React.useState({
    top: undefined,
    left: undefined,
    bottom: undefined,
    right: undefined,
  });
  const [direction, setDirection] = React.useState('up-push');

  const topNumberBoxValueChanged = React.useCallback(
    (top) => setCoordinatePosition({ ...coordinatePosition, top }),
    [coordinatePosition],
  );

  const bottomNumberBoxValueChanged = React.useCallback(
    (bottom) => setCoordinatePosition({ ...coordinatePosition, bottom }),
    [coordinatePosition],
  );

  const leftNumberBoxValueChanged = React.useCallback(
    (left) => setCoordinatePosition({ ...coordinatePosition, left }),
    [coordinatePosition],
  );

  const rightNumberBoxValueChanged = React.useCallback(
    (right) => setCoordinatePosition({ ...coordinatePosition, right }),
    [coordinatePosition],
  );

  return <React.Fragment>
    <div className='options'>
      <div>Position</div>
      // @ts-expect-error TS(2786): 'RadioGroup' cannot be used as a JSX component.
      <RadioGroup
        layout='horizontal'
        defaultValue='predefined'
        items={radioGroupItems}
        onValueChange={(value) => setIsPredefined(value === 'predefined')} />
      // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
      <SelectBox
        items={positions}
        value={predefinedPosition}
        inputAttr={positionLabel}
        onSelectionChanged={({ selectedItem }) => setPredefinedPosition(selectedItem)}
        visible={isPredefined} />
      <div className='section'>
        // @ts-expect-error TS(2786): 'NumberBox' cannot be used as a JSX component.
        <NumberBox
          visible={!isPredefined}
          placeholder='top'
          // @ts-expect-error TS(2322): Type 'string' is not assignable to type 'number'.
          defaultValue=''
          valueChangeEvent='keyup'
          disabled={!!coordinatePosition.bottom}
          inputAttr={positionTopLabel}
          onValueChange={topNumberBoxValueChanged} />
        // @ts-expect-error TS(2786): 'NumberBox' cannot be used as a JSX component.
        <NumberBox
          visible={!isPredefined}
          placeholder='bottom'
          // @ts-expect-error TS(2322): Type 'string' is not assignable to type 'number'.
          defaultValue=''
          valueChangeEvent='keyup'
          inputAttr={positionBottomLabel}
          disabled={!!coordinatePosition.top}
          onValueChange={bottomNumberBoxValueChanged} />
      </div>
      <div className='section'>
        // @ts-expect-error TS(2786): 'NumberBox' cannot be used as a JSX component.
        <NumberBox
          visible={!isPredefined}
          placeholder='left'
          // @ts-expect-error TS(2322): Type 'string' is not assignable to type 'number'.
          defaultValue=''
          valueChangeEvent='keyup'
          inputAttr={positionLeftLabel}
          disabled={!!coordinatePosition.right}
          onValueChange={leftNumberBoxValueChanged} />
        // @ts-expect-error TS(2786): 'NumberBox' cannot be used as a JSX component.
        <NumberBox
          visible={!isPredefined}
          placeholder='right'
          // @ts-expect-error TS(2322): Type 'string' is not assignable to type 'number'.
          defaultValue=''
          valueChangeEvent='keyup'
          inputAttr={positionRightLabel}
          disabled={!!coordinatePosition.left}
          onValueChange={rightNumberBoxValueChanged} />
      </div>
      <div>Direction</div>
      // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
      <SelectBox
        items={directions}
        inputAttr={directionLabel}
        value={direction}
        onSelectionChanged={({ selectedItem }) => setDirection(selectedItem)} />
      <div className='section'>
        // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
        <Button text='Show' width='48%' onClick={() => show()} />
        // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
        <Button text='Hide all' width='48%' onClick={() => HideToasts()} />
      </div>
    </div>
  </React.Fragment>;

  function show() {
    const position = isPredefined ? predefinedPosition : coordinatePosition;

    Notify({
      message: `Toast ${id}`,
      height: 45,
      width: 150,
      minWidth: 150,
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
  }
}

export default App;
