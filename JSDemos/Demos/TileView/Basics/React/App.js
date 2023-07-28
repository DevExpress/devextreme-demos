import React from 'react';
import TileView from 'devextreme-react/tile-view';
import { homes } from './data.js';

const HomeImage = (data) => {
  return <div className="dx-tile-image" style={{ backgroundImage: `url(${data.ImageSrc})` }}></div>;
}

const App = () => {
  return (
    <TileView
      items={homes}
      itemRender={HomeImage}
    />
  );
}

export default App;