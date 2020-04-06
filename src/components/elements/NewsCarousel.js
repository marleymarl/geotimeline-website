import React from 'react';
import { Carousel, Card, Typography } from 'antd';
//
import './NewsCarousel.less';

const { Title, Paragraph } = Typography;
const data = [
  {
    title: '🎉🎉 GeoTimeline Wins Supply Chain / Medical Logistics Prize at EndCoronavirus Hackathon 🎉🎉',
    description: 'March 22, 2020   ',
  },
  {
    title: 'GeoTimeline Featured On HelpWithCovid March 24, 2020',
    description: 'description to be entered here ',
  },
  {
    title: 'GeoTimeline Team Grows from 3 to 45 in One Week',
    description: 'description to be entered here ',
  },
  {
    title:
      'GeoTimeline Releases Anonymized Public Input and View App April 2, 2020',
    description: 'description to be entered here ',
  },
  {
    title: 'GeoTimeline Will Release Smart Proximity Alerts App April 9, 2020',
    description: 'description to be entered here ',
  },
];

const NewsSlider = props => {
  return (
    <Carousel autoplay dots dotPosition='bottom'>
      {data &&
        data.map((item, i) => (
          <Card
            key={`newsItem_${i}`}
            className='card'
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              height: '100%',
              padding: '0 1rem',
              backgroundColor: 'transparent',
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
