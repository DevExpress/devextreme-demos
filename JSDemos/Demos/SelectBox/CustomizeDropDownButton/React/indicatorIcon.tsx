

interface IndicatorIconProps {
isLoaded: any;
}import React from 'react';
import LoadIndicator from 'devextreme-react/load-indicator';

export default function IndicatorIcon({ isLoaded }: IndicatorIconProps) {
  return (
    <span>
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
