import { motion } from "framer-motion";

const certifications = [
    "Project Management",
    "Full Stack Web Development",
    "Docker & DevOps Fundamentals",
    "Data Analytics",
];

function Certifications() {
    return (
        <section
            id="certifications"
            className="bg-white dark:bg-slate-950 text-black dark:text-white py-24 px-6 transition duration-500"
        >
            <div className="max-w-7xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-cyan-500 mb-14"
                >
                    Certifications
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 0px 20px rgba(34,211,238,0.3)",
                            }}
                            className="bg-gray-100 dark:bg-slate-900 border border-gray-300 dark:border-slate-800 rounded-2xl p-8 transition duration-300"
                        >

                            <h3 className="text-xl font-semibold">
                                {cert}
                            </h3>

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Certifications;