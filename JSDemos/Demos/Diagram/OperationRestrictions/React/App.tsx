import React from 'react';
import Diagram, {
  CustomShape, Nodes, AutoLayout, ContextToolbox, Toolbox, PropertiesPanel, Group,
} from 'devextreme-react/diagram';
import notify from 'devextreme/ui/notify';
import ArrayStore from 'devextreme/data/array_store';
import service from './data.js';

const shapes = ['team', 'employee'];

class App extends React.Component {
  diagramRef: any;

  orgItemsDataSource: any;

  constructor(props) {
    super(props);
    this.diagramRef = React.createRef();
    this.orgItemsDataSource = new ArrayStore({
      key: 'ID',
      data: service.getOrgItems(),
    });
    this.onRequestEditOperation = this.onRequestEditOperation.bind(this);
    this.onRequestLayoutUpdate = this.onRequestLayoutUpdate.bind(this);
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'Diagram' cannot be used as a JSX component.
      <Diagram id="diagram" ref={this.diagramRef} onRequestEditOperation={this.onRequestEditOperation} onRequestLayoutUpdate={this.onRequestLayoutUpdate}>
        // @ts-expect-error TS(2786): 'CustomShape' cannot be used as a JSX component.
        <CustomShape category="items" type="root" baseType="octagon"
          defaultText="Development" />
        // @ts-expect-error TS(2786): 'CustomShape' cannot be used as a JSX component.
        <CustomShape category="items" type="team" baseType="ellipse"
          title="Team" defaultText="Team Name" />
        // @ts-expect-error TS(2786): 'CustomShape' cannot be used as a JSX component.
        <CustomShape category="items" type="employee" baseType="rectangle"
          title="Employee" defaultText="Employee Name" />
        // @ts-expect-error TS(2786): 'Nodes' cannot be used as a JSX component.
        <Nodes dataSource={this.orgItemsDataSource} keyExpr="ID" textExpr="Name" typeExpr="Type" parentKeyExpr="ParentID" styleExpr={this.itemStyleExpr}>
          // @ts-expect-error TS(2786): 'AutoLayout' cannot be used as a JSX component.
          <AutoLayout type="tree" />
        </Nodes>
        // @ts-expect-error TS(2786): 'ContextToolbox' cannot be used as a JSX component... Remove this comment to see the full error message
        <ContextToolbox shapeIconsPerRow={2} width={100} shapes={shapes}>
        </ContextToolbox>
        // @ts-expect-error TS(2786): 'Toolbox' cannot be used as a JSX component.
        <Toolbox shapeIconsPerRow={2}>
          // @ts-expect-error TS(2786): 'Group' cannot be used as a JSX component.
          <Group title="Items" shapes={shapes} />
        </Toolbox>
        // @ts-expect-error TS(2786): 'PropertiesPanel' cannot be used as a JSX componen... Remove this comment to see the full error message
        <PropertiesPanel visibility="disabled">
        </PropertiesPanel>
      </Diagram>
    );
  }

  showToast(text) {
    notify({
      position: {
        at: 'top', my: 'top', of: '#diagram', offset: '0 4',
      },
      message: text,
      type: 'warning',
      delayTime: 2000,
    });
  }

  onRequestLayoutUpdate(e) {
    for (let i = 0; i < e.changes.length; i += 1) {
      if (e.changes[i].type === 'remove') {
        e.allowed = true;
      } else if (e.changes[i].data.ParentID !== undefined && e.changes[i].data.ParentID !== null) {
        e.allowed = true;
      }
    }
  }

  onRequestEditOperation(e) {
    const diagram = this.diagramRef.current.instance;
    if (e.operation === 'addShape') {
      if (e.args.shape.type !== 'employee' && e.args.shape.type !== 'team') {
        if (e.reason !== 'checkUIElementAvailability') {
          this.showToast('You can add only a \'Team\' or \'Employee\' shape.');
        }
        e.allowed = false;
      }
    } else if (e.operation === 'deleteShape') {
      if (e.args.shape.type === 'root') {
        if (e.reason !== 'checkUIElementAvailability') {
          this.showToast('You cannot delete the \'Development\' shape.');
        }
        e.allowed = false;
      }
      if (e.args.shape.type === 'team') {
        for (let i = 0; i < e.args.shape.attachedConnectorIds.length; i += 1) {
          if (diagram.getItemById(e.args.shape.attachedConnectorIds[i]).toId !== e.args.shape.id) {
            if (e.reason !== 'checkUIElementAvailability') {
              this.showToast('You cannot delete a \'Team\' shape that has a child shape.');
            }
            e.allowed = false;
            break;
          }
        }
      }
    } else if (e.operation === 'resizeShape') {
      if (e.args.newSize.width < 1 || e.args.newSize.height < 0.75) {
        if (e.reason !== 'checkUIElementAvailability') {
          this.showToast('The shape size is too small.');
        }
        e.allowed = false;
      }
    } else if (e.operation === 'changeConnection') {
      const shapeType = e.args.newShape && e.args.newShape.type;
      if (shapeType === 'root' && e.args.connectorPosition === 'end') {
        if (e.reason !== 'checkUIElementAvailability') {
          this.showToast('The \'Development\' shape cannot have an incoming connection.');
        }
        e.allowed = false;
      }
      if (shapeType === 'employee' && e.args.connectorPosition === 'start') {
        e.allowed = false;
      }
    } else if (e.operation === 'changeConnectorPoints') {
      if (e.args.newPoints.length > 2) {
        if (e.reason !== 'checkUIElementAvailability') {
          this.showToast('You cannot add points to a connector.');
        }
        e.allowed = false;
      }
    } else if (e.operation === 'beforeChangeShapeText') {
      if (e.args.shape.type === 'root') {
        if (e.reason !== 'checkUIElementAvailability') {
          this.showToast('You cannot change the \'Development\' shape\'s text.');
        }
        e.allowed = false;
      }
    } else if (e.operation === 'changeShapeText') {
      if (e.args.text === '') {
        if (e.reason !== 'checkUIElementAvailability') {
          this.showToast('A shape text cannot be empty.');
        }
        e.allowed = false;
      }
    } else if (e.operation === 'beforeChangeConnectorText') {
      e.allowed = false;
    }
  }

  itemStyleExpr(obj) {
    if (obj.Type === 'root') {
      return { fill: '#ffcfc3' };
    }

    if (obj.Type === 'team') {
      return { fill: '#b7e3fe' };
    }

    return { fill: '#bbefcb' };
  }
}

export default App;
