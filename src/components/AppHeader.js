import React from 'react';
import s from '../style/AppHeader.module.css';
import imglogo from '../images/minjara-white.png';
import {Link} from 'react-scroll';


const AppHeader = () => {

    return (
        <div className={s.header} id="home">
            <div className={s.logo}>
                <img src={imglogo} className={s.minjara} alt=""/>
            </div>
            <div className={s.nav}>
                <ul class={s.navList}>
                    <li class={s.navItem}><Link to="home"  class={s.navLink} smooth={true}>Home</Link></li>
                    <li class={s.navItem}><Link to="clips" class={s.navLink} smooth={true}>Clips</Link></li>
                    <li class={s.navItem}><Link to="about" class={s.navLink}  smooth={true}>About Us</Link></li>
                    <li class={s.navItem}><Link to="join" class={s.navLink}  smooth={true}>Join Us</Link></li>
                    <li class={s.navItem}><Link to="contact" class={s.navLink} smooth={true}>Contact</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default AppHeader;