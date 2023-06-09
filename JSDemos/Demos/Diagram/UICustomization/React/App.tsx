import React from 'react';
import Diagram, {
  ContextMenu,
  ContextToolbox,
  PropertiesPanel,
  Group,
  Tab,
  HistoryToolbar,
  ViewToolbar,
  MainToolbar,
  Command,
  Toolbox,
} from 'devextreme-react/diagram';
import dialog from 'devextreme/ui/dialog';
import 'whatwg-fetch';

const pageCommands = ['pageSize', 'pageOrientation', 'pageColor'];
const menuCommands = ['bringToFront', 'sendToBack', 'lock', 'unlock'];

class App extends React.Component {
  diagramRef: any;

  constructor(props) {
    super(props);

    this.diagramRef = React.createRef();
  }

  onCustomCommand(e) {
    if (e.name === 'clear') {
      const result = dialog.confirm('Are you sure you want to clear the diagram? This action cannot be undone.', 'Warning');
      result.then(
        (dialogResult) => {
          if (dialogResult) {
            e.component.import('');
          }
        },
      );
    }
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
      <Diagram id="diagram" ref={this.diagramRef} onCustomCommand={this.onCustomCommand}>
        // @ts-expect-error TS(2786): 'ContextMenu' cannot be used as a JSX component.
        <ContextMenu enabled={true} commands={menuCommands} />
        // @ts-expect-error TS(2786): 'ContextToolbox' cannot be used as a JSX component... Remove this comment to see the full error message
        <ContextToolbox enabled={true} category="flowchart" shapeIconsPerRow={5} width={200} />
        // @ts-expect-error TS(2786): 'PropertiesPanel' cannot be used as a JSX componen... Remove this comment to see the full error message
        <PropertiesPanel visibility="visible">
          // @ts-expect-error TS(2786): 'Tab' cannot be used as a JSX component.
          <Tab>
            // @ts-expect-error TS(2786): 'Group' cannot be used as a JSX component.
            <Group title="Page Properties" commands={pageCommands} />
          </Tab>
        </PropertiesPanel>
        // @ts-expect-error TS(2786): 'HistoryToolbar' cannot be used as a JSX component... Remove this comment to see the full error message
        <HistoryToolbar visible={false} />
        // @ts-expect-error TS(2786): 'ViewToolbar' cannot be used as a JSX component.
        <ViewToolbar visible={true} />
        // @ts-expect-error TS(2786): 'MainToolbar' cannot be used as a JSX component.
        <MainToolbar visible={true}>
          // @ts-expect-error TS(2786): 'Command' cannot be used as a JSX component.
          <Command name="undo" />
          // @ts-expect-error TS(2786): 'Command' cannot be used as a JSX component.
          <Command name="redo" />
          // @ts-expect-error TS(2786): 'Command' cannot be used as a JSX component.
          <Command name="separator" />
          // @ts-expect-error TS(2786): 'Command' cannot be used as a JSX component.
          <Command name="fontName" />
          // @ts-expect-error TS(2786): 'Command' cannot be used as a JSX component.
          <Command name="fontSize" />
          // @ts-expect-error TS(2786): 'Command' cannot be used as a JSX component.
          <Command name="separator" />
          // @ts-expect-error TS(2786): 'Command' cannot be used as a JSX component.
          <Command name="bold" />
          // @ts-expect-error TS(2786): 'Command' cannot be used as a JSX component.
          <Command name="italic" />
          // @ts-expect-error TS(2786): 'Command' cannot be used as a JSX component.
          <Command name="underline" />
          // @ts-expect-error TS(2786): 'Command' cannot be used as a JSX component.
          <Command name="separator" />
          // @ts-expect-error TS(2786): 'Command' cannot be used as a JSX component.
          <Command name="fontColor" />
          // @ts-expect-error TS(2786): 'Command' cannot be used as a JSX component.
          <Command name="lineColor" />
          // @ts-expect-error TS(2786): 'Command' cannot be used as a JSX component.
          <Command name="fillColor" />
          // @ts-expect-error TS(2786): 'Command' cannot be used as a JSX component.
          <Command name="separator" />
          // @ts-expect-error TS(2786): 'Command' cannot be used as a JSX component.
          <Command name="clear" icon="clearsquare" text="Clear Diagram" />
        </MainToolbar>
        // @ts-expect-error TS(2786): 'Toolbox' cannot be used as a JSX component.
        <Toolbox visibility="visible" showSearch={false} shapeIconsPerRow={4} width={220}>
          // @ts-expect-error TS(2786): 'Group' cannot be used as a JSX component.
          <Group category="general" title="General" />
          // @ts-expect-error TS(2786): 'Group' cannot be used as a JSX component.
          <Group category="flowchart" title="Flowchart" expanded={true} />
        </Toolbox>
      </Diagram>
    );
  }
}

export default App;
