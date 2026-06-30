import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const skills = [
  {
    icon: <FaHtml5 />,
    title: "HTML5",
    color: "#E34F26",
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS3",
    color: "#1572B6",
  },
  {
    icon: <FaJs />,
    title: "JavaScript",
    color: "#F7DF1E",
  },
  {
    icon: <FaReact />,
    title: "React",
    color: "#61DAFB",
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind CSS",
    color: "#38BDF8",
  },
  {
    icon: <FaNodeJs />,
    title: "Node.js",
    color: "#68A063",
  },
  {
    icon: <SiExpress />,
    title: "Express",
    color: "#ffffff",
  },
  {
    icon: <SiMongodb />,
    title: "MongoDB",
    color: "#4DB33D",
  },
  {
    icon: <FaGitAlt />,
    title: "Git",
    color: "#F1502F",
  },
  {
    icon: <FaFigma />,
    title: "Figma",
    color: "#A259FF",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 bg-[#080808] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-red-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[4px] text-red-500 font-semibold">
            Our Expertise
          </p>

          <h2 className="text-5xl font-bold mt-4 text-white">
            Technologies We
            <span className="text-red-500"> Work With</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8">
            We use modern technologies to build scalable, responsive,
            and high-performance websites and web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: .8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * .08 }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="group bg-[#121212] border border-red-500/10 rounded-3xl p-8 flex flex-col items-center transition-all duration-300 hover:border-red-500"
            >

              <div
                className="text-6xl transition-transform duration-300 group-hover:scale-125"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              <h3 className="mt-6 text-lg font-semibold text-white">
                {skill.title}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}