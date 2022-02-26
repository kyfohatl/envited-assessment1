import "./Home.css"

import { Link } from "react-router-dom"

import bckgTopImg from "../assets/images/homeBckgIconsTop.png"
import bckgBttmImg from "../assets/images/homeBckgIconsBttm.png"
import homeNavbar from "../assets/images/homeNavBar.png"
import createEventButton from "../assets/images/createEventButton.png"
import productImageLeft from "../assets/images/productImageLeft.png"
import productImageMiddle from "../assets/images/productImageMiddle.png"
import productImageRight from "../assets/images/productImageRight.png"

export default function Home() {
  return (
    <>
      <div className="home-background">
        <div className="home-content">
          {/* Navbar */}
          {/* Just an image for now, should be turned into a separate component when fleshing out */}
          <img className="home-navbar" src={homeNavbar} width="90%" alt="home navbar" />
          {/* Messages */}
          <p className="home-intro-text">Facebook events without Facebook.</p>
          <p className="home-description-text">Easily host and share events with your friends across any social media.</p>
          {/* Create button */}
          <Link to="/create">
            <img className="home-create-event-button-image" src={createEventButton} width={221} height={49} alt="create event button" />
          </Link>
          {/* Product images */}
          <div className="product-images">
            {/* TODO: Come back and adjust this if time permits */}
            <img src={productImageLeft} width={96} height={171} alt="product left" />
            <img src={productImageMiddle} width={136} height={242} alt="product middle" />
            <img src={productImageRight} width={96} height={171} alt="product right" />
          </div>
        </div>

        {/* Background images */}
        <div className="home-bckg-images">
          <img src={bckgTopImg} width="90%" alt="background top" />
          <img className="home-bckg-img" src={bckgBttmImg} width="90%" alt="background bottom" />
        </div>
      </div>
    </>
  )
}