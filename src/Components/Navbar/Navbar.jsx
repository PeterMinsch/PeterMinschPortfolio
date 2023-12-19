import React from 'react';
import './Navbar.css'
import Toggle from '../Toggle/Toggle';
import {Link} from 'react-scroll'

const Navbar = () => {
    const handleContactClick = () => {
        const email = 'peteminsch.pm@gmail.com';
        const encodedEmail = encodeURIComponent(email);
        const mailToUrl = `mailto:${encodedEmail}`;
    
        window.location.href = mailToUrl;
    };
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Peter Minsch</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style = {{listStyleType: 'none'}}>
                        <Link spy = {true} to = 'NavBar' smooth = {true} activeClass = 'activeClass'>
                        <li>Home</li>
                        </Link>
                        <Link spy = {true} to = 'AboutMe' smooth = {true} >
                        <li>About</li>
                        </Link>
                        <Link spy = {true} to = 'Experiences' smooth = {true} activeClass = 'activeClass'>
                        <li>Experiences</li>
                        </Link>
                        <Link spy = {true} to = 'Projects' smooth = {true} activeClass = 'activeClass'>
                        <li>Projects</li>
                        </Link>
                        
                    </ul>
                </div>
                <button className="button n-button" onClick = {handleContactClick}>
                    Contact me
                </button>
            </div>
        </div>
    );
};

export default Navbar;
