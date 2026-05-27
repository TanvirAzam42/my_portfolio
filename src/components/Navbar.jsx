import { useState } from "react";
import {
    FaBars,
    FaTimes,
    FaMoon,
    FaSun,
} from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-slate-800 transition duration-500">

            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                <h1 className="text-2xl font-bold text-cyan-500">
                    Tanvir.dev
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 items-center text-gray-700 dark:text-gray-300 font-medium">

                    <li>
                        <a href="#about" className="hover:text-cyan-400">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#skills" className="hover:text-cyan-400">
                            Skills
                        </a>
                    </li>

                    <li>
                        <a href="#experience" className="hover:text-cyan-400">
                            Experience
                        </a>
                    </li>

                    <li>
                        <a href="#projects" className="hover:text-cyan-400">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#certifications" className="hover:text-cyan-400">
                            Certifications
                        </a>
                    </li>

                    <li>
                        <a href="#contact" className="hover:text-cyan-400">
                            Contact
                        </a>
                    </li>

                    {/* Theme Toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="text-xl hover:text-cyan-400"
                    >
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button>

                </ul>

                {/* Mobile Controls */}
                <div className="md:hidden flex items-center gap-4">

                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="text-xl text-gray-700 dark:text-white"
                    >
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button>

                    <div
                        className="text-2xl cursor-pointer text-gray-700 dark:text-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </div>

                </div>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800">

                    <ul className="flex flex-col items-center gap-6 py-6 text-gray-700 dark:text-gray-300">

                        <li>
                            <a href="#about">About</a>
                        </li>

                        <li>
                            <a href="#skills">Skills</a>
                        </li>

                        <li>
                            <a href="#experience">Experience</a>
                        </li>

                        <li>
                            <a href="#projects">Projects</a>
                        </li>

                        <li>
                            <a href="#certifications">Certifications</a>
                        </li>

                        <li>
                            <a href="#contact">Contact</a>
                        </li>

                    </ul>

                </div>
            )}
        </nav>
    );
}

export default Navbar;