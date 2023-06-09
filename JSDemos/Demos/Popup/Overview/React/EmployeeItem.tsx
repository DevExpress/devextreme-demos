import React from 'react';

import { Button } from 'devextreme-react/button';

interface EmployeeItemProps {
employee: { ID: number; FirstName: string; LastName: string; Prefix: string; Position: string; Picture: string; BirthDate: string; HireDate: string; Notes: string; Address: string; };
showInfo: (employee: any) => void;
}

export class EmployeeItem extends React.Component<EmployeeItemProps> {
  constructor(props: { employee: any; }) {
    super(props);

    this.showInfo = () => this.props.showInfo(props.employee);
  }

  render() {
    return (
      <React.Fragment>
        <img src={ this.props.employee.Picture } id={ `image${this.props.employee.ID}` } /><br />
        <i>{this.props.employee.FirstName} {this.props.employee.LastName}</i><br />
        <Button
          className="button-info"
          text="Details"
          onClick={this.showInfo}
        />
      </React.Fragment>
    );
  }
}
