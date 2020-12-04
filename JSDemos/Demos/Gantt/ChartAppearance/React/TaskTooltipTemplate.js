import React from 'react';

function getTimeEstimate(task) {
  return  Math.abs(task.start - task.end) / 36e5;
}

function getTimeLeft(task) {
  const timeEstimate = Math.abs(task.start - task.end) / 36e5;
  return Math.floor((100 - task.progress) / 100 * timeEstimate);
}

function setCustomTooltipStyles() {
  const parentElement = document.getElementsByClassName('dx-gantt-task-edit-tooltip')[0];
  parentElement.className = 'dx-gantt-task-edit-tooltip custom-task-edit-tooltip';
}

export default function TaskTooltipTemplate(task) {
  return (
    <div>
        {setCustomTooltipStyles()}
      <div class="custom-tooltip-title">{task.title}</div>
      <div class="custom-tooltip-row"><span> Estimate: </span>{getTimeEstimate(task)}<span> hours </span></div>
      <div class="custom-tooltip-row"><span> Left: </span>{getTimeLeft(task)}<span> hours </span></div>
    </div>
  );
}
