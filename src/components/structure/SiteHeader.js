import React, { useState } from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { EnvironmentTwoTone, MenuOutlined } from '@ant-design/icons';

import './SiteHeader.less';

const { Header } = Layout;

const SiteHeader = props => {
  const [current, setCurrent] = useState(null);
  const { navLayout } = props;

  return (
    <Header className='header'>
      <Row justify='space-between'>
        <Col sm={12} xs={18}>
          <div className='brand'>
            <EnvironmentTwoTone />
            <span>GeoTimeline</span>
          </div>
        </Col>
        <Col sm={12} xs={6}>
          <Menu
            mode={navLayout}
            style={{ textAlign: 'right' }}
            overflowedIndicator={<MenuOutlined style={{margin: 0}}/>}
          >
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
