import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Summary from "./components/Summary";
import space from '../src/assets/space.gif'
import Resume from "./components/Resume";


function App() {
  return (
    <div>
      <div style={{backgroundImage: `url(${space})`}} className='app-div'>
      <Navbar/>
      <Main/>
      <About/>
      <Resume/>
      <Summary/>
      <Projects/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
