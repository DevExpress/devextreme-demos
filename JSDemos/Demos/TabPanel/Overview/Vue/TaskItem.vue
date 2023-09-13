<template>
  <div :class="className">
    <p className="task-item-text">
      {{ task.text }}
    </p>

    <p className="task-item-info">
      {{ task.date }} by {{ task.assignedBy }}
    </p>

    <div className="task-item-pseudo-button-wrapper">
      <div className="task-item-pseudo-button"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',

  props: {
    task: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    className() {
      const { priority } = this.task;

      return `task-item task-item-priority-${priority}`;
    },
  },
};
</script>

<style>
.task-item {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.15);
}

.task-item::before {
  content: '';
  position: absolute;
  top: 8px;
  left: 6px;
  bottom: 8px;
  width: 3px;
  border-radius: 4px;
}

.task-item-priority-hight::before {
  background-color: #e1bee7;
}

.task-item-priority-normal::before {
  background-color: #ffe0b2;
}

.task-item-priority-low::before {
  background-color: #c8e6c9;
}

.task-item-text,
.task-item-info {
  display: inline-flex;
  align-items: center;
  height: 100%;
  padding: 0 16px;
  margin: 0;
}

.task-item-info {
  width: 240px;
  min-width: 240px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.38);
}

.task-item-pseudo-button-wrapper {
  position: absolute;
  right: 8px;
  top: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 18px;
  width: 18px;
  transform: translateY(-50%);
  cursor: pointer;
}

.task-item-pseudo-button {
  position: relative;
}

.task-item-pseudo-button,
.task-item-pseudo-button::before,
.task-item-pseudo-button::after {
  height: 3px;
  width: 3px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
}

.task-item-pseudo-button::before,
.task-item-pseudo-button::after {
  content: '';
  position: absolute;
}

.task-item-pseudo-button::before {
  top: -150%;
}

.task-item-pseudo-button::after {
  bottom: -150%;
}

.dx-color-scheme-teal-dark .task-item,
.dx-color-scheme-purple-dark .task-item,
.dx-color-scheme-orange-dark .task-item,
.dx-color-scheme-lime-dark .task-item,
.dx-color-scheme-blue-dark .task-item,
.dx-color-scheme-darkviolet .task-item,
.dx-color-scheme-darkmoon .task-item,
.dx-color-scheme-contrast .task-item,
.dx-color-scheme-dark .task-item {
  box-shadow: 0 1px 4px 0 rgba(255, 255, 255, 0.1);
}

.dx-color-scheme-teal-dark .task-item-info,
.dx-color-scheme-purple-dark .task-item-info,
.dx-color-scheme-orange-dark .task-item-info,
.dx-color-scheme-lime-dark .task-item-info,
.dx-color-scheme-blue-dark .task-item-info,
.dx-color-scheme-darkviolet .task-item-info,
.dx-color-scheme-darkmoon .task-item-info,
.dx-color-scheme-contrast .task-item-info,
.dx-color-scheme-dark .task-item-info {
  color: inherit;
}

.dx-color-scheme-teal-dark .task-item-pseudo-button,
.dx-color-scheme-teal-dark .task-item-pseudo-button::before,
.dx-color-scheme-teal-dark .task-item-pseudo-button::after,
.dx-color-scheme-purple-dark .task-item-pseudo-button,
.dx-color-scheme-purple-dark .task-item-pseudo-button::before,
.dx-color-scheme-purple-dark .task-item-pseudo-button::after,
.dx-color-scheme-orange-dark .task-item-pseudo-button,
.dx-color-scheme-orange-dark .task-item-pseudo-button::before,
.dx-color-scheme-orange-dark .task-item-pseudo-button::after,
.dx-color-scheme-lime-dark .task-item-pseudo-button,
.dx-color-scheme-lime-dark .task-item-pseudo-button::before,
.dx-color-scheme-lime-dark .task-item-pseudo-button::after,
.dx-color-scheme-blue-dark .task-item-pseudo-button,
.dx-color-scheme-blue-dark .task-item-pseudo-button::before,
.dx-color-scheme-blue-dark .task-item-pseudo-button::after,
.dx-color-scheme-darkviolet .task-item-pseudo-button,
.dx-color-scheme-darkviolet .task-item-pseudo-button::before,
.dx-color-scheme-darkviolet .task-item-pseudo-button::after,
.dx-color-scheme-darkmoon .task-item-pseudo-button,
.dx-color-scheme-darkmoon .task-item-pseudo-button::before,
.dx-color-scheme-darkmoon .task-item-pseudo-button::after,
.dx-color-scheme-contrast .task-item-pseudo-button,
.dx-color-scheme-contrast .task-item-pseudo-button::before,
.dx-color-scheme-contrast .task-item-pseudo-button::after,
.dx-color-scheme-dark .task-item-pseudo-button,
.dx-color-scheme-dark .task-item-pseudo-button::before,
.dx-color-scheme-dark .task-item-pseudo-button::after {
  background-color: #dedede;
}
</style>
