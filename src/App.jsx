import { useState } from "react";
import NavBar from "./components/navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="bg-background flex flex-col">
            <NavBar />
            <Hero />
            <Education />
            <Skills />
        </div>
    );
}

export default App;
