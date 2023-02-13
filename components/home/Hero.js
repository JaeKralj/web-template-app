import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import Button from '../Button'

import heroImg from '../../public/images/hero.png'
import CustomFragment from '../CustomFragment'

export default function Hero() {
  return (
    <section id='hero' className='bg-black'>
      <CustomFragment>
        <div className='grid md:grid-cols-[1fr_1fr] grid-cols-[1fr] gap-5 mt-5'>
          <div>
            <h1 className='text-white  font-clash-display font-bold text-[2rem] md:text-6xl'>
              Creative assets for busy
              <span className='text-secondary'> designers</span> &{' '}
              <span className='text-secondary'>developers</span>
            </h1>
            <p className='text-white font-generalsans text-lg md:text-xl my-5'>
              Carefully thought-out Sketch, Figma, Bootstrap 5 & Adobe XD UI
              kits that will speed up your workflow.
            </p>
            <Link
              href='/templates'
              className='border-[10px] border-l-0 border-transparent block max-w-max'
            >
              <Button className='flex items-center justify-center text-white gap-1 font-dmsans font-medium md:text-base text-sm bg-gradient'>
                Browse Templates
                <span>
                  <FaArrowRight />
                </span>
              </Button>
            </Link>
          </div>
          <div>
            <div>
              <Image src={heroImg} alt='hero image' />
            </div>
          </div>
        </div>
      </CustomFragment>
    </section>
  )
}
