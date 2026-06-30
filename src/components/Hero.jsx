import { motion } from "framer-motion";
import heroImage from "../assets/images/aranha-logo 1.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#050505] text-white"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-red-600/20 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-red-500/10 blur-[200px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 sm:pt-28 lg:pt-32 pb-16">

        <div className="relative grid lg:grid-cols-2 items-center gap-12 lg:gap-16">

          {/* Mobile Background Image */}
          <div className="absolute inset-0 flex items-center justify-center lg:hidden pointer-events-none">

            <img
              src={heroImage}
              alt=""
              className="w-[85%] sm:w-[80%] opacity-80"
            />

          </div>

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center lg:text-left"
          >

            <p className="text-red-500 uppercase tracking-[3px] sm:tracking-[4px] font-semibold mb-4">
              Welcome To Spidy Developer
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">

              Crafting

              <span className="text-red-500"> Digital </span>

              Experiences

              <br className="hidden sm:block" />

              That Inspire.

            </h1>

            <p className="text-gray-400 text-base sm:text-lg mt-6 lg:mt-8 max-w-xl mx-auto lg:mx-0 leading-8">
              We build modern websites, responsive web applications,
              business solutions, and creative digital experiences
              that help brands grow online.
            </p>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">

              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 transition duration-300 font-semibold shadow-[0_0_30px_rgba(255,0,60,.4)]"
              >
                View Portfolio
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded-full border border-red-500 text-white hover:bg-red-600 transition duration-300 font-semibold"
              >
                Contact Us
              </a>

            </div>

          </motion.div>

          {/* Desktop Image */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:flex justify-center"
          >

            <div className="absolute w-[420px] h-[420px] rounded-full bg-red-500/20 blur-[140px]" />

            <img
              src={heroImage}
              alt="Spidy Developer"
              className="relative w-full max-w-xl xl:max-w-2xl drop-shadow-[0_0_50px_rgba(255,0,60,.35)]"
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
}