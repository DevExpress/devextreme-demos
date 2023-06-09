import React from 'react';

import { Button } from 'devextreme-react/button';

export class EmployeeItem extends React.Component {
  props: any;

  showInfo: any;

  constructor(props) {
    super(props);

    this.showInfo = () => this.props.showInfo(props.employee);
  }

  render() {
    return (
      <React.Fragment>
        <img src={ this.props.employee.Picture } id={ `image${this.props.employee.ID}` } /><br />
        <i>{this.props.employee.FirstName} {this.props.employee.LastName}</i><br />
        // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
        <Button
          className="button-info"
          text="Details"
          onClick={this.showInfo}
        />
      </React.Fragment>
    );
  }
}
