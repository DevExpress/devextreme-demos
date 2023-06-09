import React, { useState, useEffect } from 'react';
import Scheduler from 'devextreme-react/scheduler';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
import { HubConnectionBuilder, HttpTransportType } from '@aspnet/signalr';

const BASE_PATH = 'https://js.devexpress.com/Demos/NetCore/';
const url = `${BASE_PATH}api/SchedulerSignalR`;

function createStore() {
  return AspNetData.createStore({
    key: 'AppointmentId',
    loadUrl: url,
    insertUrl: url,
    updateUrl: url,
    deleteUrl: url,
    onBeforeSend(method, ajaxOptions) {
      ajaxOptions.xhrFields = { withCredentials: true };
    },
  });
}

function App() {
  const [store1, setStore1] = useState(null);
  const [store2, setStore2] = useState(null);
  const currentDate = new Date(2021, 3, 27);
  const views = ['day', 'workWeek'];

  useEffect(() => {
    const connection = new HubConnectionBuilder()
      .withUrl(`${BASE_PATH}schedulerSignalRHub`, {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
      })
      .build();

    connection
      .start()
      .then(() => {
        connection.on('update', (key, data) => {
          setStore1((prevStore) => {
            const newStore = prevStore.push([{ type: 'update', key, data }]);
            return newStore;
          });
          setStore2((prevStore) => {
            const newStore = prevStore.push([{ type: 'update', key, data }]);
            return newStore;
          });
        });

        connection.on('insert', (data) => {
          setStore1((prevStore) => {
            const newStore = prevStore.push([{ type: 'insert', data }]);
            return newStore;
          });
          setStore2((prevStore) => {
            const newStore = prevStore.push([{ type: 'insert', data }]);
            return newStore;
          });
        });

        connection.on('remove', (key) => {
          setStore1((prevStore) => {
            const newStore = prevStore.push([{ type: 'remove', key }]);
            return newStore;
          });
          setStore2((prevStore) => {
            const newStore = prevStore.push([{ type: 'remove', key }]);
            return newStore;
          });
        });
      });

    setStore1(createStore());
    setStore2(createStore());
  }, []);

  return (
    <div className="schedulers">
      <div className="column-1">
        <Scheduler
          timeZone="America/Los_Angeles"
          dataSource={store1}
          views={views}
          defaultCurrentView="day"
          defaultCurrentDate={currentDate}
          height={600}
          startDayHour={9}
          endDayHour={19}
          remoteFiltering={true}
          dateSerializationFormat="yyyy-MM-ddTHH:mm:ssZ"
          textExpr="Text"
          startDateExpr="StartDate"
          descriptionExpr="Description"
          endDateExpr="EndDate"
          allDayExpr="AllDay"
        />
      </div>
      <div className="column-2">
        <Scheduler
          timeZone="America/Los_Angeles"
          dataSource={store2}
          views={views}
          defaultCurrentView="day"
          defaultCurrentDate={currentDate}
          height={600}
          startDayHour={9}
          endDayHour={19}
          remoteFiltering={true}
          dateSerializationFormat="yyyy-MM-ddTHH:mm:ssZ"
          textExpr="Text"
          startDateExpr="StartDate"
          endDateExpr="EndDate"
          allDayExpr="AllDay"
        />
      </div>
    </div>
  );
}

export default App;