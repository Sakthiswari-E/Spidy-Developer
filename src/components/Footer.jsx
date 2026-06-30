import { ChevronUp } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import logo from "../assets/logo/logo2.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-red-500/10 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 w-80 h-80 bg-red-600/10 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Logo */}

          <div>

            <img
              src={logo}
              alt="Spidy Developer"
              className="h-56 mb-6 drop-shadow-[0_0_18px_rgba(255,0,60,.5)]"
            />

            <p className="text-gray-400 leading-8">
              Building premium websites, web applications, and digital
              experiences that help businesses grow online.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li><a href="#home" className="hover:text-red-500 transition">Home</a></li>

              <li><a href="#about" className="hover:text-red-500 transition">About</a></li>

              <li><a href="#services" className="hover:text-red-500 transition">Services</a></li>

              <li><a href="#portfolio" className="hover:text-red-500 transition">Portfolio</a></li>

              <li><a href="#contact" className="hover:text-red-500 transition">Contact</a></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>Website Development</li>

              <li>Web Applications</li>

              <li>UI / UX Design</li>

              <li>E-Commerce</li>

              <li>Website Maintenance</li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-[#121212] border border-red-500/10 flex items-center justify-center hover:bg-red-600 transition duration-300"
              >
                <FaGithub size={20}/>
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-[#121212] border border-red-500/10 flex items-center justify-center hover:bg-red-600 transition duration-300"
              >
                <FaLinkedin size={20}/>
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-[#121212] border border-red-500/10 flex items-center justify-center hover:bg-red-600 transition duration-300"
              >
                <FaInstagram size={20}/>
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-[#121212] border border-red-500/10 flex items-center justify-center hover:bg-red-600 transition duration-300"
              >
                <FaFacebookF size={20}/>
              </a>

            </div>

            <p className="text-gray-500 mt-8">
              Email
            </p>

            <p className="text-white">
              contact@elansakthiswari@gmail.com
            </p>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 pt-8 border-t border-red-500/10 flex flex-col md:flex-row items-center justify-between">

          <p className="text-gray-500 text-center">
            © {year} Spidy Developer. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="mt-6 md:mt-0 w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 transition flex items-center justify-center shadow-[0_0_25px_rgba(255,0,60,.4)]"
          >
            <ChevronUp size={22}/>
          </a>

        </div>

      </div>

    </footer>
  );
}