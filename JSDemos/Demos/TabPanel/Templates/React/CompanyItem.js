import React from 'react';

function CompanyItem({ data }) {
  const company = data;
  return (
    <div>
      <div className="tabpanel-item">
        <div>
          <p>
            <span>{ company.Address }</span>
          </p>
          <p>
            <span>{ company.City } </span>
            <span>{ company.State }</span>
            <span>{ company.Zipcode }</span>
          </p>
        </div>
        <div>
          <p>
            Phone: <b>{ company.Phone }</b>
          </p>
          <p>
            Fax: <b>{ company.Fax }</b>
          </p>
          <p>
            Website: <a
              href={company.Website}
              rel="noreferrer"
              target="_blank">
              { company.Website }
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CompanyItem;
