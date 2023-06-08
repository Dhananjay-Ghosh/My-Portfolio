import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/logo-s.png'
import FL from '../../assets/images/Fl1.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import MyLogo from '../../assets/images/my_logo1.png'
// import MyLogo from '../../assets/images/filename1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
  faMugSaucer,
  faPhone,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        {/* <img src={LogoS} alt="Logo" /> */}
        <img src={FL} alt="Logo" />
        <img className="sub-logo" src={MyLogo} alt="dhananjay" />
        {/* <img className="sub-logo" src={LogoSubtitle} alt="dhananjay" /> */}
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        {/* <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink> */}
        <NavLink
          activeclassname="active"
          className="skill-link"
          to="/skill"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faWandMagicSparkles} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="project-link"
          to="/project"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faMugSaucer} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="experience-link"
          to="/experience"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/dhananjay-ghosh-01bb98213/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Dhananjay-Ghosh"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="tel:+919334279890"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faPhone}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a href="mailto:dhananjayghosh7778@gmail.com" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faEnvelope}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className='hamburger-icon' />
    </div>
  )
}

export default Sidebar