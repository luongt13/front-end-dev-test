import React from 'react'
import Instagram from "../../assets/instagram.svg"
import FaceBook from "../../assets/facebook.svg"
import "./Footer.css"
export default function Footer() {
    return (
        <div className="footer">
            <p>Follow Us:</p>
            <div className="icons">
                <img className="svg" src={Instagram} alt="Instagram"/>
                <img className="svg" src={FaceBook} alt="Facebook"/>
            </div>
            
        </div>
    )
}
