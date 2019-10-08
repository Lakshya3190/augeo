import React from 'react';
import './contentWriting.css';
import CountUp from 'react-countup';
import article1 from './article1.png';
import article2 from './article2.png';
import article3 from './article3.png';
import article4 from './article4.png';

function Contentwriting()
{
    return(
        <div id = 'contentPage'>
            <div className = 'contentW'>
                <div class= 'content_header'>
                    Content Writing
                </div>


                <div className = 'cards'> 
                    <div className="startups card b code" style = {{boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)'}}> 
                        <p>Projects and Companies</p>
                        <CountUp style = {{fontSize: '40px', color: 'rgb(19, 30, 31)'}} end={8} duration={4}/>
                    </div>

                    <div className="articles card code b" style = {{boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)'}}>
                        <p>More than</p>
                        <CountUp style = {{fontSize: '40px', color: 'rgb(19, 30, 31)'}} end={70} duration={4}/>
                        <p>published articles</p>
                    </div>

                    <div className="mentees card code b" style = {{boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)'}}>
                        <p>Mentored more than</p>
                        <CountUp style = {{fontSize: '40px', color: 'rgb(19, 30, 31)'}} end={500} duration={4}/>
                        <p>writers, and counting</p>
                        
                    </div>

                    <div className="views card code b" style = {{boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)'}}>
                        <p>Quora and content hits</p>
                        <CountUp style = {{fontSize: '40px', color: 'rgb(19, 30, 31)'}} end={600000} duration={4}/>
                    </div>  
                </div>
            
                <div className='articleList'>
                    <div className = 'article1 arty grow' style = {{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8)'}}>
                        <a href = 'https://medium.com/@theclimber_ind/mma-and-combat-sports-in-india-how-to-be-a-warrior-on-the-sides-b26088df9e5'>
                            <img alt = 'art1' src ={article1} width = '300px' height = '300px'/>
                        </a>
                    </div>

                    <div className = 'article2 arty grow' style = {{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8)'}}>
                        <a href = 'https://medium.com/@theclimber_ind/to-syria-with-love-from-the-climber-7b426da6f0d'>
                            <img alt = 'art2' src ={article2} width = '300px' height = '300px'/>
                        </a>
                    </div>

                    <div className = 'article3 arty grow' style = {{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8)'}}>
                    <a href = 'https://1001thingstodo.in/switzerland-why-it-tops-every-travelers-itinerary/'>
                            <img alt = 'art3' src ={article3} width = '300px' height = '300px'/>
                        </a>
                    </div>

                    <div className = 'article4 arty grow' style = {{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8)'}}>
                        <a href = 'https://warriorsway98.wordpress.com/2016/06/03/a-wife-less-ordinary/'>
                            <img alt = 'art4' src ={article4} width = '300px' height = '300px'/>
                        </a>
                    </div>

                </div>



            </div>
         </div>
    );
}

export default Contentwriting;