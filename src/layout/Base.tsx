import React from "react";
import { Menu } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons';
import style from './style.module.less';

const { Item } = Menu;

const Index: React.FC<RouteComponentProps> = ({ children, history, location }) => {

  return (
    <div className={style.layoutWrap}>
      <div className={style.left}>
        <Menu
          mode="inline"
          theme="dark"
          onClick={({ key }) => {
            location.pathname !== key && history.push(key)
          }}
        >
          <Item key="/index">
            <AppstoreOutlined />首页
          </Item>
          <Item key="/demo">
            <UnorderedListOutlined />
            Demo
          </Item>
        </Menu>
      </div>
      <div className={style.right}>{children}</div>
    </div>
  )
};

export default withRouter(Index);
