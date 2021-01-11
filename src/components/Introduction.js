import React from 'react';
import minjaraBlue from '../images/minjara-blue.png';
import s from '../style/Introduction.module.css';

const Introduction = () => {

    const discordInvitationLink = "https://discord.gg/Z7MPR9vzEm";

    const joinDiscordHandler = () => {
        window.open(discordInvitationLink);
    }
 
    return(
        <div className={s.introduction}>
            <div className={s.presentation}>
                <h3 className={s.welcome}>welcome!</h3>
                <h1>we are <span>minjara</span> we are fighters!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsum nemo inventore odio maxime eum dolorem adipisci impedit quibusdam harum ab magni esse perspiciatis, porro beatae! Nam explicabo eligendi commodi?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsum nemo inventore odio maxime eum dolorem adipisci impedit quibusdam harum ab magni esse perspiciatis, porro beatae! Nam explicabo eligendi commodi?</p>
                <h2>Join us on <span>DISCORD!</span></h2>
                <button onClick = {joinDiscordHandler}>Join Us Now</button>
            </div>
            <div className={s.coverImage}>
                <img src={minjaraBlue} alt=""/>
            </div>
        </div>
    );
}

export default Introduction;