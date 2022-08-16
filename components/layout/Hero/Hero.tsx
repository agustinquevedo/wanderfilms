import Image from 'next/image'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import HeroImage from '../../../assets/images/hero.webp'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { XIcon } from '@heroicons/react/outline'
import ReactPlayer from 'react-player/lazy'

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <header className="w-full h-screen pt-20 relative">
        <Image
          alt={'hero image'}
          src={HeroImage}
          layout={'fill'}
          objectFit={'cover'}
          priority
          className="z-[2] absolute top-0 bottom-0 left-0 right-0 w-full h-screen"
        />
        {/* Image overlay */}
        <div className="z-[3] absolute top-0 bottom-0 left-0 right-0 w-full h-screen bg-black/70" />
        <div className="z-[4] absolute top-0 bottom-0 left-0 right-0 flex justify-center flex-col">
          <ContentWrapper>
            <div className="flex justify-center items-center text-center flex-col font-bold lg:text-8xl md:text-6xl text-4xl space-y-2">
              <h1 className="text-white pb-10">
                Chasing the dream <br></br>
                <span className="text-transparent lg:text-8xl md:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-[#E72542] to-[#E24336]">
                  Happy Vibes
                </span>
              </h1>
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="text-gray-400 border border-gray-400 animate-pulse hover:animate-none hover:border-white hover:text-white focus:ring-4 focus:outline-none focus:ring-grey-300 rounded-full text-2xl p-3.5 text-center inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="pl-1 w-6 h-6 "
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                <span className="sr-only">Play button</span>
              </button>
            </div>
          </ContentWrapper>
        </div>
        <Transition
          show={isOpen}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          as={Fragment}
        >
          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="z-[6] absolute top-0 right-0 bottom-0 left-0  bg-black"
          >
            <ContentWrapper>
              <Dialog.Panel className="w-full h-screen">
                <div className="flex justify-end pt-6">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
                  >
                    <span className="sr-only">Close modal</span>
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Replace with your content */}
                <div className="flex flex-col justify-center items-center h-full px-4 py-6 sm:px-0">
                  {/* <div className="w-full border-4 border-dashed border-gray-400 rounded-lg h-96" /> */}
                  <ReactPlayer
                    url="https://player.vimeo.com/video/739953731?h=d32672fd06"
                    playing
                    width={'100%'}
                    height={'auto'}
                    config={{
                      vimeo: {
                        playerOptions: {
                          responsive: true,
                          quality: 1080,
                          autoplay: true,
                        },
                      },
                    }}
                  ></ReactPlayer>
                </div>
                {/* /End replace */}
              </Dialog.Panel>
            </ContentWrapper>
          </Dialog>
        </Transition>
      </header>
    </>
  )
}

export default Hero
