import React from 'react';
import Gantt, {
  Tasks, Column, Validation, StripLine,
} from 'devextreme-react/gantt';
import { tasks, currentDate } from './data.js';

function App() {
  return (
    // @ts-expect-error TS(2786): 'Gantt' cannot be used as a JSX component.
    <Gantt
      taskListWidth={300}
      height={700}
      taskTitlePosition="none">

      // @ts-expect-error TS(2786): 'StripLine' cannot be used as a JSX component.
      <StripLine start={tasks[0].start} title="Start" />
      // @ts-expect-error TS(2786): 'StripLine' cannot be used as a JSX component.
      <StripLine start={tasks[tasks.length - 3].start} end={tasks[tasks.length - 1].end} title="Final Phase" />
      // @ts-expect-error TS(2786): 'StripLine' cannot be used as a JSX component.
      <StripLine start={currentDate} title="Current Time" cssClass="current-time" />

      // @ts-expect-error TS(2786): 'Validation' cannot be used as a JSX component.
      <Validation autoUpdateParentTasks />

      // @ts-expect-error TS(2786): 'Tasks' cannot be used as a JSX component.
      <Tasks dataSource={tasks} />

      // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
      <Column dataField="title" caption="Task" width={300} />
    </Gantt>
  );
}

export default App;
