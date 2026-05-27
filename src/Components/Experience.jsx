import { motion } from "framer-motion";

const experiences = [
    {
        company: "upGrad",
        role: "Autograder Intern",
        duration: "2025",
        description:
            "Worked on an AI-based autograder system involving Large Language Models (LLMs) for automated evaluation and intelligent grading workflows.",
    },

    {
        company: "Innovatus Technologies",
        role: "Programmer Intern",
        duration: "2025",
        description:
            "Developed a cybersecurity-based CCTV footage security project using Blockchain technology for secure storage and integrity verification.",
    },
];

function Experience() {
    return (
        <section
            id="experience"
            className="bg-white dark:bg-slate-950 text-black dark:text-white py-24 px-6 transition duration-500"
        >
            <div className="max-w-6xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-cyan-400 mb-14"
                >
                    Experience
                </motion.h2>

                <div className="space-y-10">

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: "0px 0px 25px rgba(34,211,238,0.2)",
                            }}
                            className="bg-gray-100 dark:bg-slate-900 border border-gray-300 dark:border-slate-800 rounded-2xl p-8 transition duration-300"
                        >

                            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                                <div>
                                    <h3 className="text-2xl font-bold">
                                        {exp.role}
                                    </h3>

                                    <p className="text-cyan-400 font-semibold mt-1">
                                        {exp.company}
                                    </p>
                                </div>

                                <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg text-sm w-fit">
                  {exp.duration}
                </span>

                            </div>

                            <p className="mt-6 text-gray-700 dark:text-gray-400 leading-7 text-lg">
                                {exp.description}
                            </p>

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Experience;
