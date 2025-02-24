import React from 'react'
import {Button} from "@material-ui/core"
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import "./About.css"

export default function About(props) {
    return (
        <div className="banner-container" ref={props.aboutRef}>
            <div className="about-details">
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis laborum sunt at voluptatem repellendus, nihil temporibus rem suscipit magni quae culpa reprehenderit quosimilique dicta. Omnis libero quia dolorem ab.</p>
                <Button color="primary" startIcon={<NavigateNextIcon/>}>Lorem Ipsum</Button>
            </div>
            <div className="about-img">
                <img src="/img-1.jpg" alt="hiking"/>
            </div>
        </div>
    )
}
