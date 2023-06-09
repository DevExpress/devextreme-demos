import React from 'react';
import LoadIndicator from 'devextreme-react/load-indicator';

export default function IndicatorIcon({ isLoaded }) {
  return (
    <span>
      // @ts-expect-error TS(2786): 'LoadIndicator' cannot be used as a JSX component.
      <LoadIndicator visible={!isLoaded} />
      <span hidden={!isLoaded}>
        <img
          src='../../../../images/icons/custom-dropbutton-icon.svg'
          className='custom-icon'
        />
      </span>
    </span>
  );
}
