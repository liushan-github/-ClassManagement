import React from "react";
import {Table, Avatar, Tag} from 'antd';
import {connect} from 'dva';
import {Dispatch} from 'redux'
import {TableData} from '../data.d';

interface myProps {
  classManager: any,
  loading: string,
  dispatch: Dispatch,
}

@connect((
  {
    classManager,
    loading
  }:
    {
      classManager: any,
      loading: {
        effects: {
          [key: string]: string;
        };
      };
    }
) => ({
  classManager,
  loading: loading.effects['classManager/fetch'],
}))
class DataTable extends React.Component<myProps> {
  componentDidMount(): void {
    const {dispatch} = this.props;
    dispatch({
      type: 'classManager/fetch'
    })
  }

  showTag = (text: number) => {
    switch (text) {
      case -1:
        return <Tag color='#87d068'>{'游客'}</Tag>;
        break;
      case 0:
        return <Tag color='#f50'>{'同学'}</Tag>;
        break;
      case 1:
        return <Tag color='#108ee9'>{'管理员'}</Tag>;
        break;
      default:
        return <Tag color='#87d068'>{'游客'}</Tag>;
    }
  }
  render() {
    const {classManager, loading} = this.props;
    const {data}: { data: TableData[] } = classManager;
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        align: 'center',
        render: (text: number) => {
          return <span>{text ? '男' : '女'}</span>
        }
      },
      {
        title: '学号',
        dataIndex: 'number',
        key: 'number',
        align: 'center',
      },
      {
        title: '头像',
        dataIndex: 'avatar',
        key: 'avatar',
        align: 'center',
        align: 'center',
        render: (text: string, record: object) => {
          return <Avatar shape='square' size={'large'}
                         src={text ? text : 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}/>
        }
      },
      {
        title: '口头禅',
        dataIndex: 'signature',
        key: 'signature',
      },
      {
        title: '身份',
        dataIndex: 'identity',
        key: 'identity',
        align: 'center',
        render: (text: number) => {
          return this.showTag(text);
        }
      },
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
      }
    ]
    return <Table
      loading={loading}
      dataSource={data}
      columns={columns}
      rowKey={(record) => (record.number)}
      style={{background: 'white'}}
    />
  }
}

export default DataTable;
