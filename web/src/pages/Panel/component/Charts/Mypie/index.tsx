import React from 'react';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
} from 'bizcharts';
import {DataView} from '@antv/data-set';
import autoHeight from '../autoHeight';

export interface myProps {
  data: object,
}

class MyPie extends React.Component<myProps> {
  render() {
    const {data: propsData} = this.props;
    const data = propsData || [];
    const dv = new DataView();
    dv.source(data).transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent',
    });
    const cols = {
      percent: {
        formatter: (val: any) => {
          val = `${val * 100}%`;
          return val;
        },
      },
    };
    return (
      <div>
        <Chart
          height={100}
          width={200}
          data={dv}
          scale={cols}
          padding={[-10, 0, 30, 0]}
          forceFit
        >
          <Coord type="theta" radius={0.75}/>
          <Axis name="percent"/>
          <Tooltip
            showTitle={false}
            itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
          />
          <Geom
            type="intervalStack"
            position="percent"
            color="item"
            tooltip={[
              'item*percent',
              (item, percent) => {
                percent = `${(percent * 100).toFixed(2)}%`;
                return {
                  name: item,
                  value: percent,
                };
              },
            ]}
            style={{
              lineWidth: 1,
              stroke: '#fff',
            }}
          >
          </Geom>
        </Chart>
      </div>
    );
  }
}


// @ts-ignore
export default autoHeight()(MyPie);
