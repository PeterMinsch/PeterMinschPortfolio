import React from 'react'
import './AboutMe.css'
import Card from '../Card/Card';
import MeAndChandler from '../../img/MeAndChandler.jpg';
import myFriends from '../../img/myFriends.jpg';
import meAndMom from '../../img/meAndMom.jpg';
const AboutMe = () => {
    const handleClick = () => {
        const email = 'peteminsch.pm@gmail.com';
        const encodedEmail = encodeURIComponent(email);
        const mailToUrl = `mailto:${encodedEmail}`;
    
        window.location.href = mailToUrl;
    }
    return (
        <div className = "AboutMe" id = 'AboutMe'>
            {/*left side */}
            <div className = "about">
            <span>About Me</span>
            <spane>
            Hello, I'm Peter Minsch, a hardworking and passionate computer <br/>
            science student on a journey to thrive in the tech industry. <br/>
            It's always been my dream to work alongside professionals <br/>
            who share my passion for computer science! <br/> <br/>

            Currently I am a full-time student and I work as a computer<br/>
            science tutor, where I've been honing my skills in Object-<br/>
            Oriented Programming, Data Structures, C++, C, Java, Linux<br/>
            and Python. This role has not only strengthened my technical<br/>
            abilities but also cultivated essential soft skills such as <br/>
            mentoring, communication, and project management. <br/><br/>
            Outside of school and work, you'll often find me inside my <br/>
            home doing personal coding projects or tackling LeetCode <br/>
            problems. I also like to stay home watching movies and T.V. <br/>
            shows with my family. My friends and family are a big part <br/>
            of my life. <br/><br/>

            As someone who likes to learn new things, I aspire to <br/>
            be a software developer and continue my computer science<br/>
            journey. <br/><br/>

            If you want to speak with me or learn more info then feel <br/>
            free to reach out to me!
            </spane>
            
            <button className="button s-button" onClick = {handleClick}>
                    Contact me!
                </button>
            </div>

            {/* right side */}
            <div className = "cards">
                <div style = {{bottom: '14rem',left: '12rem'}}>
                    <Card
                    img = {MeAndChandler}
                    heading = {'My dogs!'}
                    detail = {"Teddy and Barney!"}
                    />
                </div>
                <div style = {{top: "22rem", left: "25rem"}}>
                    <Card
                    img={myFriends}
                    heading = {"Me and my Friends!"}
                    />
                </div>
                <div style = {{top: "22rem", left: "1rem"}}>
                    <Card
                    img = {meAndMom}
                    heading = {"I like to travel!"}
                    
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutMe
