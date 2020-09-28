const resourcesAmount = 100;

function getRandomInt(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export function generateResources() {
  const colors = [
    'rgba(63, 81, 181, 0.7)',
    'rgba(234, 128, 252, 0.7)',
    'rgba(223, 82, 134, 0.7)',
    'rgba(254, 194, 0, 0.7)'
  ];
  const resources = [];

  for(var i = 0; i < resourcesAmount; ++i) {
    const color = colors[i % colors.length];

    resources.push({
      id: i,
      text: `Resource ${i}`,
      color: color
    });
  }

  return resources;
};

export function generateAppointments() {
  const startDay = 6;
  const endDay = 14;
  const startDayHour = 9;
  const endDayHour = 18;

  const appointments = [];

  for (let resourceId = 0; resourceId < resourcesAmount; ++resourceId) {
    for (let dayIndex = startDay; dayIndex <= endDay; ++dayIndex) {
      for (let count = 0; count < 10; ++count) {
        const hour = getRandomInt(startDayHour, endDayHour);
        const minutes = getRandomInt(15, 44);
        const minutesBeforeHour = 60 - minutes;
        const minMinutes = Math.min(minutes, minutesBeforeHour);
        const maxMinutes = Math.max(minutes, minutesBeforeHour);
        const apointmentTime = getRandomInt(minMinutes, maxMinutes) * 60 * 1000;
        const startDate = new Date(2021, 8, dayIndex, hour, minutes);
        const endDate = new Date(startDate.getTime() + apointmentTime);

        const item = {
          text: `item ${resourceId}_${dayIndex}`,
          resourceId: resourceId,
          startDate: startDate,
          endDate: endDate,
        };
        appointments.push(item);
      }
    }
  }

  return appointments;
}
