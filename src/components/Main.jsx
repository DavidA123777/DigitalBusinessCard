import React from 'react';

import pic from '../Images/business.png'
import mailpic from '../Images/Icon.png';
import linkedin from '../Images/Vector.png';

import github from '../Images/github.png';




const Main = () =>{
    return(
        
        <main className="main-section">
            <img src={pic} className="pic"/>
            <div className="info">
                <div className="bio">
                    <p className="name">David Abushlaih</p>
                    <p className="description">Frontend Web Developer</p>
                    <a href="https://github.com/DavidA123777"><p className="website">https://github.com/DavidA123777</p></a>
                <div class="buttons">
                <a href="mailto:ddda4167@gmail.com"> 
                    <button className="email-btn">
                         <img src={mailpic} className="mail-pic" />
                         <p className="email-text">Email</p>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/david-a-1346ab23b/">
                    <button className="LinkedIn-btn">
                            <img src={linkedin} className="linkedin" />
                            <p className="linkedin-text">LinkedIn</p>
                    </button>
                </a>
                </div>
                
                </div>
                
                
                <p className="About">About</p>
                <p className="about-text">I am an aspiring Frontend Web Developer. I have experience coding in JavaScript, HTML, CSS, React, SQL, and C++. I am currently practicing advanced aspects of React and improving my design skills in CSS.</p>
                <p className="Interests">Interests</p>
                <p className="interests-text">Calisthenics Athlete. Runner. Loves Comedy Movies. Avid Reader. Enjoys 80s style music.</p>
                </div>
                <div className="footer">
                    
                <a href="https://github.com/DavidA123777"><img src={github} /></a>
                </div>
        </main>
        
    );
};
export default Main;