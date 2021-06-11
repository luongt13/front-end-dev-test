import {useRef} from "react"
import './App.css';
// import {Route} from "react-router-dom"
import About from "./components/About/About"
import Landing from "./components/Landing/Landing"
import BannerFull from './components/Banners/BannerFull'
import Banner from "./components/Banners/Banner"
import Offer from "./components/Offer/Offer"
import Action from "./components/Action/Action"
import Footer from "./components/Footer/Footer"
function App() {
  const aboutRef = useRef()

  function scroll(n) {
    console.log(n)
    n.current && n.current.scrollIntoView({behavior: "smooth"})
  }
  
  return (
    <div className="App">
      {/* <Route> */}
        <Landing aboutRef={aboutRef} scroll={scroll}/>
        <About aboutRef={aboutRef}/>
        <BannerFull/>
        <Offer/>
        <Banner/>
        <Action/>
        <Footer/>
      {/* </Route> */}
    </div>
  );
}

export default App;