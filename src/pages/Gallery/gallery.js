// src/reusable/image-gallery.component.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class ImageGallaryComponent extends React.Component {
    render() {
        return (
            <div className="container mt-5 mb-5 ">
                
                <Carousel autoPlay interval="2000" transitionTime="800">
                    <div>
                        <img src="https://picsum.photos/700/400?img=1" />
                        <p className="legend">Gallery Img No.01</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/700/400?img=2" />
                        <p className="legend">Gallery Img No.02</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/700/400?img=3" />
                        <p className="legend">Gallery Img No.03</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/700/400?img=4" />
                        <p className="legend">Gallery Img No.04</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/700/400?img=5" />
                        <p className="legend">Gallery Img No.05</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/700/400?img=6" />
                        <p className="legend">Gallery Img No.06</p>
                    </div>
                </Carousel>
            </div>
        )
    };
}

export default ImageGallaryComponent;