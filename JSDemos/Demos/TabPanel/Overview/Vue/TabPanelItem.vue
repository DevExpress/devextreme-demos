<template>
  <div class="tabpanel-item">
    <TaskItem
      v-for="(task, index) in tasks"
      :key="index"
      :task="task"
    />
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue';

export default {
  name: 'TabPanelItem',

  components: {
    TaskItem,
  },

  props: {
    tasks: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
.tabpanel-item .task-item:not(:last-child) {
  margin-bottom: 12px;
}
</style>
