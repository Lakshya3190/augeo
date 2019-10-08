import React from 'react';
import './footer.css';
import linkedin from './linkedin.png';
import instagram from './instagram.png';
import github from './github.png';
import final from './siteLink.png';

function Footer()
{
    return(
        <div className= 'foot'>

            <div className='footer contactMe tc b'>
                <h1>CONTACT ME!</h1>
                <h3>Whether you're a mentee, a friend, someone
                    interested in working with me or just want to say Hi. 
                    <br/>Please hit me up at:

                <h2>lakshyatyagi18@gmail.com</h2>
                </h3>
            </div>

            <div className='finalfoot'>
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

                <div className = 'github social_icon grow'>
                    <a href = 'https://github.com/Lakshya3190'>
                    <img src = {final} width='60px' height= '60px'/>
                </a>
                </div>

                <h2 className = 'b'>Designed by Lakshya Tyagi</h2>
            </div>

            
        </div>
    );

}

export default Footer;