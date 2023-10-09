import React from 'react';
import ReactDOM from 'react-dom';

import config from 'devextreme-react/core/config';
import App from './App.tsx';

config({ useLegacyTemplateEngine: false });

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
