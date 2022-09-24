import React from 'react';
import image from '../images/Captura de pantalla 2022-09-24 160635.png';
import linkedin from '../styles/icons/174857.png';
import github from '../styles/icons/25231.png';
const About = () => {
  return (
    <div className='About__card-wrapper'>
      <div className='About__card-body'>
        <div className='About__card-image'>
          <img src={image} alt='author-image' />
        </div>
        <div className='About__card-info'>
          <div className='About__card-name'>
            <h3>Omar Andrés Vega Atencia</h3>
          </div>
          <div className='About__card-description'>
            <p>
              I am a systems engineering student who is very passionate about
              the tech industry and is heading into the ways of the web and
              backend development. I have enrolled in the 24th version of the
              Make It Real Bootcamp where I have improved my technical knowledge
              and developed very important soft skills. I have also worked with
              the scrum methodology and jira as a scrum tool.
              <div className='About__card-list'>
                <ul>
                  <li>HTML,CSS</li>
                  <li>Javascript</li>
                  <li>Git</li>
                </ul>
                <ul>
                  <li>ReactJs</li>
                  <li>Redux</li>
                </ul>
                <ul>
                  <li>NodeJs</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                </ul>
              </div>
            </p>
          </div>
          <div className='About__card-contact'>
            <div className='About__card-email'>
              <h5>omarvega598@gmail.com</h5>
            </div>
            <div className='About__card-linkedin'>
              <a href='https://www.linkedin.com/in/omar-vega-atencia/'>
                <img src={linkedin} alt='' />
              </a>
            </div>
            <div className='About__card-github'>
              <a href='https://github.com/Cieth'>
                <img src={github} alt='' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
