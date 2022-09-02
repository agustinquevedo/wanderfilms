import Title, {
  TitleColorEnum,
  TitleSizeEnum,
} from '../../../atoms/Title/Title'
import Section, { SectionHeightEnum } from '../../../layout/Section/Section'
import Link from 'next/link'
import Image from 'next/image'
import ServicePhotography from '../../../../assets/images/service-photography.jpg'
import ServiceVideo from '../../../../assets/images/service-video.jpg'

const Works = () => {
  return (
    <Section id="works" height={SectionHeightEnum.MIN_CONTENT}>
      <Title
        text="Our"
        coloredTitle="Work"
        color={TitleColorEnum.ORANGE}
        size={TitleSizeEnum.PRIMARY}
      />
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 mb-20  py-4 md:py-6 lg:py-8 md:grid-cols-2 xl:gap-x-8">
        {/* Works Categories */}
        <Link href="/photos">
          <a>
            <div className="group relative cursor-pointer w-full h-min aspect-[4/5] rounded-2xl bg-gray-400">
              <Image
                alt={'hero image'}
                src={ServicePhotography}
                layout={'fill'}
                objectFit={'cover'}
                priority
                className="z-[2] absolute top-0 bottom-0 left-0 right-0 w-full  rounded-2xl"
              />
              <div className="z-[3] absolute top-0 bottom-0 left-0 right-0 w-full  bg-black opacity-50 group-hover:opacity-70" />
              <div className="z-[4] absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center flex-col text-white text-center">
                <h3 className="text-3xl font-bold mb-4">Photos</h3>
              </div>
            </div>
          </a>
        </Link>
        {/* Works Categories */}
        <Link href="/video">
          <a>
            <div className="group relative cursor-pointer w-full h-min aspect-[4/5] rounded-2xl bg-gray-400">
              <Image
                alt={'hero image'}
                src={ServiceVideo}
                layout={'fill'}
                objectFit={'cover'}
                priority
                className="z-[2] absolute top-0 bottom-0 left-0 right-0 w-full rounded-2xl"
              />
              <div className="z-[3] absolute top-0 bottom-0 left-0 right-0 w-full  bg-black opacity-50 group-hover:opacity-70" />
              <div className="z-[4] absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center flex-col text-white text-3xl font-bold">
                <h3 className="text-3xl font-bold mb-4">Video</h3>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </Section>
  )
}

export default Works
