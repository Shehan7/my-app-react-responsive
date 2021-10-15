import React from 'react';
import IMG1 from '../../images/outofshadow.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './events.css';
import Card from 'react-bootstrap/Card';


const events = () => {
    return (
        <div style={{paddingTop: "40px"}} >
            <div className="container-fluid">
            <div className="row">
                <div className="col" >
                <Card className="bg-dark text-white" style={{border: "none"}}>
                    <Card.Img src={IMG1} alt="Card image" className="event-bigimg" />

                    <Card.ImgOverlay className="eventimg" >
                        <Card.Title style={{textAlign: "left"}}>
                            <p style={{fontWeight: "400"}}>08 SEP 2017
                            <a style={{color:"black"}} href="#" >
                                <h3>Bridge Our Souls</h3>
                            </a>
                            
                            <div style={{fontSize: "80%"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                </svg>
                                7:00 AM<span className="m-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                                Colombo</span>
                            </div>
                            </p>
                        </Card.Title>
                        <Card.Text>
                            
                        </Card.Text>

                    </Card.ImgOverlay>

                    </Card>
                </div>
                

                <div className="col">
                <ul className="list-group">
                    <li className="list-group-item border-0">
                        <div className="row"><div className="col-3">
                            <span className="date">07</span><br />
                            <span className="month">Sep</span>
                        </div>
                        <div className="col-9 m-auto Home_eventDivider__1Llg4">
                            <a href="#" style={{color:"black"}}>
                            <h3 className="text-left">EVENT 1</h3>
                            </a>
                            <p className="text-left">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                </svg>
                                7:00 AM<span className="m-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                    </svg>
                                    Kurunegala</span>
                            </p>
                        </div>
                        </div>
                        </li>
                        <li className="list-group-item border-0">
                            <div className="row">
                                <div className="col-3">
                                <span className="date">18</span><br />
                                <span className="month">Aug</span>
                            </div>
                            <div className="col-9 m-auto Home_eventDivider__1Llg4">
                                <a href="#" style={{color:"black"}}>
                                <h3 className="text-left">EVENT 2</h3>
                                </a>
                                <p className="text-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                    </svg>
                                    7:00 AM<span className="m-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                        </svg>
                                        N/A</span></p>
                            </div>
                            </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row"><div className="col-3">
                                    <span className="date">28</span><br />
                                    <span className="month">Sep</span>
                                </div>
                            <div className="col-9 m-auto Home_eventDivider__1Llg4">
                                <a href="#" style={{color:"black"}}>
                                <h3 className="text-left">EVENT 3</h3>
                                </a>
                                <p className="text-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                    </svg>
                                    7:00 AM<span className="m-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                        </svg>
                                        Kurunegala</span></p>
                            </div>
                            </div>
                    </li>
                </ul>
            </div>
                </div>
            </div>
            </div>
            

        
    )
}

export default events
