import Title, {
  TitleColorEnum,
  TitleSizeEnum,
} from '../../../../atoms/Title/Title'
import Image from 'next/image'

import ServicesImage1 from '../../../../../assets/images/example1.webp'
import ServicesImage2 from '../../../../../assets/images/example2.webp'
import ServicesImage3 from '../../../../../assets/images/example3.webp'

const Services = () => {
  return (
    <>
      <Title
        text="Check"
        coloredTitle="What We Can Do"
        color={TitleColorEnum.ORANGE}
        size={TitleSizeEnum.PRIMARY}
      />

      <div className="grid grid-cols-1 gap-y-10 gap-x-6 mb-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        <div className="block max-w-md bg-gray-900 rounded-2xl">
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
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="block max-w-md bg-gray-900 rounded-2xl">
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
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="block max-w-md bg-gray-900 rounded-2xl">
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
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center text-center flex-col  space-y-2">
        <Title
          text="Here is another fancy text to get your attention"
          size={TitleSizeEnum.SECONDARY}
        />
      </div>
    </>
  )
}

export default Services
