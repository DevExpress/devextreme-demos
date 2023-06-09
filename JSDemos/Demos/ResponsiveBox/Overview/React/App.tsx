import React from 'react';

import ResponsiveBox, {
  Row,
  Col,
  Item,
  Location,
} from 'devextreme-react/responsive-box';

function screen(width) {
  return (width < 700) ? 'sm' : 'lg';
}

class App extends React.Component {
  render() {
    return (
      <div id="page">
        // @ts-expect-error TS(2786): 'ResponsiveBox' cannot be used as a JSX component.
        <ResponsiveBox
          singleColumnScreen="sm"
          screenByWidth={screen}>
          // @ts-expect-error TS(2786): 'Row' cannot be used as a JSX component.
          <Row ratio={1}></Row>
          // @ts-expect-error TS(2786): 'Row' cannot be used as a JSX component.
          <Row ratio={2}></Row>
          // @ts-expect-error TS(2786): 'Row' cannot be used as a JSX component.
          <Row ratio={1}></Row>

          // @ts-expect-error TS(2786): 'Col' cannot be used as a JSX component.
          <Col ratio={1}></Col>
          // @ts-expect-error TS(2786): 'Col' cannot be used as a JSX component.
          <Col ratio={2} screen="lg"></Col>
          // @ts-expect-error TS(2786): 'Col' cannot be used as a JSX component.
          <Col ratio={1}></Col>
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item>
            // @ts-expect-error TS(2786): 'Location' cannot be used as a JSX component.
            <Location
              // @ts-expect-error TS(2322): Type '{ row: number; col: number; colspan: number;... Remove this comment to see the full error message
              row={0}
              col={0}
              colspan={3}
              screen="lg"
            ></Location>
            // @ts-expect-error TS(2786): 'Location' cannot be used as a JSX component.
            <Location
              // @ts-expect-error TS(2322): Type '{ row: number; col: number; colspan: number;... Remove this comment to see the full error message
              row={0}
              col={0}
              colspan={2}
              screen="sm"
            ></Location>
            <div className="header item">
              <p>Header</p>
            </div>
          </Item>
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item>
            // @ts-expect-error TS(2786): 'Location' cannot be used as a JSX component.
            <Location
              // @ts-expect-error TS(2322): Type '{ row: number; col: number; screen: string; ... Remove this comment to see the full error message
              row={1}
              col={1}
              screen="lg"
            ></Location>
            // @ts-expect-error TS(2786): 'Location' cannot be used as a JSX component.
            <Location
              // @ts-expect-error TS(2322): Type '{ row: number; col: number; colspan: number;... Remove this comment to see the full error message
              row={1}
              col={0}
              colspan={2}
              screen="sm"
            ></Location>
            <div className="content item">
              <p>Content</p>
            </div>
          </Item>
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item>
            // @ts-expect-error TS(2786): 'Location' cannot be used as a JSX component.
            <Location
              // @ts-expect-error TS(2322): Type '{ row: number; col: number; screen: string; ... Remove this comment to see the full error message
              row={1}
              col={0}
              screen="lg"
            ></Location>
            // @ts-expect-error TS(2786): 'Location' cannot be used as a JSX component.
            <Location
              // @ts-expect-error TS(2322): Type '{ row: number; col: number; screen: string; ... Remove this comment to see the full error message
              row={2}
              col={0}
              screen="sm"
            ></Location>
            <div className="left-side-bar item">
              <p>Left Bar</p>
            </div>
          </Item>
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item>
            // @ts-expect-error TS(2786): 'Location' cannot be used as a JSX component.
            <Location
              // @ts-expect-error TS(2322): Type '{ row: number; col: number; screen: string; ... Remove this comment to see the full error message
              row={1}
              col={2}
              screen="lg"
            ></Location>
            // @ts-expect-error TS(2786): 'Location' cannot be used as a JSX component.
            <Location
              // @ts-expect-error TS(2322): Type '{ row: number; col: number; screen: string; ... Remove this comment to see the full error message
              row={2}
              col={1}
              screen="sm"
            ></Location>
            <div className="right-side-bar item">
              <p>Right Bar</p>
            </div>
          </Item>
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item>
            // @ts-expect-error TS(2786): 'Location' cannot be used as a JSX component.
            <Location
              // @ts-expect-error TS(2322): Type '{ row: number; col: number; colspan: number;... Remove this comment to see the full error message
              row={2}
              col={0}
              colspan={3}
              screen="lg"
            ></Location>
            // @ts-expect-error TS(2786): 'Location' cannot be used as a JSX component.
            <Location
              // @ts-expect-error TS(2322): Type '{ row: number; col: number; colspan: number;... Remove this comment to see the full error message
              row={3}
              col={0}
              colspan={2}
              screen="sm"
            ></Location>
            <div className="footer item">
              <p>Footer</p>
            </div>
          </Item>
        </ResponsiveBox>
      </div>
    );
  }
}

export default App;
