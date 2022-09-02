import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/molecules/Hero/Hero'
import Navigation from '../components/molecules/Navigation/Navigation'
import About from '../components/molecules/Sections/About/About'
import Contact from '../components/molecules/Sections/Contact/Contact'
import Services from '../components/molecules/Sections/Services/Services'
import Works from '../components/molecules/Sections/Works/Works'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Wander Films</title>
        <meta name="description" content="Chasing the dream" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Works Section */}
      <Works />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />
    </div>
  )
}

export default Home
