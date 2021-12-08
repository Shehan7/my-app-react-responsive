import React from 'react';
import { Form , Row , Col , Button } from 'react-bootstrap';
import Styles from './contact.module.css';

const contact = () => {
    return (
        <div>
            <div className={Styles.headAbout}>
                <h1>CONTACT US</h1>
            </div>
        <div className='container text-left'>
            <div className={`row ${Styles.form}`}>
                <div className="col-sm">
                    <h2>Contact Us</h2>
                    <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have 
                    suffered alteration in some form, by injected humour, or randomised words which don't 
                    look even slightly believable.
                    </p>
                </div>
                <div className="col-sm">
                <Form>
                    <Row>
                        <Col>
                        <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                        <Form.Control placeholder="Last name" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Form.Control type="email" placeholder="Email" id='email' />
                            <br />
                            <Form.Control type="file" accept="image/*" />
                            <br />
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            />
                            <br />
                        </Col>
                        
                    </Row>
                    <Button type='submit' className={Styles.formBtn}>Send</Button>
                </Form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default contact
