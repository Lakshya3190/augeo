import React from 'react';
import './project.css';
import project1 from './project1.png';
import project2 from './project2.png';
import project3 from './project3.png';
import project4 from './project10.png';
import project5 from './indev.png';
import project6 from './PAPER.png';
import {Animated} from "react-animated-css";



function Project()
{
    return(
        <div id = 'projectPage'>
            <div className = 'project'>
                <div class= 'pro_header'>
                    Projects & Research
                </div>

            <Animated animationIn="slideInLeft" animationOut="" animationInDuration = '1600' isVisible={true}>
                <div className='project_list'>

                    <div className= 'project1 content'>
                        <div class="content-overlay"></div>
                        <img alt = 'Project1' src = {project1} width = '600' height = '300'/>
                        <div className="content-details fadeIn-bottom">
                            <h3 class="content-title">Portfolio Website</h3>
                            <p class="content-text">A responsive and attractive portfolio website built from scratch using React.js 
                            and Node.js</p><br/>
                            <p>Node.js, React.js, JavaScript, HTML5, CSS</p>
                        </div>
                    </div>


                    <div className= 'project2 content'>
                        <div class="content-overlay"></div>
                        <img alt = 'Project2' src = {project2} width = '600' height = '300'/>
                        <div className="content-details fadeIn-bottom">
                            <h3 class="content-title">Hierarchal Neuro-Fuzzy Decision Support System</h3>
                            <p class="content-text">A computationally efficient hierarchal neuro-fuzzy DSS for MOPP Open time predictions 
                            in chemical environments for low intensity conflicts. The model predicts the duration of protective overgarment 
                            deployment in case of a chemical attack, for brigade level military formations.<br/>
                            Data: United States Marine Corp Field Manuals<br/>
                            Simulated and verified on MATLAB Simulink, with an accuracy of 99%<br/>
                            <b>*This work is under peer review as original research*</b> </p><br/>
                            <p>MATLAB, Neural Networks, Fuzzy Logic, Artificial Intelligence, Soft Computing.</p>
                        </div>
                    </div>
    


                    <div className= 'project3 content'>
                        <div class="content-overlay"></div>
                        <img alt = 'Project3' src = {project3} width = '600' height = '300'/>
                        <div className="content-details fadeIn-bottom">
                            <h3 class="content-title">Adaptive Neuro-Fuzzy Inference System</h3>
                            <p class="content-text">An ANFIS DSS for explosion consequence analysis of brick structures at range of 
                            up to 20m. The model takes into consideration the explosive type, charge size and range from brick structure
                            to predict damage to brick structures.<br/>
                            Data: United Nations<br/>
                            Simulated and verified on MATLAB Simulink with an accuracy of 96%<br/>
                            <b>*This work is under peer review as original research*</b>
                            </p>
                            <br/>
                            <p>MATLAB,discision tree, fuzzy logic, neural networks, artificial intelligence</p>
                        </div>
                    </div>

                    <div className= 'project4 content'>
                        <div class="content-overlay"></div>
                        <img alt = 'Project4' src = {project4} width = '600' height = '300'/>
                        <div className="content-details fadeIn-bottom">
                            <h3 class="content-title">Student Awareness Site</h3>
                            <p class="content-text">A basic front-end website design as part of a student 
                            awareness program using React.js
                            </p>
                            <br/>
                            <p>Node.js, React.js, JavaScript, HTML5, CSS3</p>
                        </div>
                    </div>

                    <div className= 'project6 content'>
                        <div class="content-overlay"></div>
                        <img alt = 'Project 5' src = {project5} width = '600' height = '300'/>
                        <div className="content-details fadeIn-bottom">
                            <h3 class="content-title">Projects under development:</h3>
                            <p class="content-text">
                                Applications of Genetic-Fuzzy Systems and Cascading Genetic Fuzzy Trees
                                <br/>Machine learning and Reinforcement learning
                            </p>
                        </div>
                    </div>

                    <div className= 'project6 content'>
                        <div class="content-overlay"></div>
                        <img alt = 'Project 5' src = {project6} width = '600' height = '300'/>
                        <div className="content-details fadeIn-bottom">
                            <h3 class="content-title">Published Paper</h3>
                            <p class="content-text">
                            Application of Fuzzy Logic Control Systems in Military Platforms
                            <br/>Publisher: IEEE
                            </p>
                        </div>
                    </div>


                </div>
            </Animated>
            </div> 
        </div>       
    );
}

export default Project;