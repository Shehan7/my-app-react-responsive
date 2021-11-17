import React from 'react';
import Style from './about.module.css';
import Owl from '../../components/owl/owl';
import Who from '../../components/WAW/who';

const about = () => {
    return (
        <div >
            <div className={Style.headAbout}>
                <h1>ABOUT US</h1>
            </div>
            <div className={`container ${Style.mottoAbout}`}>
                <h2>Our Motto</h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                 unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into electronic typesetting, remaining 
                  essentially unchanged.
                </p>
            </div>
            <div>
                <br />
                <h2>Who Are We</h2>
                <Who />
            </div>
            <div className='container'>
                <br /><br /><br /><br />
                <h2>Our Partners:</h2>
                <Owl />
            </div>
        </div>
    )
}

export default about
