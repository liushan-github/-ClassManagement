import React from "react";
import {Table, Avatar, Tag, Button, Popconfirm, message} from 'antd';
import {connect} from 'dva';
import {Dispatch} from 'redux'
import {TableData} from '../data.d';

interface myProps {
  classManager: any,
  loading: boolean,
  dispatch: Dispatch,
}

interface myStates {
  selectedRowKeys: Array<number> | null,
  disabled: boolean,
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
class DataTable extends React.Component<myProps, myStates> {
  state = {
    selectedRowKeys: [],
  }
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
  confirm = (e: Event) => {
    console.log(e);
    message.success('Click on Yes');
  }
  cancel = (e: Event) => {
    console.log(e);
    message.error('Click on No');
  }
  onSelectChange = (selectedRowKeys: Array<number>) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({selectedRowKeys});
  };
  render() {
    const {classManager, loading} = this.props;
    const {data}: { data: TableData[] } = classManager;
    const {selectedRowKeys} = this.state;
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
        sorter: (a: { number: number }, b: { number: number }) => a.number - b.number,
        key: 'number',

        align: 'center',
      },
      {
        title: '头像',
        dataIndex: 'avatar',
        key: 'avatar',
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
        filters: [
          {
            text: '管理员',
            value: 1,
          },
          {
            text: '同学',
            value: 0,
          },
          {
            text: '游客',
            value: -1,
          },
        ],
        filterMultiple: false,
        onFilter: (value: number, record: { identity: number }) => record.identity === value,
        render: (text: number) => {
          return this.showTag(text);
        }
      },
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        align: 'center',
        render: (text: number, record: object) => {
          return (
            <>
              <Button type="default" icon="edit" style={{marginLeft: 10}}/>
              <Popconfirm
                title="Are you sure delete?"
                onConfirm={this.confirm}
                onCancel={this.cancel}
                okText="Yes"
                cancelText="No"
              >
                <Button type="danger" icon="minus" style={{marginLeft: 10}}/>
              </Popconfirm>
            </>
          )
        }
      }
    ]
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      selections: [
        {
          key: 'odd',
          text: 'Select Odd Row',
          onSelect: (changableRowKeys: Array<number>) => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key: number, index: number) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            this.setState({selectedRowKeys: newSelectedRowKeys});
          },
        },
        {
          key: 'even',
          text: 'Select Even Row',
          onSelect: (changableRowKeys: Array<number>) => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return true;
              }
              return false;
            });
            this.setState({selectedRowKeys: newSelectedRowKeys});
          },
        },
      ],
    };
    return (<>
      <p>
        <Button type="danger" style={{marginRight: 10}} disabled={selectedRowKeys.length > 1 ? false : true}>
          批量删除
        </Button>
        <Button type="primary" icon="plus">
          新建
        </Button>
      </p>
      <Table
        loading={loading}
        dataSource={data}
        columns={columns}
        rowSelection={rowSelection}
        rowKey={(record) => (record.number)}
        style={{background: 'white'}}
    />
    </>)
  }
}

export default DataTable;
