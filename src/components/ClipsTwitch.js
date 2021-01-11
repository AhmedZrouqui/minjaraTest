import React from 'react';
import s from '../style/clipsTwitch.module.css';
import leftArrow from '../images/left-arrow.png';
import rightArrow from '../images/right-arrow.png';

const ClipsTwitch = () => {

    const parent="&parent=minjara.netlify.app";
    const clips = [
        {
            id :1,
            link : 'https://clips.twitch.tv/embed?clip=AffluentCrunchyHawkDxCat&parent=minjara.netlify.app'
        },
        {
            id : 2,
            link : 'https://clips.twitch.tv/embed?clip=IcyBloodyGoatDogFace&parent=minjara.netlify.app'
        },
        {
            id : 3,
            link : 'https://clips.twitch.tv/embed?clip=ManlyFlirtyBobaMoreCowbell'+parent
        }
    ]

    const switchClipHelper = (count) => {
        document.getElementsByName("videoplayer")[0].setAttribute("class", s.hide)
        setTimeout(() => {
            document.getElementsByName("videoplayer")[0].setAttribute("src", clips[count].link)
            setTimeout(() => {
                document.getElementsByName("videoplayer")[0].setAttribute("class", s.show)
            }, 400)
        }, 1000)
        console.log(count)
    }

    const getClipIndex = (link) => {
        let ind = 0;
        clips.forEach( (item,index) => {
            if (item.link === link)
            {
                ind = index;
            }
        }
        );

        return ind;
    }

    const rightSwitchHandler = (i) => {
        if(i === (clips.length - 1)){
            switchClipHelper(0)
        }
        else {
            switchClipHelper(i+=1)
        }
    }

    const leftSwitchHandler = (i) => {
        if(i === 0){
            switchClipHelper(clips.length-1)
        }
        else {
            switchClipHelper(i-=1)
        }
    }

    const switchClipHandler = (e) => {
        let link = document.getElementsByName("videoplayer")[0].attributes.src.value;
        let i = getClipIndex(link);
        let direction = e.target.alt;

        switch (direction) {
            case "right" : rightSwitchHandler(i);break
            case "left" : leftSwitchHandler(i);break
        }
        
    } 

    const randomClipLink = () => {
        let rand = Math.floor(Math.random() * Math.floor(clips.length));
        return(clips[rand].link);
    }


    return(
        <div className={s.clipsContainer} id="clips">
            <span className={s.imgSpan} onClick = {switchClipHandler}><img src ={leftArrow} className={s.arrow} alt="left"></img></span>
            <div className={s.clips}>
                <h2><span>CLIPS</span></h2>
                <div className={s.videoDiv}>
                    <iframe src={String(randomClipLink())} class = "show" name="videoplayer" title="tonik" frameborder="0" scrolling="no" height="600" width="900"></iframe>
                </div>
            </div>
            <span className={s.imgSpan} onClick = {switchClipHandler}><img src ={rightArrow} className={s.arrow} alt="right"></img></span>
        </div>
    );
}

export default ClipsTwitch;