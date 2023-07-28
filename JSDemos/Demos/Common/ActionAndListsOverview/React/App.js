import React from 'react';
import ArrayStore from 'devextreme/data/array_store';
import List from 'devextreme-react/list';
import TileView from 'devextreme-react/tile-view';
import { data } from './data.js';

const dataSourceOptions = {
  store: new ArrayStore({
    data,
    key: 'Id',
  }),
  group: 'City',
  searchExpr: ['Hotel_Name', 'City', 'Address'],
};

const listAttrs = { className: 'list' };
const tileViewAttrs = { className: 'tile' };
const formatCurrency = new Intl.NumberFormat(
  'en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  },
).format;

const App = () => {
  const [currentHotel, setCurrentHotel] = React.useState(data[0]);
  const [selectedItemKeys, setSelectedItemKeys] = React.useState([data[0].Id]);

  const handleListSelectionChange = React.useCallback(() => ((e) => {
    const currentHotel = e.addedItems[0];
    setCurrentHotel(currentHotel);
    setSelectedItemKeys([currentHotel.Id]);
  }));

  const renderListGroup = (group) => {
    return <div className="city">{group.key}</div>;
  };

  const renderListItem = (item) => {
    return (
      <div>
        <div className="hotel">
          <div className="name">{item.Hotel_Name}</div>
          <div className="address">{`${item.Postal_Code}, ${item.Address}`}</div>
          <div className={`type ${item.Hotel_Class.toLowerCase()}`} />
        </div>
        <div className="price-container">
          <div className="price">{formatCurrency(item.Price)}</div>
          &nbsp;
          <div className="caption">per<br />night</div>
        </div>
      </div>
    );
  };

  const renderTile = (item) => {
    return (
      <img
        className="tile-image"
        alt={item.FileName}
        src={`../../../../images/hotels/${item.FileName}`}
      />
    );
  };

  return (
    <>
      <div className="left">
        <List
          selectionMode="single"
          dataSource={dataSourceOptions}
          grouped={true}
          searchEnabled={true}
          selectedItemKeys={selectedItemKeys}
          onSelectionChanged={handleListSelectionChange}
          itemRender={renderListItem}
          groupRender={renderListGroup}
          elementAttr={listAttrs}
        />
      </div>

      <div className="right">
        <div className="header">
          <div className="name-container">
            <div className="name">{currentHotel.Hotel_Name}</div>
            <div className={`type ${currentHotel.Hotel_Class.toLowerCase()}`} />
          </div>
          <div className="price-container">
            <div className="price">{formatCurrency(currentHotel.Price)}</div>
            &nbsp;
            <div className="caption">per<br />night</div>
          </div>
        </div>

        <TileView
          dataSource={currentHotel.Images}
          height={224}
          baseItemHeight={100}
          baseItemWidth={137}
          itemMargin={12}
          noDataText=""
          itemRender={renderTile}
          elementAttr={tileViewAttrs}
        />

        <div className="address">{currentHotel.Postal_Code}, {currentHotel.Address}</div>
        <div className="description">{currentHotel.Description}</div>
      </div>
    </>
  );
};

export default App;