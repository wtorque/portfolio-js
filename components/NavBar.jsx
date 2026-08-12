"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Projects", to: "projects" },
];

const loadFromTop = {
  hidden: { y: -20, opacity: 0, filter: "blur(8px)" },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-[999] px-5 pt-5 sm:px-8 md:px-12">
      <div className="mx-auto flex max-w-[1800px] items-center justify-between">

        {/* left — name */}
        <motion.div variants={loadFromTop} initial="hidden" animate="show">
          <button
            onClick={() => scrollTo("home")}
            className="text-xl font-bold text-white/60 transition-all duration-300 hover:text-white/90"
          >
            wtorque
          </button>
        </motion.div>

        {/* Single long pill navbar — top right */}
        <motion.div
          variants={loadFromTop}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.14 }}
          className="hidden h-[59px] items-center rounded-full border border-white/[0.14] bg-[#0d0d0d] px-4 sm:flex"
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.to)}
              className="rounded-full px-8 py-3 text-base font-medium tracking-wide text-white/50 transition-all duration-300 hover:text-white/90"
            >
              {item.label}
            </button>
          ))}

          {/* Let's talk */}
          <button
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-2 rounded-full px-8 py-3 text-base font-medium tracking-wide text-white/50 transition-all duration-300 hover:text-white/90"
          >
            Let&apos;s talk
            <span className="text-white/50 text-sm leading-none">•</span>
          </button>
        </motion.div>

      </div>
    </header>
  );
}
