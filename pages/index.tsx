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
import About from '../components/molecules/Sections/About/About'
import Contact from '../components/molecules/Sections/Contact/Contact'
import Services from '../components/molecules/Sections/Services/Services'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Wander Films</title>
        <meta name="description" content="Chasing the dream" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <Navbar />

      {/* Header */}
      <Hero />

      {/* Services Section */}
      <Services />

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
      <About />

      {/* Contact Section */}
      <Contact />
    </div>
  )
}

export default Home
