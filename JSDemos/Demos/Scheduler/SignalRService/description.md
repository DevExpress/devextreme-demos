This demo shows how you can use a <a href="https://dotnet.microsoft.com/apps/aspnet/signalr" target="blank">SignalR</a> service to synchronize appointments across different devices. Each Scheduler is bound to an individual store to emulate the situation when Schedulers are being edited on two different clients. Changes made in one Scheduler are repeated in the other and persist until the browser session has expired.

To implement this functionality, follow the steps below:

1. Configure CustomStores. In this demo, we use the <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference" target="_blank">createStore</a> method (part of the <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data" target="_blank">DevExtreme.AspNet.data</a> extension).

1. Create store instances&mdash;one per Scheduler.

1. Create Schedulers and use their [dataSource](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#dataSource) property to bind them to the store instances.

1. When a push notification is received, call each store's [push(changes)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#pushchanges) method to update the store's data (see the `connection.on` event handlers).

For server-side configuration, refer to the [ASP.NET MVC version of this demo](/Demos/WidgetsGallery/Demo/Scheduler/SignalRService/Mvc/Light/).

For more information about integration with push services, refer to the following help topic: [Integration with Push Services](/Documentation/Guide/Data_Binding/Data_Layer/#Data_Modification/Integration_with_Push_Services).
