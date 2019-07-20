import {Avatar, Icon, Menu, Spin, Badge} from 'antd';
import { ClickParam } from 'antd/es/menu';
import { FormattedMessage } from 'umi-plugin-react/locale';
import React from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { ConnectProps, ConnectState } from '@/models/connect';
import {CurrentStudent} from '@/models/user';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

export interface GlobalHeaderRightProps extends ConnectProps {
  currentStudent?: CurrentStudent;
  menu?: boolean;
}

class AvatarDropdown extends React.Component<GlobalHeaderRightProps> {
  onMenuClick = (event: ClickParam) => {
    const { key } = event;

    if (key === 'logout') {
      const { dispatch } = this.props;
      if (dispatch) {
        dispatch({
          type: 'login/logout',
        });
      }

      return;
    }
    router.push(`/account/${key}`);
  };

  render(): React.ReactNode {
    //删掉了menu
    const {currentStudent = {}} = this.props;
    const {status, messages, friends} = currentStudent;
    const menuHeaderDropdown = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
        <Menu.Item key="message">
          <Icon type="message"/>
          <FormattedMessage id="menu.account.message" defaultMessage="account message"/>
          <Badge count={messages} offset={[40, -6]}/>
        </Menu.Item>
        <Menu.Item key="team">
          <Icon type="team"/>
          <FormattedMessage id="menu.account.friends" defaultMessage="account friends"/>
          <Badge count={friends} offset={[40, -6]}/>
        </Menu.Item>
        <Menu.Item key="center">
          <Icon type="user" />
          <FormattedMessage id="menu.account.center" defaultMessage="account center" />
        </Menu.Item>
        <Menu.Item key="settings">
          <Icon type="setting" />
          <FormattedMessage id="menu.account.settings" defaultMessage="account settings" />
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />
          <FormattedMessage id="menu.account.logout" defaultMessage="logout" />
        </Menu.Item>
      </Menu>
    );

    return currentStudent && currentStudent.name ? (
      <HeaderDropdown overlay={menuHeaderDropdown}>
        <span className={`${styles.action} ${styles.account}`}>
          {currentStudent && currentStudent.avatar
            ?
            <Badge status={status ? "success" : "error"} offset={[-12, 20]}><Avatar size="small"
                                                                                    className={styles.avatar}
                                                                                    src={currentStudent.avatar}
                                                                                    alt="avatar"/></Badge>
            :
            <Avatar icon="user"/>
          }
          <span className={styles.name}>{currentStudent.name}</span>
        </span>
      </HeaderDropdown>
    ) : (
      <Spin size="small" style={{ marginLeft: 8, marginRight: 8 }} />
    );
  }
}
export default connect(({ user }: ConnectState) => ({
  currentStudent: user.currentStudent,
}))(AvatarDropdown);
