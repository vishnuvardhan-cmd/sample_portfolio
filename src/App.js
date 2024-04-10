import Intro from "./components/intro/intro";
import Navbar from "./components/navbar/navbar";
import "./App.css";
import Skills from "./components/skills/skills";
import Works from "./components/works/works";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
