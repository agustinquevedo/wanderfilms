import Title, {
  TitleColorEnum,
  TitleSizeEnum,
} from '../../../atoms/Title/Title'
import Section, { SectionHeightEnum } from '../../../layout/Section/Section'

const Contact = () => {
  return (
    <Section id="contact" height={SectionHeightEnum.FULL_HEIGHT}>
      <Title
        text="So tell us about"
        coloredTitle="your project."
        color={TitleColorEnum.ORANGE}
        size={TitleSizeEnum.PRIMARY}
      />
    </Section>
  )
}

export default Contact
