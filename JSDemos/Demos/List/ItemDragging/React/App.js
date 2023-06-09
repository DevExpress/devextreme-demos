import React, { useState } from 'react';
import List, { ItemDragging } from 'devextreme-react/list';
import { plannedTasks, doingTasks } from './data.js';

const App = () => {
  const [plannedTasksState, setPlannedTasksState] = useState(plannedTasks);
  const [doingTasksState, setDoingTasksState] = useState(doingTasks);

  const onDragStart = (e) => {
    e.itemData = e.fromData === 'plannedTasks' ? plannedTasksState[e.fromIndex] : doingTasksState[e.fromIndex];
  };

  const onAdd = (e) => {
    const tasks = e.toData === 'plannedTasks' ? plannedTasksState : doingTasksState;
    const newTasks = [...tasks.slice(0, e.toIndex), e.itemData, ...tasks.slice(e.toIndex)];
    e.toData === 'plannedTasks' ? setPlannedTasksState(newTasks) : setDoingTasksState(newTasks);
  };

  const onRemove = (e) => {
    const tasks = e.fromData === 'plannedTasks' ? plannedTasksState : doingTasksState;
    const newTasks = [...tasks.slice(0, e.fromIndex), ...tasks.slice(e.fromIndex + 1)];
    e.fromData === 'plannedTasks' ? setPlannedTasksState(newTasks) : setDoingTasksState(newTasks);
  };

  const onReorder = (e) => {
    onRemove(e);
    onAdd(e);
  };

  return (
    <div className="widget-container">
      <List dataSource={plannedTasksState} keyExpr="id">
        <ItemDragging
          allowReordering={true}
          group="tasks"
          data="plannedTasks"
          onDragStart={onDragStart}
          onAdd={onAdd}
          onRemove={onRemove}
          onReorder={onReorder}
        />
      </List>
      <List dataSource={doingTasksState} keyExpr="id">
        <ItemDragging
          allowReordering={true}
          group="tasks"
          data="doingTasks"
          onDragStart={onDragStart}
          onAdd={onAdd}
          onRemove={onRemove}
          onReorder={onReorder}
        />
      </List>
    </div>
  );
};

export default App;