import Image from 'next/image'

import Avatar from '../../public/images/Avatar.png'
import Card from '../Card'
import CustomFragment from '../CustomFragment'

export default function Updates() {
  return (
    <section id='updates' className='bg-black'>
      <Card className='bg-black-100 rounded-b-none p-0 rounded-3xl'>
        <CustomFragment>
          <h1 className='text-white'>Latest Updates</h1>
          <div className='flex flex-wrap gap-5 my-3 justify-center'>
            <Card className='flex border border-white items-center gap-2 hover:border-violet group cursor-pointer'>
              <div className='rounded-full w-8 aspect-square'>
                <Image
                  src={Avatar}
                  alt='avatar'
                  className='rounded-full w-full aspect-square'
                />
              </div>
              <div className='text-white group-hover:text-violet'>
                <p className='font-clash-display font-bold md:text-base text-sm'>
                  Fastra - WordPress Theme for SEO
                </p>
                <p className='text-[.5rem] md:text-xs font-light text-white-100 group-hover:text-violet'>
                  <span className='font-generalsans text-[#9C9C9C] font-normal'>
                    by
                  </span>{' '}
                  Uiinterfaces
                </p>
              </div>
            </Card>
            <Card className='flex border border-white items-center gap-2 hover:border-violet group cursor-pointer'>
              <div className='rounded-full w-8 aspect-square'>
                <Image
                  src={Avatar}
                  alt='avatar'
                  className='rounded-full w-full aspect-square'
                />
              </div>
              <div className='text-white group-hover:text-violet'>
                <p className='font-clash-display font-bold md:text-base text-sm'>
                  Fastra - WordPress Theme for SEO
                </p>
                <p className='text-[.5rem] md:text-xs font-light text-white-100 group-hover:text-violet'>
                  <span className='font-generalsans text-[#9C9C9C] font-normal'>
                    by
                  </span>{' '}
                  Uiinterfaces
                </p>
              </div>
            </Card>
            <Card className='flex border border-white items-center gap-2 hover:border-violet group cursor-pointer'>
              <div className='rounded-full w-8 aspect-square'>
                <Image
                  src={Avatar}
                  alt='avatar'
                  className='rounded-full w-full aspect-square'
                />
              </div>
              <div className='text-white group-hover:text-violet'>
                <p className='font-clash-display font-bold md:text-base text-sm'>
                  Fastra - WordPress Theme for SEO
                </p>
                <p className='text-[.5rem] md:text-xs font-light text-white-100 group-hover:text-violet'>
                  <span className='font-generalsans text-[#9C9C9C] font-normal'>
                    by
                  </span>{' '}
                  Uiinterfaces
                </p>
              </div>
            </Card>
            <Card className='flex border border-white items-center gap-2 hover:border-violet group cursor-pointer'>
              <div className='rounded-full w-8 aspect-square'>
                <Image
                  src={Avatar}
                  alt='avatar'
                  className='rounded-full w-full aspect-square'
                />
              </div>
              <div className='text-white group-hover:text-violet'>
                <p className='font-clash-display font-bold md:text-base text-sm'>
                  Fastra - WordPress Theme for SEO
                </p>
                <p className='text-[.5rem] md:text-xs font-light text-white-100 group-hover:text-violet'>
                  <span className='font-generalsans text-[#9C9C9C] font-normal'>
                    by
                  </span>{' '}
                  Uiinterfaces
                </p>
              </div>
            </Card>
            <Card className='flex border border-white items-center gap-2 hover:border-violet group cursor-pointer'>
              <div className='rounded-full w-8 aspect-square'>
                <Image
                  src={Avatar}
                  alt='avatar'
                  className='rounded-full w-full aspect-square'
                />
              </div>
              <div className='text-white group-hover:text-violet'>
                <p className='font-clash-display font-bold md:text-base text-sm'>
                  Fastra - WordPress Theme for SEO
                </p>
                <p className='text-[.5rem] md:text-xs font-light text-white-100 group-hover:text-violet'>
                  <span className='font-generalsans text-[#9C9C9C] font-normal'>
                    by
                  </span>{' '}
                  Uiinterfaces
                </p>
              </div>
            </Card>
            <Card className='flex border border-white items-center gap-2 hover:border-violet group cursor-pointer'>
              <div className='rounded-full w-8 aspect-square'>
                <Image
                  src={Avatar}
                  alt='avatar'
                  className='rounded-full w-full aspect-square'
                />
              </div>
              <div className='text-white group-hover:text-violet'>
                <p className='font-clash-display font-bold md:text-base text-sm'>
                  Fastra - WordPress Theme for SEO
                </p>
                <p className='text-[.5rem] md:text-xs font-light text-white-100 group-hover:text-violet'>
                  <span className='font-generalsans text-[#9C9C9C] font-normal'>
                    by
                  </span>{' '}
                  Uiinterfaces
                </p>
              </div>
            </Card>
          </div>
        </CustomFragment>
      </Card>
    </section>
  )
}
