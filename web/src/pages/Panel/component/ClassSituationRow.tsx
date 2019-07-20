import React from "react";
import {Row, Col, Tooltip, Icon} from "antd";
import {FormattedMessage} from 'umi-plugin-react/locale';
import {ChartCard, Field, MiniArea, MyPie} from './Charts';
import styles from '../style.less';
import Trend from './Trend';
import {PanelDataType} from '../data.d';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 8,
  lg: 8,
  xl: 8,
  style: {marginBottom: 24},
};
const ClassSituationRow = ({loading, topRowData: {totalStudents, girl, boy, ageData, avgAge, beginDate, jobData, statisticsDate}}: { loading: boolean, topRowData: PanelDataType }) => {
  return (
    <Row gutter={16} type="flex">
      <Col {...topColResponsiveProps} >
        <ChartCard bordered={false}
                   title={
                     <FormattedMessage id="Panel.TotalClassStudent" defaultMessage="Total Student"/>
                   }
                   action={
                     <Tooltip
                       title={
                         <FormattedMessage id="Panel.Gender" defaultMessage="Gender Distribution"/>
                       }
                     >
                       <Icon type="info-circle-o"/>

                     </Tooltip>
                   }
                   total={totalStudents}
                   footer={
                     <Field
                       label={
                         <FormattedMessage id="Panel.Gender" defaultMessage="Gender Distribution"/>
                       }
                       value={`${girl / 2}:${boy / 2}`}
                     />
                   }
                   contentHeight={60}
        >
          <Trend flag="woman" style={{marginRight: 16}}>
            <FormattedMessage id="Panel.girl" defaultMessage="girl"/>
            <span className={styles.trendText}>{girl}</span>
          </Trend>
          <Trend flag="man">
            <FormattedMessage id="Panel.boy" defaultMessage="boy"/>
            <span className={styles.trendText}>{boy}</span>
          </Trend>
        </ChartCard>
      </Col>
      <Col {...topColResponsiveProps} >
        <ChartCard bordered={false}
                   title={
                     <FormattedMessage id="Panel.CompositeLife" defaultMessage="Composite life"/>
                   }
                   action={
                     <Tooltip
                       title={
                         <FormattedMessage id="Panel.AgeFluctuation" defaultMessage="Age fluctuation"/>
                       }
                     >
                       <Icon type="info-circle-o"/>

                     </Tooltip>
                   }
                   total={avgAge}
                   footer={
                     <Field
                       label={
                         <FormattedMessage id="Panel.beginTime" defaultMessage="begin Time"/>
                       }
                       value={beginDate}
                     />
                   }
                   contentHeight={60}
        >

          <MiniArea color="#975FE4" data={ageData}/>
        </ChartCard>
      </Col>
      <Col {...topColResponsiveProps} >
        <ChartCard bordered={false}
                   title={
                     <FormattedMessage id="Panel.JobStatistics" defaultMessage="Job Statistics"/>
                   }
                   action={
                     <Tooltip
                       title={
                         <FormattedMessage id="Panel.JobDirection" defaultMessage="job "/>
                       }
                     >
                       <Icon type="info-circle-o"/>

                     </Tooltip>
                   }
                   total={'89%'}
                   footer={
                     <Field
                       label={
                         <FormattedMessage id="Panel.statisticsDate" defaultMessage="statistics Date"/>
                       }
                       value={statisticsDate}
                     />
                   }
                   contentHeight={60}
        >
          <MyPie data={jobData}/>
        </ChartCard>
      </Col>
      {/*<Col {...topColResponsiveProps} >*/}
      {/*  <div className={styles.ClassSituationRow}>f</div>*/}
      {/*</Col>*/}
    </Row>
  )
}
export default ClassSituationRow;
