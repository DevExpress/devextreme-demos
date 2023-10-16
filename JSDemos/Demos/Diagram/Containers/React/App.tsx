import React from 'react';
import Diagram, { Group, Toolbox } from 'devextreme-react/diagram';
import 'whatwg-fetch';

export default function App() {
  const diagramRef = React.useRef<Diagram>();

  React.useEffect(() => {
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
    <Diagram id="diagram" ref={diagramRef}>
      <Toolbox>
        <Group category="general" title="General" />
        <Group category="containers" title="Containers" expanded={true} />
      </Toolbox>
    </Diagram>
  );
}
