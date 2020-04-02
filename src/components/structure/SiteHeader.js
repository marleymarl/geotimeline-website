import React, { Component, useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
//
import 'antd/dist/antd.less';
import './SiteHeader.less';
//
const { Header } = Layout;

const SiteHeader = props => {
  const [current, setCurrent] = useState(null);
  const { navLayout } = props;

  return (
    <Header>
      <Menu mode={navLayout}>
        <Menu.Item key='how'>How it works</Menu.Item>
        <Menu.Item key='who'>Who are we</Menu.Item>
      </Menu>
    </Header>
  );
};

export default SiteHeader;
