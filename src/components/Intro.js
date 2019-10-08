import React from 'react';
import './intro.css';
import Particles from 'react-particles-js';
import linkedin from './linkedin.png';
import instagram from './instagram.png';
import github from './github.png';
import {Animated} from "react-animated-css";

const particlesOptions = {
  "particles": {
    "number": {
        "value": 100
    },
    "size": {
        "value": 6
    }
},
"interactivity": {
    "events": {
        "onhover": {
            "enable": true,
            "mode": "repulse"
        }
    }
}
  }


function Intro()
{
    return(
    <nav className = 'intro'>
        <Particles className= 'particles tc' 
              params={particlesOptions}
            />
        
        <Animated animationIn="slideInRight" animationOut="" animationInDuration = '1000' isVisible={true}>
        <p className = 'salutation'><span className = 'b' style={{color:'black', fontSize:'30px'}}>Hi! I am </span><br/><span className='tc b'>Lakshya Tyagi.</span> <br/>
        <span className = 'b' style={{color:'black', fontSize:'30px'}}> Welcome to my portfolio!</span></p>
        <p className = 'intro-desc '> I am a pre-final year student pursuing my Bachelors in Computer Science and Engineering.
        I apply what I learn and learn more in the process.</p>
        </Animated>

        <Animated animationIn="slideInLeft" animationOut="" animationInDuration = '1000' isVisible={true}>
        <div className='cont'>
                <div className = 'linkedin social_icon grow'>
                    <a href = 'https://www.linkedin.com/in/lakshya-tyagi-45237b11b/'>
                    <img src = {linkedin} width = '60px' height = '60px'/>
                    </a>
                </div>

                <div className = 'instagram social_icon grow'>
                    <a href = 'https://www.instagram.com/lakshya1406/'>
                    <img src = {instagram} width = '60px' height = '60px'/>
                    </a>
                </div>

                <div className = 'github social_icon grow'>
                    <a href = 'https://github.com/Lakshya3190'>
                    <img src = {github} width = '60px' height = '60px'/>
                    </a>
                </div>
            </div>
        </Animated>
    </nav>

    );




}

export default Intro;