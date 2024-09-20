import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/projects'
import FSproject from './components/FS/FSproject'
import ConnectMe from './components/ConnectMe/ConnectMe'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <FSproject/>
      <ConnectMe/>
      <Footer/>
    </>
  )
}

export default App