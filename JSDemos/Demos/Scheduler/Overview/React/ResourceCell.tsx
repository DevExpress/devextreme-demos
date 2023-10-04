import React from 'react';

const ResourceCell = (props: { data: { color: any; text: any; data: { avatar: any; age: any; discipline: any; }; }; }) => {
  const { data: { color, text, data: { avatar, age, discipline } } } = props;

  return (
    <div className="dx-template-wrapper">
      <div className="name" style={{ background: color }}>
        <h2>{text}</h2>
      </div>
      <div className="avatar">
        <img src={avatar} />
      </div>
      <div className="info" style={{ color }}>
          Age: {age}
        <br />
        <b>{discipline}</b>
      </div>
    </div>
  );
};

export default ResourceCell;
