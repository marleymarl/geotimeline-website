import React, { Component, useEffect, useState } from 'react';
import { Layout, Menu, Row, Col } from 'antd';
//
// import 'antd/dist/antd.less';
import './SiteHeader.less';

const { Header } = Layout;

const SiteHeader = props => {
  const [current, setCurrent] = useState(null);
  const { navLayout } = props;

  return (
    <Header>
      <Row justify='space-between'>
        <Col span={12}></Col>
        <Col span={12}>
          <Menu mode={navLayout} style={{ textAlign: 'right' }}>
            <Menu.Item key='how'>How it works</Menu.Item>
            <Menu.Item key='who'>Who are we</Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  );
};

export default SiteHeader;
