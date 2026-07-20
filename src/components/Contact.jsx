import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Mail } from "lucide-react";
import { useState } from "react";
import ContactIllustration from "../assets/images/3 1.png";

export default function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        project: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = `Hi Spidy Developer,

         Name: ${formData.name}

         Email: ${formData.email}

         Project Type: ${formData.project}

         Project Details:
        ${formData.message}`;

        const whatsappUrl =
            `https://wa.me/917200883088?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, "_blank");

        // // Clear the form after opening WhatsApp
        setFormData({
            name: "",
            email: "",
            project: "",
            message: "",
        });

    };


    return (
        <section
            id="contact"
            className="relative py-28 bg-[#080808] overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-600/10 blur-[180px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 blur-[180px] rounded-full" />

            {/* Decorative Illustration */}
            <div className="absolute -left-10 -top-6 lg:left-0 lg:top-0 pointer-events-none select-none">

                <img
                    src={ContactIllustration}
                    alt=""
                    className="
                    w-[200px]
                    sm:w-[240px]
                    md:w-[180px]
                    lg:w-[320px]
                    xl:w-[320px]
                    opacity-10
                    lg:opacity-10
                    mix-blend-screen
                    "
                />

            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <p className="uppercase tracking-[5px] text-red-500 font-semibold">
                        Contact Us
                    </p>

                    <h2 className="text-5xl text-white md:text-6xl font-bold mt-4">
                        Let's Build Something
                        <span className="text-red-500"> Amazing</span>
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8">
                        Whether you need a business website, portfolio, landing page,
                        e-commerce store, or custom web application, let's discuss your
                        project.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="uppercase tracking-[4px] text-red-500 font-semibold">
                            Let's Connect
                        </p>

                        <h3 className="text-5xl text-white font-bold mt-5 leading-tight">
                            Have a
                            <span className="text-red-500"> Project?</span>
                        </h3>

                        <p className="text-gray-400 mt-8 leading-8 max-w-lg">
                            I'm always excited to work on creative ideas. If you're looking
                            for a professional website or web application, feel free to reach
                            out through any of the platforms below.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-6 mt-12">

                            <a
                                href="https://wa.me/917200883088?text=Hi%20Spidy%20Developer!%20I%20visited%20your%20website%20and%20I'm%20interested%20in%20your%20web%20development%20services.%20Can%20we%20discuss%20my%20project%3F"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-16 h-16 rounded-full bg-[#121212] border border-red-500/20 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-110"
                            >
                                <FaWhatsapp size={30} />
                            </a>

                            <a
                                href="https://www.instagram.com/spidy_developer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-16 h-16 rounded-full bg-[#121212] border border-red-500/20 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300 hover:scale-110"
                            >
                                <FaInstagram size={28} />
                            </a>

                            <a
                                href="mailto:elansakthiswari@gmail.com"
                                className="w-16 h-16 rounded-full bg-[#121212] border border-red-500/20 flex items-center justify-center text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-110"
                            >
                                <Mail size={26} />
                            </a>

                        </div>

                        <div className="mt-12 space-y-3 text-gray-400">
                            <p>✔ Free Project Discussion</p>
                            <p>✔ Fast Delivery</p>
                            <p>✔ Modern Responsive Design</p>
                            <p>✔ Long-Term Support</p>
                        </div>

                    </motion.div>

                    {/* Right Side Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-[35px] border border-red-500/20 bg-[#121212]/80 backdrop-blur-xl p-10 shadow-[0_0_40px_rgba(255,0,60,.08)]"
                    >

                        <input
                            type="text"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full bg-[#0d0d0d] text-white border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-red-500 transition mb-5"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full bg-[#0d0d0d] text-white border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-red-500 transition mb-5"
                        />
                        <select
                            value={formData.project}
                            onChange={(e) =>
                                setFormData({ ...formData, project: e.target.value })
                            }
                            className="w-full bg-[#0d0d0d] text-white border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-red-500 transition mb-5"
                        >
                            <option value="">Select Project Type</option>
                            <option>Business Website</option>
                            <option>Portfolio Website</option>
                            <option>E-Commerce</option>
                            <option>Landing Page</option>
                            <option>Web Application</option>
                        </select>

                        <textarea
                            rows="5"
                            placeholder="Tell me about your project..."
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({ ...formData, message: e.target.value })
                            }
                            className="w-full bg-[#0d0d0d] text-white border border-white/10 rounded-2xl px-5 py-4 outline-none resize-none focus:border-red-500 transition"
                        />

                        <button
                            type="submit"
                            className="w-full mt-8 py-4 rounded-full bg-gradient-to-r from-red-700 to-red-500 hover:scale-105 transition-all duration-300 font-semibold shadow-[0_0_30px_rgba(255,0,60,.35)]"
                        >
                            Start Your Project →
                        </button>

                    </motion.form>

                </div>
            </div>
        </section>
    );
}