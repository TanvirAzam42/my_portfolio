import { motion } from "framer-motion";

const projects = [
    {
        title: "Amazon Review Sentiment Analysis",
        description:
            "LSTM-based machine learning model for analyzing Amazon product reviews and predicting customer sentiment.",
        tech: ["Python", "TensorFlow", "LSTM", "React"],
    },

    {
        title: "AI Quick Commerce Platform",
        description:
            "MERN-based quick commerce platform with JWT authentication, smart warehouse logic, and AI recommendations.",
        tech: ["React", "MongoDB", "Node.js", "Express"],
    },

    {
        title: "Secure CCTV Storage using Blockchain",
        description:
            "Java application for secure CCTV storage using blockchain and bilinear pairing for integrity verification.",
        tech: ["Java", "Blockchain", "Ethereum", "Swing"],
    },

    {
        title: "Smart Expense Tracker",
        description:
            "Expense management Python application with analytics dashboard and real-time tracking features.",
        tech: [ "Python", "SQLite", "Tkinter"],
    },

    {
        title: "POS-System",
        description:
            "Billing software with inventory management, monthly sales analysis.",
        tech: [ "Java", "SQLite", "Javafx"],
    },

    {
        title: "Student Management System",
        description:
            "Simple command line software in which student can login, mark attendance, access there profile. Also have a Admin functionality to manage students.",
        tech: ["Java", "MySQL"],
    },
];

function Projects() {
    return (
        <section
            id="projects"
            className="bg-gray-100 dark:bg-slate-900 text-black dark:text-white py-24 px-6 transition duration-500"
        >
            <div className="max-w-7xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-cyan-400 mb-14"
                >
                    Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-10">

                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{
                                scale: 1.03,
                                boxShadow: "0px 0px 25px rgba(34,211,238,0.2)",
                            }}
                            className="bg-white dark:bg-slate-950 border border-gray-300 dark:border-slate-800 rounded-2xl p-8 shadow-lg hover:border-cyan-400 transition"
                        >

                            <h3 className="text-2xl font-bold mb-4">
                                {project.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-400 leading-7">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-3 mt-6">

                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-lg text-sm"
                                    >
                    {tech}
                  </span>
                                ))}

                            </div>

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Projects;