import React from 'react';
import Slider from '../../components/Slider/slider';
import Cards from '../../components/Cards/cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import Who from '../../components/WAW/who';
import Events from '../../components/Events/events';
import Owl from '../../components/owl/owl';
import Banner from '../../components/Banner/banner';


const cardData = [
    {
        id: '01',
        camImg: 'https://image.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg',
        campName: 'FREEDOM',
        desc: 'First img text Some quick example text to build on the card title and make up the bulk of the card content.'
    },
    {
        id: '02',
        camImg: 'https://image.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg',
        campName: 'NATURE',
        desc: 'Second img text Some quick example text to build on the card title and make up the bulk of the card content.'
    },
    {
        id: '03',
        camImg: "https://img.freepik.com/free-photo/green-park-view_1417-1492.jpg?size=338&ext=jpg",
        campName: 'ENERGY',
        desc: 'Third img text Some quick example text to build on the card title and make up the bulk of the card content.'
    },
    {
        id: '04',
        camImg: "https://image.freepik.com/free-photo/pathway-middle-green-leafed-trees-with-sun-shining-through-branches_181624-4539.jpg",
        campName: 'HAPPY',
        desc: 'Forth img text Some quick example text to build on the card title and make up the bulk of the card content.'
    }
] 


const HR = {
    border: "2px solid #000080",
    width: "15%",
    margin: 'auto'
}

const heading1 = {
    paddingTop: "70px",
    color: "#000"
}


const Home = () => {
    return(
        <div>
            <Slider />
            <div className="container">
                <h1 style={heading1}>OUR THEMES</h1>
                <hr style={HR} />
                <div className="d-flex flex-column flex-lg-row justify-content-center panel">
                    <Cards cardData={cardData} />    
                </div>
                <div>
                    <h1 style={heading1}>JOIN US</h1>
                    <hr style={HR} />
                    <Who />
                </div>
                <div>
                    <h1 style={heading1}>EVENTS</h1>
                    <hr style={HR} />
                    <Events />
                </div>
                <div>
                    <h1 style={heading1}>SPONSORED BY</h1>
                    <hr style={HR} />
                    <Owl />
                </div>
                <div>
                    <Banner />
                </div>
            </div>
        </div>
    );
}

export default Home;