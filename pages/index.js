import Head from 'next/head'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
import Button from '../components/Button'

import heroImg from '../public/images/hero.png'

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name='keywords'
          content='website templates free website templates templates cool website  templates paid website templates'
        />
        <meta
          name='description'
          content='Carefully thought-out Sketch, Figma, Bootstrap 5 & Adobe XD UI kits that will speed up your workflow. '
        />
      </Head>

      <section id='home' className='bg-black min-h-screen'>
        <div className='mx-auto max-w-[1200px] grid md:grid-cols-[1fr_1fr] grid-cols-[1fr] gap-5 p-5'>
          <div>
            <h1 className='text-white font-clash-display font-bold text-[2rem] md:text-6xl'>
              Creative assets for busy{' '}
              <span className='text-secondary'>designers</span> &{' '}
              <span className='text-secondary'>developers</span>
            </h1>
            <p className='text-white font-generalsans text-lg md:text-xl my-5'>
              Carefully thought-out Sketch, Figma, Bootstrap 5 & Adobe XD UI
              kits that will speed up your workflow.
            </p>
            <Button className='flex items-center justify-center text-white gap-1 font-dmsans font-medium md:text-base text-sm'>
              Browse Templates
              <span>
                <FaArrowRight />
              </span>
            </Button>
          </div>
          <div>
            <div>
              <Image src={heroImg} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
