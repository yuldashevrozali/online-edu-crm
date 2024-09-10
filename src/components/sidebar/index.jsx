import React from 'react'
import home from '../../assets/home.svg'
import free from '../../assets/free.svg'
import money from '../../assets/money.svg'
import book1 from '../../assets/book1.svg'
import instagram from '../../assets/instagram.svg'
import telegram from '../../assets/telegram.svg'
import facebook from '../../assets/facebook.svg'
import youtube from '../../assets/youtube.svg'
import linkedin from '../../assets/linkedin.svg'
import './index.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <h1>Sahifalar</h1>
      <div className="hr"></div>
      <div className='blocks'>
        <div className="block">
          <img src={home} alt="" />
          <a href='./'><p>Bosh sahifa</p></a>
        </div>
        <div className="block">
          <img src={free} alt="" />
          <a href='./free'><p>Bepul kurslar</p></a>
        </div><div className="block">
          <img src={money} alt="" />
          <a href='./money'><p>Pullik kurslar</p></a>
        </div>
        <div className="block">
          <img src={book1} alt="" />
          <a href='./books'><p>Kitoblar</p></a>
        </div>
      </div>
      <div className="sidebar-bottom">
        <p>Biz bilan bog'lanish</p>
        <div className="hr"></div>
        <div className="messengers">
        <a><img src={instagram} alt="" /></a>
        <a><img src={telegram} alt="" /></a>
        <a><img src={facebook} alt="" /></a>
        <a><img src={youtube} alt="" /></a>
        <a><img src={linkedin} alt="" /></a>
        </div>
      </div>
    </div>
  )
}
