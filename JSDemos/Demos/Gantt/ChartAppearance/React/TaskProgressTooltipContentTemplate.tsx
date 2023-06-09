import React from 'react';

export default function TaskProgressTooltipContentTemplate(task: { progress: any; }) {
  return (
    <div className="custom-task-edit-tooltip">
      <div className="custom-tooltip-title">{task.progress}%</div>
    </div>
  );
}
