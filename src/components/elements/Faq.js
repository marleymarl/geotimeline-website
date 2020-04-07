import React, { useEfect } from 'react';
import { Collapse, Typography, Anchor } from 'antd';
import { FAQs as data } from '../../utils/StringUtils';
//
import './Faq.less';

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;
const { Link } = Anchor;

const Faq = (props) => {
  function callback(key) {
    // console.log(key);
  }
  return (
    <div className="faq">
      <Title level={3}>GeoTimeline.com FAQ</Title>
      <Collapse defaultActiveKey={['0']} onChange={callback}>
        {data &&
          data.map((panel, i) =>
            panel.order ? (
              <Panel
                className="faq-panel"
                nowrap
                header={panel.question}
                key={i}
              >
                {panel.order.map(
                  (content) =>
                    content.link ? (
                      <a href={content.link[1]}>'{content.link[0]}'</a>
                    ) : (
                      <p>{content.paragraph}</p>
                    )
                  // or this:
                  //<Anchor>
                  //  <Link href={content.link[1]} title={content.link[0]} />
                  //</Anchor>
                  // :
                  //<Paragraph>{content.paragraph}</Paragraph>
                )}
              </Panel>
            ) : (
              <Panel header={panel.question} key={i}>
                <Paragraph>{panel.answer}</Paragraph>
              </Panel>
            )
          )}
      </Collapse>
    </div>
  );
};

export default Faq;
