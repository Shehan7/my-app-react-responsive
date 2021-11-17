import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './owl.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import L1 from '../../images/l1.png';
import L2 from '../../images/l2.png';
import L3 from '../../images/l3.png';
import L4 from '../../images/l4.jpg';

const responsive = {
    0: {
        items: 2,
    },
    450: {
        items: 2,
    },
    600: {
        items: 3,
    },
    1000: {
        items: 5,
    },
};

const owl = () => {
    return (
        <div style={{paddingTop: "40px"}}>
          
          <OwlCarousel className='owl-theme' 
                loop={true}
                margin={8} 
                nav dots={false} 
                thumbnails 
                items="5" 
                autoplay 
                autoplayTimeout="2000"
                responsive={responsive}  
            >
            
            <div className='item'>
                <img alt="2" src={L1} />
            </div>
            <div className='item'>
                <img alt="3" src={L2} />
            </div>
            <div className='item'>
                <img alt="4" src={L3} />
            </div>
            <div className='item'>
                <img alt="5" src="https://www.vhv.rs/file/max/13/133098_bird-logo-png.png" />
            </div>
            <div className='item'>
                <img alt="6" src={L4} />
            </div>
            
            
        </OwlCarousel>

        </div>
    )
}

export default owl
