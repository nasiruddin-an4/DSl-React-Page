import Logo from '../assets/white-logo-dsl.png'
import {navItems} from '../constants'
import { ArrowDownRight } from 'lucide-react';
import { Menu, X} from 'lucide-react'
import { useState } from 'react';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState (false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
      <div className='container mx-auto relative text-sm px-5 lg:px-0'>
        <div className='flex justify-between items-center'>
            {/* Nav Logo */}
            <div>
              <img src={Logo} alt="DSL Logo" />
            </div>
            {/* NavMenu */}
            <div>
              <ul className='hidden lg:flex space-x-6'>
                {
                  navItems.map((item, index) => (
                    <li key={index} >
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
            {/* Button */}
            <div className='hidden lg:flex'>
              <a href="#" className='flex'>Let's Connect <ArrowDownRight /></a>
            </div>
            {/* Mobile Menubar */}
            <div className='lg:hidden md:flex flex-col justify-end'>
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X size="32" /> : <Menu size="32" />}
              </button>
            </div>
        </div>

        {/* Mobile Navbar */}
        {
          mobileDrawerOpen && (
            <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                <ul>
                  {
                    navItems.map((item, index) => (
                      <li key={index} className='py-4'>
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))
                  }
                </ul>
                <div>
                  <a href="#" className='flex'>Let's Connect <ArrowDownRight /></a>
                </div>
            </div>
          )
        }
      </div>

    </nav>
  )
}

export default Navbar