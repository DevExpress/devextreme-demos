import React from 'react';

function TaskItem({ prop }) {
  return (
    <div className={`task-item task-item-priority-${prop.priority}`}>
      <p className="task-item-text">
        {prop.text}
      </p>

      <p className="task-item-info">
        {prop.date} by {prop.assignedBy}
      </p>

      <div className="task-item-pseudo-button-wrapper">
        <div className="task-item-pseudo-button"></div>
      </div>
    </div>
  );
}

export default TaskItem;
