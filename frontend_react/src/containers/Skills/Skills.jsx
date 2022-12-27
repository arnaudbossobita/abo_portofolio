import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import ReactTooltip from 'react-tooltip'
import dateFormat, { masks } from 'dateformat'

import {AppWrap, MotionWrap} from '../../wrapper'
import {urlFor, client} from '../../client'
import './Skills.scss'

const Skills = () => {
  const [experiences, setExperiences] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const experiencesQuery = '*[_type == "experiences" && (isActive == true)] | order(start desc) | order(end desc)'
    const skillsQuery = '*[_type == "skills" && (isActive == true)] | order(name asc)'

    client.fetch(experiencesQuery)
      .then((data) => {
        setExperiences(data)
      })

      client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data)
      })
  }, [])

  return (
    <>
      <h2 className='head-text'>Skill & Experience</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills?.map((skill, index) => (
            <motion.div
              whileInView={{opacity: [0, 1]}}
              transition={{duration: 0.5}}
              className='app__skills-item app__flex'
              key={index}
            >
              <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className='app__skills-exp'>
          {experiences?.map((experience) => (
            <motion.div
              className='app__skills-exp-item'
              key={experience.year}
            >
              <div className='app__skills-exp-year'>
                {/* <p className='bold-text'>{experience.year}</p> */}
                <p className='bold-text'>{dateFormat(experience.start, 'mm/yyyy') + ' - ' + (experience.isCurrent ? 'Present' : dateFormat(experience.end, 'mm/yyyy'))}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                {experience?.works?.map((work, index) => (
                  <div key={index}>
                    <motion.div
                      whileInView={{opacity: [0, 1]}}
                      transition={{duration: 0.5}}
                      className='app__skills-exp-work'
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    {work.desc && (
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                    {work.desc}
                  </ReactTooltip>)}
                </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg')