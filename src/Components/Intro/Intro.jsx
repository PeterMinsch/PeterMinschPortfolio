import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import PeterBeach from '../../img/PeterBeach.jpg';
import Resume from '../../Peter_Minsch.pdf';
const Intro = () => {
    return (
        <div className = "intro">
            <div className= "i-left" >
            <div className= "i-name" >
                <span>Hi! I am</span>
                <span>Peter Minsch</span>
                <span>4th-year CS student and incoming software engineer</span>
            </div>
            <a href = {Resume} >
            <button className = "button s-button">My Resume!</button>
            </a>
            <div className="i-icons">
                <a href = 'https://github.com/PeterMinsch' >
                <img src = {Github} alt = "" />
                </a>
                <a href = 'https://www.linkedin.com/in/peter-minsch-1145891ab'>
                <img src = {LinkedIn} alt = ""/>
                </a>
                <a href = 'https://www.instagram.com/peteminsch/'>
                <img src = {Instagram} alt = ""/>
                </a>
            </div>
        </div>
        <div className= "i-right">
            <img src = {PeterBeach} alt = ""/>
            <div style={{ top: '30%', left: '35%' }}
            className = 'floating-div'
            >

{/* <FloatingDiv image = {Crown} txt1 = 'Software' txt2 = 'Developer'/> */}
            </div>
        </div>
    </div>
    )
}


export default Intro