<template>
  <DxScheduler
    :data-source="dataSource"
    :current-date="currentDate"
    :views="views"
    :height="600"
    :start-day-hour="9"
    :end-day-hour="18"
    current-view="3 Days"
    :scrolling="scrolling"
    :show-all-day-panel="false"
    :groups="groups"
    :resources="resources"
  />
</template>
<script>
import DxScheduler from 'devextreme-vue/scheduler';
import { resources, generateAppointments } from './data.js';

export default {
  components: {
    DxScheduler,
  },
  data() {
    return {
      dataSource: generateAppointments(),
      currentDate: new Date(2021, 1, 2),
      views: [
        {
          type: 'day',
          groupOrientation: 'vertical',
          name: '3 Days',
          intervalCount: 3,
        },
        {
          type: 'workWeek',
          name: 'Work Week',
          groupOrientation: 'vertical',
        },
        {
          type: 'month',
          groupOrientation: 'vertical'
        }
      ],
      scrolling: { mode: 'virtual' },
      groups: ['humanId'],
      resources: [{
        fieldExpr: 'humanId',
        dataSource: resources
      }]
    };
  },
};
</script>
