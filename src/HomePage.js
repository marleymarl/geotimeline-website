import React, { Component } from 'react';
import { Result, Button, Typography, Divider, Steps, Avatar, Card, List, Empty } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import { EnvironmentOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography;
const { Step } = Steps;
const { Meta } = Card;

const data = [
	{ title: 'GeoTimeline Wins Hackathon March 22, 2020', description: 'description to be entered here '},
	{ title: 'GeoTimeline Featured On HelpWithCovid March 24, 2020', description: 'description to be entered here '},
	{ title: 'GeoTimeline Team Grows from 3 to 45 in One Week', description: 'description to be entered here '},
	{ title: 'GeoTimeline Releases Anonymized Public Input and View App April 2, 2020', description: 'description to be entered here '},
	{ title: 'GeoTimeline Will Release Smart Proximity Alerts App April 9, 2020', description: 'description to be entered here '},


]

export default class HomePage extends Component {

	state = {
		current: 0,
	}

	onChange = current => {
    console.log('onChange:', current);
    this.setState({ current });
  };

	render () {

		const { current } = this.state;

		return (
    		<div>
      		<Result
   			 
   			 icon={<EnvironmentOutlined />}
   			 title="GeoTimeline - Map Data Input and View of Historical Footprints for Confirmed Cases of Coronavirus"
  		     subTitle="If you are a confirmed case, enter in your footprints anonymously by clicking on the map and setting a date and time for each. If you are not a confirmed case, view whether you've come into contact before and how to avoid future contact in order to mitigate risk and reduce spread."
    		 extra={[
             <Button type="primary" key="console">
        		Start A Timeline
      		</Button>,
      		<Button key="buy">View Data</Button>,
    		]}
  			/>
  			<Divider />
  			<Title level={2} style={{textAlign: 'center'}}>How It Works</Title>
  			<Steps current={current} onChange={this.onChange}>
          	<Step title="Step 1" description="Confirmed Cases Enter Footprints Data." />
          	<Step title="Step 2" description="Anonymized Data Is Available." />
          	<Step title="Step 3" description="Useful Apps Can Be Built With This Data." />
        	</Steps>
        	<Divider />
        	<Title level={2} style={{textAlign: 'center'}}>Who Is Making This</Title>
        	<Paragraph style={{textAlign: 'center'}}>
        	An international team of volunteers is building this and all of the code is open sourced on Github. 
        	</Paragraph>
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        	<List
    		itemLayout="horizontal"
    		dataSource={data}
    		renderItem={item => (
      			<List.Item>
        			<List.Item.Meta
         
          				title={item.title}
         				description={item.description}
        		/>
      			</List.Item>
    		)}
  			/>
  			<Empty
    		image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    		imageStyle={{
      		height: 60,
    		}}
    		description={
      		<span>
        	All Of Our Code Is Open Source
      		</span>
    		}
  			>
    		<Button type="primary">View It On Github</Button>
  			</Empty>

    		</div>
  
  		);
	}
	}



