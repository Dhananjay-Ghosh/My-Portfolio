import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Particle from '../Particles'

const DSA = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
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
      {/* background */}
      <Particle />
      <div className="container coding-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'A', 'c', 'h', 'i', 'v', 'e', 'm', 'e', 'n', 't', 's', '.', '.', '.']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious Competitive Programmer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            <h2>DSA & CP</h2>
            <div className='coding-section'>
              <div className='coding-col'>
                <h2 className='hc'>CodeChef</h2>

              </div>
              <div className='coding-col'>
                <h2 className='hc'>Codeforces</h2>

              </div>
              <div className='coding-col'>
                <h2 className='hc'>LeetCode</h2>

              </div>
              <div className='coding-col'>
                <h2 className='hc'>Geeksforgeeks</h2>

              </div>
            </div>
            <div className='coding-section1'>
              <div className='coding-col'>
                <h2 className='hc'>Code Studio</h2>

              </div>
              <div className='coding-col'>
                <h2 className='hc'>Hackerrank</h2>

              </div>
            </div>
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default DSA