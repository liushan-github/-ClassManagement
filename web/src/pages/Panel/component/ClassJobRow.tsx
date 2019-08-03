import React from 'react';
import {Tabs, Row, Col} from 'antd';
import {FormattedMessage} from 'umi-plugin-react/locale';
import numeral from 'numeral';
import styles from '../style.less';
import {MyBar, LineChart} from './Charts';
// @ts-ignore
import {PanelDataType} from '@/pages/Panel/data';

const {TabPane} = Tabs;


const ClassJobRow = ({loading, topRowData: {getJobDate, rankingListData, cityData, sortCity}}: { loading: boolean, topRowData: PanelDataType }) => (
  <Tabs className={styles.tabRow} size="large" tabBarStyle={{backgroundColor: '#fafafa', padding: '0px 10px'}}>
      <TabPane tab={<FormattedMessage id="Panel.GetJobDate" defaultMessage="Get Job"/>} key="1">
        <Row type="flex">
          <Col xl={16} lg={12} md={12} sm={24} xs={24}>
            <div className={styles.salesBar}>
              <MyBar data={getJobDate} title={
                <FormattedMessage
                  id="Panel.GetJobDate"
                  defaultMessage="Job Date"
                />
              }/>
            </div>
          </Col>
          <Col xl={8} lg={12} md={12} sm={24} xs={24}>
            <div className={styles.salesRank}>
              <h4 className={styles.rankingTitle}>
                <FormattedMessage
                  id="Panel.JobDateRanking"
                  defaultMessage="Job Ranking"
                />
              </h4>
              <ul className={styles.rankingList}>
                {rankingListData && rankingListData.map((item: any, i) => (
                  <li key={item.title}>
                      <span className={`${styles.rankingItemNumber} ${i < 3 ? styles.active : ''}`}>
                        {i + 1}
                      </span>
                    <span className={styles.rankingItemTitle} title={item.title}>
                        {item.title}
                      </span>
                    <span className={styles.rankingItemValue}>
                        {numeral(item.total).format('0,0')}
                      </span>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </TabPane>
      <TabPane tab={<FormattedMessage
        id="Panel.cityJob"
        defaultMessage="city Job"
      />} key="2">
        <Row type="flex">
          <Col xl={16} lg={12} md={12} sm={24} xs={24}>
            <div className={styles.salesBar}>
              <LineChart data={cityData} title={
                <FormattedMessage
                  id="Panel.cityJob"
                  defaultMessage="city Job"
                />
              }/>
            </div>
          </Col>
          <Col xl={8} lg={12} md={12} sm={24} xs={24}>
            <div className={styles.salesRank}>
              <h4 className={styles.rankingTitle}>
                <FormattedMessage
                  id="Panel.CityPeopleRanking"
                  defaultMessage="city Ranking"
                />
              </h4>
              <ul className={styles.rankingList}>
                {sortCity && sortCity.map((item: any, i) => (
                  <li key={item.city}>
                      <span className={`${styles.rankingItemNumber} ${i < 3 ? styles.active : ''}`}>
                        {i + 1}
                      </span>
                    <span className={styles.rankingItemTitle} title={item.city}>
                        {item.city}
                      </span>
                    <span className={styles.rankingItemValue}>
                        {numeral(item.value).format('0,0')}
                      </span>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </TabPane>
    </Tabs>
  )
export default ClassJobRow;
