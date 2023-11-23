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

const Experience = () => {
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
      <div className="container about-page experience-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ' , 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e', 's']}
              idx={15}
            />
          </h1>
          <p>
          <div className='exp'>
            <h2>Prayaas India</h2>
            <span>April 2021 - present</span>
            <p>A volunteer of Prayaas India. Prayaas India is an NGO run BIT Sindri students. We give free and high quality education to the children of Sindri, near BIT Sindri Campus.</p>
          </div>
          </p>
        </div>

        <div className="stage-cube-cont">
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
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Experience