import React from 'react'
import {Button} from "@material-ui/core"
import "./Banner.css"
export default function BannerFull(props) {
    function handleClick() {
        props.scroll(props.offerRef)
    }
    
    return (
        <div className="banner-full-container">
            <div className="details left">
                <h3>Lorem Ipsum</h3>
                <Button variant="contained" color="secondary" onClick={handleClick}>BUTTON BUTTON</Button>
            </div>
        </div>
    )
}
