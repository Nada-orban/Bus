import React from 'react'
import backgroundVideo from '../videos/video-1.mp4';
import './Landing.css';
import { FaPlayCircle } from "react-icons/fa"





function Landing() {
    return (
        <div className='landing'>
            <video autoPlay loop muted id='video' >
                <source src={backgroundVideo} type='video/mp4' />
            </video>
            <div className='title  text-center'>
                <h1 >ADVENTURE AWAITS</h1>
                <p className='fs-4'>What are you waiting for?</p>
                <button className="btn btn-outline-light mx-2" type="submit">GET STARTED</button>
                <button type="button" className="btn btn-light">WATCH TRAILER<FaPlayCircle /></button>
            </div>
        </div>
    )
}

export default Landing