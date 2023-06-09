import React from 'react';

import Gantt, {
  Tasks, Dependencies, Resources, ResourceAssignments, Column, Editing, Toolbar, Item,
} from 'devextreme-react/gantt';
import { Popup } from 'devextreme-react/popup';

import {
  tasks, dependencies, resources, resourceAssignments,
} from './data.js';

function App() {
  const [ganttConfig, setGanttConfig] = React.useState({
    popupVisible: false,
  });

  const [aboutButtonOptions] = React.useState({
    text: 'About',
    icon: 'info',
    stylingMode: 'text',
    onClick: () => { aboutButtonClick(); },
  });

  return (
    <React.Fragment>
      // @ts-expect-error TS(2786): 'Gantt' cannot be used as a JSX component.
      <Gantt
        taskListWidth={500}
        scaleType="weeks"
        height={700}>

        // @ts-expect-error TS(2786): 'Tasks' cannot be used as a JSX component.
        <Tasks dataSource={tasks} />
        // @ts-expect-error TS(2786): 'Dependencies' cannot be used as a JSX component.
        <Dependencies dataSource={dependencies} />
        // @ts-expect-error TS(2786): 'Resources' cannot be used as a JSX component.
        <Resources dataSource={resources} />
        // @ts-expect-error TS(2786): 'ResourceAssignments' cannot be used as a JSX comp... Remove this comment to see the full error message
        <ResourceAssignments dataSource={resourceAssignments} />

        // @ts-expect-error TS(2786): 'Toolbar' cannot be used as a JSX component.
        <Toolbar>
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item name="undo" />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item name="redo" />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item name="separator" />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item name="collapseAll" />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item name="expandAll" />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item name="separator" />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item name="addTask" />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item name="deleteTask" />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item name="separator" />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item name="zoomIn" />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item name="zoomOut" />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item name="separator" />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item name="showResources" />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item name="showDependencies" />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item name="separator" />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item widget="dxButton" options={aboutButtonOptions} />
        </Toolbar>

        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="title" caption="Subject" width={300} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="start" caption="Start Date" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="end" caption="End Date" />

        // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
        <Editing enabled />
      </Gantt>
      // @ts-expect-error TS(2786): 'Popup' cannot be used as a JSX component.
      <Popup
        visible={ganttConfig.popupVisible}
        onHiding = {onHiding}
        hideOnOutsideClick
        showTitle
        title="About"
        height="auto"
      >
        <div>
            The DevExtreme JavaScript <b>Gantt</b> allows you to display the task
            flow and dependencies between tasks over a certain period.
          <br />
          <br />
            You can move and modify tasks (a task name, duration or progress, for example)
            directly from the chart. Adjust the timescale to display tasks in smaller or
            greater time intervals, from hours to years. Hold the CTRL key and rotate your
            mouse&apos;s scroll wheel to zoom (in or out) to browse data across various
            levels of detail.
        </div>
      </Popup>
    </React.Fragment>
  );

  function aboutButtonClick() {
    setGanttConfig({
      ...ganttConfig,
      popupVisible: true,
    });
  }

  function onHiding() {
    setGanttConfig({
      ...ganttConfig,
      popupVisible: false,
    });
  }
}

export default App;
