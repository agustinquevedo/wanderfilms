import type { NextPage } from 'next'
import Head from 'next/head'
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
        <h1>About</h1>
      </Section>
      <Section id="projects" height={SectionHeightEnum.FULL_HEIGHT}>
        <h1>Projects</h1>
      </Section>
      <Section id="services" height={SectionHeightEnum.FULL_HEIGHT}>
        <h1>Services</h1>
      </Section>
      <Section id="contact" height={SectionHeightEnum.FULL_HEIGHT}>
        <h1>Contact</h1>
      </Section>
    </div>
  )
}

export default Home
