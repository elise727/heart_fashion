import React from 'react'
import About from '../components/About'
import Head from '../components/Head'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
function AboutPage() {
  return (
    <div>
        <Head title={"About"} />
        <About />
        <Contact />
    </div>
  )
}

export default AboutPage