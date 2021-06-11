import {useState, useEffect} from 'react'
import CarouselItem from "../Carousel/CarouselItem"
import Rating from "@material-ui/lab/Rating"
import Carousel from 'react-material-ui-carousel'
import {data} from "../../data.js"
import "./Action.css"
export default function Action(props) {
    const [reviews, setReviews] = useState([])
    const [rating, setRating]  = useState(0)
    useEffect(() => {
        fetch()
        // eslint-disable-next-line
    }, [])

    function fetch() {
        setReviews(data)
        getStars(data)
    }

    function getStars(n) {
        let stars = n.map((item) => {
            return item.rating
        })
        setRating(Math.floor(stars.reduce((acc, c) => acc + c))/stars.length)
    }

    return (
        <div className="action-container" ref={props.actionRef}>
            <div className="action-details">
                <h3>Lorem Ipsum</h3>
                <h3>Dolor Sit Amet</h3>
                <Rating name="read-only" value={rating} readOnly/>
            </div> 
            <Carousel className="review-list">
                {reviews.map((review, index) => {
                    return (
                        <div key={index}>
                            <CarouselItem reviews={review}/>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}
