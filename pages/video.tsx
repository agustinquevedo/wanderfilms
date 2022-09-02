import ContentWrapper from '../components/layout/ContentWrapper/ContentWrapper'
import Link from 'next/link'
import ReactPlayer from 'react-player/vimeo'

const Video = () => {
  return (
    <ContentWrapper>
      <div className="py-4 md:py-6 lg:py-8">
        <a className="text-gray-400 hover:text-white cursor-pointer">
          <Link href="/" scroll={false}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 -ml-1 w-12 h-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </Link>
        </a>
      </div>
      <h1 className="text-white pb-10 font-bold lg:text-8xl md:text-6xl text-4xl">
        We do<br></br>
        <span className="text-transparent lg:text-8xl md:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-[#E72542] to-[#E24336]">
          Video
        </span>
      </h1>
      <div className=" grid grid-cols-1 gap-y-10 gap-x-6 mb-20 md:grid-cols-2 py-4 md:py-6 lg:py-8 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        <div className="w-full bg-gray-900 pt-8 rounded-2xl">
          <div className="w-full relative aspect-video">
            <ReactPlayer
              url="https://player.vimeo.com/video/739990314"
              playing
              width={'100%'}
              height={'100%'}
              config={{
                title: 'Presentation',
                playerOptions: {
                  responsive: true,
                  quality: 1080,
                  id: false,
                  autoplay: false,
                },
              }}
              className="absolute top-0 left-0"
            />
          </div>
          <div className="relative p-8">
            <h3 className="text-white">Description</h3>
          </div>
        </div>
      </div>
    </ContentWrapper>
  )
}

export default Video
