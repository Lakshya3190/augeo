import React from 'react';
import './about.css';
import student from './student.png';
import writer from './writer.png';
import dev from './developer.png';
import sport from './sport.png';
import Tech_stack from './TechStack.js';
import Write_stack from './Writestack';
import Speaker from './speaker.png';





function About() 
{
    return(
        <div id = 'aboutPage'>
            <div className = 'about'>
                <div class= 'header'>
                    About
                </div>


                    <div className = 'char-bar'>
                        <div class="container">
                            <div class="cardy">
                                <div class="face face1">
                                    <div class="content" className='tc'>
                                        <img alt= 'tag1' src = {student} width = '100px' height = '100px'/>
                                        <h3 style={{color: 'black', fontFamily:'verdana'}}>Student</h3>
                                    </div>
                                </div>
                                <div class="face face2">
                                <div class="content">
                                    <p>Bachelors of Technology in Computer Science and Engineering along with a bachelors of Arts in Sociology.</p>   
                        </div>
                        </div>
                        </div>
                        </div>
                       

                        <div className="container">
                            <div className="cardy">
                                <div className="face face1">
                                    <div className="content" className='tc'>
                                        <img alt = 'tag1' src = {writer} width = '100px' height = '100px'/>
                                        <h3 style={{color: 'black', fontFamily:'verdana'}}>Writer</h3>
                                    </div>
                                </div>
                                <div className="face face2">
                                <div className="content">
                                    <p>Extensive content writing and web content develpment experience. Also interested in writing short stories and poetry.</p>   
                        </div>
                        </div>
                        </div>
                        </div>
                        

                        <div className="container">
                            <div className="cardy">
                                <div className="face face1">
                                    <div className="content" className='tc'>
                                        <img alt = 'tag1' src = {dev} width = '100px' height = '100px'/>
                                        <h3 style={{color: 'black', fontFamily:'verdana'}}>Developer</h3>
                                    </div>
                                </div>
                                <div className="face face2">
                                <div className="content">
                                    <p>Software and web development. Research interests include: Soft computing, Machine learning, Reinforcement learning and defence sciences.</p>   
                        </div>
                        </div>
                        </div>
                        </div>
                        

                          <div className="container">
                            <div className="cardy">
                                <div className="face face1">
                                    <div className="content"  className='tc'>
                                        <img alt = 'tag1' src = {sport} width = '100px' height = '100px'/>
                                        <h3 style={{color: 'black', fontFamily:'verdana'}}>Outdoors Enthusiast</h3>
                                    </div>
                                </div>
                                <div className="face face2">
                                <div className="content">
                                    <p>Avid runner and basketball player. Also interested in golf and mixed martial arts (Muay Thai).</p>   
                        </div>
                        </div>
                        </div>
                        </div>
                        
                        <div className="container">
                            <div className="cardy">
                                <div className="face face1">
                                    <div className="content" className='tc'>
                                        <img alt = 'tag1' src = {Speaker} width = '100px' height = '100px'/>
                                        <h3 style={{color: 'black', fontFamily:'verdana'}}>Speaker</h3>
                                    </div>
                                </div>
                                <div className="face face2">
                                <div className="content">
                                    <p>Strong oratory and presentation skills.</p>   
                        </div>
                        </div>
                        </div>
                        </div>


                        </div>
                        

                        <div className = 'about_p2 tc'>
                            <img src="http://tachyons.io/img/logo.jpg" width = '500px' height = '500px' class="br4 h3 w3 dib" alt="avatar"/>
                            <p className = 'tc about_desc'>
                            I am a pre-final year student, pursuing my Bachelors in Computer Science and Engineering. 
                            I am keenly interested in web-development, software engineering and am pasisonate about 
                            artificial intelligence, particularly through soft computing in defence sciences. 

                            I also have extensive experience as a content writer, having worked for various start-ups, helping
                            them maintain an effective online presence through SEO and creative content management. I am currently
                            serving as a mentor to prospective and passionate writers and have proudly mentored over 500 writers so far. 
                            </p>
                        </div>

                        <div className = 'techStack'>
                        <div className= 'stack1 fl w-50'>
                        <Tech_stack/>
                        <p className= 'b'>Click for Tech Stack</p>
                        </div>
                        <div className= 'stack2 fl w-50'>
                        <Write_stack/>
                        <p className= 'b'>Web Content Curation</p>
                        </div>
                        </div>

            </div>
        </div>


    );
 
}
  
export default About;












