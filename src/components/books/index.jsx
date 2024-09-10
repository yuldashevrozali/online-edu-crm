import React from 'react'
import shifohiyya from '../../assets/shifohiyya.pdf'
import arab from '../../assets/Арабтили-2015.pdf'
import AnNaim from '../../assets/Ан-Наим.pdf'
import turlash from '../../assets/Fellarni-turlash-qomusi.pdf'
import download from '../../assets/download.svg'
import './index.css'

export default function Books() {
  return (
    <div className='books'>
      <h1>Books</h1>
      <div className="books-blocks">
        <div className="book-block">
          <div className="book-name">
            <p>shifohiyya</p>
          </div>
          <button><a href={shifohiyya} download={shifohiyya}><img src={download} alt="" /></a></button>

        </div>
        <div className="book-block book2">
          <div className="book-name">
            <p>Arab tili</p>
          </div>
          <button><a href={arab} download={arab}><img src={download} alt="" /></a></button>

        </div>
        <div className="book-block book3">
          <div className="book-name ">
            <p>An Naim</p>
          </div>
          <button><a href={AnNaim} download={AnNaim}><img src={download}alt="" /></a></button>
          
        </div>
        <div className="book-block book4">
          <div className="book-name">
            <p>Fellarni-turlash-qomusi</p>
          </div>
          <button><a href={turlash} download={turlash}><img src={download}alt="" /></a></button>
          
        </div>

      </div>
    </div>
  )
}
