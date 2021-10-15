import React from 'react';
import './slider.css';
import Carousel from 'react-bootstrap/Carousel';
import IMG1 from '../../images/slider1.jpg';
import IMG2 from '../../images/slider2.jpg';
import IMG3 from '../../images/slider3.jpg';


const slider = () => {
    return (
        <div>
            <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={IMG1}
                alt="slider1"
                />
                <Carousel.Caption className="slitext">
                <div  >
                <h3 className="slider-h3" >First slide label</h3>
                <p className="slider-p" >First slide label is here Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <button className="slibutton" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                </svg>
                    &nbsp; | &nbsp; EXPLORE</button>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={IMG2}
                alt="slider2"
                />
                <Carousel.Caption className="slitext" >
                <h3 className="slider-h3">Second slide label</h3>
                <p className="slider-p">This one for second slide Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <button className="slibutton" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                </svg>
                    &nbsp; | &nbsp; EXPLORE</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={IMG3}
                alt="slider3"
                />
                <Carousel.Caption className="slitext" >
                <h3 className="slider-h3">Third slide label</h3>
                <p className="slider-p">Now the third slide label  Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <button className="slibutton" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                </svg>
                    &nbsp; | &nbsp; EXPLORE</button>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    )
}


export default slider;