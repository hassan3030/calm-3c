"use client"
import React from 'react'
import style from './header.module.scss'
import Link from 'next/link'
import Image from "next/image"; 
import logo from "../../images/logo.png"
// import background from 'backguound.ipj'
const Header = () => {
  return (
    <div className={style.header}>
      <Link href={''} className={''} >
      <div className={''}>
        <Image src={logo} width={130} height={30} />
      </div>
       
        </Link>
      <div className={style.search}>
       <ul>
        <li>
        <Link href={'#home'}> <span>HOME </span></Link>
        </li>
        <li>
         <Link href={'#about'}> <span>ABOUT </span></Link>
        </li>
        <li>
         <Link href={'#portfolio'}> <span>PORTOFOLIO </span></Link>
        </li>
        
        <li>
       <Link href={'#contact'}> <span>CONTACT </span></Link>
        </li>
       </ul>
       <input type="search" />
      </div>
    </div>
  )
}

export default Header
