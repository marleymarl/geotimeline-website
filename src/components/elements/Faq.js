import React from 'react';
import { Collapse, Typography } from 'antd';
//
const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const data = [
  {
    question: 'What does GeoTimeline.com do?',
    answer:
      'GeoTime is a data set of crowd sourced contact tracing information that can help the general public better understand the spread of COVID19 in your area.As people voluntarily post their locations, Geotime anonymously collects information instantly and provides a live version of contact tracing around the world. ',
  },
  {
    question: 'What is contact tracing ?',
    answer:
      'Contact tracing is the process of identifying persons who may have come into contact with an infected person("contacts") and subsequent collection of further information about these contacts.This procedure is an effective public health practice to contain infectious diseases, such as measles, influenza, and Ebola. (According to WHO)',
  },
  {
    question:
      'Is it mandatory to use the application if I have tested positive ?',
    answer:
      'No, the website is anonymous and voluntary.However, please make sure you have access to an internet browser.',
  },
  {
    question: 'How does Geotimeline work ?',
    answer:
      'In broad strokes, what we are trying to do is provide a safe and anonymous way for patients with confirmed cases of COVID 19 to voluntarily share their movements with public health officials and the general public.The accumulation of these data can help medical agencies trace hotspots of the virus.Members of the community can also use the data to make transportation decisions.Our goal is to help with the contact tracing efforts of public health agencies, without losing anonymity for people who test positive. ',
  },
  {
    question: 'How much does it cost ?',
    answer:
      'Geotime is free to the general public and free to the developers who want to use our data set. ',
  },
  {
    question: 'What happens to my data once I give permission for its use ?',
    answer:
      'The only permission so far, is the location access for your browser.We use it to take the user to his / her current location.Nothing happens after that, but you must explicitly give the application permission to access your location data.',
  },
];

const Faq = props => {
  function callback(key) {
    console.log(key);
  }
  return (
    <div className='faq'>
      <Title level={3}>GeoTimeline.com FAQ</Title>
      <Collapse defaultActiveKey={['0']} onChange={callback}>
        {data &&
          data.map((panel, i) => (
            <Panel header={panel.question} key={i}>
              <Paragraph>{panel.answer}</Paragraph>
            </Panel>
          ))}
      </Collapse>
    </div>
  );
};

export default Faq;
