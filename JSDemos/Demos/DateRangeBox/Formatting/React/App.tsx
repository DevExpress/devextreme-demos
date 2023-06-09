import React from 'react';
import DateRangeBox from 'devextreme-react/date-range-box';

const msInDay = 1000 * 60 * 60 * 24;
const now = new Date();
const startDate = new Date(now.getTime() - msInDay * 3);
const endDate = new Date(now.getTime() + msInDay * 3);

const commonSettings = {
  showClearButton: true,
  useMaskBehavior: true,
  openOnFieldClick: false,
};

export default function App() {
  return (
    <div>
      <div className="dx-fieldset">
        <div className="dx-field">
          <div className="dx-field-label">Locale-dependent format</div>
          <div className="dx-field-value">
            // @ts-expect-error TS(2786): 'DateRangeBox' cannot be used as a JSX component.
            <DateRangeBox
              // @ts-expect-error TS(2322): Type '{ showClearButton: boolean; useMaskBehavior:... Remove this comment to see the full error message
              startDatePlaceholder="12/31/2018"
              endDatePlaceholder="12/31/2018"
              {...commonSettings}
            />
          </div>
        </div>
        <div className="dx-field">
          <div className="dx-field-label">Built-in predefined format</div>
          <div className="dx-field-value">
            // @ts-expect-error TS(2786): 'DateRangeBox' cannot be used as a JSX component.
            <DateRangeBox
              displayFormat="shortdate"
              // @ts-expect-error TS(2322): Type '{ showClearButton: boolean; useMaskBehavior:... Remove this comment to see the full error message
              defaultStartDate={startDate}
              defaultEndDate={endDate}
              {...commonSettings}
            />
          </div>
        </div>
        <div className="dx-field">
          <div className="dx-field-label">Locale Data Markup Language (LDML) pattern</div>
          <div className="dx-field-value">
            // @ts-expect-error TS(2786): 'DateRangeBox' cannot be used as a JSX component.
            <DateRangeBox
              displayFormat="EEEE, d of MMM, yyyy"
              // @ts-expect-error TS(2322): Type '{ showClearButton: boolean; useMaskBehavior:... Remove this comment to see the full error message
              defaultStartDate={startDate}
              defaultEndDate={endDate}
              {...commonSettings}
            />
          </div>
        </div>
        <div className="dx-field">
          <div className="dx-field-label">Format with literal characters</div>
          <div className="dx-field-value">
            // @ts-expect-error TS(2786): 'DateRangeBox' cannot be used as a JSX component.
            <DateRangeBox
              displayFormat="'Year': yyyy, 'Month': MMM, 'Day': d"
              // @ts-expect-error TS(2322): Type '{ showClearButton: boolean; useMaskBehavior:... Remove this comment to see the full error message
              defaultStartDate={startDate}
              defaultEndDate={endDate}
              {...commonSettings}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
