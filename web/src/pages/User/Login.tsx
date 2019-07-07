import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import router from 'umi/router';
import {connect} from 'dva';
import styles from './login.less';

export interface FromDataType {
  userName: string;
  password: string;
  remember: boolean,
}
// @ts-ignore
@connect(
  ({
     LoginRegister,
     loading,
   }: {
    LoginRegister: any;
    loading: {
      effects: {
        [key: string]: string;
      };
    };
  }) => ({
    LoginRegister,
    submitting: loading.effects['LoginRegister/login'],
  })
)
@Form.create()
class Login extends React.Component{
  state={};

  handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: FromDataType) => {
      if (!err) {
        const {dispatch} = this.props;
        dispatch({
          type: 'LoginRegister/login',
          payload: values,
        })
      }
    });
  };
  handleResigter = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    router.push('/User/Register');
  }


  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const { getFieldDecorator } = this.props.form;
    return(
      <div className={styles.main}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('userName', {
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
          <p style={{textAlign: 'right'}}>新同学? <a href='#' onClick={this.handleResigter}>现在注册</a></p>
        </Form>

      </div>
    )

  }
}
export default Login;
