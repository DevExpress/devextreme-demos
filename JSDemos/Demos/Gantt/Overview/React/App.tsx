import React from 'react';

import Gantt, {
  Tasks, Dependencies, Resources, ResourceAssignments, Column, Editing, Toolbar, Item, Validation,
} from 'devextreme-react/gantt';

import {
  tasks, dependencies, resources, resourceAssignments,
} from './data.js';

function App() {
  return (
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
      </Toolbar>

      // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
      <Column dataField="title" caption="Subject" width={300} />
      // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
      <Column dataField="start" caption="Start Date" />
      // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
      <Column dataField="end" caption="End Date" />

      // @ts-expect-error TS(2786): 'Validation' cannot be used as a JSX component.
      <Validation autoUpdateParentTasks />
      // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
      <Editing enabled />
    </Gantt>
  );
}

export default App;
