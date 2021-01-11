import React from 'react';
import s from '../style/AboutUs.module.css';
import minjara from '../images/minjara-white.png';


const AboutUs = () => {

    return(

        <div className = {s.aboutUs} id="about">
            <h2><span className= {s.title}>About us</span></h2>
            <div className = {s.howItBegunWrapper}>
                <div className= {s.howItBegun}>
                    <h3>
                        <span className = {s.howItBegunTitle}>how it begun ?</span>
                    </h3>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsum nemo inventore odio maxime eum dolorem adipisci impedit quibusdam harum ab magni esse perspiciatis, porro beatae! Nam explicabo eligendi commodi?</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsum nemo inventore odio maxime eum dolorem adipisci impedit quibusdam harum ab magni esse perspiciatis, porro beatae! Nam explicabo eligendi commodi.</p>
                </div>

                <div className = {s.minjaraLogo}>
                    <img src= {minjara}></img>
                </div>
            </div>
        </div>

    );

}

export default AboutUs;