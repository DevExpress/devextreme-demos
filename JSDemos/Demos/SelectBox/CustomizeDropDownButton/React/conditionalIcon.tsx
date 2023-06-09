

interface ConditionalIconProps {
value: any;
}import React from 'react';

export default function ConditionalIcon({ value }: ConditionalIconProps) {
  if (value) {
    return (
      <img
        src={`../../../../images/icons/${value.IconSrc}`}
        className='custom-icon'
      />
    );
  }
  return (
    <div className='dx-dropdowneditor-icon'></div>
  );
}
