import React from 'react';
import BasicForm from './component/BasicForm';
import DataTable from './component/DataTable';

class ClassManager extends React.Component {
  render() {
    return (<>
      <BasicForm/>
      <DataTable/>
    </>)
  }
}

export default ClassManager;
