// import { motion } from "framer-motion";
// import {
//     Globe,
//     Laptop,
//     Palette,
//     ShoppingCart,
//     PenTool,
//     Rocket,
// } from "lucide-react";
// import serviceIllustration from "../assets/images/4 1.png";

// const services = [
//     {
//         icon: <Globe size={42} />,
//         title: "Website Development",
//         desc: "Modern, responsive business and portfolio websites built for performance.",
//     },
//     {
//         icon: <Laptop size={42} />,
//         title: "Web Applications",
//         desc: "Custom React, Node.js and MERN applications tailored to your needs.",
//     },
//     {
//         icon: <Palette size={42} />,
//         title: "UI / UX Design",
//         desc: "Beautiful, user-focused interfaces with premium experiences.",
//     },
//     {
//         icon: <ShoppingCart size={42} />,
//         title: "E-Commerce",
//         desc: "Online stores with secure payments and smooth shopping experiences.",
//     },
//     {
//         icon: <PenTool size={42} />,
//         title: "Landing Pages",
//         desc: "High-converting landing pages for startups, products and campaigns.",
//     },
//     {
//         icon: <Rocket size={42} />,
//         title: "Website Optimization",
//         desc: "Speed optimization, SEO improvements and website maintenance.",
//     },
// ];

// export default function Services() {
//     return (
//         <section
//             id="services"
//             className="relative py-28 bg-[#050505] overflow-hidden"
//         >
//             {/* Background Glow */}
//             <div className="absolute top-20 left-0 w-80 h-80 bg-red-600/10 blur-[180px] rounded-full"></div>
//             <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 blur-[180px] rounded-full"></div>
//             {/* Right Side Illustration */}

//             <div className="absolute right-0 top-0 hidden lg:block pointer-events-none">
//                 <img
//                     src={serviceIllustration}
//                     alt="Services Illustration"
//                     className="w-[480px] xl:w-[580px] opacity-70"
//                 />
//             </div>
//             <div className="max-w-7xl mx-auto px-6">

//                 {/* Heading */}

//                 <motion.div
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: .7 }}
//                     className="text-center mb-20"
//                 >
//                     <p className="text-red-500 uppercase tracking-[4px] font-semibold">
//                         What We Do
//                     </p>

//                     <h2 className="text-5xl font-bold text-white mt-4">
//                         Our Premium
//                         <span className="text-red-500"> Services</span>
//                     </h2>

//                     <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
//                         We build powerful digital products that combine beautiful design,
//                         modern technology and outstanding performance.
//                     </p>
//                 </motion.div>

//                 {/* Cards */}

//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

//                     {services.map((service, index) => (

//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 60 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: index * .15 }}
//                             whileHover={{
//                                 y: -12,
//                                 scale: 1.02,
//                             }}
//                             className="relative bg-[#121212] border border-red-500/10 rounded-3xl p-8 group overflow-hidden"
//                         >

//                             {/* Glow */}

//                             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-red-600/10 via-transparent to-red-500/10"></div>

//                             {/* Icon */}

//                             <div className="relative w-20 h-20 rounded-2xl bg-red-600/10 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition duration-500">

//                                 {service.icon}

//                             </div>

//                             <h3 className="relative text-2xl font-bold text-white mt-8 mb-4">

//                                 {service.title}

//                             </h3>

//                             <p className="relative text-gray-400 leading-8">

//                                 {service.desc}

//                             </p>

//                             <button className="relative mt-8 text-red-500 font-semibold group-hover:text-white transition">

//                                 Learn More →

//                             </button>

//                         </motion.div>

//                     ))}

//                 </div>

//             </div>
//         </section>
//     );
// }












import { motion } from "framer-motion";
import {
    Globe,
    Laptop,
    Palette,
    ShoppingCart,
    PenTool,
    Rocket,
} from "lucide-react";

import serviceIllustration from "../assets/images/4 1.png";

const services = [
    {
        icon: <Globe size={42} />,
        title: "Website Development",
        desc: "Modern, responsive business and portfolio websites built for performance.",
    },
    {
        icon: <Laptop size={42} />,
        title: "Web Applications",
        desc: "Custom React, Node.js and MERN applications tailored to your needs.",
    },
    {
        icon: <Palette size={42} />,
        title: "UI / UX Design",
        desc: "Beautiful, user-focused interfaces with premium experiences.",
    },
    {
        icon: <ShoppingCart size={42} />,
        title: "E-Commerce",
        desc: "Online stores with secure payments and smooth shopping experiences.",
    },
    {
        icon: <PenTool size={42} />,
        title: "Landing Pages",
        desc: "High-converting landing pages for startups, products and campaigns.",
    },
    {
        icon: <Rocket size={42} />,
        title: "Website Optimization",
        desc: "Speed optimization, SEO improvements and website maintenance.",
    },
];

export default function Services() {
    return (
        <section
            id="services"
            className="relative overflow-hidden bg-[#050505] py-24 lg:py-28"
        >
            {/* Background Glow */}
            <div className="absolute top-20 left-0 w-80 h-80 rounded-full bg-red-600/10 blur-[180px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-red-500/10 blur-[180px]" />

            {/* Illustration */}
            <div className="absolute right-0 top-0 pointer-events-none select-none">

                <img
                    src={serviceIllustration}
                    alt=""
                    className="
            w-[180px]
            sm:w-[240px]
            md:w-[320px]
            lg:w-[450px]
            xl:w-[560px]
            opacity-50
            lg:opacity-60
            mix-blend-screen
            blur-[0.5px]
          "
                />

            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16 lg:mb-20"
                >
                    <p className="uppercase tracking-[4px] text-red-500 font-semibold">
                        What We Do
                    </p>

                    <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                        Our Premium
                        <span className="text-red-500"> Services</span>
                    </h2>

                    <p className="mt-6 max-w-2xl mx-auto leading-8 text-gray-400">
                        We build powerful digital products that combine beautiful design,
                        modern technology, and outstanding performance.
                    </p>
                </motion.div>

                {/* Cards */}

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {services.map((service, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.12 }}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                            }}
                            className="relative overflow-hidden rounded-3xl border border-red-500/10 bg-[#121212]/90 backdrop-blur-md p-8 group"
                        >

                            {/* Hover Glow */}

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-red-600/10 via-transparent to-red-500/10" />

                            {/* Icon */}

                            <div className="relative w-20 h-20 rounded-2xl bg-red-600/10 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">

                                {service.icon}

                            </div>

                            <h3 className="relative mt-8 mb-4 text-2xl font-bold text-white">
                                {service.title}
                            </h3>

                            <p className="relative leading-8 text-gray-400">
                                {service.desc}
                            </p>

                            <button className="relative mt-8 font-semibold text-red-500 transition group-hover:text-white">
                                <a
                                    href="https://wa.me/917200883088?text=Hi%20Spidy%20Developer,%20I'm%20interested%20in%20your%20services."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Hire Me →
                                </a>
                            </button>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}