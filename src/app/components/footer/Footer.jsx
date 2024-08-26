"use client"
import React from 'react'
import style from './footer.module.scss'
import Link from 'next/link'
const Footer = () => {
  return (
    <>
    <div className={style.footer}>
   <div className={style.sectionOne}>
   <div className={''}>
    <h6>about us</h6>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry .....
    </p>
    <p>Address</p>
    <p>
    500 Lorem Ipsum Dolor Sit, <br />
    22-56-2-9 Sit Amet,<br />
    USA
    </p>
<p> Phone:(00) 222 666 444 </p>
<p>Fax: (000) 000 00 00 0</p>
<div className={style.icons}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      </div>
      
</div>
<div className={''}>
<h6>latest posts</h6>
<p>
  Fusce scelerisque massa vitae
25 april 2013
</p>
<p>
  Fusce scelerisque massa vitae
25 april 2013
</p>
<p>
  Fusce scelerisque massa vitae
25 april 2013
</p>
</div>
<div className={style.thirdPart}>
<h6>latest comments</h6>
<p>
  Fusce scelerisque massa vitae
25 april 2013
</p>
<p>
  Fusce scelerisque massa vitae
25 april 2013
</p>
<p>
  Fusce scelerisque massa vitae
25 april 2013
</p>
</div>


   </div>

   <div className={style.sectionTwo}>
       <div>
<hr />
       </div>

       <div className={style.subFooter} >
           <div>
            <p>
            © All rights reserved | Template by  <span>W3Layouts </span>
            </p>
            </div>
           <div>
           
            <span>
            home
            </span>
            <span>
            about
            </span>
            <span>
            portfolio
            </span>
            <span>
            blog
            </span>
            <span>
            features
            </span>
            <span>
            Contact
            </span>
           </div>
       </div>
   </div>
     </div>
    </>
    
  )
}

export default Footer
