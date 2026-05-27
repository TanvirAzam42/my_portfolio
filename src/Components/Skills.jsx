import { motion } from "framer-motion";

const skills = [
    "React.js",
    "JavaScript",
    "Python",
    "MongoDB",
    "SQL",
    "Node.js",
    "Express.js",
    "Machine Learning",
    "TensorFlow",
    "Docker",
    "Git",
    "Java",
    "Blockchain",
    "Power BI",
    "Tailwind CSS",
    "Flask",
];

function Skills() {
    return (
        <section
            id="skills"
            className="bg-white dark:bg-slate-950 text-black dark:text-white py-24 px-6 transition duration-500"
        >
            <div className="max-w-7xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-cyan-400 mb-14"
                >
                    Skills
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{
                                scale: 1.08,
                                boxShadow: "0px 0px 20px rgba(34,211,238,0.5)",
                            }}
                            className="bg-gray-100 dark:bg-slate-900 border border-gray-300 dark:border-slate-800 rounded-2xl p-6 text-center font-semibold text-lg hover:border-cyan-400 transition"
                        >
                            {skill}
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Skills;