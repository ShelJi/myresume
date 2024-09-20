import { useState } from 'react';
import './Navbar.css'
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-scroll"
import { MdDarkMode } from "react-icons/md";
import { PiMonitorFill } from "react-icons/pi";
import { MdLightMode } from "react-icons/md";
import SystemTheme from '../SystemTheme';

const Navbar = () => {

  const {theme, defaultTheme, darkTheme, lightTheme} = SystemTheme();

  const [isActive, setActive] = useState(false)

  const navToggle = () => {
    setActive(!isActive)
  }

  return (
    <nav>
      <div className={`navbar ${isActive ? "navactive" : ""}`}>

        <div className='logo'>
          <div className={`default ${theme==='default' ? "theme" : "" }`} onClick={defaultTheme}>
            <PiMonitorFill />
          </div>
          <div className={`dark ${theme==='dark' ? "theme" : "" }`} onClick={darkTheme}>
            <MdDarkMode />
          </div>
          <div className={`light ${theme==='light' ? "theme" : "" }`} onClick={lightTheme}>
            <MdLightMode />
          </div>
        </div>

        <ul className={`nav-menu`}>

          <li>
            <Link activeClass="active"
              to="hero"
              spy={true}
              smooth='easeOutCubic'
              delay={200}
              hashSpy={true}
              offset={50}
              duration={1700}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >Home</Link>
          </li>

          <li>
            <Link activeClass="active"
              to="about"
              spy={true}
              smooth='easeOutCubic'
              delay={200}
              hashSpy={true}
              offset={-90}
              duration={1700}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >About</Link>
          </li>

          <li>
            <Link activeClass="active"
              to="projects"
              spy={true}
              smooth='easeOutCubic'
              delay={200}
              hashSpy={true}
              offset={-50}
              duration={1700}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >Robtics</Link>
          </li>

          <li>
            <Link activeClass="active"
              to="FSproject"
              spy={true}
              smooth='easeOutCubic'
              delay={200}
              hashSpy={true}
              offset={-50}
              duration={1700}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >WEB</Link>
          </li>

        </ul>
        <div className="nav-connect">
          <Link
            to="connect"
            spy={true}
            smooth='easeOutCubic'
            delay={200}
            hashSpy={true}
            offset={-75}
            duration={1700}
            isDynamic={true}
            ignoreCancelEvents={false}
            spyThrottle={500}
          >Contact Me</Link></div>
        <div className={`nav-responsive-toggle ${isActive ? "toggle" : ""}`} onClick={navToggle}><FaBarsStaggered /></div>
      </div>

      <div className="nav-responsive">
        <ul className={`nav-responsive-content ${isActive ? "active" : ""}`}>

          <li>
            <Link activeClass="active"
              to="hero"
              spy={true}
              smooth='easeOutCubic'
              delay={200}
              hashSpy={true}
              offset={0}
              duration={1700}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >Home</Link>
          </li>

          <li>
            <Link activeClass="active"
              to="about"
              spy={true}
              smooth='easeOutCubic'
              delay={200}
              hashSpy={true}
              offset={-130}
              duration={1700}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >About</Link>
          </li>

          <li>
            <Link activeClass="active"
              to="projects"
              spy={true}
              smooth='easeOutCubic'
              delay={200}
              hashSpy={true}
              offset={-100}
              duration={1700}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >Robtics</Link>
          </li>

          <li>
            <Link activeClass="active"
              to="FSproject"
              spy={true}
              smooth='easeOutCubic'
              delay={200}
              hashSpy={true}
              offset={-85}
              duration={1700}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >WEB</Link>
          </li>

          <div className="nav-connect">
            <Link
              to="connect"
              spy={true}
              smooth='easeOutCubic'
              delay={200}
              hashSpy={true}
              offset={-130}
              duration={1700}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >Connect</Link></div>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar