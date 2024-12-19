import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Home.css';
import profileImage from "./profile.jpg";
import leetcodeLogo from "./leet-logo2.png";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-image">
        <img src={profileImage} alt="Durga Preetham Kasarla" />
      </div>
      <div className="home-content">
        <h1 id="p2">Hello, I'm <span className="highlight">"Durga Preetham Kasarla"</span></h1>
        <p id="p1">I'm good at "Android Development"<br />
         and "Machine Learning"</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/kasarla-durga-preetham-800311255/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/PreethamKasarla" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://leetcode.com/u/Preetham_Kasarla/" target="_blank" rel="noopener noreferrer">
            <img src={leetcodeLogo} alt="LeetCode" style={{ width: '35px', height: '35px' }} />
          </a>
        </div>
        <a href="https://drive.google.com/drive/folders/1kcKOzck0UJnZ_yEO1mg9LRPh05SsgjMY" download="Durga Preetham Kasarla.pdf" className="btn btn-resume">Download Resume</a>
      </div>
    </section>
  );
}

export default Home;