import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import clsx from 'clsx'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-30 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-4'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}>
          <img src={logo} alt='logo' className='w-8 h-8 object-contain' />
          <p className='text-white text-lg font-medium cursor-pointer border-l-2 pl-4 hidden xxs:block'>
            Victor Lantigua
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={clsx(
                'hover:text-white text-lg font-medium cursor-pointer',
                {
                  'text-white': link.title === active,
                  'text-secondary': link.title !== active,
                }
              )}
              onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={clsx(
              'p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl',
              {
                hidden: !toggle,
                flex: toggle,
              }
            )}>
            <ul className='list-none flex flex-col gap-4 items-start justify-end'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={clsx(
                    'font-poppins font-medium cursor-pointer text-base',
                    {
                      'text-white': link.title === active,
                      'text-secondary': link.title !== active,
                    }
                  )}
                  onClick={() => {
                    setActive(link.title)
                    setToggle(!toggle)
                  }}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
