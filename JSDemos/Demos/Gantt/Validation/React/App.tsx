import React from 'react';
import Gantt, {
  Tasks, Dependencies, Column, Validation, Editing,
} from 'devextreme-react/gantt';
import CheckBox from 'devextreme-react/check-box';
import { tasks, dependencies } from './data.js';

function App() {
  const [ganttConfig, setGanttConfig] = React.useState({
    autoUpdateParentTasks: true,
    validateDependencies: true,
    enablePredecessorGap: true,
  });

  return (
    <div id="form-demo">
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
          <CheckBox
            text="Auto Update Parent Tasks"
            value={ganttConfig.autoUpdateParentTasks}
            onValueChanged={onAutoUpdateParentTasksChanged}
          />
        </div>
        {' '}
        <div className="option">
          // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
          <CheckBox
            text="Enable Dependency Validation"
            value={ganttConfig.validateDependencies}
            onValueChanged={onValidateDependenciesChanged}
          />
        </div>
        {' '}
        <div className="option">
          // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
          <CheckBox
            text="Enable Predecessor Gap"
            value={ganttConfig.enablePredecessorGap}
            onValueChanged={onEnablePredecessorGapChanged}
          />
        </div>
      </div>
      <div className="widget-container">
        // @ts-expect-error TS(2786): 'Gantt' cannot be used as a JSX component.
        <Gantt
          taskListWidth={500}
          height={700}
          taskTitlePosition="none">

          // @ts-expect-error TS(2786): 'Validation' cannot be used as a JSX component.
          <Validation
            // @ts-expect-error TS(2322): Type '{ autoUpdateParentTasks: any; validateDepend... Remove this comment to see the full error message
            autoUpdateParentTasks={ganttConfig.autoUpdateParentTasks}
            validateDependencies={ganttConfig.validateDependencies}
            enablePredecessorGap={ganttConfig.enablePredecessorGap} />

          // @ts-expect-error TS(2786): 'Tasks' cannot be used as a JSX component.
          <Tasks dataSource={tasks} />
          // @ts-expect-error TS(2786): 'Dependencies' cannot be used as a JSX component.
          <Dependencies dataSource={dependencies} />

          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="title" caption="Task" width={300} />
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

  function onAutoUpdateParentTasksChanged(e) {
    setGanttConfig({
      ...ganttConfig,
      autoUpdateParentTasks: e.value,
    });
  }

  function onValidateDependenciesChanged(e) {
    setGanttConfig({
      ...ganttConfig,
      validateDependencies: e.value,
    });
  }

  function onEnablePredecessorGapChanged(e) {
    setGanttConfig({
      ...ganttConfig,
      enablePredecessorGap: e.value,
    });
  }
}

export default App;
