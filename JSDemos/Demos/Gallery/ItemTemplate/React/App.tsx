import React from 'react';
import Gallery from 'devextreme-react/gallery';
import { galleryData } from './data.js';
import Item from './item.js';

class App extends React.Component {
  render() {
    return (
      <div className='widget-container'>
        // @ts-expect-error TS(2786): 'Gallery' cannot be used as a JSX component.
        <Gallery
          dataSource={galleryData}
          height={440}
          width='100%'
          loop={true}
          showIndicator={false}
          itemRender={Item} />
      </div>
    );
  }
}

export default App;
