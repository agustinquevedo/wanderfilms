// import Image from 'next/image'
import ContentWrapper from '../../layout/ContentWrapper/ContentWrapper'
// import HeroImage from '../../../assets/images/hero.webp'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { XIcon } from '@heroicons/react/outline'
import { PlayIcon } from '@heroicons/react/solid'
import ReactPlayer from 'react-player/vimeo'

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [opacity, setOpacity] = useState('opacity-1')

  useEffect(() => {
    const pageTitle = () => {
      if (window.scrollY >= 330) {
        setOpacity('opacity-0 scale-75 -translate-x-52 -translate-y-42')
      } else {
        setOpacity('opacity-1 scale-100 translate-x-0 translate-y-0')
      }
    }
    window.addEventListener('scroll', pageTitle)
  }, [])

  return (
    <>
      <header className="w-full h-screen pt-20 relative">
        <video
          id="background-video"
          playsInline
          loop
          autoPlay
          muted
          className="z-[2] block absolute top-0 bottom-0 left-0 right-0 w-full h-screen object-cover"
        >
          <source src={'/video/hero-loop.mp4'} type="video/mp4" />
        </video>
        {/* 
        //
        TODO: Add logic to show an image if the video is not loading.
        //
        <Image
          alt={'hero image'}
          src={HeroImage}
          layout={'fill'}
          objectFit={'cover'}
          priority
          className="z-[2] absolute top-0 bottom-0 left-0 right-0 w-full h-screen"
        /> */}
        {/* Image Video overlay */}
        <div className="z-[3] absolute top-0 bottom-0 left-0 right-0 w-full h-screen bg-gradient-to-t from-black via-black/75 to-black/50" />
        <div className="z-[4] absolute top-0 bottom-0 left-0 right-0 flex justify-center flex-col">
          <ContentWrapper>
            <div className="flex justify-center items-center space-y-2">
              <h1
                className={`text-white text-center flex-col font-bold lg:text-9xl md:text-7xl text-5xl pb-10 ${opacity} transition-all ease-in duration-300`}
              >
                Wander Films <br />
                <span className="text-transparent  lg:text-8xl md:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-[#E72542] to-[#E24336]">
                  Chasing the Dream
                </span>
              </h1>
            </div>
            <div className="flex justify-center items-center text-center flex-col font-bold mt-8 lg:text-8xl md:text-6xl text-4xl space-y-2">
              <a
                onClick={() => setIsOpen(true)}
                className="cursor-pointer text-gray-400 hover:text-white  focus:outline-none  rounded-full "
              >
                <PlayIcon className="w-20 h-20" />
                <span className="sr-only">Play button</span>
              </a>
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
            className="z-[6] block absolute top-0 right-0 bottom-0 left-0 w-full h-screen bg-black overflow-hidden"
          >
            <ContentWrapper className="h-full flex flex-col justify-center">
              <Dialog.Panel>
                <Dialog.Title className=" mb-4 md:mb-8">
                  <a
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white cursor-pointer focus:outline-none"
                  >
                    <span className="sr-only">Close modal</span>
                    <XIcon
                      className="w-10 h-10 md:w-20 md:h-20 ml-auto"
                      aria-hidden="true"
                    />
                  </a>
                </Dialog.Title>

                <div className="relative pt-[56.25%] aspect-video">
                  <ReactPlayer
                    url="https://player.vimeo.com/video/739990314"
                    playing
                    width={'100%'}
                    height={'100%'}
                    config={{
                      title: 'Wander films',
                      playerOptions: {
                        responsive: true,
                        quality: 1080,
                        id: false,
                        autoplay: true,
                      },
                    }}
                    className="absolute top-0 left-0"
                  ></ReactPlayer>
                </div>
              </Dialog.Panel>
            </ContentWrapper>
          </Dialog>
        </Transition>
      </header>
    </>
  )
}

export default Hero
