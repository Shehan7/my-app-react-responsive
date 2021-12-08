import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Style from '../About/about.module.css';

const events = () => {
    return (
        <div>
            <div className={Style.headAbout}>
                <h1>EVENTS</h1>
            </div>
        <div className="container">
            <div className="row mt-5 mb-5">
                <div className="col-sm">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <Card.Body>
                        <Card.Title>EVENT 1</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary" className={Style.buttonsty} >Join</Button>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-sm">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <Card.Body>
                        <Card.Title>EVENT 2</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary" className={Style.buttonsty} >Join</Button>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-sm">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <Card.Body>
                        <Card.Title>EVENT 3</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary" className={Style.buttonsty} >Join</Button>
                    </Card.Body>
                    </Card>
                </div>
                

            </div>
            
        </div>
        </div>
    )
}

export default events
