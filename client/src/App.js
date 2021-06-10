import logo from './logo.svg';
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
  return (
    <div className="App">
      {/* <Route> */}
        <Landing/>
        <About/>
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