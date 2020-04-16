// react imports
import React, { Component, Fragment, useState } from 'react';
// antd imports
import {
  Result,
  Button,
  Typography,
  Divider,
  Steps,
  Card,
  Row,
  Col,
  Space
} from 'antd';
import {photoCollection} from '../src/utils/StringUtils'
import { EnvironmentOutlined, DownCircleTwoTone } from '@ant-design/icons';
// imports
import { Faq, NewsCarousel, VolunteerMap } from './components/elements';
import { MainSteps } from './utils/StringUtils';
import './HomePage.less';

import SlideShow from '../src/components/elements/SlideShow.js'

const { Title, Paragraph } = Typography;
const { Step } = Steps;
const { Meta } = Card;



const slidePhotos = photoCollection.map(
  item => <SlideShow
    key={item[0]}
    id={item[0]}
    urls={item[2]}
    title={item[1]}
  />
)


export default function HomePage() {
  const [current, setCurrent] = useState(0);

  return (
    <Fragment>
      <Row justify="center" align="middle" id="start" className="hero-section">
        <Col span={18}>
          <Result
            icon={<EnvironmentOutlined />}
            title="GeoTimeline - Map Data Input of Historical Footprints for Confirmed Cases of Coronavirus"
            subTitle="If you are a confirmed case, enter in your footprints anonymously by clicking on the map and setting a date and time for each. Or click to view the current global footprint dataset."
            extra={[
              <Button
                type="primary"
                size="large"
                key="console"
                href="https://app.geotimeline.com"
              >
                Start A Timeline
              </Button>,
              <Button
                key="buy"
                size="large"
                href="https://app.geotimeline.com/dataview"
              >
                View Data
              </Button>,
            ]}
          />
          <div className="scrollTo">
            <DownCircleTwoTone />
          </div>
          <Divider />
        </Col>
      </Row>
      <Row
        justify="center"
        gutter={[24, 0]}
        style={{ padding: '80px 0', backgroundColor: '@primary-color' }}
        id="how"
      >
        <Col span={20} style={{ textAlign: 'center' }}>
          <Title level={2}>
            How It Works
          </Title>

          <Space style={{ textAlign: 'center' }}>
            {slidePhotos}
          </Space>

          {/* <Steps current={current} onChange={setCurrent}>
            {MainSteps.map((step) => (
              <Step
                key={step.title}
                title={step.title}
                description={step.description}
              />
            ))}
          </Steps> */}
        </Col>
      </Row>
      <Row
        justify="center"
        gutter={[24, 0]}
        style={{
          padding: '60px 0',
          flexWrap: 'wrap',
          position: 'relative',
        }}
        id="who"
      >
        <Col span={18}>
          <Title level={2} style={{ textAlign: 'center' }}>
            Who Is Making This
          </Title>
          <Paragraph style={{ textAlign: 'center' }}>
            An international team of volunteers is building this and all of the
            code is open sourced on Github.
          </Paragraph>
        </Col>

      </Row>
      <Row justify="center" style={{ padding: '80px 0' }} className="dark">
        <Col span={12}>
          <NewsCarousel />
        </Col>
      </Row>
      <Row
        justify="center"
        gutter={[24, 0]}
        style={{ padding: '80px 0' }}
        id="faq"
      >
        <Col span={12}>
          <Faq />
        </Col>
      </Row>
    </Fragment>
  );
}
