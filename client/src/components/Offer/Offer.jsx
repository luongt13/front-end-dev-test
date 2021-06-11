import React from 'react'
import Calendar from "../../assets/home-retention.svg"
import Goggles from "../../assets/home-lab.svg"
import Mask from "../../assets/home-hygiene.svg"
import Board from "../../assets/home-expertise.svg"
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {Button} from "@material-ui/core"
import "./Offer.css"

export default function Offer(props) {
    return (
        <div className="offer-container" ref={props.offerRef}>
            <div className="offer-details">
                <h3>Lorem Ipsum</h3>
                <h3>Dolor Sit Amet</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque enim quo optio nulla porro illo ipsam sit autem, quidem, earum amet quos soluta nobis fugiat molestias voluptatem minus similique ex.</p>
                <Button color="primary" startIcon={<NavigateNextIcon/>}>Lorem Ipsum</Button>
            </div>
            <div className="offer-img">
                <div id="calendar">
                    <img className="svg-sm" src={Calendar} alt="calendar"/>
                    <h5>Lorem</h5>
                </div>
                <div id="goggles">
                    <img className="svg-sm" id="goggles" src={Goggles} alt="goggles"/>
                    <h5>Lorem Ipsum</h5>
                </div>
                <div id="mask">
                    <img className="svg-sm" id="mask" src={Mask} alt="mask"/>
                    <h5>Lorem Ipsum</h5>
                </div>
                <div id="board">
                    <img className="svg-sm" id="board" src={Board} alt="board"/>
                    <h5>Lorem</h5>
                </div>
                
            </div>
        </div>
    )
}
