import React from 'react';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
} from 'bizcharts';
import autoHeight from '@/pages/Panel/component/Charts/autoHeight';

export interface myProps {
  data: object,
  title: React.ReactNode;
}

class LineChart extends React.Component<myProps> {
  render() {
    const {data: propsData, title} = this.props;
    const data = propsData || [];
    const cols = {
      value: {
        min: 0,
      },
      city: {
        range: [0, 1],
      },
    };
    return (
      <div>
        {title && <h4 style={{paddingLeft: '40px'}}>{title}</h4>}
        <Chart height={350} data={data} scale={cols} forceFit>
          <Axis name="city"/>
          <Axis name="value"/>
          <Tooltip
            crosshairs={{
              type: 'y',
            }}
          />
          <Geom type="line" position="city*value" size={2}/>
          <Geom
            type="point"
            position="city*value"
            size={4}
            shape="circle"
            style={{
              stroke: '#fff',
              lineWidth: 1,
            }}
          />
        </Chart>
      </div>
    );
  }
}

// @ts-ignore
export default autoHeight()(LineChart);
