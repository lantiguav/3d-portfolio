'use client'
import { ToastContainer } from 'react-toastify'
import { Analytics } from '@vercel/analytics/react'

import 'react-toastify/dist/ReactToastify.css'

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
  ChatWidget
} from '../components'

const App = () => {
  return (
    <>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <main>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Hero />
          </div>
          <About />
          <Experience />
          <Works />
          <Feedbacks />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </main>
      </div>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <ChatWidget />
      <Analytics />
    </>
  )
}

export default App
