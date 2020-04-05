import React, { useState } from 'react';
import { Layout, Menu, Row, Col, Empty, Button } from 'antd';
//
import './SiteFooter.less';
//
const { Footer } = Layout;

const SiteFooter = props => {
  const [current, setCurrent] = useState(null);
  const { navLayout } = props;

  return (
    <Footer>
      <Row justify='center' gutter={16}>
        <Col flex={3}>
          <Menu mode={navLayout}></Menu>
        </Col>
        <Col flex={3}>
          <Empty
            image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
            imageStyle={{
              height: 60,
            }}
            description={<span>All Of Our Code Is Open Source</span>}
          >
            <Button type='primary' href='https://github.com/marleymarl/geotime'>
              View It On Github
            </Button>
          </Empty>
        </Col>
        <Col flex={3}>
          <p style={{ textAlign: 'right' }}></p>
        </Col>
      </Row>
    </Footer>
  );
};

export default SiteFooter;
