import React from "react";
import {Row, Col, Icon, Form, Button, Input, Select,} from "antd";
import {FormComponentProps} from 'antd/es/form';
import QueueAnim from 'rc-queue-anim';

const FormItem = Form.Item;
const {Option} = Select;

interface myState {
  expand: boolean;
}

interface myProps extends FormComponentProps {

}

class MyForm extends React.Component<myProps, myState> {
  state = {
    expand: false,
  }
  toggle = () => {
    const {expand,} = this.state;
    this.setState({
      expand: !expand,
    });
  }
  handleSearch = (e: Event) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  }
  getFields = () => {
    const {getFieldDecorator} = this.props.form;
    const {expand} = this.state;
    const formLayout = {
      labelCol: {span: 8},
      wrapperCol: {span: 16},
    };
    return <QueueAnim animConfig={[
      {opacity: [1, 0], translateY: [0, 50]},
      {opacity: [1, 0], translateY: [0, -50]}
    ]}
    >
      {expand ?
        <Row gutter={{md: 8, lg: 24, xl: 48}} key="c">
          <Col md={8} sm={24}>
            <FormItem label="姓名" {...formLayout} style={{width: '100%'}}>
              {getFieldDecorator('name')(<Input placeholder="请输入" style={{width: '100%'}}/>)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="学号" {...formLayout} style={{width: '100%'}}>
              {getFieldDecorator('identity')(
                <Select placeholder="请选择" style={{width: '100%'}}>
                  <Option value="0">同学</Option>
                  <Option value="1">管理员</Option>
                  <Option value="-1">游客</Option>
                </Select>,
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24} style={{padding: '4px 4px'}}>
            <span>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button style={{marginLeft: 8}}>
                重置
              </Button>
            </span>
          </Col>
        </Row> : null}
    </QueueAnim>
  }

  render() {
    return (
      <Row style={{marginBottom: 10}}>
        <Form onSubmit={this.handleSearch} layout="inline">
          {this.getFields()}
        </Form>
        <Col span={24} style={{textAlign: 'center'}}>
          <a style={{marginLeft: 8, fontSize: 12}} onClick={this.toggle}>
            Collapse <Icon type={this.state.expand ? 'up' : 'down'}/>
          </a>
        </Col>
      </Row>
    )
  }
}

const BasicForm = Form.create({name: 'advanced_search'})(MyForm);
export default BasicForm;
