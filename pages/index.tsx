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
import About from '../components/molecules/Navbar/Sections/About/About'
import Services from '../components/molecules/Navbar/Sections/Services/Services'

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

      {/* Navigation */}
      <Navbar />

      {/* Header */}
      <Hero />

      {/* Services Section */}
      <Section id="services" height={SectionHeightEnum.MIN_CONTENT}>
        <Services />
      </Section>

      {/* Works Section */}
      <Section id="works" height={SectionHeightEnum.FULL_HEIGHT}>
        <Title
          text="Check"
          coloredTitle="some Works"
          color={TitleColorEnum.ORANGE}
          size={TitleSizeEnum.PRIMARY}
        />
      </Section>

      {/* About Section */}
      <Section id="about" height={SectionHeightEnum.MIN_CONTENT}>
        <About />
      </Section>

      {/* Contact Section */}
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
