import { AboutMe } from "./components/Aboutme"
import { Home } from "./components/Home"
import { Navigation } from "./components/NavBar"



function App() {


  return (
    <div style={{backgroundColor:"#011628"}}>
      <Navigation/>
      <Home/>
      <AboutMe/>
    </div>
  )
}

export default App
