If data is stored on a server, the widget can send a single request to save all changes made in batch edit mode. To add this functionality, implement the onSaving function. It accepts an `e` object, the parameter that stores information about the event that caused the function's execution.

This demo shows an example of how to implement onSaving:

1. **Disable the default saving logic**                  
For this, e.cancel is set to true.

2. **Handle the batch request if a user edited data**             
The e.changes array contains objects with edited rows' data. If this array is not empty, e.promise is assigned an asynchronous function. It accepts an API endpoint and  an instance of e.changes.

This function makes an asynchronous HTTP POST request to the specified endpoint to apply the edit data. Depending on the framework, e.component can be passed as a third parameter that stores the widget's instance.