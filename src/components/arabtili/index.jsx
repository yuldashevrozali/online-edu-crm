import React from 'react'
import true1 from '../../assets/true.svg'
import './index.css'

export default function Arab() {
    return (
        <div className='arab'>
            <div className="arab-top">
                <ul>
                    <li><a href='./'>Bosh sahifa</a></li>
                    <div className="radius"></div>
                    <li><a href='/free'>Kurslar</a></li>
                    <div className="radius"></div>
                    <li><a href='/arab'><span>Arab-tili</span></a></li>
                </ul>
            </div>
            <div className="arab-block">
                <div className="arab-left">
                    <h1>Arab tili</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ad aliquam praesentium officia. Doloremque modi, nisi, culpa iure commodi molestiae, consequatur dolorum repellendus perspiciatis maiores error architecto quas corporis illum. Nam facilis nihil possimus suscipit voluptatem eius, quidem sed cupiditate amet odit fuga, ipsam rerum sequi tempore natus saepe tempora quas eaque accusamus autem odio optio expedita aperiam nostrum! Vitae ab distinctio blanditiis deserunt animi sed delectus odit, vel perspiciatis iure ex nemo quas eius impedit amet ea! Aliquam adipisci minima soluta error explicabo voluptatum nam libero corporis, ullam laborum quidem vitae dolores molestiae. Distinctio voluptates atque nostrum! Officia, accusamus!</p>

                    <h6>Davomiylik: <span>10 soat 2 daqiqa</span></h6>
                </div>
                <div className="arab-right">
                    <div className="cource1"></div>
                </div>
            </div>

            <div className="blocks125">
                <div className="arab-block2">
                    <div className="arab-left">
                        <h1>Kursda nimalarni o'rganasiz.</h1>
                        <div className='left-blocks'>
                            <div className="left-block">
                                <img src={true1} alt="" />
                                <p>Lorem.</p>
                            </div>
                            <div className="left-block">
                                <img src={true1} alt="" />
                                <p>Lorem.</p>
                            </div>
                            <div className="left-block">
                                <img src={true1} alt="" />
                                <p>Lorem.</p>
                            </div>
                            <div className="left-block">
                                <img src={true1} alt="" />
                                <p>Lorem.</p>
                            </div>
                            <div className="left-block">
                                <img src={true1} alt="" />
                                <p>Lorem.</p>
                            </div>
                            <div className="left-block">
                                <img src={true1} alt="" />
                                <p>Lorem.</p>
                            </div>
                            <div className="left-block">
                                <img src={true1} alt="" />
                                <p>Lorem.</p>
                            </div>
                            <div className="left-block">
                                <img src={true1} alt="" />
                                <p>Lorem.</p>
                            </div>
                            <div className="left-block">
                                <img src={true1} alt="" />
                                <p>Lorem.</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div class="course-card">
                    <p class="course-price">Kurs narxi</p>
                    <h2>Bepul</h2>
                    <div class="rating">
                        <span class="rating-stars">4.9</span>
                        <span class="stars">★★★★★</span>
                        <span class="rating-count">(26)</span>
                        <span class="students">694 o'quvchi</span>
                    </div>
                    <a href='/arab-tili'><button class="enter-button">Kirish</button></a>
                </div>
            </div>

        </div>
    )
}
