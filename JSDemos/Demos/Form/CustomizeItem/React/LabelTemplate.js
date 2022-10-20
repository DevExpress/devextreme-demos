import React from 'react';

export default function LabelTemplate(iconName) {
  return React.useCallback((data) => (<span><i className={`dx-icon dx-icon-${iconName}`}></i>{ data.text }</span>), []);
}
