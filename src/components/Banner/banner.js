import React from 'react';

import './banner.css';
import Card from 'react-bootstrap/Card';

const banner = () => {
    return (
        <div className="under">
            <Card className="bg-dark text-white" style={{border: "none"}}>
            <Card.Img className="cardimage" src="https://images.pexels.com/photos/6272341/pexels-photo-6272341.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image" />

            <Card.ImgOverlay className="imgtext" >
                <Card.Title>
                    <h2>DO YOU WANT TO BECOME</h2>
                    <h1>A MEMBER?</h1>
                </Card.Title>
                <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                </Card.Text>
                <button className="button-ju">JOIN NOW</button>
            </Card.ImgOverlay>

            </Card>
        </div>
    )
}

export default banner
