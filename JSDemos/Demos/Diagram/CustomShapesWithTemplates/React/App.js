import React, { useState } from 'react';
import Diagram, { CustomShape, Nodes, AutoLayout } from 'devextreme-react/diagram';
import { Popup } from 'devextreme-react/popup';
import ArrayStore from 'devextreme/data/array_store';
import CustomShapeTemplate from './CustomShapeTemplate.js';
import service from './data.js';

const App = () => {
  const employees = service.getEmployees();
  const dataSource = new ArrayStore({
    key: 'ID',
    data: employees,
  });

  const [currentEmployee, setCurrentEmployee] = useState({});
  const [popupVisible, setPopupVisible] = useState(false);

  const customShapeTemplate = (item) => {
    return CustomShapeTemplate(item.dataItem, () => { showInfo(item.dataItem); });
  }

  const showInfo = (employee) => {
    setCurrentEmployee(employee);
    setPopupVisible(true);
  }

  const hideInfo = () => {
    setCurrentEmployee({});
    setPopupVisible(false);
  }

  const itemTypeExpr = (obj) => {
    return `employee${obj.ID}`;
  }

  return (
    <div id="container">
      <Diagram id="diagram" customShapeRender={customShapeTemplate} readOnly={true}>
        {employees.map((employee, index) => <CustomShape
          type={`employee${employee.ID}`}
          baseType="rectangle"
          defaultWidth={1.5}
          defaultHeight={1}
          allowEditText={false}
          allowResize={false}
          key={index} />)}
        <Nodes dataSource={dataSource} keyExpr="ID" typeExpr={itemTypeExpr} parentKeyExpr="Head_ID">
          <AutoLayout type="tree" />
        </Nodes>
      </Diagram>
      <Popup
        visible={popupVisible}
        onHiding={hideInfo}
        dragEnabled={false}
        hideOnOutsideClick={true}
        showTitle={true}
        title="Information"
        width={300}
        height={280}
      >
        <p>Full Name: <b>{currentEmployee.Full_Name}</b></p>
        <p>Title: <b>{currentEmployee.Title}</b></p>
        <p>City: <b>{currentEmployee.City}</b></p>
        <p>State: <b>{currentEmployee.State}</b></p>
        <p>Email: <b>{currentEmployee.Email}</b></p>
        <p>Skype: <b>{currentEmployee.Skype}</b></p>
        <p>Mobile Phone: <b>{currentEmployee.Mobile_Phone}</b></p>
      </Popup>
    </div>
  );
}

export default App;