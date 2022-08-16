import Title, {
  TitleColorEnum,
  TitleSizeEnum,
} from '../../../atoms/Title/Title'
import Section, { SectionHeightEnum } from '../../../layout/Section/Section'
// import Image from 'next/image'

const Works = () => {
  return (
    <Section id="works" height={SectionHeightEnum.FULL_HEIGHT}>
      <Title
        text="Check"
        coloredTitle="some Works"
        color={TitleColorEnum.ORANGE}
        size={TitleSizeEnum.PRIMARY}
      />
    </Section>
  )
}

export default Works
