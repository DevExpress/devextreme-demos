import React from 'react';
import ScrollView from 'devextreme-react/scroll-view';
import Sortable from 'devextreme-react/sortable';
import { tasks as taskList, employees } from './data.js';

function getLists(statusArray: any[], taskArray: any[]) {
  const tasksMap = taskArray.reduce((result: { [x: string]: any[]; }, task: { Task_Status: string | number; }) => {
    if (result[task.Task_Status]) {
      result[task.Task_Status].push(task);
    } else {
      result[task.Task_Status] = [task];
    }

    return result;
  }, {});
  return statusArray.map((status: string | number) => tasksMap[status]);
}

function getEmployeesMap(employeesArray: any[]) {
  return employeesArray.reduce((result: { [x: string]: any; }, employee: { ID: string | number; Name: any; }) => {
    result[employee.ID] = employee.Name;
    return result;
  }, {});
}

function removeItem(array: any[], removeIdx) {
  return array.filter((_, idx) => idx !== removeIdx);
}

function insertItem(array: any[], item, insertIdx: number) {
  const newArray = [...array];
  newArray.splice(insertIdx, 0, item);
  return newArray;
}

function reorderItem(array: { [x: string]: any; }, fromIdx: string | number, toIdx) {
  const item = array[fromIdx];
  const result = removeItem(array, fromIdx);
  return insertItem(result, item, toIdx);
}

const taskStatuses = ['Not Started', 'Need Assistance', 'In Progress', 'Deferred', 'Completed'];
const employeesRecord = getEmployeesMap(employees);

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
        {tasks.map((task: { Task_ID: any; }) => <Card
          key={task.Task_ID}
          task={task}
          employeesMap={employeesMap}>
        </Card>)}
      </Sortable>
    </ScrollView>
  </div>;
}

function App() {
  const [statuses, setStatuses] = React.useState(taskStatuses);
  const [lists, setLists] = React.useState(getLists(taskStatuses, taskList));

  const onListReorder = React.useCallback(({ fromIndex, toIndex }) => {
    setLists((state: { [x: string]: any; }) => reorderItem(state, fromIndex, toIndex));
    setStatuses((state: { [x: string]: any; }) => reorderItem(state, fromIndex, toIndex));
  }, []);

  const onTaskDrop = React.useCallback(
    ({
      fromData, toData, fromIndex, toIndex,
    }) => {
      const updatedLists = [...lists];

      const item = updatedLists[fromData][fromIndex];
      updatedLists[fromData] = removeItem(updatedLists[fromData], fromIndex);
      updatedLists[toData] = insertItem(updatedLists[toData], item, toIndex);

      setLists(updatedLists);
    },
    [lists],
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
          {lists.map((tasks, listIndex: string | number) => {
            const status = statuses[listIndex];
            return <List
              key={status}
              title={status}
              index={listIndex}
              tasks={tasks}
              employeesMap={employeesRecord}
              onTaskDrop={onTaskDrop}>
            </List>;
          })}
        </Sortable>
      </ScrollView>
    </div>
  );
}

export default App;
