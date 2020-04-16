import React, { useState, useEffect } from 'react';
// import {} from '../../assets/imgs/'
import { Card } from 'antd';
import './SlideShow.less';



const photoCollecton = require.context('../../assets/imgs/', true);




function SlideShow(props) {
    const [slide, setSlide] = useState(0)

    useEffect(() => {
        if (slide === 0) {
            document.getElementById("back" + props.title).classList.add("invisible")
        }
        else if (slide === slides.length - 1) {
            document.getElementById("forward" + props.title).classList.add("invisible")
        }
        else if (slide < slides.length - 1) {
            document.getElementById("back" + props.title).classList.remove("invisible")
            document.getElementById("forward" + props.title).classList.remove("invisible")
        }
    })

    const slides = props.urls.map(item =>
        <div>
            <img src={photoCollecton(`./${item}`)} style={{ 'width': '300px', 'height': '300px' }} />
        </div>
    )

    return (
        <Card title={props.title} style={{ 'width': '400px' }}>
            {slides[slide]}
            <div id={"back" + props.title} className="slide-back" onClick={() => { if (slide > 0) { setSlide(slide - 1) } }}>&#10094;</div>
            <div id={"forward" + props.title} className="slide-forward" onClick={() => { if (slide < slides.length - 1) { setSlide(slide + 1) } }}>&#10095;</div>
        </Card>
    )

}

export default SlideShow