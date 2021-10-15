import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './owl.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

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
        items: 7,
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
            
            <div class='item'>
                <img alt="2" src="https://api.makeadifference.lk/uploads/2021-08-11T19:00:05.270Z5-scaled.jpeg" />
            </div>
            <div class='item'>
                <img alt="3" src="https://api.makeadifference.lk/uploads/2021-08-11T19:00:57.995Z10.jpeg" />
            </div>
            <div class='item'>
                <img alt="4" src="https://api.makeadifference.lk/uploads/2021-08-22T04:02:44.554ZPNG+for+word+processing,+presentations,+web,+and+digital+uses..png" />
            </div>
            <div class='item'>
                <img alt="5" src="https://api.makeadifference.lk/uploads/2021-08-22T04:03:06.478ZWhatsApp%20Image%202021-08-20%20at%2021.50.36.jpeg" />
            </div>
            <div class='item'>
                <img alt="6" src="https://api.makeadifference.lk/uploads/2021-08-11T18:55:46.770ZTECXA-Logo.png" />
            </div>
            
        </OwlCarousel>

        </div>
    )
}

export default owl
