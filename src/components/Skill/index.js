import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import GIF from '../../assets/images/gif7.webp'

const Skill = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  //   useEffect(() => {
  //     return setTimeout(() => {
  //       setLetterClass('text-animate-hover')
  //     }, 3000)
  //   }, [])


  useEffect(() => {
    let timeout;
    timeout = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);


  return (
    <>
      <div className="container skill-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <p>
            Data Structure & Algorithm, JavaScript, ReactJS, SQL, Computer Network are the some computer fundamentals and technical skills where I am confident. Some of the others skills where I am good, are below.
          </p>
          <p align="LEFT">
            <div className='column'>
              <div className='col1'>
                <div className='col'>
                  <h3 className='hc'>Programming</h3>
                  <li>C++</li>
                  <li>Java++</li>
                  <li>Python</li>
                </div>
                <div className='col'>
                  <h3 className='hc'>Communication Languages</h3>
                  <li>English</li>
                  <li>Hindi</li>
                  <li>Bengali</li>
                </div>
              </div>
              <div className='col2'>
                <div className='col'>
                  <h3 className='hc'>Computer Science Fundamentals</h3>
                  <li>Data Structure & Algorithm</li>
                  <li>Operating System</li>
                  <li>DBMS</li>
                  <li>Object-Oriented Programming</li>
                  <li>Computer Network</li>
                </div>
                <div className='col'>
                  <h3 className='hc'>Tools</h3>
                  <li>Git and GitHub</li>
                  <li>VS Code</li>
                </div>
              </div>
              <div className='col3'>
                <h3 className='hc'>Web Developement</h3>
                <div className='column'>
                  <div className='col'>
                    <span className='hc'>Front-End</span>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                  </div>
                  <div className='col'>
                    <span className='hc'>Back-End</span>
                    <li>NodeJS</li>
                    <li>Express</li>
                  </div>
                  <div className='col'>
                    <span className='hc'>Database</span>
                    <li>SQL</li>
                    <li>MongoDB</li>
                  </div>
                </div>
              </div>
            </div>
          </p>
        </div >

        {/* <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div> */}
        <img className='gif' src={GIF}></img>
        <img className='gif1' src={GIF}></img>
        <img className='gif2' src={GIF}></img>
      </div >
      <Loader type="pacman" />
    </>
  )
}

export default Skill