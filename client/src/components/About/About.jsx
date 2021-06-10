import React from 'react'
import {Button} from "@material-ui/core"
import "./About.css"

export default function About() {
    return (
        <div className="banner-container">
            <div className="about-details">
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis laborum sunt at voluptatem repellendus, nihil temporibus rem suscipit magni quae culpa reprehenderit quosimilique dicta. Omnis libero quia dolorem ab.</p>
                <Button color="primary"> > Lorem Ipsum</Button>
            </div>
            <div className="about-img">
                <img src="/img-1.jpg"/>
            </div>
        </div>
    )
}
