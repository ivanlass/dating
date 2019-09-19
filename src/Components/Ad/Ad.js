import React from 'react';
import classes from './Ad.module.css'
import Button from "../Button"


let closeBtn = {
    position: "absolute",
    right: "10px",
    top: "10px",
    cursor: "pointer",
    zIndex: "900"
}

let txt = {
    padding: "0 20px 0 20px"
}


function Ad(props) {
    return (
        props.isAdOpen ?
            <div className={classes.adWrapper} style={{ backgroundImage: `url(${props.photoForAd})` }}>
                <h1 style={closeBtn} onClick={props.closing}>&times;</h1>
                <div className={classes.inner}>
                    <h1 style={txt}>Den nya populära datingsidan är online nu! Skapa din profil idag !</h1>
                    <a target="_blank" style={{ display: "block", color: "#4f3ee9" }} href={props.link}>
                        <Button txt="ÖPPNA" link={props.link} />
                    </a>
                </div>
            </div >
            : null
    );

}

export default Ad;