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
} from 'antd';
import { EnvironmentOutlined, DownCircleTwoTone } from '@ant-design/icons';
// imports
import { Faq, NewsCarousel, VolunteerMap } from './components/elements';
import { MainSteps } from './utils/StringUtils';
import './HomePage.less';

const { Title, Paragraph } = Typography;
const { Step } = Steps;
const { Meta } = Card;

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  return (
    <Fragment>
      <Row justify="center" align="middle" id="start" className="hero-section">
        <Col span={24} md={12}>
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
          {/*
            * Not sure if this is good if the primary content is where it's taking users away from
            *<div className="scrollTo">
            <a href="#how" title="Scroll to content">
              <DownCircleTwoTone />
            </a>
          </div>*/}
          <Divider />
        </Col>
      </Row>
      <Row
        justify="center"
        gutter={[24, 0]}
        style={{ padding: '80px 0', backgroundColor: '@primary-color' }}
        id="how"
      >
        <Col span={20} md={16}>
          <Title level={2} style={{ textAlign: 'center' }}>
            How It Works
          </Title>
          <Steps current={current} onChange={setCurrent}>
            {MainSteps.map((step) => (
              <Step
                key={step.title}
                title={step.title}
                description={step.description}
                status={'finish'}
              />
            ))}
          </Steps>
        </Col>
      </Row>
      <Row
        justify="center"
        gutter={[24, 0]}
        style={{
          padding: '60px 0 0',
          flexWrap: 'wrap',
          position: 'relative',
        }}
        id="who"
      >
        <Col span={20} md={16}>
          <Title level={2} style={{ textAlign: 'center' }}>
            Who Is Making This
          </Title>
          <Paragraph style={{ textAlign: 'center' }}>
            An international team of volunteers is building this and all of the
            code is open sourced on Github.
          </Paragraph>
        </Col>
        <Col span={24}>
          <VolunteerMap />
        </Col>
      </Row>
      <Row justify="center" style={{ padding: '80px 0' }} className="dark">
        <Col span={24} md={12}>
          <NewsCarousel />
        </Col>
      </Row>
      <Row
        justify="center"
        gutter={[24, 0]}
        style={{ padding: '80px 0' }}
        id="faq"
      >
        <Col span={20} md={12}>
          <Faq />
        </Col>
      </Row>
    </Fragment>
  );
}
