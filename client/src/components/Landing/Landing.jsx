import React from 'react'
import LandingDetails from "./LandingDetails.jsx"
import HomeLogo from "../../assets/logo-white.svg"
import "./Landing.css"
export default function Landing() {
    return (
        <div className="landing-container">
            <img id="logo" src={HomeLogo} alt="homelogo"/>
            {/* <img src="/images/hero.jpg"/> */}
            <LandingDetails/>
        </div>
    )
}
