import { motion } from 'framer-motion'

import { styles } from '../styles'
import SectionWrapper from './hoc/SectionWrapper'
import { fadeIn } from '../utils/motion'
import { testimonials } from '../constants'
import Heading from './Heading'

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
      className='bg-black-200 flex flex-col p-10 rounded-3xl w-full'>
      <p className='text-white font-black text-5xl'>"</p>
      <div className='mt-1 flex flex-col justify-between flex-1'>
        <p className='text-white tracking-wider text-lg'>{testimonial}</p>
        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-base'>
              <span className='blue-text-gradient'>@</span> {name}
            </p>
            <p className='mt-1 text-secondary text-xs'>
              {designation} at {company}
            </p>
          </div>

          <img
            src={image}
            alt={`Feedback by ${name}`}
            className='w-10 h-10 rounded-full object-cover'
          />
        </div>
      </div>
    </motion.div>
  )
}

const Feedbacks = () => {
  return (
    <div className='bg-black-100 rounded-[20px]'>
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <Heading heading='Testimonials.' subheading='What others say' />
      </div>
      <div
        className={`${styles.paddingX} -mt-36 sm:-mt-20 pb-14 grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, '')
