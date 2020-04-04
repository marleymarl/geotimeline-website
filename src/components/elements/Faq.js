import React from 'react';
import { Collapse, Typography } from 'antd';
import { FAQs as data } from '../../utils/StringUtils';
// imports
const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

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
