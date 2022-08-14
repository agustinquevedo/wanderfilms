import Image from 'next/image'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import HeroImage from '../../../assets/images/hero.webp'

const Hero = () => {
  return (
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
    </header>
  )
}

export default Hero
