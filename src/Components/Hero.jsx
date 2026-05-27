import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950 px-6 transition duration-500">

            {/* Soft Gradient Glow */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto text-center relative z-10">

                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-7xl font-bold text-black dark:text-white"
                >
                    Tanvir Auti
                </motion.h1>

                {/* Typing Animation */}
                <div className="mt-6 text-2xl md:text-4xl text-cyan-400 font-semibold">

                    <TypeAnimation
                        sequence={[
                            "Full Stack Developer",
                            2000,
                            "Data Analyst",
                            2000,
                            "AI Enthusiast",
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />

                </div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-8"
                >
                    Building scalable web applications, machine learning systems,
                    and modern digital experiences using React, Python,
                    MongoDB, SQL, and AI technologies.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-10 flex justify-center gap-4 flex-wrap"
                >

                    <a href="#projects">
                        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition shadow-lg shadow-cyan-500/30">
                            View Projects
                        </button>
                    </a>

                    <a href="/TanvirAuti26.pdf" download>
                        <button className="border border-cyan-500 hover:bg-cyan-500 hover:text-white text-black dark:text-white px-8 py-4 rounded-xl font-semibold transition">
                            Download Resume
                        </button>
                    </a>

                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="flex justify-center gap-8 mt-12 text-4xl text-black dark:text-white"
                >

                    <a
                        href="https://github.com/TanvirAzam42"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-cyan-400 transition"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/tanvir-auti-408827250/?skipRedirect=true"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-cyan-400 transition"
                    >
                        <FaLinkedin />
                    </a>

                </motion.div>

            </div>
        </section>
    );
}

export default Hero;