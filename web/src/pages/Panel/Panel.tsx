import React, {Component, Suspense} from 'react';
import {AnalysisData} from './data.d';
import {Dispatch} from 'redux';
import {connect} from 'dva';
import PageLoading from '@/components/PageLoading';
import {GridContent} from '@ant-design/pro-layout';

const ClassSituationRow = React.lazy(() => import('./component/ClassSituationRow'))
interface myProps {
  Panel: AnalysisData;
  dispatch: Dispatch<any>;
  loading: boolean;
}

interface myStatus {

}

@connect(
  ({Panel, loading}:
     {
       Panel: AnalysisData,
       loading: {
         effects: { [key: string]: boolean };
       };
     }) =>
    ({
      Panel: Panel,
      loading: loading.effects['Panel/fetch'],
    }))
class Panel extends Component<myProps, myStatus> {
  state: myStatus = {};

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'Panel/fetch',
    });
  }

  componentWillUnmount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'Panel/clear',
    });
  }

  componentWillReceiveProps(nextProps: Readonly<myProps>, nextContext: any): void {
    console.log(nextProps);
  }

  render() {
    const {loading, Panel} = this.props;
    const {topRowData} = Panel;
    return (<GridContent>
      <React.Fragment>
        <Suspense fallback={<PageLoading/>}>
          <ClassSituationRow loading={loading} topRowData={topRowData}/>
        </Suspense>
      </React.Fragment>
    </GridContent>)
  }
}

export default Panel;
