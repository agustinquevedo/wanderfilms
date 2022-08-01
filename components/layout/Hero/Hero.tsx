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
            <h1 className="pb-10">
              Chasing the dream <br></br>
              <span className="text-transparent lg:text-8xl md:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-[#E72542] to-[#E24336]">
                Happy Vibes
              </span>
            </h1>
            <button
              type="button"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-3.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              Call to action
            </button>
          </div>
        </ContentWrapper>
      </div>
    </header>
  )
}

export default Hero
