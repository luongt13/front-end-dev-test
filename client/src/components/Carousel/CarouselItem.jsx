import React from 'react'
import "./CarouselItem.css"
// import Carousel from 'react-material-ui-carousel'
export default function CarouselItem(props) {
    return (
        <div className="carousel-details">
            <div className="title">
                <h5>{props.reviews.name}</h5>
                <h5>{props.reviews.date}</h5>
            </div>
            <p>{props.reviews.content}</p>
        </div>
    )
}
