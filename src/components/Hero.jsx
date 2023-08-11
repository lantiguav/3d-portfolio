import { motion } from 'framer-motion'

import { styles } from '../styles'
import { victor } from '../assets'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto max-w-7xl overflow-hidden '>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-violet' />
          <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-violet'>Victor</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-white-100`}>
            I create awesome web applications.
          </p>
        </div>
      </div>
      <div className='absolute top-80 xxs:top-60 lg:top-28 flex justify-center w-full lg:justify-end max-w-6xl'>
          <img className='w-[27rem] lg:w-[35rem]' src={victor} alt="Photo of Victor Lantigua sitting" />
      </div>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20'>
        <a href='#about' aria-label='Go to about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
      {/* <div className=' absolute top-0 left-0 right-0 bottom-0 opacity-0 z-10'></div> */}
    </section>
  )
}

export default Hero
