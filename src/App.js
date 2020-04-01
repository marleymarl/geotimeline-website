import React from 'react';
import { Result, Button } from 'antd';
import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div>
      <Result
    status="success"
    title="GeoTimeline - Map Data Input and View of Historical Footprints for Confirmed Cases of Coronavirus"
    subTitle="If you are a confirmed case, enter in your footprints anonymously by clicking on the map and setting a date and time for each. If you are not a confirmed case, view whether you've come into contact before and how to avoid future contact in order to mitigate risk and reduce spread."
    extra={[
      <Button type="primary" key="console">
        Start A Timeline
      </Button>,
      <Button key="buy">View Data</Button>,
    ]}
  />
    </div>
  );
}

export default App;
