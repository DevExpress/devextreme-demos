import React from 'react';
import PieChart, {
  CommonAnnotationSettings,
  Annotation,
  Image,
  Border,
  Shadow,
  Series,
  Label,
  Font,
  Tooltip,
  Legend,
} from 'devextreme-react/pie-chart';
import { dataSource, getAnnotationSources } from './data.js';
import TooltipTemplate from './TooltipTemplate.js';

const annotationSources = getAnnotationSources();

export default function App() {
  return (
    // @ts-expect-error TS(2786): 'PieChart' cannot be used as a JSX component.
    <PieChart
      id="pie"
      palette="Vintage"
      dataSource={dataSource}
      title="Ice Hockey World Championship Gold Medal Winners"
    >
      // @ts-expect-error TS(2786): 'CommonAnnotationSettings' cannot be used as a JSX... Remove this comment to see the full error message
      <CommonAnnotationSettings
        // @ts-expect-error TS(2322): Type '{ children: Element[]; type: string; color: ... Remove this comment to see the full error message
        type="image"
        color="transparent"
        paddingLeftRight={0}
        paddingTopBottom={0}
        tooltipRender={TooltipTemplate}
      >
        // @ts-expect-error TS(2786): 'Image' cannot be used as a JSX component.
        <Image
          // @ts-expect-error TS(2322): Type '{ height: number; width: number; }' is not a... Remove this comment to see the full error message
          height={60}
          width={90}
        />
        // @ts-expect-error TS(2786): 'Border' cannot be used as a JSX component.
        <Border color="transparent" />
      </CommonAnnotationSettings>
      {
        annotationSources.map((item) => (
          // @ts-expect-error TS(2786): 'Annotation' cannot be used as a JSX component.
          <Annotation
            key={item.country}
            // @ts-expect-error TS(2322): Type '{ children: Element[]; key: any; argument: a... Remove this comment to see the full error message
            argument={item.country}
            data={item.data}
            location={item.location}
            offsetX={item.offsetX}
            offsetY={item.offsetY}
            color={item.color}>
            // @ts-expect-error TS(2786): 'Image' cannot be used as a JSX component.
            <Image url={item.image} />
            // @ts-expect-error TS(2786): 'Border' cannot be used as a JSX component.
            <Border color={item.borderColor} />
            // @ts-expect-error TS(2786): 'Shadow' cannot be used as a JSX component.
            <Shadow opacity={item.shadowOpacity} />
          </Annotation>
        ))
      }
      // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
      <Series
        // @ts-expect-error TS(2322): Type '{ children: Element; argumentField: string; ... Remove this comment to see the full error message
        argumentField="country"
        valueField="gold">
        // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
        <Label
          // @ts-expect-error TS(2322): Type '{ children: Element; visible: true; position... Remove this comment to see the full error message
          visible
          position="inside"
          radialOffset={83}
          backgroundColor="transparent">
          // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
          <Font
            // @ts-expect-error TS(2322): Type '{ size: number; weight: number; }' is not as... Remove this comment to see the full error message
            size={16}
            weight={600}
          />
        </Label>
      </Series>
      // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
      <Tooltip
        // @ts-expect-error TS(2322): Type '{ paddingLeftRight: number; paddingTopBottom... Remove this comment to see the full error message
        paddingLeftRight={12}
        paddingTopBottom={10}
      />
      // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
      <Legend visible={false} />
    </PieChart>
  );
}
