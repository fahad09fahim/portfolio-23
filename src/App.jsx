
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home"
import Projects from "./Components/Projects/Projects"
import Skill from "./Components/Skill/Skill"
import { BiSolidUpArrow } from "react-icons/bi";


function App() {

const backToTop=()=>{
  window.scroll({
    top:0,
    behavior:"smooth"
  })

}
  return (
    <div className="font-mono bg-black " >
<button onClick={backToTop} className="fixed z-20 bottom-0 right-0 mx-4 rounded-xl bg-transparent "><BiSolidUpArrow className="h-9 w-9"/></button>
  <Home/>
   <Skill/>
   <Projects/>
   <Contact/>
    </div>
  )
}

export default App
