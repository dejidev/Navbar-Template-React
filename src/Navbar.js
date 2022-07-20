import React, {useState, useEffect, useRef} from 'react';
import logo from './logo.svg';
import {links, social} from './data';
import { FaBars} from 'react-icons/fa';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linkContainerRef = useRef(null);
  const linksRef = useRef(null)

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linkContainerRef.current.style.height = `${linksHeight}px`
    } else{
      linkContainerRef.current.style.height = '0px'
    }
  }, [showLinks])


  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="code-addict-logo" />
          <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}><FaBars/></button>
        </div>

        <div className= 'links-container' ref={linkContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const {id, url, text} = link;
              return (
                <li  key={id}>
                  <a href='#'>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>

            <ul className="social-icons">
            {social.map((socials) => {
                const {icon, url, id} = socials;
                return (
                    <li  key={id}>
                        <a href={url}>{icon}</a>
                    </li>
                )
            })}
          </ul>
      </div>
    </nav>
  )
}

export default Navbar
