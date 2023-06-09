import React from 'react';
import {
  Chart,
  Title,
  CommonSeriesSettings,
  Series,
  Legend,
  ArgumentAxis,
  ValueAxis,
  CommonAnnotationSettings,
  Font,
  Image,
  Annotation,
} from 'devextreme-react/chart';
import { dataSource, annotationSources } from './data.js';

class App extends React.Component {
  customizeTooltip(annotation) {
    return {
      html: `<div class='tooltip'>${annotation.description}</div>`,
    };
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        id="chart"
        dataSource={dataSource}
      >
        // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
        <Title text="Apple Stock Price" subtitle="AAPL" />
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings argumentField="date" type="line" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series valueField="close" name="AAPL" />
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend visible={false} />
        // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
        <ArgumentAxis argumentType="datetime" />
        // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
        <ValueAxis position="right" />
        // @ts-expect-error TS(2786): 'CommonAnnotationSettings' cannot be used as a JSX... Remove this comment to see the full error message
        <CommonAnnotationSettings series="AAPL" type="image" customizeTooltip={this.customizeTooltip}>
          // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
          <Font size={16} weight={600} />
          // @ts-expect-error TS(2786): 'Image' cannot be used as a JSX component.
          <Image width={50.5} height={105.75} />
        </CommonAnnotationSettings>
        {
          // @ts-expect-error TS(2786): 'Annotation' cannot be used as a JSX component.
          annotationSources.map((item) => <Annotation
            key={item.description}
            // @ts-expect-error TS(2322): Type '{ children: Element; key: string; argument: ... Remove this comment to see the full error message
            argument={item.date}
            type={item.type}
            text={item.text}
            description={item.description}
            paddingTopBottom={item.padding}
            offsetY={item.offset}>
            // @ts-expect-error TS(2786): 'Image' cannot be used as a JSX component.
            <Image url={item.image} />
          </Annotation>)
        }
      </Chart>
    );
  }
}

export default App;
