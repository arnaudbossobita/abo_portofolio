import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import parse from 'html-react-parser'
import {PortableText} from '@portabletext/react'

import {AppWrap, MotionWrap} from '../../wrapper'
import {urlFor, client} from '../../client'
import './About.scss'

const About = () => {
  const [mainProfile, setMainProfile] = useState(null)
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const mainProfileQuery = '*[_type == "abouts" && (isActive == true) && (isMain == true)]'
    const query = '*[_type == "abouts" && (isActive == true) && (isMain != true)] | order(index asc)'

    client.fetch(mainProfileQuery)
      .then((data) => setMainProfile(data[0]))

    client.fetch(query)
      .then((data) => setAbouts(data))
  }, [])
  
  return (
    <>
      <h2 className='head-text'>
        I know that <span>good Apps </span><br />means <span>Good Business</span>
      </h2>

      <div className='app__main-profile'>
        {mainProfile && (          
        <motion.div
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration:0.5, type: 'tween'}}
          className='app__main-profile-item'
        >
          <img src={urlFor(mainProfile?.imgUrl)} alt={mainProfile.title} />
          <h2 className='bold-text' style={{marginTop: 20}}>{mainProfile.title}</h2>
          <div className='app__portableText'>
            <PortableText value={mainProfile.description} />
          </div>
        </motion.div>)}
      </div>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration:0.5, type: 'tween'}}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
            <div className='app__portableText'>
              <PortableText value={about.description} />
            </div>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg')