import Image from 'next/image'
import Title, {
  TitleColorEnum,
  TitleSizeEnum,
} from '../../../atoms/Title/Title'
import Agustin from '../../../../assets/profiles/agustin.jpg'
// import Agustin2 from '../../../../assets/profiles/agustin_hover.jpg'
import Marc from '../../../../assets/profiles/marc.jpg'
// import Marc2 from '../../../../assets/profiles/marc_hover.jpg'
import Franco from '../../../../assets/profiles/franco.jpg'
import Section, { SectionHeightEnum } from '../../../layout/Section/Section'
// import Franco2 from '../../../../assets/profiles/franco_hover.jpg'
// import { useRef } from 'react'
// import { useHover } from 'usehooks-ts'

const About = () => {
  // const hoverRef = useRef(null)
  // const isHover = useHover(hoverRef)

  return (
    <Section id="about" height={SectionHeightEnum.MIN_CONTENT}>
      <Title
        text="About"
        coloredTitle="the Team"
        color={TitleColorEnum.ORANGE}
        size={TitleSizeEnum.PRIMARY}
      />

      <div className="grid grid-cols-1 gap-y-10 gap-x-6 mb-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        {/* CARD  */}
        <div className="w-full h-min bg-gray-900 rounded-2xl">
          <Image
            alt={'services image'}
            src={Agustin}
            className="rounded-t-2xl"
          />
          <div className="p-6">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Agustin Quevedo
            </h5>
            <p className="font-normal text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="pt-4">
              <a
                href="#"
                className="text-gray-700 hover:text-white font-medium rounded-lg text-sm  py-2.5 text-center inline-flex items-center mr-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 -ml-1 w-5 h-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                agustin.quevedo
              </a>
            </div>
          </div>
        </div>
        {/* CARD  */}
        <div className="w-full h-min bg-gray-900 rounded-2xl">
          <Image
            alt={'services image'}
            src={Franco}
            className="rounded-t-2xl"
          />
          <div className="p-6">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Franco Salomon
            </h5>
            <p className="font-normal text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="pt-4">
              <a
                href="#"
                className="text-gray-700 hover:text-white font-medium rounded-lg text-sm  py-2.5 text-center inline-flex items-center mr-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 -ml-1 w-5 h-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                shotbyfgs
              </a>
            </div>
          </div>
        </div>
        {/* CARD  */}
        <div className="w-full h-min bg-gray-900 rounded-2xl">
          <Image alt={'services image'} src={Marc} className="rounded-t-2xl" />
          <div className="p-6">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Marc Vilalta
            </h5>
            <p className="font-normal text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="pt-4">
              <a
                href="#"
                className="text-gray-700 hover:text-white font-medium rounded-lg text-sm  py-2.5 text-center inline-flex items-center mr-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 -ml-1 w-5 h-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                marcvilalta
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About
