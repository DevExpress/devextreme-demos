testUtils.postponeUntilFound('.dx-scheduler-appointment-title', 100, 10000)
.then(testUtils.postponeUntilNotFound('.dx-scheduler-appointment-title', 100, 20000))
