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
        <i className="task-item-pseudo-button dx-icon dx-icon-overflow"></i>
      </div>
    </div>
  );
}

export default TaskItem;
