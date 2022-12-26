import React, {useState} from 'react'
import {HiMenu, HiX } from 'react-icons/hi'
import {motion} from 'framer-motion'

import './NavBar.scss'
import {images} from '../../constants'

const NavBar = () => {
  const [toggle, settToggle] = useState(false)

  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src={images.logo} alt="logo" />
        </div>
        <ul className='app__navbar-links'>
          {['home', 'about', 'work', 'skills', 'Testimonial', 'contact'].map((item) => (
            <li className='app__flex p-text' key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>

        <div className='app__navbar-menu'>
            <HiMenu onClick={() => settToggle(true)} />

            {toggle && (
              <motion.div
                whileInView={{x: [300, 0]}}
                transition={{duration: 0.85, ease: 'easeOut'}}>

                  <HiX onClick={() => settToggle(false)}/>
                  <ul>
                    {['home', 'about', 'work', 'skills', 'Testimonial', 'contact'].map((item) => (
                      <li key={item}>
                        <a href={`#${item}`} onClick={() => settToggle(false)}>{item}</a>
                      </li>
                    ))}
                  </ul>
              </motion.div>
            )}
        </div>
    </nav>
  )
}

export default NavBar