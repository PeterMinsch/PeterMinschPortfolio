import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro"
import AboutMe from "./Components/AboutMe/AboutMe";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import {themeContext} from './Context'
import {useContext} from "react"
import Skills from "./Components/Skills/Skills";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style = {{
        background : darkMode ? 'black' : '',
        color : darkMode ? 'white' : ''
      }}
      >
      <Navbar/>
      <Intro/>
      <AboutMe/>
      <Experience/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
