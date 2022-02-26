import "./Create.css"

import homeNavbar from "../assets/images/homeNavBar.png"
import uploadImage from "../assets/images/uploadImage.png"
import nextButton from "../assets/images/nextButton.png"

import { useState } from "react"
import { Link } from "react-router-dom"

export default function Create() {
  const [eventName, setEventName] = useState("")
  const [hostName, setHostName] = useState("")
  const [location, setLocation] = useState("")

  return (
    <>
      <div className="create-background">
        <div className="create-content">
          {/* Navbar */}
          {/* Just an image for now, should be turned into a separate component when fleshing out */}
          <img className="create-navbar" src={homeNavbar} width="90%" alt="create navbar" />
          {/* Instructions */}
          <p className="create-intro-text">Input your event details into the fields below</p>
          {/* Inputs */}
          <div className="create-inputs">
            <label className="create-labels">
              Event Name:
              <input type="text" value={eventName} onChange={(e) => { setEventName(e.target.value) }} />
            </label>
            <label className="create-labels">
              Host Name:
              <input type="text" value={hostName} onChange={(e) => { setHostName(e.target.value) }} />
            </label>
            <label className="create-labels">
              Event Location:
              <input type="text" value={location} onChange={(e) => { setLocation(e.target.value) }} />
            </label>
            <label className="create-labels">
              Event Time and Date:
              <input type="datetime-local" id="birthdaytime" name="birthdaytime" />
            </label>
          </div>
          {/* Upload image button */}
          <div className="upload-image-button">
            {/* TODO: Come back and fix image transparency (black borders) if time permits */}
            <img src={uploadImage} alt="Upload image" width="45%" height="45%" />
          </div>
          {/* Next button */}
          <Link to="/event">
            <div className="next-button">
              {/* TODO: Come back and fix image transparency (black borders) if time permits */}
              <img src={nextButton} alt="Next" width="40%" height="40%" />
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}