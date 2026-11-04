

import './App.css'
import { Footer } from './components/Footer'
import Navbar from './components/Navbar'
import Train from './components/Train'
import { WhoWeAre } from './components/WhoWeAre'
import { Courses } from './pages/Courses'
import Steps from './components/Steps'
import { Testimonial } from './components/Testimonial'
import AboutTheLogo from './components/AboutTheLogo'
import { HeroVideoSection } from './components/HeroVideoSection'
import { Blog } from './pages/Blog'

function App() {
  const isCoursesPage = /^\/courses(?:\/|$)/.test(window.location.pathname)
  const isBlogPage = /^\/blog\/?$/.test(window.location.pathname)

  if (isBlogPage) {
    return (
      <>
        <Navbar />
        <Blog />
        <Footer />
      </>
    )
  }

  if (isCoursesPage) {
    return (
      <>
        <Navbar />
        <main>
          <Courses isFullPage />
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <HeroVideoSection />
      <WhoWeAre />
      <AboutTheLogo />
      <Train />
      <Courses />
      <Steps />
      <Testimonial />

      <Footer />
    </>
  )
}

export default App
