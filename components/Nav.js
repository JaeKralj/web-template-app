import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MdApps, MdExpandMore, MdFavoriteBorder, MdMenu } from 'react-icons/md'

import logo from '../public/logo.svg'

function getWindowsDimensions() {
  const { innerWidth: width } = window
  return { width }
}

export default function Nav() {
  // navbar toggle
  const [showNav, setShowNav] = useState(false)
  const [windowDimensions, setWindowDimensions] = useState()

  useEffect(() => {
    setWindowDimensions(getWindowsDimensions())
    const handleResize = () => {
      setWindowDimensions(getWindowsDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <div className='bg-black shadow-white shadow-lg'>
      <nav className='max-w-[1200px] mx-auto  p-5 flex justify-between items-center flex-wrap'>
        <div className='logo'>
          <Image src={logo} width='50' height='50' />
        </div>
        <div
          className={`navbar-nav flex-1 basis-full md:basis-0 flex flex-wrap order-1 md:order-none ${
            windowDimensions?.width < 768 &&
            !showNav &&
            'max-h-0 overflow-hidden'
          } ${
            windowDimensions?.width < 768 &&
            showNav &&
            'max-h-[1000px] overflow-hidden'
          } transition-all ease-linear duration-500`}
        >
          <ul className='flex justify-center md:flex-row items-center flex-col flex-1 gap-4'>
            <li className='text-white'>
              <div className=' flex items-center gap-1 hover:text-secondary cursor-pointer border-[10px] border-transparent'>
                <MdApps />
                Categories
                <MdExpandMore />
              </div>
            </li>
            <li className='text-white'>
              <Link
                href='/freebies'
                className='hover:text-secondary cursor-pointer border-[10px] border-transparent'
              >
                Freebies
              </Link>
            </li>
            <li className='text-white'>
              <Link
                href='/pricing'
                className=' hover:text-secondary cursor-pointer border-[10px] border-transparent'
              >
                Pricing
              </Link>
            </li>
          </ul>
          <div className='text-white ml-auto basis-full md:basis-auto flex md:flex-row flex-col items-center gap-4'>
            {/* heart icon */}
            <span className='group cursor-pointer border-[10px] border-transparent'>
              <MdFavoriteBorder className='group-hover:fill-secondary' />
            </span>
            <Link href='/cart' className='hover:text-secondary'>
              <span>Cart (0)</span>
            </Link>
            <Link
              href='/login'
              className='border-[10px] border-transparent hover:text-secondary'
            >
              <span>Sign In</span>
            </Link>
          </div>
        </div>
        <div className='toggler text-white mx-3'>
          <Link
            href='/signup'
            className='py-2 px-3 bg-gradient rounded-xl hover:animate-pulse'
          >
            <span>Sign Up</span>
          </Link>
          <button
            className='mx-3'
            aria-roledescription='toggle-navbarvisibility'
            onClick={() => {
              setShowNav(!showNav)
            }}
          >
            <MdMenu className='scale-150' />
          </button>
        </div>
      </nav>
    </div>
  )
}
