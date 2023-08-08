import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { services } from '../constants'
import { fadeIn } from '../utils/motion'
import SectionWrapper from './hoc/SectionWrapper'
import Heading from './Heading'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card h-full'>
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className='bg-tertiary rounded-[20px] py-5 px-6 sm:px-12 min-h-[140px] sm:min-h-[280px] flex justify-evenly items-center flex-col h-full'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-xl font-bold text-center mt-2'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <Heading heading='Overview.' subheading='Introductions' />
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-lg max-w-3xl leading-7'>
        I'm a skilled software engineer with over 5 years of experience. My
        expertise encompasses frameworks and libraries like React, Alpine.js,
        Tailwind CSS, and Laravel.
      </motion.p>

      <div className='mt-20 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 md:gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
