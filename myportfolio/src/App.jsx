import React from 'react'
import Navbar from './Components/Navbar/Navbar'

// Lazy loading
const Home = React.lazy(() => import('./Components/Home/Home'));
const About = React.lazy(() => import('./Components/About/About'));
const Contact = React.lazy(() => import('./Components/Contact/Contact'));

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Contact />
    </div>
  )
}

export default App
