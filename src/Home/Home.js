import React from 'react';
import '../CSS/Intro.css';
import car from '../Images/car.png'
import tire from '../Images/tire.png'

const Home = () => {
    return (
        <>
        <div id="Intro">
            <div class="row IntroRow">
                <div class= "column">
                <h1 id='title' >IPS File Repository</h1>   
                <li>A repo for IPS post-production files.
                    Download any assets you need for your project directly to your machine.</li>     
                </div>
            
            <div id="carwrapper">
                    <img id= "car" src= {car} alt="car"></img>

            </div>
            </div>
        </div>
        <div id="Intro">
            <div class="row IntroRow">
            <div id="carwrapper">
                    <img id= "car" src= {tire} alt="car"></img>
            </div>
            <div class= "column">
                <h1 id='title' >Get Started.</h1>   
                 <li>Navigate to the download tab in this dashboard and browse through all the different available files.</li>     
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;

