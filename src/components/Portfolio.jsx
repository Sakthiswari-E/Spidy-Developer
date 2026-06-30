// import { motion } from "framer-motion";
// import { FaGithub } from "react-icons/fa";
// import { ExternalLink } from "lucide-react";

// import project1 from "../assets/images/Pixora-digital (3).jpeg";
// import project2 from "../assets/images/Pixora-digital (1).jpeg";
// import project3 from "../assets/images/Pixora-digital (2).jpeg";
// import PortfolioIllustration from "../assets/images/Group.png";

// const projects = [
//     {
//         image: project1,
//         title: "Personal Finance Manager",
//         desc: "Full-stack app to track income, expenses, and manage financial data securely.",
//         tech: ["React", "Node.js", "Express", "MongoDB"],
//         live: "https://personal-finance-manager-frontend-3jfx.onrender.com/",
//         github: "https://github.com/Sakthiswari-E/Personal-Finance-Manager-Frontend",
//     },
//     {
//         image: project2,
//         title: "Pixora Digital",
//         desc: "Developed a real-world business website for Pixora Digital, providing professional video editing services.",
//         tech: ["React", "Node.js", "Express"],
//         live: "https://pixora-digital.netlify.app/",
//         github: "https://github.com/Sakthiswari-E/Pixora-Frontend",
//     },
//     {
//         image: project3,
//         title: "Portfolio Website",
//         desc: "A responsive personal portfolio showcasing projects, skills, and services.",
//         tech: ["React", "Tailwind CSS", "Framer Motion"],
//         live: "https://sakthiswari-e-portfolio.netlify.app/",
//         github: "https://github.com/Sakthiswari-E",
//     },
// ];

// export default function Portfolio() {
//     return (
//         <section
//             id="portfolio"
//             className="relative py-28 bg-[#050505] overflow-hidden"
//         >
//             {/* Background Glow */}
//             <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/10 blur-[180px] rounded-full"></div>
//             <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 blur-[180px] rounded-full"></div>
//             <div className="absolute right-90 top-11 hidden lg:block pointer-events-none">
//                 <img
//                     src={PortfolioIllustration}
//                     alt="Services Illustration"
//                     className="w-[280px] xl:w-[90px] opacity-70"
//                 />
//             </div>
//             <div className="max-w-7xl mx-auto px-6">

//                 {/* Heading */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     className="text-center mb-20"
//                 >
//                     <p className="uppercase tracking-[4px] text-red-500 font-semibold">
//                         Featured Projects
//                     </p>

//                     <h2 className="text-5xl  text-white font-bold mt-4">
//                         Our Recent
//                         <span className="text-red-500"> Work</span>
//                     </h2>

//                     <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
//                         Explore some of our recent projects crafted with modern technologies
//                         and attention to detail.
//                     </p>
//                 </motion.div>

//                 {/* Cards */}
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

//                     {projects.map((project, index) => (

//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 80 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: index * .15 }}
//                             whileHover={{ y: 10 }}
//                             className="w-full max-w-[640px] bg-[#121212] rounded-3xl overflow-hidden border border-red-500/10 group"
//                         >

//                             {/* Image */}
//                             <div className="overflow-hidden">
//                                 <img
//                                     src={project.image}
//                                     alt={project.title}
//                                     className="w-full h-44 object-cover transition duration-700 group-hover:scale-110"
//                                 />
//                             </div>

//                             <div className="p-6 flex flex-col flex-1">

//                                 <h3 className="text-2xl text-red-500 font-bold mb-4">
//                                     {project.title}
//                                 </h3>

//                                 <p className="text-gray-400 leading-7 min-h-[90px]">
//                                     {project.desc}
//                                 </p>

//                                 <div className="flex flex-wrap gap-3 mt-6">

//                                     {project.tech.map((tech) => (
//                                         <span
//                                             key={tech}
//                                             className="px-4 py-2 rounded-full bg-red-600/10 text-red-400 text-sm"
//                                         >
//                                             {tech}
//                                         </span>
//                                     ))}

//                                 </div>

//                                 <div className="flex gap-3 mt-auto pt-6">

//                                     <a
//                                         href={project.live}
//                                         className="flex items-center gap-2 px-5 py-3 rounded-full bg-red-600 hover:bg-red-700 transition"
//                                     >
//                                         <ExternalLink size={18} />
//                                         Live
//                                     </a>

//                                     <a
//                                         href={project.github}
//                                         className="flex items-center gap-2 px-5 py-3 rounded-full border border-red-500 hover:bg-red-600 transition"
//                                     >
//                                         <FaGithub size={18} />
//                                         GitHub
//                                     </a>

//                                 </div>

//                             </div>

//                         </motion.div>

//                     ))}

//                 </div>

//             </div>
//         </section>
//     );
// }








import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

import project1 from "../assets/images/Pixora-digital (3).jpeg";
import project2 from "../assets/images/Pixora-digital (1).jpeg";
import project3 from "../assets/images/Pixora-digital (2).jpeg";
import PortfolioIllustration from "../assets/images/Group.png";

const projects = [
    {
        image: project1,
        title: "Personal Finance Manager",
        desc: "Full-stack app to track income, expenses, and manage financial data securely.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        live: "https://personal-finance-manager-frontend-3jfx.onrender.com/",
        github:
            "https://github.com/Sakthiswari-E/Personal-Finance-Manager-Frontend",
    },
    {
        image: project2,
        title: "Pixora Digital",
        desc: "Developed a real-world business website for Pixora Digital providing professional video editing services.",
        tech: ["React", "Node.js", "Express"],
        live: "https://pixora-digital.netlify.app/",
        github: "https://github.com/Sakthiswari-E/Pixora-Frontend",
    },
    {
        image: project3,
        title: "Portfolio Website",
        desc: "Responsive portfolio showcasing projects, skills and services.",
        tech: ["React", "Tailwind", "Framer Motion"],
        live: "https://sakthiswari-e-portfolio.netlify.app/",
        github: "https://github.com/Sakthiswari-E/Portfolio",
    },
];

export default function Portfolio() {
    return (
        <section
            id="portfolio"
            className="relative overflow-hidden bg-[#050505] py-24 lg:py-28"
        >
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/10 blur-[180px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 blur-[180px] rounded-full" />

            {/* Illustration */}
            <div className="absolute right-80 top-14 pointer-events-none select-none">
                <img
                    src={PortfolioIllustration}
                    alt=""
                    className="
                    w-[120px]
                    sm:w-[160px]
                    md:w-[200px]
                    lg:w-[240px]
                    xl:w-[90px]
                    opacity-50
                    lg:opacity-70
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
                    transition={{ duration: .7 }}
                    className="text-center mb-16 lg:mb-20"
                >
                    <p className="uppercase tracking-[4px] text-red-500 font-semibold">
                        Featured Projects
                    </p>

                    <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                        Our Recent
                        <span className="text-red-500"> Work</span>
                    </h2>

                    <p className="mt-6 max-w-2xl mx-auto leading-8 text-gray-400">
                        Explore some of our recent projects crafted with modern
                        technologies and attention to detail.
                    </p>
                </motion.div>

                {/* Portfolio Cards */}

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">

                    {projects.map((project, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * .15 }}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                            }}
                            className="w-full max-w-[360px] rounded-3xl overflow-hidden border border-red-500/10 bg-[#121212]/90 backdrop-blur-md group flex flex-col"
                        >

                            {/* Image */}

                            <div className="overflow-hidden">

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transition duration-700 group-hover:scale-110"
                                />

                            </div>

                            {/* Content */}

                            <div className="p-6 flex flex-col flex-1">

                                <h3 className="text-xl font-bold text-red-500 mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 leading-7 min-h-[90px]">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-5">

                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 rounded-full bg-red-600/10 text-red-400 text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}

                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-6">

                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 hover:bg-red-700 transition"
                                    >
                                        <ExternalLink size={18} />
                                        Live Demo
                                    </a>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 rounded-full border border-red-500 px-5 py-3 hover:bg-red-600 transition"
                                    >
                                        <FaGithub size={18} />
                                        GitHub
                                    </a>

                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}