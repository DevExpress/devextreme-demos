import React from 'react';
import Diagram, {
  CustomShape, ConnectionPoint, Group, Toolbox,
} from 'devextreme-react/diagram';
import 'whatwg-fetch';

class App extends React.Component {
  diagramRef: any;

  constructor(props) {
    super(props);

    this.diagramRef = React.createRef();
  }

  componentDidMount() {
    const diagram = this.diagramRef.current.instance;
    fetch('../../../../data/diagram-hardware.json')
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
      <Diagram id="diagram" ref={this.diagramRef}>
        // @ts-expect-error TS(2786): 'CustomShape' cannot be used as a JSX component.
        <CustomShape
          // @ts-expect-error TS(2322): Type '{ children: Element[]; category: string; typ... Remove this comment to see the full error message
          category="hardware"
          type="internet"
          title="Internet"
          backgroundImageUrl="../../../../images/shapes/internet.svg"
          backgroundImageLeft={0.15}
          backgroundImageTop={0}
          backgroundImageWidth={0.7}
          backgroundImageHeight={0.7}
          defaultWidth={0.75}
          defaultHeight={0.75}
          defaultText="Internet"
          allowEditText={true}
          textLeft={0}
          textTop={0.7}
          textWidth={1}
          textHeight={0.3}>
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.5} y={0} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.9} y={0.5} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.5} y={1} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.1} y={0.5} />
        </CustomShape>
        // @ts-expect-error TS(2786): 'CustomShape' cannot be used as a JSX component.
        <CustomShape
          // @ts-expect-error TS(2322): Type '{ children: Element[]; category: string; typ... Remove this comment to see the full error message
          category="hardware"
          type="laptop"
          title="Laptop"
          backgroundImageUrl="../../../../images/shapes/laptop.svg"
          backgroundImageLeft={0.15}
          backgroundImageTop={0}
          backgroundImageWidth={0.7}
          backgroundImageHeight={0.7}
          defaultWidth={0.75}
          defaultHeight={0.75}
          defaultText="Laptop"
          allowEditText={true}
          textLeft={0}
          textTop={0.7}
          textWidth={1}
          textHeight={0.3}>
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.5} y={0} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.9} y={0.5} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.5} y={1} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.1} y={0.5} />
        </CustomShape>
        // @ts-expect-error TS(2786): 'CustomShape' cannot be used as a JSX component.
        <CustomShape
          // @ts-expect-error TS(2322): Type '{ children: Element[]; category: string; typ... Remove this comment to see the full error message
          category="hardware"
          type="mobile"
          title="Mobile"
          backgroundImageUrl="../../../../images/shapes/mobile.svg"
          backgroundImageLeft={0.15}
          backgroundImageTop={0}
          backgroundImageWidth={0.7}
          backgroundImageHeight={0.7}
          defaultWidth={0.75}
          defaultHeight={0.75}
          defaultText="Mobile"
          allowEditText={true}
          textLeft={0}
          textTop={0.7}
          textWidth={1}
          textHeight={0.3}>
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.5} y={0} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.9} y={0.5} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.5} y={1} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.1} y={0.5} />
        </CustomShape>
        // @ts-expect-error TS(2786): 'CustomShape' cannot be used as a JSX component.
        <CustomShape
          // @ts-expect-error TS(2322): Type '{ children: Element[]; category: string; typ... Remove this comment to see the full error message
          category="hardware"
          type="pc"
          title="PC"
          backgroundImageUrl="../../../../images/shapes/pc.svg"
          backgroundImageLeft={0.15}
          backgroundImageTop={0}
          backgroundImageWidth={0.7}
          backgroundImageHeight={0.7}
          defaultWidth={0.75}
          defaultHeight={0.75}
          defaultText="PC"
          allowEditText={true}
          textLeft={0}
          textTop={0.7}
          textWidth={1}
          textHeight={0.3}>
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.5} y={0} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.9} y={0.5} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.5} y={1} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.1} y={0.5} />
        </CustomShape>
        // @ts-expect-error TS(2786): 'CustomShape' cannot be used as a JSX component.
        <CustomShape
          // @ts-expect-error TS(2322): Type '{ children: Element[]; category: string; typ... Remove this comment to see the full error message
          category="hardware"
          type="phone"
          title="Phone"
          backgroundImageUrl="../../../../images/shapes/phone.svg"
          backgroundImageLeft={0.15}
          backgroundImageTop={0}
          backgroundImageWidth={0.7}
          backgroundImageHeight={0.7}
          defaultWidth={0.75}
          defaultHeight={0.75}
          defaultText="Phone"
          allowEditText={true}
          textLeft={0}
          textTop={0.7}
          textWidth={1}
          textHeight={0.3}>
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.5} y={0} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.9} y={0.5} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.5} y={1} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.1} y={0.5} />
        </CustomShape>
        // @ts-expect-error TS(2786): 'CustomShape' cannot be used as a JSX component.
        <CustomShape
          // @ts-expect-error TS(2322): Type '{ children: Element[]; category: string; typ... Remove this comment to see the full error message
          category="hardware"
          type="printer"
          title="Printer"
          backgroundImageUrl="../../../../images/shapes/printer.svg"
          backgroundImageLeft={0.15}
          backgroundImageTop={0}
          backgroundImageWidth={0.7}
          backgroundImageHeight={0.7}
          defaultWidth={0.75}
          defaultHeight={0.75}
          defaultText="Printer"
          allowEditText={true}
          textLeft={0}
          textTop={0.7}
          textWidth={1}
          textHeight={0.3}>
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.5} y={0} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.9} y={0.5} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.5} y={1} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.1} y={0.5} />
        </CustomShape>
        // @ts-expect-error TS(2786): 'CustomShape' cannot be used as a JSX component.
        <CustomShape
          // @ts-expect-error TS(2322): Type '{ children: never[]; category: string; type:... Remove this comment to see the full error message
          category="hardware"
          type="router"
          title="Router"
          backgroundImageUrl="../../../../images/shapes/router.svg"
          backgroundImageLeft={0.15}
          backgroundImageTop={0}
          backgroundImageWidth={0.7}
          backgroundImageHeight={0.7}
          defaultWidth={0.75}
          defaultHeight={0.75}
          defaultText="Router"
          allowEditText={true}
          textLeft={0}
          textTop={0.7}
          textWidth={1}
          textHeight={0.3}>
        </CustomShape>
        // @ts-expect-error TS(2786): 'CustomShape' cannot be used as a JSX component.
        <CustomShape
          // @ts-expect-error TS(2322): Type '{ children: Element[]; category: string; typ... Remove this comment to see the full error message
          category="hardware"
          type="scaner"
          title="Scaner"
          backgroundImageUrl="../../../../images/shapes/scaner.svg"
          backgroundImageLeft={0.15}
          backgroundImageTop={0}
          backgroundImageWidth={0.7}
          backgroundImageHeight={0.7}
          defaultWidth={0.75}
          defaultHeight={0.75}
          defaultText="Scaner"
          allowEditText={true}
          textLeft={0}
          textTop={0.7}
          textWidth={1}
          textHeight={0.3}>
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.5} y={0} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.9} y={0.5} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.5} y={1} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.1} y={0.5} />
        </CustomShape>
        // @ts-expect-error TS(2786): 'CustomShape' cannot be used as a JSX component.
        <CustomShape
          // @ts-expect-error TS(2322): Type '{ children: Element[]; category: string; typ... Remove this comment to see the full error message
          category="hardware"
          type="server"
          title="Server"
          backgroundImageUrl="../../../../images/shapes/server.svg"
          backgroundImageLeft={0.15}
          backgroundImageTop={0}
          backgroundImageWidth={0.7}
          backgroundImageHeight={0.7}
          defaultWidth={0.75}
          defaultHeight={0.75}
          defaultText="Server"
          allowEditText={true}
          textLeft={0}
          textTop={0.7}
          textWidth={1}
          textHeight={0.3}>
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.5} y={0} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.9} y={0.5} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.5} y={1} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.1} y={0.5} />
        </CustomShape>
        // @ts-expect-error TS(2786): 'CustomShape' cannot be used as a JSX component.
        <CustomShape
          // @ts-expect-error TS(2322): Type '{ children: Element[]; category: string; typ... Remove this comment to see the full error message
          category="hardware"
          type="switch"
          title="Switch"
          backgroundImageUrl="../../../../images/shapes/switch.svg"
          backgroundImageLeft={0.15}
          backgroundImageTop={0}
          backgroundImageWidth={0.7}
          backgroundImageHeight={0.7}
          defaultWidth={0.75}
          defaultHeight={0.75}
          defaultText="Switch"
          allowEditText={true}
          textLeft={0}
          textTop={0.7}
          textWidth={1}
          textHeight={0.3}>
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.5} y={0} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.9} y={0.5} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.5} y={1} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.1} y={0.5} />
        </CustomShape>
        // @ts-expect-error TS(2786): 'CustomShape' cannot be used as a JSX component.
        <CustomShape
          // @ts-expect-error TS(2322): Type '{ children: Element[]; category: string; typ... Remove this comment to see the full error message
          category="hardware"
          type="wifi"
          title="Wi Fi Router"
          backgroundImageUrl="../../../../images/shapes/wifi.svg"
          backgroundImageLeft={0.15}
          backgroundImageTop={0}
          backgroundImageWidth={0.7}
          backgroundImageHeight={0.7}
          defaultWidth={0.75}
          defaultHeight={0.75}
          defaultText="Wi Fi"
          allowEditText={true}
          textLeft={0}
          textTop={0.7}
          textWidth={1}
          textHeight={0.3}>
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.5} y={0} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.9} y={0.5} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.5} y={1} />
          // @ts-expect-error TS(2786): 'ConnectionPoint' cannot be used as a JSX componen... Remove this comment to see the full error message
          <ConnectionPoint x={0.1} y={0.5} />
        </CustomShape>
        // @ts-expect-error TS(2786): 'Toolbox' cannot be used as a JSX component.
        <Toolbox>
          // @ts-expect-error TS(2786): 'Group' cannot be used as a JSX component.
          <Group category="hardware" title="Hardware" />
        </Toolbox>
      </Diagram>
    );
  }
}

export default App;
