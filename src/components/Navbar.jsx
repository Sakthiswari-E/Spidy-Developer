import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo/logo2.png";

const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Skills", id: "skills" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [active, setActive] = useState("Home");

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${scroll
                ? "backdrop-blur-xl bg-black/70 border-b border-red-500/20"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto h-22 flex items-center justify-between px-6">

                {/* Logo */}

                <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center"
                >
                    <img
                        src={logo}
                        className="h-22 drop-shadow-[0_0_18px_#ff003c]"
                        alt=""
                    />
                </motion.a>

                {/* Desktop */}

                <nav className="hidden lg:flex items-center gap-10">
                    {links.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={() => setActive(item.id)}
                            className="relative text-white font-medium tracking-wide group"
                        >
                            {item.name}

                            {active === item.id && (
                                <motion.div
                                    layoutId="active"
                                    className="absolute left-0 -bottom-2 h-[2px] w-full bg-red-500 shadow-[0_0_12px_#ff003c]"
                                />
                            )}

                            <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* Button */}

                <motion.a
                    href="#contact"
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0px 0px 25px #ff003c",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden lg:flex items-center justify-center px-7 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold"
                >
                    Hire Us
                </motion.a>

                {/* Mobile */}

                <button
                    onClick={() => setOpen(!open)}
                    className="lg:hidden text-white"
                >
                    {open ? <X size={30} /> : <Menu size={30} />}
                </button>

            </div>

            <AnimatePresence>

                {open && (

                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: .4 }}
                        className="fixed top-0 right-0 h-screen w-72 bg-[#080808] border-l border-red-500/20 backdrop-blur-xl p-8"
                    >

                        <div className="flex justify-end mb-10">

                            <button
                                onClick={() => setOpen(false)}
                            >
                                <X className="text-white" />
                            </button>

                        </div>

                        <div className="flex flex-col gap-8">

                            {links.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={() => {
                                        setActive(item.id);
                                        setOpen(false);
                                    }}
                                    className={`text-left text-lg transition ${active === item.id
                                        ? "text-red-500"
                                        : "text-white hover:text-red-500"
                                        }`}
                                >
                                    {item.name}
                                </a>
                            ))}

                            <button className="mt-6 py-3 rounded-full bg-red-600 text-white">
                                <a
                                    href="#contact"
                                    onClick={() => setOpen(false)}
                                    className="mt-6 py-3 rounded-full bg-red-600 hover:bg-red-700 transition text-white font-semibold text-center block"
                                >
                                    Hire Us
                                </a>
                            </button>

                        </div>

                    </motion.div>

                )}

            </AnimatePresence>

        </header>
    );
}