The **List** can load data from a Web API service. This demo illustrates the [createStore](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference) method used to load the data.

To replicate the example provided in this demo, do the following:

- Declare new instance of [dataSource](/Documentation/ApiReference/Data_Layer/DataSource/) as *listData* variable.   

- Pass the data loaded from a Web API service with **createStore** method *listData*'s store. At this stage, you can use any configuration parameters available for **dataSource**.   

- Pass the *listData* to the **dataSource** of the **List**.