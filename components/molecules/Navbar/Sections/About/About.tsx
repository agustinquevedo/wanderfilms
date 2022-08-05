import Image from 'next/image'
import Title, {
  TitleColorEnum,
  TitleSizeEnum,
} from '../../../../atoms/Title/Title'
import Agustin from '../../../../../assets/profiles/agustin.jpg'

const About = () => {
  return (
    <>
      <Title
        text="About"
        coloredTitle="the Team"
        color={TitleColorEnum.ORANGE}
        size={TitleSizeEnum.PRIMARY}
      />

      <div className="flex flex-col text-center w-full mb-20">
        <h3 className="lg:w-2/3 mx-auto leading-relaxed font-bold text-3xl">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably havent
          heard of them.
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 mb-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        <a
          href="#"
          className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="w-full h-full relative">
            <Image
              src={Agustin}
              alt="Agustin Quevedo"
              layout={'fill'}
              objectFit={'cover'}
              objectPosition={'top'}
              className="absolute top-0 bottom-0 left-0 right-0 w-full h-full rounded-l-lg"
            />
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </a>
      </div>
    </>
  )
}

export default About
