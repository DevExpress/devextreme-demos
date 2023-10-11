import React from 'react';

import Popover, { IPositionProps } from 'devextreme-react/popover';

const formatCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
}).format;

const position: IPositionProps = {
  offset: '0, 2',
  at: 'bottom',
  my: 'top',
  collision: 'fit flip',
};

interface HouseProps {
  house: {
    ID: string;
    Favorite: boolean;
    Address: string;
    City: string;
    State: string;
    ZipCode: string;
    Beds: string;
    Baths: string;
    HouseSize: number;
    LotSize: string;
    Price: number;
    Coordinates: string;
    Features: string;
    Image: string;
    Agent: {
      Name: string;
      Picture: string;
      Phone: string;
    }
  };
  show: any;
  key: string;
}

class House extends React.PureComponent<HouseProps> {
  constructor(props) {
    super(props);

    this.show = this.show.bind(this);
    this.renderAgentDetails = this.renderAgentDetails.bind(this);
  }

  render() {
    const { house } = this.props;
    return (
      <div>
        <div onClick={this.show} className="item-content">

          <img alt={house.Address} src={house.Image} />

          <div className="item-options">
            <div>
              <div className="address">{house.Address}</div>
              <div className="price large-text">{formatCurrency(house.Price)}</div>
              <div className="agent">
                <div id={`house${house.ID}`}>
                  <img alt="Listing agent" src="../../../../images/icon-agent.svg" />
                                    Listing agent
                </div>
              </div>
            </div>
          </div>
          <Popover
            showEvent="mouseenter"
            hideEvent="mouseleave"
            position={position}
            target={`#house${house.ID}`}
            width={260}
            contentRender={this.renderAgentDetails}
          />
        </div>
      </div>
    );
  }

  renderAgentDetails() {
    const agent = this.props.house.Agent;
    return (
      <div className="agent-details">
        <img alt={agent.Name} src={agent.Picture} />
        <div>
          <div className="name large-text">{agent.Name}</div>
          <div className="phone">Tel: {agent.Phone}</div>
        </div>
      </div>
    );
  }

  show() {
    this.props.show(this.props.house);
  }
}

export default House;
