import React from 'react';
// import {} from '../../assets/imgs/'
import {Card} from 'antd';

const imgs = ['A1.png', 'A1.png']

const photoCollecton = require.context('../../assets/imgs/', true);
const pic0 = photoCollecton(`./${imgs[0]}`)
const pic1 = photoCollecton(`./${imgs[1]}`)

const SlideShow = (props) => {

    return (
        <Card title={props.title} style={{ width: 400 }}>
            <div>
                <img src={pic0} style={{ 'width': '300px', 'height': '300px' }} />
            </div>
        </Card>

    )

}

export default SlideShow