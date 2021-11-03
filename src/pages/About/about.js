import React from 'react';
import './about.css';
import Owl from '../../components/owl/owl';

const about = () => {
    return (
        <div className="container">
            <div className='head-about'>
                <h1>ABOUT US</h1>
            </div>
            <div className='container'>
                <h2>Our Motto</h2>
                <p className='motto-about'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                 unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into electronic typesetting, remaining 
                  essentially unchanged.
                </p>
            </div>
            <div className='container'>
                <br />
                <h3>SPONSORED BY:</h3>
            </div>
            <Owl />
        </div>
    )
}

export default about
