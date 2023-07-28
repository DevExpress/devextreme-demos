import React, { useEffect, useRef } from 'react';
import Diagram from 'devextreme-react/diagram';
import 'whatwg-fetch';

const App = () => {
  const diagramRef = useRef(null);

  useEffect(() => {
    const diagram = diagramRef.current.instance;
    fetch('../../../../data/diagram-structure.json')
      .then((response) => response.json())
      .then((json) => {
        diagram.import(JSON.stringify(json));
      })
      .catch(() => {
        throw new Error('Data Loading Error');
      });
  }, []);

  return (
    <Diagram id="diagram" ref={diagramRef} readOnly={true}>
    </Diagram>
  );
}

export default App;