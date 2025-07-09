import { useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="bg-background flex flex-col">
            <NavBar />
            <Hero />
            <Education />
            <Skills />
            <Projects />
        </div>
    );
}

export default App;
