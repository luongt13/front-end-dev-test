import {useState, useEffect} from 'react'
import CarouselItem from "../Carousel/CarouselItem"
import Carousel from 'react-material-ui-carousel'
import {data} from "../../data.js"
import "./Action.css"
export default function Action() {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch()
    }, [])

    function fetch() {
        setReviews(data)
    }
    return (
        <div className="action-container">
            <div className="action-details">
                <h3>Lorem Ipsum</h3>
                <h3>Dolor Sit Amet</h3>
            </div> 
            <Carousel className="review-list">
                {reviews.map((review) => {
                    return (
                        <CarouselItem reviews={review}/>
                    )
                })}
                
            </Carousel>
        </div>
    )
}
