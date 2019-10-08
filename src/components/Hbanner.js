import React from 'react';
import './hbanner.css';
import Tilt from 'react-tilt';
import './about.png';
import { Link, animateScroll as scroll } from "react-scroll";




function Hbanner() 
{
 
 return (
      <nav className = 'Main-nav'>
            <ul style = {{display: 'inline-flex'}} className = 'nav-bar br--right'>
          
              <li style = {{justifyContent: 'flex-end'}} className = 'li2 b'>
                <Tilt className="Tilt" options={{ max : 40 }} style={{ height: 35, width: 110 }} >
                  <div className="Tilt-inner">
                    <Link activeClass= 'active' to = 'aboutPage' smooth = {true} duration = {600}>
                      About
                    </Link>
                  </div>
                </Tilt>
              </li>
              
              <li style = {{justifyContent: 'flex-end'}} className = 'li2 b'>
                <Tilt className="Tilt" options={{ max : 40 }} style={{ height: 50, width: 110 }} >
                  <div className="Tilt-inner">
                  <Link activeClass= 'active' to = 'projectPage' smooth = {true} duration = {600}> 
                    Projects & Research
                  </Link>
                  </div>
                </Tilt>
              </li>
              
              <li style = {{justifyContent: 'flex-end'}} className = 'li2 b'>
                <Tilt className="Tilt" options={{ max : 40 }} style={{ height: 50, width: 110 }} >
                  <div className="Tilt-inner"> 
                  <Link activeClass= 'active' to = 'contentPage' smooth = {true} duration = {600}>
                    Content Writing 
                    </Link>
                  </div>
                </Tilt>
              </li>
              
              <li style = {{justifyContent: 'flex-end'}} className = 'li2 b'>
                <Tilt className="Tilt" options={{ max : 40 }} style={{ height: 50, width: 110 }} >
                  <div className="Tilt-inner"> 
                    Resume 
                  </div>
                </Tilt>
              </li>
         
          
              </ul>
      </nav>
         
    );
  }
  
export default Hbanner;
  