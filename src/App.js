import React from 'react';
import './App.css';
import Hbanner from './components/Hbanner.js';
import Intro from './components/Intro.js';
import About from './components/About.js';
import Project from './components/Project.js';
import ContentWriting from './components/Contentwriting.js';
import Footer from './components/Footer';
import LazyLoad from 'react-lazyload';
import {Animated} from "react-animated-css";


function App() {
  return (
    <div className = 'app'>
        
      <Intro/>
      <Hbanner/>
      <About/>
      <LazyLoad  height={5400} once>
      <Project/>
      </LazyLoad>
      <LazyLoad  height={15000} once>
      <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDuration = '1600' isVisible={true}> 
      <ContentWriting/>
      </Animated> 
      </LazyLoad>
      <Footer/>

      
      
    </div>
    
  );
}

export default App;
