import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {

  return (
    <div className='relative'>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
