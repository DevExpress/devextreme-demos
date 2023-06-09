import React from 'react';
import Gantt, {
  Tasks, Dependencies, Resources, ResourceAssignments, Column, Editing, Sorting,
} from 'devextreme-react/gantt';
import CheckBox from 'devextreme-react/check-box';
import { SelectBox } from 'devextreme-react';
import {
  tasks, dependencies, resources, resourceAssignments, sortingModeLabel,
} from './data.js';

const sortingModeValues = ['single', 'multiple', 'none'];
function App() {
  const [ganttConfig, setGanttConfig] = React.useState({
    sortingMode: 'single',
    showSortIndexes: false,
    showSortIndexesDisabled: true,
  });

  return (
    <div id="form-demo">
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <div className="label">Sorting Mode:</div>
          {' '}
          <div className="value">
            // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
            <SelectBox
              items={sortingModeValues}
              inputAttr={sortingModeLabel}
              value={ganttConfig.sortingMode}
              onValueChanged={onSortingModeChanged}
            />
          </div>
        </div>
        {' '}
        <div className="option">
          // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
          <CheckBox
            text="Show Sort Indexes"
            value={ganttConfig.showSortIndexes}
            onValueChanged={onShowSortIndexesChanged}
            disabled={ganttConfig.showSortIndexesDisabled}
          />
        </div>
      </div>
      <div className="widget-container">
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
          <Column dataField="title" caption="Subject" width={300} sortOrder="asc" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="start" caption="Start Date" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="end" caption="End Date" />

          // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
          <Editing enabled />
          // @ts-expect-error TS(2786): 'Sorting' cannot be used as a JSX component.
          <Sorting mode={ganttConfig.sortingMode}
            showSortIndexes={ganttConfig.showSortIndexes}></Sorting>
        </Gantt>
      </div>
    </div>
  );

  function onSortingModeChanged(e) {
    setGanttConfig({
      ...ganttConfig,
      sortingMode: e.value,
      showSortIndexesDisabled: e.value !== 'multiple',
    });
  }

  function onShowSortIndexesChanged(e) {
    setGanttConfig({
      ...ganttConfig,
      showSortIndexes: e.value,
    });
  }
}

export default App;
