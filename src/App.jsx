import { NavBar } from './components/NavBar'
import { Home } from './components/home'
import { About } from './components/About'
import { Techs } from './components/Techs'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {


  return (
    <div style={{backgroundColor:"#020503"}}>
      <NavBar/>
      <Home/>
      <About/>
      <Techs/>
      <Contact/>
      <Footer />
    </div>
  )
}

export default App
