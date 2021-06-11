import React from 'react'
import {Button} from "@material-ui/core"
export default function Banner(props) {
    
    function handleClick() {
        props.scroll(props.actionRef)
    }
    return (
        <div className="banner">
            <div className="details right">
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet optio dicta sapiente aliquid quaerat facilis a ab corrupti necessitatibus sit possimus corporis iure aut itaque earum voluptatum, accusamus cupiditate repellat.</p>
                <Button variant="contained" color="secondary" onClick={handleClick}>Button Button</Button>
            </div>
        </div>
    )
}
