
import React, { useState } from 'react'
import style from './homeContainer.module.scss'
import pic1 from '../../images/pic1.jpg'
import Link from 'next/link'
import Image from "next/image"; 
import p1 from '../../images/pic1.jpg'
import p2 from '../../images/pic2.jpg'
import p3 from '../../images/pic3.jpg'
import p4 from '../../images/pic4.jpg'
import p5 from '../../images/pic5.jpg'
import p6 from '../../images/pic6.jpg'
import p7 from '../../images/pic7.jpg'
import p8 from '../../images/pic8.jpg'
import p9 from '../../images/pic9.jpg'
import p10 from '../../images/pic10.jpg'
import p11 from '../../images/pic11.jpg'
import p12 from '../../images/pic12.jpg'

const HomeContainer = () => {
  const cards =[
    { url:p1 , title:'Typography Company',  desc:'Web Design' , type:1 },
    { url:p2 , title:'Typography Company',  desc:'Web Design' ,  type:1},
    { url:p3 , title:'Typography Company',  desc:'Web Design' , type:2},
    { url:p4 , title:'Typography Company',  desc:'Web Design' , type:2},
    { url:p5 , title:'Typography Company',  desc:'Web Design', type:3},
    { url:p6 , title:'Typography Company',  desc:'Web Design', type:4},
    { url:p7 , title:'Typography Company',  desc:'Web Design', type:5},
    { url:p8 , title:'Typography Company',  desc:'Web Design', type:6},
    { url:p9 , title:'Typography Company',  desc:'Web Design', type:7},
    { url:p10 , title:'Typography Company',  desc:'Web Design', type:7},
    { url:p11 , title:'Typography Company',  desc:'Web Design' , type:6},
    { url:p12 , title:'Typography Company',  desc:'Web Design' , type:5},
    
  
  ]
  const [data , setData] = useState(cards)
  let [filterData , setFilterData] = useState([])

  const changCard = (i)=>{
  const Data = data;
  switch (i) {
    case 0:
      setData(cards)
      break;
    case 1:
      setFilterData(Data.filter(item => item.type == 2));
      setData(filterData)
      break;
      case 2:
        setFilterData(Data.filter(item => item.type == 2));
        setData(filterData)
      break;
      case 3:
        setFilterData(Data.filter(item => item.type == 2));
        setData(filterData)
      break;
      case 4:
        filterData = Data.filter(item => item.type == 3);
        setData(filterData)
      break;
      case 5:
        setFilterData(Data.filter(item => item.type == 4));
        setData(filterData)
      break;
      case 6:
        setFilterData(Data.filter(item => item.type == 5));
        setData(filterData)
      break;
      case 7:
        setFilterData(Data.filter(item => item.type == 6  ));
        setData(filterData)
      break;
    default:
      setData(Data)
      break;
  }
  }
  return (
    <div className={style.homeContainer}>
   <div className={style.sectionOne} >
   <span onClick={()=>{changCard(0)}}> All /</span>
   <span onClick={()=>{changCard(1)}}> design /  </span>
   <span onClick={()=>{changCard(2)}}> branding /</span>
   <span onClick={()=>{changCard(3)}}> graphic /</span>
   <span onClick={()=>{changCard(4)}}> animation /  </span>
   <span onClick={()=>{changCard(5)}}> illustration /  </span>
   <span onClick={()=>{changCard(6)}}> photography </span>
   </div>
   <di className={style.sectionTwo} >

{(data.map((card , i) => {
        return (
          <div key={i} className={style.card} >
            <Image className={style.ing}  src={card.url} width='20%' height='100px' />
          <h5>{card.title}</h5>
          <p>{card.desc}</p>
         </div>
        )
      })) } 
   </di>
    </div>
  )
}

export default HomeContainer
