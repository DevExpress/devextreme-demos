import React from 'react';

import Chart, {
  Series,
  Annotation,
  Legend,
  CommonAnnotationSettings,
} from 'devextreme-react/chart';

import { populationData } from './data.js';
import AnnotationTemplate from './AnnotationTemplate.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        id="chart"
        dataSource={populationData}
        title="Top 5 Most Populated States in US"
      >
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ children: never[]; type: string; argumentF... Remove this comment to see the full error message
          type="bar"
          argumentField="name"
          valueField="population"
          name="Population"
        >
        </Series>
        // @ts-expect-error TS(2786): 'CommonAnnotationSettings' cannot be used as a JSX... Remove this comment to see the full error message
        <CommonAnnotationSettings
          // @ts-expect-error TS(2322): Type '{ children: never[]; type: string; series: s... Remove this comment to see the full error message
          type="custom"
          series="Population"
          render={AnnotationTemplate}
          allowDragging={true}
        >
        </CommonAnnotationSettings>
        {populationData.map((data) => (
          // @ts-expect-error TS(2786): 'Annotation' cannot be used as a JSX component.
          <Annotation
            // @ts-expect-error TS(2322): Type '{ children: never[]; argument: string; key: ... Remove this comment to see the full error message
            argument={data.name}
            key={data.name}
            data={data}
          >
          </Annotation>
        ))}
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend visible={false}></Legend>
      </Chart>
    );
  }
}

export default App;
