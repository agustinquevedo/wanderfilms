import Title, {
  TitleColorEnum,
  TitleSizeEnum,
} from '../../../atoms/Title/Title'
import Image from 'next/image'

import ServicesImage1 from '../../../../assets/images/example1.webp'
import ServicesImage2 from '../../../../assets/images/example2.webp'
import ServicesImage3 from '../../../../assets/images/example3.webp'
import Section, { SectionHeightEnum } from '../../../layout/Section/Section'
// import { CameraIcon, GlobeAltIcon } from '@heroicons/react/outline'
// import { FilmIcon, HeartIcon } from '@heroicons/react/solid'

// const features = [
//   {
//     name: 'Fancy Title #1',
//     description:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
//     icon: CameraIcon,
//   },
//   {
//     name: 'Fancy Title #2',
//     description:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
//     icon: GlobeAltIcon,
//   },
//   {
//     name: 'Fancy Title #3',
//     description:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
//     icon: FilmIcon,
//   },
//   {
//     name: 'We love what we do',
//     description:
//       'We do our job with love and dedication, and work hard to create high quality content.',
//     icon: HeartIcon,
//   },
// ]

const Services = () => {
  return (
    <Section id="services" height={SectionHeightEnum.MIN_CONTENT}>
      <Title
        text="Check"
        coloredTitle="What We Can Do"
        color={TitleColorEnum.ORANGE}
        size={TitleSizeEnum.PRIMARY}
      />

      <div className="grid grid-cols-1 gap-y-10 gap-x-6 mb-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        <div className="w-full bg-gray-900 rounded-2xl">
          <div className="w-full h-96 relative">
            <Image
              alt={'services image'}
              src={ServicesImage1}
              layout={'fill'}
              objectFit={'cover'}
              className="absolute top-0 bottom-0 left-0 right-0 w-full h-full rounded-t-2xl"
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Video
            </h5>
            <p className="font-normal text-gray-400">
              We work the extra mile from the story telling to planning and
              direction of the story, every detail from the creative concept to
              the execution is worked along with the client to make your brand
              stand out while keeping it truthful to their core values.
            </p>
          </div>
        </div>
        <div className="w-full bg-gray-900 rounded-2xl">
          <div className="w-full h-96 relative">
            <Image
              alt={'services image'}
              src={ServicesImage2}
              layout={'fill'}
              objectFit={'cover'}
              className="absolute top-0 bottom-0 left-0 right-0 w-full h-full rounded-t-2xl"
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Photography
            </h5>
            <p className="font-normal text-gray-400">
              Inspire your audience to take action with unique images that
              create a mood and emotions, and nothing makes a more compelling
              story than emotions.
            </p>
          </div>
        </div>
        <div className="w-full bg-gray-900 rounded-2xl">
          <div className="w-full h-96 relative">
            <Image
              alt={'services image'}
              src={ServicesImage3}
              layout={'fill'}
              objectFit={'cover'}
              className="absolute top-0 bottom-0 left-0 right-0 w-full h-full rounded-t-2xl"
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              FPV
            </h5>
            <p className="font-normal text-gray-400">
              FPV stands for First Person View, but the best was to describe it
              would be like comparing a normal drone as a sport car and FPV as a
              F1 race car. This takes aerial shooting to the next level,
              allowing us to get as close as never before to the action,
              obtaining images that redefine the concept of action filming.
            </p>
          </div>
        </div>
      </div>

      <div className="text-white lg:text-center">
        <p className="mt-2 text-4xl leading-8 font-bold tracking-tight  sm:text-4xl sm:tracking-tight">
          Still Looking for more?
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-white lg:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
      </div>

      {/* <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="relative border-gray-700 border rounded-md p-4"
          >
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 text-white">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-white">
                {feature.name}
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-white">
              {feature.description}
            </dd>
          </div>
        ))}
      </div> */}
    </Section>
  )
}

export default Services
