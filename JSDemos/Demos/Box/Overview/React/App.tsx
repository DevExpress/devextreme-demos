import React from 'react';

import Box, {
  Item,
} from 'devextreme-react/box';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'Box' cannot be used as a JSX component.
        <Box
          direction="row"
          width="100%"
          height={75}>
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item ratio={1}>
            <div className="rect demo-dark">
              ratio = 1
            </div>
          </Item>
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item ratio={2}>
            <div className="rect demo-light">
                ratio = 2
            </div>
          </Item>
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item ratio={1}>
            <div className="rect demo-dark">
              ratio = 1
            </div>
          </Item>
        </Box>
        <br />
        // @ts-expect-error TS(2786): 'Box' cannot be used as a JSX component.
        <Box
          direction="row"
          width="100%"
          height={75}>
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item
            // @ts-expect-error TS(2322): Type '{ children: Element; ratio: number; baseSize... Remove this comment to see the full error message
            ratio={0}
            baseSize={150}>
            <div className="rect demo-dark">
              150px
            </div>
          </Item>
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item
            // @ts-expect-error TS(2322): Type '{ children: Element; ratio: number; }' is no... Remove this comment to see the full error message
            ratio={1}>
            // @ts-expect-error TS(2786): 'Box' cannot be used as a JSX component.
            <Box
              className="demo-light"
              direction="row"
              width="100%"
              height={75}
              align="center"
              crossAlign="center">
              // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
              <Item
                // @ts-expect-error TS(2322): Type '{ children: Element; ratio: number; baseSize... Remove this comment to see the full error message
                ratio={0}
                baseSize={50}>
                <div className="small"></div>
              </Item>
              // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
              <Item
                // @ts-expect-error TS(2322): Type '{ children: Element; ratio: number; baseSize... Remove this comment to see the full error message
                ratio={0}
                baseSize={50}>
                <div className="small"></div>
              </Item>
              // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
              <Item
                // @ts-expect-error TS(2322): Type '{ children: Element; ratio: number; baseSize... Remove this comment to see the full error message
                ratio={0}
                baseSize={50}>
                <div className="small"></div>
              </Item>
            </Box>
          </Item>
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item
            // @ts-expect-error TS(2322): Type '{ children: Element; ratio: number; baseSize... Remove this comment to see the full error message
            ratio={0}
            baseSize="10%">
            <div className="rect demo-dark">
              10%
            </div>
          </Item>
        </Box>
        <br />
        // @ts-expect-error TS(2786): 'Box' cannot be used as a JSX component.
        <Box
          direction="col"
          width="100%"
          height={250}>
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item ratio={1}>
            <div className="rect demo-dark header">
              Header
            </div>
          </Item>
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item
            // @ts-expect-error TS(2322): Type '{ children: Element; ratio: number; baseSize... Remove this comment to see the full error message
            ratio={2}
            baseSize={0}>
            // @ts-expect-error TS(2786): 'Box' cannot be used as a JSX component.
            <Box
              direction="row"
              width="100%"
              height={125}>
              // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
              <Item ratio={1}>
                <div className="rect demo-dark">
                  Left Bar
                </div>
              </Item>
              // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
              <Item ratio={1}>
                <div className="rect demo-light">
                  Content
                </div>
              </Item>
              // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
              <Item ratio={1}>
                <div className="rect demo-dark">
                  Right Bar
                </div>
              </Item>
            </Box>
          </Item>
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item ratio={1}>
            <div className="rect demo-dark footer">
              Footer
            </div>
          </Item>
        </Box>
      </React.Fragment>
    );
  }
}

export default App;
