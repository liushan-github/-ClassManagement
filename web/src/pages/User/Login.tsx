import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './login.less';
@Form.create()
class Login extends React.Component{
  state={};
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const { getFieldDecorator } = this.props.form;
    return(
      <div className={styles.main}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>记住我</Checkbox>)}
            <a href='#' style={{float:'right'}}>
             忘记密码
            </a>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{width:'100%'}}>
              登录
            </Button>
          </Form.Item>
          <p style={{textAlign:'right'}}>新同学? <a href='#'>现在注册</a></p>
        </Form>

      </div>
      )

  }
}
export default Login;
