import Image from 'next/image'
import Link from 'next/link'
import CustomFragment from '../CustomFragment'

import emailTemplate from '../../public/images/email.png'
import gsapTemplate from '../../public/images/gsap.png'
import webTemplate from '../../public/images/web.png'
import wordpressTemplate from '../../public/images/wordpress.png'
import Card from '../Card'

export default function Categories() {
  return (
    <section id='catgories' className='bg-white'>
      <CustomFragment>
        <h3 className='font-bold font-clash-display md:text-5xl text-2xl text-center text-[#000000] my-5'>
          <p>Browse our best</p>
          <p>
            <span className='text-violet'>templates</span> under
          </p>
          <p>categories</p>
        </h3>
        <div className='flex flex-wrap justify-between my-5 gap-5'>
          <Card className='flex max-w-[34.375rem] bg-violet-100 px-0 py-0 justify-between'>
            <div className='p-5 basis-1/2 flex flex-col justify-between items-start'>
              <div>
                <h4 className='font-clash-display font-bold md:text-3xl text-xl text-black'>
                  Wordpress Themes
                </h4>
                <p className='md:text-xs text-[.625rem] text-black font-generalsans'>
                  Browse our huge collection of WordPress theme. Explore our
                  modern, fast loading and good use experienced themes.
                </p>
              </div>
              <Link
                href='/wordpress-templates'
                className='font-medium md:text-base text-xs text-[#000000] border-b border-[#000000] py-2 hover:border-violet hover:text-violet'
              >
                View More
              </Link>
            </div>
            <div className='basis-2/5'>
              <Image src={wordpressTemplate} className='w-full h-full' />
            </div>
          </Card>
          <Card className='flex max-w-[34.375rem] bg-violet-100 px-0 py-0 justify-between'>
            <div className='p-5 basis-1/2 flex flex-col justify-between items-start'>
              <div>
                <h4 className='font-clash-display font-bold md:text-3xl text-xl text-black'>
                  Web Templates
                </h4>
                <p className='md:text-xs text-[.625rem] text-black font-generalsans'>
                  Browse our huge collection of WordPress theme. Explore our
                  modern, fast loading and good use experienced themes.
                </p>
              </div>
              <Link
                href='/wordpress-templates'
                className='font-medium md:text-base text-xs text-[#000000] border-b border-[#000000] py-2 hover:border-violet hover:text-violet'
              >
                View More
              </Link>
            </div>
            <div className='basis-2/5'>
              <Image src={webTemplate} className='w-full h-full' />
            </div>
          </Card>
          <Card className='flex max-w-[34.375rem] bg-violet-100 px-0 py-0 justify-between'>
            <div className='p-5 basis-1/2 flex flex-col justify-between items-start'>
              <div>
                <h4 className='font-clash-display font-bold md:text-3xl text-xl text-black'>
                  Email Templates
                </h4>
                <p className='md:text-xs text-[.625rem] text-black font-generalsans'>
                  Browse our huge collection of WordPress theme. Explore our
                  modern, fast loading and good use experienced themes.
                </p>
              </div>
              <Link
                href='/wordpress-templates'
                className='font-medium md:text-base text-xs text-[#000000] border-b border-[#000000] py-2 hover:border-violet hover:text-violet'
              >
                View More
              </Link>
            </div>
            <div className='basis-2/5'>
              <Image src={emailTemplate} className='w-full h-full' />
            </div>
          </Card>
          <Card className='flex max-w-[34.375rem] bg-violet-100 px-0 py-0 justify-between'>
            <div className='p-5 basis-1/2 flex flex-col justify-between items-start'>
              <div>
                <h4 className='font-clash-display font-bold md:text-3xl text-xl text-black'>
                  Gsap Templates
                </h4>
                <p className='md:text-xs text-[.625rem] text-black font-generalsans'>
                  Browse our huge collection of WordPress theme. Explore our
                  modern, fast loading and good use experienced themes.
                </p>
              </div>
              <Link
                href='/wordpress-templates'
                className='font-medium md:text-base text-xs text-[#000000] border-b border-[#000000] py-2 hover:border-violet hover:text-violet'
              >
                View More
              </Link>
            </div>
            <div className='basis-2/5'>
              <Image src={gsapTemplate} className='w-full h-full' />
            </div>
          </Card>
        </div>
      </CustomFragment>
    </section>
  )
}
