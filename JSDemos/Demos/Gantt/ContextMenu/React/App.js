import React from 'react';
import Gantt, {
  Tasks, Dependencies, Resources, ResourceAssignments, Column, Editing, ContextMenu,
} from 'devextreme-react/gantt';
import CheckBox from 'devextreme-react/check-box';
import {
  tasks, dependencies, resources, resourceAssignments,
} from './data.js';

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

function App() {
  const [ganttConfig, setGanttConfig] = React.useState({
    showResources: true,
    disableContextMenu: false,
    contextMenuItems: getContextMenuItems(),
  });

  const onContextMenuPreparing = React.useCallback((e) => {
    e.cancel = ganttConfig.disableContextMenu;
  }, [ganttConfig]);

  const onCustomizeContextMenu = React.useCallback((e) => {
    setGanttConfig({
      ...ganttConfig,
      contextMenuItems: e.value ? getContextMenuItems() : undefined,
    });
  }, [ganttConfig, setGanttConfig]);

  const onPreventContextMenuShowing = React.useCallback((e) => {
    setGanttConfig({
      ...ganttConfig,
      disableContextMenu: e.value,
    });
  }, [ganttConfig, setGanttConfig]);

  const onCustomCommandClick = React.useCallback((e) => {
    if (e.name === 'ToggleDisplayOfResources') {
      setGanttConfig({
        ...ganttConfig,
        showResources: !ganttConfig.showResources,
      });
    }
  }, [ganttConfig, setGanttConfig]);

  return (
    <div id="form-demo">
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <CheckBox
            text="Prevent Context Menu Showing"
            value={ganttConfig.disableContextMenu}
            onValueChanged={onPreventContextMenuShowing}
          />
        </div>
          &nbsp;
        <div className="option">
          <CheckBox
            text="Customize Context Menu"
            defaultValue={true}
            onValueChanged={onCustomizeContextMenu}
          />
        </div>
      </div>
      <div className="widget-container">
        <Gantt
          taskListWidth={500}
          height={700}
          showResources={ganttConfig.showResources}
          scaleType="weeks"
          onCustomCommand={onCustomCommandClick}
          onContextMenuPreparing={onContextMenuPreparing}
        >
          <ContextMenu
            items={ganttConfig.contextMenuItems} />

          <Tasks dataSource={tasks} />
          <Dependencies dataSource={dependencies} />
          <Resources dataSource={resources} />
          <ResourceAssignments dataSource={resourceAssignments} />

          <Column dataField="title" caption="Subject" width={300} />
          <Column dataField="start" caption="Start Date" />
          <Column dataField="end" caption="End Date" />

          <Editing enabled />
        </Gantt>
      </div>
    </div>
  );
}

export default App;
