import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { open } from '../assets'
import SectionWrapper from './hoc/SectionWrapper'
import { projects } from '../constants'
import { fadeIn } from '../utils/motion'
import Heading from './Heading'

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.25, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className='bg-tertiary p-5 rounded-2xl w-full h-full flex flex-col'>
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <a
              className='black-gradient w-10 h-10 rounded full flex justify-center items-center cursor pointer'
              href={source_code_link}
              target='_blank'
              rel='noreferrer'>
              <img
                src={open}
                alt='Open'
                className='w-2/3 h-2/3 object-contain'
              />
            </a>
          </div>
        </div>

        <div className='flex flex-col justify-between flex-1'>
          <div className='mt-5'>
            <h3 className='text-white font-bold text-2xl'>{name}</h3>
            <p className='mt-2 text-secondary text-sm'>{description}</p>
          </div>
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p key={tag.name} className={`text-sm ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <Heading heading='Projects.' subheading='My work' />
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-lg max-w-3xl leading-7'>
          The projects presented below demonstrate my proficiency and expertise
          through tangible instances of my work in real-world scenarios. This
          compilation underscores my capacity to address intricate challenges,
          collaborate with diverse technologies, and adeptly oversee project
          endeavors.
        </motion.p>
      </div>
      <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 grid-a'>
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'work')
