import React, {Component, Suspense} from 'react';
import {AnalysisData} from './data.d';
import {Dispatch} from 'redux';
import {GridContent} from '@ant-design/pro-layout';

interface myProps {
  data: AnalysisData;
  dispatch: Dispatch<any>;
  loading: boolean;
}

interface myStatus {

}

class Panel extends Component<myProps, myStatus> {
  state: myStatus = {};

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
