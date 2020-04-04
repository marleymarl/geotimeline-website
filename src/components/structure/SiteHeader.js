import React, { Component, useEffect, useState } from 'react';
import { Layout, Menu, Row, Col } from 'antd';
//
import { EnvironmentTwoTone } from '@ant-design/icons';

import './SiteHeader.less';

const { Header } = Layout;

const SiteHeader = props => {
  const [current, setCurrent] = useState(null);
  const { navLayout } = props;
//With previous linehieght, ther was a little notch on bottom of nav menu items
  return (
    <Header style={{ position: 'fixed', zIndex: 2, width: '100%', lineHeight: '62px' }}>
      <Row justify='space-between'>
        <Col span={12}>
          <div className='brand'>
            <EnvironmentTwoTone />
            <span>GeoTimeline</span>
          </div>
        </Col>
        <Col span={12}>
          <Menu mode={navLayout} style={{ textAlign: 'right' }}>
            <Menu.Item key='start'>
              <a href='#start'>Start here</a>
            </Menu.Item>
            <Menu.Item key='how'>
              <a href='#how'>How it works</a>
            </Menu.Item>
            <Menu.Item key='who'>
              <a href='#who'>Who are we</a>
            </Menu.Item>
            <Menu.Item key='faq'>
              <a href='#faq'>FAQ</a>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  );
};

export default SiteHeader;
