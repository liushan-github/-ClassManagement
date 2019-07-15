import React, {Component, Suspense} from 'react';
import {AnalysisData, PanelData} from './data.d';
import {Dispatch} from 'redux';
import {connect} from 'dva';
import {GridContent} from '@ant-design/pro-layout';

interface myProps {
  data: AnalysisData;
  dispatch: Dispatch<any>;
  loading: boolean;
}

interface myStatus {

}

@connect(({Panel}: { Panel: PanelData }) => ({Panel: Panel}))
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

  render() {
    return (<GridContent>
      <React.Fragment>
        <Suspense fallback={<div>Loading...</div>}>
          <div>'a'</div>
        </Suspense>
      </React.Fragment>
    </GridContent>)
  }
}

export default Panel;
