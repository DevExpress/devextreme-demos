import React from 'react';

const formatDate = new Intl.DateTimeFormat('en-US').format;

export default function DataRow(rowInfo) {
  return (
    <React.Fragment>
      <tr className="main-row">
        // @ts-expect-error TS(2322): Type 'string' is not assignable to type 'number'.
        <td rowSpan="2"><img src={rowInfo.data.Picture} /></td>
        <td>{rowInfo.data.Prefix}</td>
        <td>{rowInfo.data.FirstName}</td>
        <td>{rowInfo.data.LastName}</td>
        <td>{rowInfo.data.Position}</td>
        <td>{formatDate(new Date(rowInfo.data.BirthDate))}</td>
        <td>{formatDate(new Date(rowInfo.data.HireDate))}</td>
      </tr>
      <tr className="notes-row">
        // @ts-expect-error TS(2322): Type 'string' is not assignable to type 'number'.
        <td colSpan="6"><div>{rowInfo.data.Notes}</div></td>
      </tr>
    </React.Fragment>
  );
}
