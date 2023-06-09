import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';

ReactDOM.render(
  // @ts-expect-error TS(2786): 'App' cannot be used as a JSX component.
  <App />,
  document.getElementById('app'),
);
