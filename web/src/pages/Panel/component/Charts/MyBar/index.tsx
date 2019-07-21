import React from "react";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
} from "bizcharts";
import {DataView} from '@antv/data-set';
import autoHeight from "@/pages/Panel/component/Charts/autoHeight";

export interface myProps {
  data: object,
  title: React.ReactNode;
}

class MyBar extends React.Component<myProps> {
  render() {
    const {data: propsData, title} = this.props;
    let data = propsData || [];
    const dv = new DataView();
    dv.source(data).transform({
      type: "fold",
      fields: ["1月", "2月", "3月", "4月", "5月", "6月",],
      // 展开字段集
      key: "月份",
      // key字段
      value: "人数" // value字段
    });
    return (
      <div>
        {title && <h4 style={{paddingLeft: "40px"}}>{title}</h4>}
        <Chart height={350} data={dv} forceFit>
          <Axis name="月份"/>
          <Axis name="人数"/>
          <Legend/>
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom
            type="interval"
            position="月份*人数"
            color={"name"}
            adjust={[
              {
                type: "dodge",
                marginRatio: 1 / 32
              }
            ]}
          />
        </Chart>
      </div>
    );
  }
}

// @ts-ignore
export default autoHeight()(MyBar);
