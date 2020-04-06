// react imports
import React from 'react';
import { Carousel, Card, Typography } from 'antd';
// imports
import './NewsCarousel.less';
import { CarouselData as data } from '../../utils/StringUtils';

const { Title, Paragraph } = Typography;

const NewsSlider = (props) => {
  return (

    <Carousel autoplay dots dotPosition='bottom'>

      {data &&
        data.map((item, i) => (
          <Card
            key={`newsItem_${i}`}
            className="card"
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              height: '100%',
              padding: '0 1rem',
              backgroundColor: '#ffffff',
            }}
          >
            <div>
              <Title level={3}>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </div>
          </Card>
        ))}
    </Carousel>
  );
};

export default NewsSlider;
