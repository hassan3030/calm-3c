"use client"
import React from 'react'
import './portfolio.css'
import Link from 'next/link'
import Image from "next/image"; 
import logo from "../../images/logo.png"
// import background from 'backguound.ipj'
const Portfolio = () => {
  return (
    <>
    <div className="responsive-container-block bigContainer" id='portfolio'>
  <div className="responsive-container-block Container bottomContainer">
    <div className="ultimateImg">
      <img className="mainImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp4.svg"/>
      <div className="purpleBox">
        <p className="purpleText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus.
        </p>
        <img className="stars" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp5.svg"/>
      </div>
    </div>
    <div className="allText bottomText">
      <p className="text-blk headingText">
        About Me
      </p>
      <p className="text-blk subHeadingText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p className="text-blk description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum ut.
      </p>
      <a className="explore">
        View Services
      </a>
    </div>
  </div>
</div>
          </>
  )
}

export default Portfolio
