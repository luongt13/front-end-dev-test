import {useRef} from "react"
import './App.css';
import About from "./components/About/About"
import Landing from "./components/Landing/Landing"
import BannerFull from './components/Banners/BannerFull'
import Banner from "./components/Banners/Banner"
import Offer from "./components/Offer/Offer"
import Action from "./components/Action/Action"
import Footer from "./components/Footer/Footer"
function App() {
  const aboutRef = useRef()
  const offerRef = useRef()
  const actionRef = useRef()
  function scroll(n) {
    n.current && n.current.scrollIntoView({behavior: "smooth"})
  }

  return (
    <div className="App">
        <Landing aboutRef={aboutRef} scroll={scroll}/>
        <About aboutRef={aboutRef}/>
        <BannerFull offerRef={offerRef} scroll={scroll}/>
        <Offer offerRef={offerRef}/>
        <Banner actionRef={actionRef} scroll={scroll}/>
        <Action actionRef={actionRef}/>
        <Footer/>
    </div>
  );
}

export default App;