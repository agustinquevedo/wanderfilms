import type { NextPage } from 'next'
import Head from 'next/head'
import Title, {
  TitleColorEnum,
  TitleSizeEnum,
} from '../components/atoms/Title/Title'
import Hero from '../components/layout/Hero/Hero'
import Section, {
  SectionHeightEnum,
} from '../components/layout/Section/Section'
import Navbar from '../components/molecules/Navbar/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Traveling to Create</title>
        <meta
          name="description"
          content="Filmmaking and Photography while Traveling the world"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Section id="about" height={SectionHeightEnum.FULL_HEIGHT}>
        <Title
          text="About"
          coloredTitle="the Team"
          color={TitleColorEnum.ORANGE}
          size={TitleSizeEnum.PRIMARY}
        />
      </Section>
      <Section id="works" height={SectionHeightEnum.FULL_HEIGHT}>
        <Title
          text="Check"
          coloredTitle="some Works"
          color={TitleColorEnum.ORANGE}
          size={TitleSizeEnum.PRIMARY}
        />
      </Section>
      <Section id="services" height={SectionHeightEnum.FULL_HEIGHT}>
        <Title
          text="Check"
          coloredTitle="What We Can Do"
          color={TitleColorEnum.ORANGE}
          size={TitleSizeEnum.PRIMARY}
        />
      </Section>
      <Section id="contact" height={SectionHeightEnum.FULL_HEIGHT}>
        <Title
          text="So tell us about"
          coloredTitle="your project."
          color={TitleColorEnum.ORANGE}
          size={TitleSizeEnum.PRIMARY}
        />
      </Section>
    </div>
  )
}

export default Home
