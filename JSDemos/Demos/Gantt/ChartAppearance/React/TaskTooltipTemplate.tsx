import React from 'react';

function getTimeEstimate(task: { start: number; end: number; }) {
  return Math.abs(task.start - task.end) / 36e5;
}

function getTimeLeft(task: { start: number; end: number; progress: number; }) {
  const timeEstimate = Math.abs(task.start - task.end) / 36e5;
  return Math.floor(((100 - task.progress) / 100) * timeEstimate);
}

export default function TaskTooltipTemplate(task: { title: any; }) {
  return (
    <div className="custom-task-edit-tooltip">
      <div className="custom-tooltip-title">{task.title}</div>
      <div className="custom-tooltip-row"><span> Estimate: </span>{getTimeEstimate(task)}<span> hours </span></div>
      <div className="custom-tooltip-row"><span> Left: </span>{getTimeLeft(task)}<span> hours </span></div>
    </div>
  );
}
