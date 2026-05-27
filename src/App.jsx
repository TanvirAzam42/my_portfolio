import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./Components/Experience.jsx";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";

function App() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="bg-white dark:bg-slate-950 transition duration-500">

                <Navbar
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                />

                <Hero darkMode={darkMode} />

                <About />

                <Skills />

                <Experience />

                <Projects />

                <Certifications />

                <Contact />

                <Footer />

            </div>
        </div>
    );
}

export default App;