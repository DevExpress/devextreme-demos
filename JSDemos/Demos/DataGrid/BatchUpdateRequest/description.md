If data is stored on a server, the widget can send a single request to save all changes made in batch edit mode. To add this functionality, implement the onSaving function. It accepts an `e` object, the parameter that stores information about the event that caused the function's execution.

In this demo, onSaving works as follows:

1. e.cancel is set to true to disable the default saving logic.

2. If the e.changes array has edit data, then:

  1. To handle the batch request, e.promise is assigned an asynchronous function. It accepts an API endpoint and e.changes. This function makes an asynchronous post request to the specified endpoint to apply the edit data. Depending on the framework, e.component can be passed as a third parameter that stores the widget's instance.