import React from 'react';
import ReactDOM from 'react-dom';

import themes from 'devextreme/ui/themes';
import App from './App.js';

themes.initialized(() => {
  ReactDOM.render(
    // @ts-expect-error TS(2786): 'App' cannot be used as a JSX component.
    <App />,
    document.getElementById('app'),
  );
});
