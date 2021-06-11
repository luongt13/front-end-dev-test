import {useEffect, useState} from 'react'
import {Button} from "@material-ui/core"
import "./Landing.css"

export default function LandingDetails(props) {
    const [pageLoad, setPageLoad] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setPageLoad(true)
        }, 3000)
    },[])

    function handleClick() {
        props.scroll(props.aboutRef)
    }
    return (
        <div className={pageLoad ? "landing-details show" : "landing-details"}>
            <h1>Welcome to</h1>
            <h2>Rooster Grin</h2>  
            <Button variant="contained" color="primary" onClick={handleClick}>BUTTON BUTTON</Button>
        </div>
    )
}
