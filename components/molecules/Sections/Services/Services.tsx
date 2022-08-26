import Title, {
  TitleColorEnum,
  TitleSizeEnum,
} from '../../../atoms/Title/Title'
import Image from 'next/image'

import ServicesImage1 from '../../../../assets/images/example1.webp'
import ServicesImage2 from '../../../../assets/images/example2.webp'
import ServicesImage3 from '../../../../assets/images/example3.webp'
import Section, { SectionHeightEnum } from '../../../layout/Section/Section'
import { CameraIcon, GlobeAltIcon } from '@heroicons/react/outline'
import { FilmIcon, HeartIcon } from '@heroicons/react/solid'

const features = [
  {
    name: 'Fancy Title #1',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CameraIcon,
  },
  {
    name: 'Fancy Title #2',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Fancy Title #3',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: FilmIcon,
  },
  {
    name: 'Fancy Title #4',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: HeartIcon,
  },
]

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
              Services Idea 1
            </h5>
            <p className="font-normal text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
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
              Services Idea 2
            </h5>
            <p className="font-normal text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
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
              Services Idea 3
            </h5>
            <p className="font-normal text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:text-center">
        <p className="mt-2 text-4xl leading-8 font-bold tracking-tight text-white sm:text-4xl sm:tracking-tight">
          We travel so you dont need to
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-white lg:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
      </div>

      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        {features.map((feature) => (
          <div key={feature.name} className="relative">
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
      </div>
    </Section>
  )
}

export default Services
