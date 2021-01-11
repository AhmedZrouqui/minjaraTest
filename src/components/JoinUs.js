import React from 'react';
import s from '../style/JoinUs.module.css'



const JoinUs = () => {

    return(
        <div className = {s.joinUs} id="join">
            <h3>
                <span className= {s.title}>
                    Join Us
                </span>
            </h3>
            <div className={s.joinUsOnDiscord}>

                <iframe src="https://discord.com/widget?id=477643540437008385&theme=dark" title="discordJoin" width="900" height="400" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div>
        </div>
    );
}

export default JoinUs;