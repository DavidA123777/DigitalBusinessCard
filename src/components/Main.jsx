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
                    <p className="description">Aspiring Data Analyst & Software Engineer</p>
                    <a href="https://github.com/DavidA123777"><p className="website">https://github.com/DavidA123777</p></a>
                <div class="buttons">
                <a href="mailto:ddda4167@gmail.com"> 
                    <button className="email-btn">
                         <img src={mailpic} className="mail-pic" />
                         <p className="email-text">Email</p>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/david-abushlaih/">
                    <button className="LinkedIn-btn">
                            <img src={linkedin} className="linkedin" />
                            <p className="linkedin-text">LinkedIn</p>
                    </button>
                </a>
                </div>
                
                </div>
                
                
                <p className="About">About</p>
                <p className="about-text">
                    I recently graduated with a Bachelor's Degree in Computer Science from Hunter College in January 2024. 
                    While at Hunter College, I developed my skills in Software Engineering through my mentorship at Google. 
                    I have experience as a UI/UX developer Intern at Students Who Code, and experience working as a project 
                    manager for NASA's L'SPACE NPWEE Academy. I am currently developing my skills in Power BI, SQL, and Python 
                    to further grow as a Data Analyst.
                </p>
                <p className="Interests">Interests</p>
                <p className="interests-text">Calisthenics Athlete. Loves Comedy Movies. Enjoys 80s style music.</p>
                </div>
                <div className="footer">
                    
                <a href="https://github.com/DavidA123777"><img src={github} /></a>
                </div>
        </main>
        
    );
};
export default Main;
