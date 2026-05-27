import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_yzmcquj",
                "template_o2ns0nr",
                form.current,
                "0dtc_5MRFY7pt7EpI"
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                },
                () => {
                    alert("Failed to send message.");
                }
            );

        e.target.reset();
    };

    return (
        <motion.section
            id="contact"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-slate-950 text-black dark:text-white py-24 px-6 transition duration-500"
        >
            <div className="max-w-4xl mx-auto">

                <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">
                    Contact Me
                </h2>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="space-y-6"
                >

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full p-4 rounded-xl bg-gray-100 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 outline-none"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full p-4 rounded-xl bg-gray-100 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 outline-none"
                    />

                    <textarea
                        name="message"
                        rows="6"
                        placeholder="Your Message"
                        required
                        className="w-full p-4 rounded-xl bg-gray-100 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 outline-none"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition"
                    >
                        Send Message
                    </button>

                </form>

            </div>
        </motion.section>
    );
}

export default Contact;