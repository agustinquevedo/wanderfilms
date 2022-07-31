import Image from 'next/image'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import HeroImage from '../../../assets/images/hero.webp'

const Hero = () => {
  return (
    <div className="w-full h-screen pt-20 relative">
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
      <ContentWrapper>
        <div className="flex z-[4] absolute top-0 bottom-0 left-0 right-0 justify-center items-center flex-col  text-center font-bold lg:text-8xl md:text-6xl text-4xl space-y-2">
          <h1 className=" pb-10">
            Chasing the dream <br></br>
            <span className="text-transparent lg:text-8xl md:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-[#E72542] to-[#E24336]">
              Happy Vibes
            </span>
          </h1>
          <div className="flex justify-center items-center cursor-pointer hover:shadow-lg  text-3xl font-semibold text-white bg-gray-900 rounded-lg w-64 h-16">
            <h1 className="text-center">Call to action</h1>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default Hero
