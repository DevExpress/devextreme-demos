import React from 'react';
import ScrollView from 'devextreme-react/scroll-view';
import Sortable from 'devextreme-react/sortable';
import { tasks as taskList, employees } from './data.js';

const statuses = ['Not Started', 'Need Assistance', 'In Progress', 'Deferred', 'Completed'];

function getLists(statusArray, taskArray) {
  const tasksMap = taskArray.reduce((result, task) => {
    if (result[task.Task_Status]) {
      result[task.Task_Status].push(task);
    } else {
      result[task.Task_Status] = [task];
    }

    return result;
  }, {});
  return statusArray.map((status) => tasksMap[status]);
}

function getEmployeesMap(employeesArray) {
  return employeesArray.reduce((result, employee) => {
    result[employee.ID] = employee.Name;
    return result;
  }, {});
}

function removeItem(array, removeIdx) {
  return array.filter((_, idx) => idx !== removeIdx);
}

function insertItem(array, item, insertIdx) {
  const newArray = [...array];
  newArray.splice(insertIdx, 0, item);
  return newArray;
}

function reorderItem(array, fromIdx, toIdx) {
  const item = array[fromIdx];
  const result = removeItem(array, fromIdx);
  return insertItem(result, item, toIdx);
}

function Card({ task, employeesMap }) {
  return <div className="card dx-card dx-theme-text-color dx-theme-background-color">
    <div className={`card-priority priority-${task.Task_Priority}`}></div>
    <div className="card-subject">{task.Task_Subject}</div>
    <div className="card-assignee">{employeesMap[task.Task_Assigned_Employee_ID]}</div>
  </div>;
}

function List({
  title, index, tasks, employeesMap, onTaskDrop,
}) {
  return <div className="list">
    <div className="list-title dx-theme-text-color">{title}</div>
    <ScrollView
      className="scrollable-list"
      direction="vertical"
      showScrollbar="always">
      <Sortable
        className="sortable-cards"
        group="cardsGroup"
        data={index}
        onReorder={onTaskDrop}
        onAdd={onTaskDrop}>
        {tasks.map((task) => <Card
          key={task.Task_ID}
          task={task}
          employeesMap={employeesMap}>
        </Card>)}
      </Sortable>
    </ScrollView>
  </div>;
}

function App() {
  const [state, setState] = React.useState({
    statuses,
    lists: getLists(statuses, taskList),
    employeesMap: getEmployeesMap(employees),
  });

  const onListReorder = React.useCallback(({ fromIndex, toIndex }) => {
    setState((stateValue) => ({
      ...stateValue,
      lists: reorderItem(stateValue.lists, fromIndex, toIndex),
      statuses: reorderItem(stateValue.statuses, fromIndex, toIndex),
    }));
  }, []);

  const onTaskDrop = React.useCallback(
    ({
      fromData, toData, fromIndex, toIndex,
    }) => {
      const updatedLists = [...state.lists];

      const item = updatedLists[fromData][fromIndex];
      updatedLists[fromData] = removeItem(updatedLists[fromData], fromIndex);
      updatedLists[toData] = insertItem(updatedLists[toData], item, toIndex);

      setState((stateValue) => ({
        ...stateValue,
        lists: updatedLists,
      }));
    },
    [state],
  );

  return (
    <div id="kanban">
      <ScrollView
        className="scrollable-board"
        direction="horizontal"
        showScrollbar="always">
        <Sortable
          className="sortable-lists"
          itemOrientation="horizontal"
          handle=".list-title"
          onReorder={onListReorder}>
          {state.lists.map((tasks, listIndex) => {
            const status = state.statuses[listIndex];
            return <List
              key={status}
              title={status}
              index={listIndex}
              tasks={tasks}
              employeesMap={state.employeesMap}
              onTaskDrop={onTaskDrop}>
            </List>;
          })}
        </Sortable>
      </ScrollView>
    </div>
  );
}

export default App;
