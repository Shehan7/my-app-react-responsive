import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cards.css';
import axios from 'axios';
//import IMG1 from '../../images/sanga.jpg' ;

const f1 = () => {
  axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users',
  })
  .then(res=>{
      console.log(res.data)
  })
}

const cards = (props) => {
    
    const campList = props.cardData.map (item => (
        <div>
            <div className="cardsty">
            <Card className="cardsty-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.camImg} className="card-img" />
            <Card.Body>
                <Card.Title>
                    {item.campName}
                </Card.Title>
                <Card.Text>
                {item.desc}
                </Card.Text>
                <Button className="buttonsty" variant="primary" onClick={f1}>EXPLORE</Button>
            </Card.Body>
            </Card>
            </div>


        </div>
    )
    )

    return (
        <div className="cardslist" >
            {campList}
        </div>
    )
}

export default cards
