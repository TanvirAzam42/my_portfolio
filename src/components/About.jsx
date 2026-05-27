import { motion } from "framer-motion";

function About() {
    return (
        <motion.section
            id="about"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-100 dark:bg-slate-900 text-black dark:text-white py-24 px-6 transition duration-500"
        >
            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl font-bold text-cyan-400 mb-10">
                    About Me
                </h2>

                <div className="space-y-6 text-lg leading-8 text-gray-700 dark:text-gray-300">

                    <p>
                        I am a Computer Science and Engineering graduate from
                        <span className="text-cyan-400 font-semibold">
              {" "}Symbiosis Institute of Technology
            </span>
                        , passionate about building modern software applications,
                        scalable web applications, and AI-powered systems.
                    </p>

                    <p>
                        I enjoy working with Full Stack Development,
                        Data Analysis, Artificial Intelligence,
                        Machine Learning, and modern cloud technologies.
                        I love transforming ideas into real-world digital products.
                    </p>

                    <p>
                        My technical interests include React.js, Python,
                        MongoDB, SQL, Blockchain, Machine Learning,
                        DevOps tools, and modern web technologies.
                    </p>

                    <p>
                        I actively follow emerging technology trends,
                        continuously learn new tools and frameworks,
                        and enjoy building innovative projects that solve
                        real-world problems.
                    </p>

                </div>

            </div>
        </motion.section>
    );
}

export default About;