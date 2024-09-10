import React from 'react'
import arabtili from '../../assets/unnamed.jpg'
import './index.css'

export default function Free() {
    return (
        <div className='free'>
            <div className="arab-top left1">
                <ul>
                    <li><a href='./'>Bosh sahifa</a></li>
                    <div className="radius"></div>
                    <li><a href='/free'><span>Kurslar</span></a></li>
                    <div className="radius"></div>
                    <li><a href='/arab'>Arab-tili</a></li>
                </ul>
            </div>
            <h1>Bepul kurslar</h1>
            <div className='free-blocks'>
            <a href='/arab' >
            <div className="cource"></div>
            </a>
                
                <div className="cource">

                </div>
                <div className="cource">
               
                </div>
                <div className="cource">
                    
                </div>
            </div>

        </div>
    )
}
