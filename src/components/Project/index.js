import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faHackerrank,
  faNode,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const Project = () => {
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
      <div className="container project-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious Full Stack Developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            <div className='project-section'>
              <div className='project-col1'>
                <h2 className='hc'>Front-End Projects</h2>
                <ul>
                  <li>My Portfolio</li>
                  <li>Math Helper</li>
                  <li>Payment Gateway</li>
                </ul>
              </div>
              <div className='project-col2'>
                <h2 className='hc'>Full Stack Projects</h2>
                <ul>
                  <li>Admission Management System</li>
                  <li>Note Sharing App</li>
                  <li>Colaborate Code Editor</li>
                  <li>Automated Job Alerting System</li>
                  <li>Price Tracking from different websites</li>
                </ul>
              </div>
              <div className='project-col2'>
                <h2 className='hc'>Organization Projects</h2>
                <ul>
                  <li>Prayaas India - An initiative by BIT Sindri Students</li>
                </ul>
              </div>
            </div>
          </p>
        </div>

        {/* <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faCode} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHackerrank} color="#000000" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faNode} color="#3C873A" />
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
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Project