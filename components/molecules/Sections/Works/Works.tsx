import Title, {
  TitleColorEnum,
  TitleSizeEnum,
} from '../../../atoms/Title/Title'
import Section, { SectionHeightEnum } from '../../../layout/Section/Section'
import Link from 'next/link'

const Works = () => {
  return (
    <Section id="works" height={SectionHeightEnum.FULL_HEIGHT}>
      <Title
        text="Check"
        coloredTitle="some Works"
        color={TitleColorEnum.ORANGE}
        size={TitleSizeEnum.PRIMARY}
      />
      <button className="p-7 text-white">
        <Link href="/photos">Photos</Link>
      </button>
      <button className="p-7 text-white">
        <Link href="/videos">Videos</Link>
      </button>
    </Section>
  )
}

export default Works
