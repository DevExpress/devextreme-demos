import React from 'react';
import Gantt, {
  Tasks, Dependencies, Resources, ResourceAssignments, Column, Editing, ContextMenu,
} from 'devextreme-react/gantt';
import CheckBox from 'devextreme-react/check-box';
import {
  tasks, dependencies, resources, resourceAssignments,
} from './data.js';

function App() {
  const [ganttConfig, setGanttConfig] = React.useState({
    showResources: true,
    disableContextMenu: false,
    contextMenuItems: getContextMenuItems(),
  });

  return (
    <div id="form-demo">
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
          <CheckBox
            text="Prevent Context Menu Showing"
            value={ganttConfig.disableContextMenu}
            onValueChanged={onPreventContextMenuShowing}
          />
        </div>
          &nbsp;
        <div className="option">
          // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
          <CheckBox
            text="Customize Context Menu"
            defaultValue={true}
            onValueChanged={onCustomizeContextMenu}
          />
        </div>
      </div>
      <div className="widget-container">
        // @ts-expect-error TS(2786): 'Gantt' cannot be used as a JSX component.
        <Gantt
          taskListWidth={500}
          height={700}
          showResources={ganttConfig.showResources}
          scaleType="weeks"
          onCustomCommand={onCustomCommandClick}
          onContextMenuPreparing={onContextMenuPreparing}
        >
          // @ts-expect-error TS(2786): 'ContextMenu' cannot be used as a JSX component.
          <ContextMenu
            // @ts-expect-error TS(2322): Type '{ items: any; }' is not assignable to type '... Remove this comment to see the full error message
            items={ganttConfig.contextMenuItems} />

          // @ts-expect-error TS(2786): 'Tasks' cannot be used as a JSX component.
          <Tasks dataSource={tasks} />
          // @ts-expect-error TS(2786): 'Dependencies' cannot be used as a JSX component.
          <Dependencies dataSource={dependencies} />
          // @ts-expect-error TS(2786): 'Resources' cannot be used as a JSX component.
          <Resources dataSource={resources} />
          // @ts-expect-error TS(2786): 'ResourceAssignments' cannot be used as a JSX comp... Remove this comment to see the full error message
          <ResourceAssignments dataSource={resourceAssignments} />

          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="title" caption="Subject" width={300} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="start" caption="Start Date" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="end" caption="End Date" />

          // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
          <Editing enabled />
        </Gantt>
      </div>
    </div>
  );

  function onContextMenuPreparing(e) {
    e.cancel = ganttConfig.disableContextMenu;
  }

  function onCustomizeContextMenu(e) {
    setGanttConfig({
      ...ganttConfig,
      contextMenuItems: e.value ? getContextMenuItems() : undefined,
    });
  }

  function onPreventContextMenuShowing(e) {
    setGanttConfig({
      ...ganttConfig,
      disableContextMenu: e.value,
    });
  }

  function onCustomCommandClick(e) {
    if (e.name === 'ToggleDisplayOfResources') {
      setGanttConfig({
        ...ganttConfig,
        showResources: !ganttConfig.showResources,
      });
    }
  }

  function getContextMenuItems() {
    return [
      'addTask',
      'taskdetails',
      'deleteTask',
      {
        name: 'ToggleDisplayOfResources',
        text: 'Toggle Display of Resources',
      },
    ];
  }
}

export default App;
