"use client"
import React from 'react'
import style from './Home.module.scss'
import Link from 'next/link'
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
import HomeContainer from '../homeContainer/homeContainer'
const Hometag = () => {
  return (
    <>
    <Accordion/>
  
    <div className={style.hometag} id='home'>
      <div>
        <h3>Welcome Ladies & Gents to Calm Website.
       </h3>
        <p> A theme more stylish than any other on themeforest</p>
      </div>
      <div>
      <h3>find us online</h3>
      <div className={style.icons}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      </div>
      </div>
    </div>
    <HomeContainer/>
    </>
    
  )
}

export default Hometag
