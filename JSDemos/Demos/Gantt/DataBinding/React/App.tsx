import React from 'react';

import Gantt, {
  Tasks, Dependencies, Resources, ResourceAssignments, Column, Editing,
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
      height={700}
      rootValue={-1}>

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
  );
}

export default App;
