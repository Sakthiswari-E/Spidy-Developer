import { motion } from "framer-motion";
import aboutImg from "../assets/images/aboutimg.png";
import {
  Code2,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: <Code2 size={30} />,
    title: "Modern Development",
    desc: "Building scalable websites using the latest technologies.",
  },
  {
    icon: <MonitorSmartphone size={30} />,
    title: "Responsive Design",
    desc: "Pixel-perfect UI that works beautifully on every device.",
  },
  {
    icon: <Rocket size={30} />,
    title: "High Performance",
    desc: "Fast loading, optimized, and SEO-friendly web experiences.",
  },
  {
    icon: <ShieldCheck size={30} />,
    title: "Reliable Support",
    desc: "Long-term maintenance and continuous improvements.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 bg-[#050505] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 -left-40 w-96 h-96 rounded-full bg-red-600/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-red-500/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-red-500 uppercase tracking-[4px] font-semibold">
            About Us
          </p>

          <h2 className="text-5xl font-bold mt-4 text-white">
            Building Digital
            <span className="text-red-500"> Excellence</span>
          </h2>
        </motion.div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >
            <img
              src={aboutImg}
              alt="About"
              className="w-full max-w-lg mx-auto"
            />
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >
            <h3 className="text-4xl font-bold text-white mb-6">
              We Create Websites That Grow Businesses.
            </h3>

            <p className="text-gray-400 leading-8 mb-8">
              At <span className="text-red-500">Spidy Developer</span>, we
              specialize in creating modern, responsive, and high-performance
              websites tailored to your business goals. From personal portfolios
              to business websites and custom web applications, we focus on
              delivering visually engaging designs with exceptional user
              experiences.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">

              <div className="flex items-center gap-3">
                <div className="text-red-500">✓</div>
                <p className="text-gray-300">Custom Website Development</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-red-500">✓</div>
                <p className="text-gray-300">Responsive Design</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-red-500">✓</div>
                <p className="text-gray-300">SEO Friendly</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-red-500">✓</div>
                <p className="text-gray-300">Fast Performance</p>
              </div>

            </div>

            <button>
              <a
                href="#services"
                className="inline-flex items-center justify-center mt-10 px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 transition shadow-[0_0_25px_rgba(255,0,60,.35)]"
              >
                Learn More
              </a>
            </button>

          </motion.div>

        </div>

        {/* Feature Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#121212] border border-red-500/20 rounded-3xl p-8 hover:border-red-500 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-red-500 mb-5">
                {item.icon}
              </div>

              <h4 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h4>

              <p className="text-gray-400 leading-7">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}