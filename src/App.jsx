import NavBar from "./components/NavBar";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
    return (
        <div className="bg-background flex flex-col">
            <NavBar />
            <About />
            <Education />
            <Skills />
            <Projects />
        </div>
    );
}

export default App;
