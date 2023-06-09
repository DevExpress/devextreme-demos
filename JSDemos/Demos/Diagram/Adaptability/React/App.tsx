import React from 'react';
import Diagram from 'devextreme-react/diagram';
import 'whatwg-fetch';

class App extends React.Component {
  diagramRef: any;

  constructor(props) {
    super(props);

    this.diagramRef = React.createRef();
  }

  componentDidMount() {
    const diagram = this.diagramRef.current.instance;
    fetch('../../../../data/diagram-flow.json')
      .then((response) => response.json())
      .then((json) => {
        diagram.import(JSON.stringify(json));
      })
      .catch(() => {
        throw new Error('Data Loading Error');
      });
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'Diagram' cannot be used as a JSX component.
      <Diagram id="diagram" ref={this.diagramRef} autoZoomMode="fitWidth" />
    );
  }
}

export default App;
