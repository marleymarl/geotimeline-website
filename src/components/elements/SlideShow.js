import React from 'react';
// import {} from '../../assets/imgs/'
import { Card } from 'antd';

const imgs = ['A1.png', 'A1.png']

const photoCollecton = require.context('../../assets/imgs/', true);
const pic0 = photoCollecton(`./${imgs[0]}`)
const pic1 = photoCollecton(`./${imgs[1]}`)



const SlideShow = (props) => {

    const slides = props.urls.map(item =>
        <div>
            <img src={photoCollecton(`./${item}`)} style={{ 'width': '100px', 'height': '100px' }} />
        </div>
    )

    return (
        <Card title={props.title} style={{ 'width': '400px' }}>
            {slides}
        </Card>
    )

}

export default SlideShow