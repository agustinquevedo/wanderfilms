import ContentWrapper from '../ContentWrapper/ContentWrapper'

const Hero = () => {
  return (
    <div className="h-screen pt-20">
      <ContentWrapper>
        <div className="flex justify-center items-center flex-col pt-40 text-center font-bold lg:text-8xl text-6xl space-y-2">
          <h1 className="text-gray-900 pb-10">
            Chasing the dream <br></br>
            <span className="text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[#E72542] to-[#E24336]">
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
