import React from 'react'
import { About, Footer, Header, Skills, Testimonial, Work } from './containers'
import { NavBar } from './components'

const App = () => {
  return (
    <div>
        <NavBar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
    </div>
  )
}

export default App