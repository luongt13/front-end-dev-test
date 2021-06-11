import React from 'react'
import LandingDetails from "./LandingDetails.jsx"
import HomeLogo from "../../assets/logo-white.svg"
import "./Landing.css"
export default function Landing(props) {
    return (
        <div className="landing-container">
            <img id="logo" src={HomeLogo} alt="homelogo"/>
            <LandingDetails aboutRef={props.aboutRef} scroll={props.scroll}/>
        </div>
    )
}
