import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'

import { experiences } from '../constants'
import SectionWrapper from './hoc/SectionWrapper'
import Heading from './Heading'
import Image from 'next/image'

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fffff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full rounded-full overflow-hidden relative'>
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className='w-full h-full absolute object-cover'
          />
        </div>
      }>
      <div>
        <h3 className='text-white text-2xl font-bold'>{experience.title}</h3>
        <p className='text-secondary text-base font-semibold m-0'>
          {experience.company_name}
        </p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point) => (
          <li
            key={point}
            className='text-white-100 text-sm pl-1 tracking-wider'>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <Heading
        heading='Work Experience.'
        subheading='What I have done so far'
      />
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.company_name} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'experience')
