import React, { Component } from 'react';
import {
  Result,
  Button,
  Typography,
  Divider,
  Steps,
  Avatar,
  Card,
  Space,
  Carousel,
  Row,
  Col,
} from 'antd';
import { EnvironmentOutlined, DownCircleTwoTone } from '@ant-design/icons';
//
import { Faq, NewsCarousel, VolunteerMap } from './components/elements';
//
import './HomePage.less';
//
const { Title, Paragraph } = Typography;
const { Step } = Steps;
const { Meta } = Card;

export default class HomePage extends Component {
  state = {
    current: 0,
  };

  onChange = current => {
    console.log('onChange:', current);
    this.setState({ current });
  };

  render() {
    const { current } = this.state;

    return (
      <div>
        <Row
          justify='center'
          align='middle'
          id='start'
          className='hero-section'
        >
          <Col span={18}>
            <Result
              icon={<EnvironmentOutlined />}
              title='GeoTimeline - Map Data Input and View of Historical Footprints for Confirmed Cases of Coronavirus'
              subTitle="If you are a confirmed case, enter in your footprints anonymously by clicking on the map and setting a date and time for each. If you are not a confirmed case, view whether you've come into contact before and how to avoid future contact in order to mitigate risk and reduce spread."
              extra={[
                <Button type='primary' size='large' key='console'>
                  Start A Timeline
                </Button>,
                <Button key='buy' size='large'>
                  View Data
                </Button>,
              ]}
            />
            <div className='scrollTo'>
              <DownCircleTwoTone />
            </div>
            <Divider />
          </Col>
        </Row>
        <Row
          justify='center'
          gutter={[24, 0]}
          style={{ padding: '80px 0', backgroundColor: '@primary-color' }}
          id='how'
        >
          <Col span={16}>
            <Title level={2} style={{ textAlign: 'center' }}>
              How It Works
            </Title>
            <Steps current={current} onChange={this.onChange}>
              <Step
                title='Step 1'
                description='Confirmed Cases Enter Footprints Data.'
              />
              <Step
                title='Step 2'
                description='Anonymized Data Is Available.'
              />
              <Step
                title='Step 3'
                description='Useful Apps Can Be Built With This Data.'
              />
            </Steps>
          </Col>
        </Row>
        <Row
          justify='center'
          gutter={[24, 0]}
          style={{
            padding: '60px 0',
            flexWrap: 'wrap',
            position: 'relative',
          }}
          id='who'
          // className='dark'
        >
          <Col span={18}>
            <Title level={2} style={{ textAlign: 'center' }}>
              Who Is Making This
            </Title>
            <Paragraph style={{ textAlign: 'center' }}>
              An international team of volunteers is building this and all of
              the code is open sourced on Github.
            </Paragraph>
          </Col>
          <Col span={24}>
            <VolunteerMap />
          </Col>
        </Row>
        <Row justify='center' style={{ padding: '80px 0' }} className='dark'>
          <Col span={12}>
            <NewsCarousel />
          </Col>
        </Row>
        <Row
          justify='center'
          gutter={[24, 0]}
          style={{ padding: '80px 0' }}
          id='faq'
        >
          <Col span={12}>
            <Faq />
          </Col>
        </Row>
      </div>
    );
  }
}
