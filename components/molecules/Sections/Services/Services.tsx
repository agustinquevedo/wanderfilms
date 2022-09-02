import Title, {
  TitleColorEnum,
  TitleSizeEnum,
} from '../../../atoms/Title/Title'
import Image from 'next/image'
import Section, { SectionHeightEnum } from '../../../layout/Section/Section'
import { services } from '../../../../constants/services'

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
        {services.map((service) => (
          <div key={service.id} className="w-full bg-gray-900 rounded-2xl">
            <div className="w-full h-96 relative">
              <Image
                alt={service.title}
                src={service.image}
                layout={'fill'}
                objectFit={'cover'}
                className="absolute top-0 bottom-0 left-0 right-0 w-full h-full rounded-t-2xl"
              />
            </div>
            <div className="p-6">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                {service.title}
              </h5>
              <p className="font-normal text-gray-400">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Services
