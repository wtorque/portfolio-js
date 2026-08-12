"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Mail, Send, Sparkles, Terminal } from "lucide-react";
import Link from "next/link";import {
  SiJavascript,
  SiDiscord,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiReact,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import { FaHtml5, FaCss3, FaGithub, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";

// ─── HERO HEADINGS ──────────────────────────────────────────────
const HERO_HEADINGS = [
  ["Beautiful", "Websites", "That work."],
  ["Modern", "Websites", "With purpose."],
  ["Digital", "Experiences", "Made simple."],
  ["Ideas", "Made", "Digital."],
  ["Websites", "Made", "Thoughtfully."],
  ["Simple", "Websites", "Done right."],
  ["Clean", "Designs", "That work."],
  ["Digital", "Experiences", "With purpose."],
  ["Thoughtful", "Designs", "Built well."],
  ["Websites", "That feel", "Different."],
  ["Designing", "Digital", "Experiences."],
  ["Building", "Digital", "Experiences."],
  ["Ideas", "Into", "Experiences."],
  ["From ideas", "To digital", "Experiences."],
  ["Design", "That feels", "Effortless."],
  ["Simple", "Design", "Better experiences."],
  ["Websites", "With", "A purpose."],
  ["Creating", "Things", "That matter."],
  ["Digital", "Things", "Made better."],
  ["Crafting", "The modern", "Web."],
];

// ─── ANIMATION VARIANTS ─────────────────────────────────────────
const revealUp = {
  hidden: { y: "120%" },
  show: { y: "0%", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 38, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── TEXT REVEAL HELPER ─────────────────────────────────────────
function TextReveal({ children, delay }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        variants={revealUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

// ─── MAIN PAGE ──────────────────────────────────────────────────
export default function Home() {
  const [headingIndex, setHeadingIndex] = useState(0);

  useEffect(() => {
    setHeadingIndex(Math.floor(Math.random() * HERO_HEADINGS.length));
  }, []);

  const heading = HERO_HEADINGS[headingIndex];

  // ── data ──
  const aboutSkills = [
    { name: "JavaScript", icon: SiJavascript },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Discord.js", icon: SiDiscord },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Git", icon: SiGit },
    { name: "CSS", icon: SiCss },
    { name: "HTML", icon: SiHtml5 },
  ];

  const experiences = [
    {
      title: "Web Development",
      company: "Independent Developer",
      period: "Ongoing",
      duration: "Projects",
      text: "Building responsive web interfaces and modern frontend experiences using React, Next.js, JavaScript, and Tailwind CSS. Projects include complete web apps, landing pages, and UI-focused builds.",
    },
    {
      title: "Discord Bot Development",
      company: "Independent Developer",
      period: "Ongoing",
      duration: "Projects",
      text: "Developing advanced Discord bots with JavaScript, Node.js, and Discord.js. Covers security, moderation, automation, anti-nuke systems, ticket handling, music playback, and full server management.",
    },
    {
      title: "Real-World Projects",
      company: "Independent Developer",
      period: "Ongoing",
      duration: "Live Work",
      text: "Shipped real projects including Oxicare OS (hospital management platform), Torque Prime (Discord security & moderation bot), and Vexa Music (Discord music bot with FFmpeg and yt-dlp).",
    },
  ];

  const projects = [
    {
      title: "Oxicare OS",
      type: "Hospital OS Platform",
      year: "2026",
      description:
        "A comprehensive hospital management and operating system platform built for modern healthcare workflows, patient records, staff coordination, and clinical operations.",
      stack: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "React", icon: SiReact },
        { name: "JavaScript", icon: SiJavascript },
      ],
      live: "#",
      github: "https://github.com/wtorque",
    },
    {
      title: "Torque Prime",
      type: "Discord Bot",
      year: "2026",
      description:
        "An advanced Discord bot built for security, moderation, automation, anti-nuke protection, ticket systems, and complete server management.",
      stack: [
        { name: "JavaScript", icon: SiJavascript },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Discord.js", icon: SiDiscord },
      ],
      live: "#",
      github: "https://github.com/wtorque",
    },
    {
      title: "Vexa Music",
      type: "Discord Music Bot",
      year: "2026",
      description:
        "A Discord music bot delivering high-quality audio playback, queue management, and full music controls powered by FFmpeg and yt-dlp.",
      stack: [
        { name: "JavaScript", icon: SiJavascript },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Discord.js", icon: SiDiscord },
        { name: "FFmpeg", icon: Terminal },
      ],
      live: "#",
      github: "https://github.com/wtorque",
    },
  ];

  const socialLinks = [
    { label: "GitHub", value: "wtorque", href: "https://github.com/wtorque", icon: FaGithub },
    { label: "LinkedIn", value: "Harshh", href: "https://www.linkedin.com/in/harsh-agre-1a7697419", icon: FaLinkedin },
    { label: "Instagram", value: "hashu.xe", href: "https://instagram.com/hashu.xe", icon: FaInstagram },
    { label: "Discord", value: "wtorque", href: "#", icon: FaDiscord },
  ];

  // ── experience stripe animation ──
  const stripeRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stripeRef,
    offset: ["start 70%", "end 40%"],
  });
  const stripeProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.45,
  });

  // ── contact form state ──
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | success | error
  const [formError, setFormError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const mob = form.mob.value.trim();
    const message = form.message.value.trim();

    if (!name || !message) {
      setFormError("Name and message are required.");
      return;
    }

    setFormStatus("sending");
    setFormError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, mobile: mob, message }),
      });
      const data = await res.json();
      if (!res.ok) {
        setFormError(data.error || "Failed to send. Please try again.");
        setFormStatus("error");
      } else {
        setFormStatus("success");
        form.reset();
      }
    } catch {
      setFormError("Something went wrong. Please try again.");
      setFormStatus("error");
    }
  }

  return (
    <main className="relative overflow-hidden bg-black text-white">

      {/* ═══════════════════════════════════════════════
          HOME SECTION
      ═══════════════════════════════════════════════ */}
      <section
        id="home"
        className="relative z-10 flex min-h-screen items-center px-5 pb-10 pt-34 sm:px-8 md:px-12 md:pt-22"
      >
        <div className="mx-auto grid w-full max-w-[1800px] items-end gap-12 lg:grid-cols-[1.15fr_.85fr]">
          {/* LEFT */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.1 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/60 backdrop-blur-xl"
            >
              <Sparkles size={15} className="text-white" />
              Web Developer Learner • Discord Bot Developer
            </motion.div>

            <h1
              key={headingIndex}
              className="max-w-6xl text-[4rem] font-semibold leading-[0.86] tracking-[-0.07em] text-white sm:text-[13vw] lg:text-[6vw]"
            >
              <TextReveal delay={1}>{heading[0]}</TextReveal>
              <TextReveal delay={2}>{heading[1]}</TextReveal>
              <TextReveal delay={3}>{heading[2]}</TextReveal>
            </h1>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.45 }}
              className="mt-8 grid max-w-3xl gap-6 md:grid-cols-[1fr_auto]"
            >
              <p className="max-w-xl text-base leading-8 text-white/55 md:text-lg">
                I'm a web developer learner building modern interfaces and
                creating Discord bots with JavaScript and Node.js.
                <span className="mt-2 block text-white/70">
                  Also available for freelancing work.
                </span>
              </p>

              <div className="flex items-start gap-3">
                <button
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="group relative hidden h-14 items-center justify-center overflow-hidden rounded-full bg-white/5 px-7 text-sm font-bold uppercase text-white shadow-[0_20px_70px_rgba(0,0,0,0.18)] transition duration-300 hover:text-black sm:inline-flex"
                >
                  <span className="relative z-10 flex items-center gap-3">View Work</span>
                  <ArrowUpRight
                    size={18}
                    className="relative z-10 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black"
                  />
                  <span className="absolute inset-0 translate-y-full rounded-full bg-white transition duration-250 ease-out group-hover:translate-y-0" />
                </button>

                <a
                  href="mailto:wtorque@outlook.com"
                  className="group grid h-14 w-14 place-items-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl transition hover:bg-white hover:text-black"
                  aria-label="Contact"
                >
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.35 }}
            className="relative mx-auto w-full"
          >
            <div className="relative overflow-hidden rounded-[36px] bg-black p-0 shadow-[0_40px_140px_rgba(0,0,0,0.65)]">
              <video
                src="/assets/right_vid1.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-[360px] w-full rounded-[36px] bg-black object-cover brightness-75 contrast-125 sm:h-[430px] lg:h-[520px]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-black/25" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          ABOUT SECTION
      ═══════════════════════════════════════════════ */}
      <section id="about" className="relative z-10 px-5 pb-24 pt-24 sm:px-8 md:px-12 lg:pt-32">
        {/* background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-180px] top-[15%] h-[420px] w-[420px] rounded-full bg-white/10 blur-[160px]" />
          <div className="absolute bottom-[-220px] right-[-160px] h-[520px] w-[520px] rounded-full bg-white/10 blur-[170px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:90px_90px] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
        </div>

        <div className="mx-auto max-w-[1800px]">
          {/* top */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.08 }}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/60 backdrop-blur-xl"
              >
                <Sparkles size={15} />
                About Me / Skills / Experience
              </motion.div>

              <h2 className="max-w-6xl text-[4rem] font-semibold leading-[0.86] tracking-[-0.07em] text-white sm:text-[13vw] lg:text-[6vw]">
                <span className="block overflow-hidden">
                  <motion.span
                    variants={revealUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="block"
                  >
                    About
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span
                    variants={revealUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                    className="block"
                  >
                    Me
                  </motion.span>
                </span>
              </h2>
            </div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.36 }}
              className="max-w-2xl text-base leading-8 text-white/50 md:text-lg"
            >
              I am a frontend-focused developer who enjoys building smooth,
              responsive, premium web interfaces. I focus on clean layouts,
              motion, glass-style UI, and practical frontend design.
            </motion.p>
          </div>

          {/* about text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-20 max-w-5xl"
          >
            <h3 className="text-4xl font-medium tracking-[-0.07em] text-white md:text-6xl">
              Frontend design with smooth interaction.
            </h3>
            <p className="mt-7 max-w-3xl text-base leading-8 text-white/45 md:text-lg">
              I like creating websites and dashboards that feel polished, fast,
              responsive, and visually clean. My work includes landing pages,
              admin interfaces, portfolio pages, animations, and frontend UI
              improvements.
            </p>
          </motion.div>

          {/* skills */}
          <div className="mt-16 md:mt-28">
            <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <h3 className="text-5xl font-medium tracking-[-0.07em] text-white md:text-7xl">
                Skills
              </h3>
              <p className="max-w-md text-sm leading-6 text-white/40">
                Tools I use for building animated, responsive, and modern web experiences.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {aboutSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: index * 0.035 }}
                    className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:bg-white hover:text-black"
                  >
                    <div className="mb-10 flex items-center justify-between">
                      <Icon className="text-4xl text-white/70 transition duration-500 group-hover:text-black" />
                      <span className="translate-y-2 text-2xl opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">↗</span>
                    </div>
                    <h4 className="text-xl font-medium tracking-[-0.05em] text-white transition duration-500 group-hover:text-black">
                      {skill.name}
                    </h4>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* experience */}
          <div ref={stripeRef} className="relative mt-32">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-14 md:mb-20"
            >
              <h3 className="text-5xl font-medium tracking-[-0.07em] text-white md:text-7xl">
                Experience
              </h3>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/45">
                A simple timeline of my frontend work, internship experience, and website template projects.
              </p>
            </motion.div>

            {/* curved stripe */}
            <div className="pointer-events-none absolute inset-0 hidden lg:block">
              <svg
                className="absolute left-1/2 top-16 h-[1050px] w-[900px] -translate-x-1/2 overflow-visible"
                viewBox="0 0 900 1050"
                fill="none"
              >
                <path
                  d="M455 0 C120 180 760 335 415 515 C105 675 750 760 445 1050"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="20"
                  strokeLinecap="round"
                />
                <motion.path
                  d="M455 0 C120 180 760 335 415 515 C105 675 750 760 445 1050"
                  stroke="white"
                  strokeWidth="20"
                  strokeLinecap="round"
                  style={{ pathLength: stripeProgress }}
                />
              </svg>
            </div>

            <div className="relative space-y-16 lg:space-y-28">
              {experiences.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 70, filter: "blur(14px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.85, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative z-10 max-w-xl ${index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"}`}
                >
                  <div className="rounded-[34px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl sm:p-8">
                    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/35">
                          {item.company}
                        </p>
                        <h4 className="mt-3 text-3xl font-medium leading-none tracking-[-0.06em] text-white md:text-4xl">
                          {item.title}
                        </h4>
                      </div>
                      <span className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white/45">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-white/35">{item.period}</p>
                    <p className="mt-5 text-base leading-8 text-white/50">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* about bottom cta */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-20 rounded-[40px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl md:mt-32 md:p-12"
          >
            <h3 className="max-w-4xl text-3xl font-medium leading-[0.95] tracking-[-0.07em] md:text-5xl">
              I build clean frontend experiences.
            </h3>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/45">
              Open to frontend work, portfolio websites, landing pages, dashboards, and animated UI sections.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative mt-9 inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white/5 px-8 text-sm font-bold uppercase text-white transition duration-300 hover:text-black"
            >
              <span className="relative z-10 flex items-center gap-3">
                Contact Me
                <ArrowUpRight size={18} className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black" />
              </span>
              <span className="absolute inset-0 translate-y-full rounded-full bg-white transition duration-300 ease-out group-hover:translate-y-0" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PROJECTS SECTION
      ═══════════════════════════════════════════════ */}
      <section id="projects" className="relative z-10 px-5 pb-24 pt-24 sm:px-8 md:px-12 lg:pt-32">
        {/* background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-180px] top-[10%] h-[420px] w-[420px] rounded-full bg-white/10 blur-[160px]" />
          <div className="absolute bottom-[-220px] right-[-160px] h-[520px] w-[520px] rounded-full bg-white/10 blur-[170px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:90px_90px] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
        </div>

        <div className="mx-auto max-w-[1800px]">
          {/* heading */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.08 }}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/60 backdrop-blur-xl"
              >
                <Sparkles size={15} />
                Selected Work / Projects
              </motion.div>

              <h2 className="max-w-6xl text-[4rem] font-semibold leading-[0.86] tracking-[-0.07em] text-white sm:text-[13vw] lg:text-[6vw]">
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "120%" }}
                    whileInView={{ y: "0%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="block"
                  >
                    Projects
                  </motion.span>
                </span>
              </h2>
            </div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.36 }}
              className="max-w-2xl text-base leading-8 text-white/50 md:text-lg"
            >
              A collection of websites, dashboards, APIs, and frontend projects built
              with smooth animations, clean layouts, and black-white premium styling.
            </motion.p>
          </div>

          {/* featured */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.48 }}
            className="mt-20 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-2xl md:p-8"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-4xl">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/35">
                  Featured Project
                </p>
                <h3 className="mt-5 text-5xl font-medium leading-[0.9] tracking-[-0.07em] text-white md:text-7xl">
                  Portfolio experience.
                </h3>
                <p className="mt-7 max-w-2xl text-base leading-8 text-white/45">
                  A curated collection of projects highlighting modern UI design,
                  responsive layouts, smooth interactions, and real-world frontend implementation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* project list */}
          <div className="mt-20 flex flex-col gap-10 md:mt-28">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-2xl transition duration-500 hover:bg-white hover:text-black sm:p-7"
              >
                <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-3xl">
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white/40 transition group-hover:border-black/10 group-hover:bg-black/5 group-hover:text-black/50">
                        {project.type}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white/40 transition group-hover:border-black/10 group-hover:bg-black/5 group-hover:text-black/50">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="text-4xl font-medium leading-none tracking-[-0.07em] text-white transition group-hover:text-black md:text-6xl">
                      {project.title}
                    </h3>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-white/45 transition group-hover:text-black/55">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-5 lg:items-end">
                    <div className="flex flex-wrap gap-3 lg:justify-end">
                      {project.stack.map((tech) => {
                        const Icon = tech.icon;
                        return (
                          <span
                            key={tech.name}
                            className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/60 transition group-hover:border-black/10 group-hover:bg-black/5 group-hover:text-black/60"
                          >
                            <Icon className="text-base" />
                            {tech.name}
                          </span>
                        );
                      })}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="grid h-13 w-13 place-items-center rounded-full bg-white text-black transition group-hover:bg-black group-hover:text-white"
                        aria-label="View live project"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="grid h-13 w-13 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition group-hover:border-black/10 group-hover:bg-black/5 group-hover:text-black"
                        aria-label="View github"
                      >
                        <FaGithub size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              </motion.article>
            ))}
          </div>

          {/* projects cta */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-20 rounded-[40px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl md:mt-32 md:p-12"
          >
            <h3 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.07em] md:text-7xl">
              Have a project idea?
            </h3>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/45">
              I can help with portfolios, landing pages, dashboard UI, frontend animations, and responsive web experiences.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative mt-9 inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white/5 px-8 text-sm font-bold uppercase text-white transition duration-300 hover:text-black"
            >
              <span className="relative z-10 flex items-center gap-3">
                Contact Me
                <ArrowUpRight size={18} className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black" />
              </span>
              <span className="absolute inset-0 translate-y-full rounded-full bg-white transition duration-300 ease-out group-hover:translate-y-0" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CONTACT SECTION
      ═══════════════════════════════════════════════ */}
      <section id="contact" className="relative z-10 px-5 pb-24 pt-24 sm:px-8 md:px-12 lg:pt-32">
        <div className="mx-auto max-w-[1800px]">
          {/* heading */}
          <h2 className="max-w-6xl text-[4rem] font-semibold leading-[0.86] tracking-[-0.07em] text-white sm:text-[13vw] lg:text-[6vw]">
            <span className="block overflow-hidden">
              <motion.span
                variants={revealUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Contact
              </motion.span>
            </span>
          </h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.32 }}
            className="mt-8 max-w-2xl text-base leading-8 text-white/45 md:text-lg"
          >
            Have a project, website idea, dashboard, or frontend work? Send me a
            message and I&apos;ll get back to you.
          </motion.p>

          {/* form + info */}
          <div className="mt-14 flex flex-col gap-8 lg:mt-20 lg:flex-row lg:items-start lg:justify-between lg:gap-14">
            {/* form */}
            <motion.form
              onSubmit={handleSubmit}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.45 }}
              className="w-full rounded-[28px] border border-white/10 bg-white/[0.035] p-5 shadow-[0_40px_140px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:p-8 md:p-10 lg:max-w-4xl"
            >
              <div className="mb-8 flex items-center justify-between gap-2 md:mb-12 md:gap-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-white/30">Message</p>
                  <h3 className="mt-3 text-3xl font-medium tracking-[-0.06em] text-white md:text-5xl">
                    Tell me about it
                  </h3>
                </div>
                <div className="hidden h-14 w-14 place-items-center rounded-full border border-white/10 bg-white/5 text-white md:grid">
                  <Send size={20} />
                </div>
              </div>

              <div className="space-y-9">
                {/* name */}
                <div className="group relative">
                  <label className="mb-3 block text-sm font-medium uppercase tracking-[0.18em] text-white/35">Name <span className="text-white/25 normal-case tracking-normal">*</span></label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    disabled={formStatus === "sending"}
                    className="peer block w-full border-0 border-b border-white/20 bg-transparent px-0 py-2 text-base text-white outline-none placeholder:text-white/20 focus:border-white/70 disabled:opacity-50 sm:text-lg md:py-4"
                  />
                  <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-center scale-x-0 rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] peer-focus:scale-x-100" />
                  <span className="pointer-events-none absolute bottom-[-10px] left-1/2 h-6 w-0 -translate-x-1/2 rounded-full bg-white/20 blur-xl transition-all duration-500 peer-focus:w-full" />
                </div>
                {/* email */}
                <div className="group relative">
                  <label className="mb-3 block text-sm font-medium uppercase tracking-[0.18em] text-white/35">Email <span className="text-white/25 normal-case tracking-normal">(Optional)</span></label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    disabled={formStatus === "sending"}
                    className="peer block w-full border-0 border-b border-white/20 bg-transparent px-0 py-2 text-base text-white outline-none placeholder:text-white/20 focus:border-white/70 disabled:opacity-50 sm:text-lg md:py-4"
                  />
                  <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-center scale-x-0 rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] peer-focus:scale-x-100" />
                  <span className="pointer-events-none absolute bottom-[-10px] left-1/2 h-6 w-0 -translate-x-1/2 rounded-full bg-white/20 blur-xl transition-all duration-500 peer-focus:w-full" />
                </div>
                {/* mobile */}
                <div className="group relative">
                  <label className="mb-3 block text-sm font-medium uppercase tracking-[0.18em] text-white/35">Mobile <span className="text-white/25 normal-case tracking-normal">(Optional)</span></label>
                  <input
                    type="number"
                    name="mob"
                    placeholder="Enter your mobile"
                    disabled={formStatus === "sending"}
                    className="peer block w-full border-0 border-b border-white/20 bg-transparent px-0 py-2 text-base text-white outline-none placeholder:text-white/20 focus:border-white/70 disabled:opacity-50 sm:text-lg md:py-4"
                  />
                  <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-center scale-x-0 rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] peer-focus:scale-x-100" />
                  <span className="pointer-events-none absolute bottom-[-10px] left-1/2 h-6 w-0 -translate-x-1/2 rounded-full bg-white/20 blur-xl transition-all duration-500 peer-focus:w-full" />
                </div>
                {/* message */}
                <div className="group relative">
                  <label className="mb-3 block text-sm font-medium uppercase tracking-[0.18em] text-white/35">Message <span className="text-white/25 normal-case tracking-normal">*</span></label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Enter your message"
                    disabled={formStatus === "sending"}
                    className="peer block w-full resize-none border-0 border-b border-white/20 bg-transparent px-0 py-2 text-base text-white outline-none placeholder:text-white/20 focus:border-white/70 disabled:opacity-50 sm:text-lg md:py-4"
                  />
                  <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-center scale-x-0 rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] peer-focus:scale-x-100" />
                  <span className="pointer-events-none absolute bottom-[-10px] left-1/2 h-6 w-0 -translate-x-1/2 rounded-full bg-white/20 blur-xl transition-all duration-500 peer-focus:w-full" />
                </div>
              </div>

              {/* error message */}
              {formStatus === "error" && formError && (
                <p className="mt-6 text-sm text-red-400">{formError}</p>
              )}

              {/* success message */}
              {formStatus === "success" && (
                <p className="mt-6 text-sm text-white/70">
                  ✓ Message sent successfully. I&apos;ll get back to you soon.
                </p>
              )}

              <button
                type="submit"
                disabled={formStatus === "sending" || formStatus === "success"}
                className="group relative mt-8 inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white/5 px-8 text-sm font-bold uppercase text-white shadow-[0_20px_70px_rgba(0,0,0,0.18)] transition duration-300 hover:text-black disabled:cursor-not-allowed disabled:opacity-50 md:mt-12"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {formStatus === "sending" ? "Sending..." : "Send Message"}
                  {formStatus !== "sending" && (
                    <ArrowUpRight size={18} className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black" />
                  )}
                </span>
                {formStatus !== "sending" && (
                  <span className="absolute inset-0 translate-y-full rounded-full bg-white transition duration-300 ease-out group-hover:translate-y-0" />
                )}
              </button>
            </motion.form>

            {/* right info */}
            <motion.aside
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.58 }}
              className="w-full min-w-0 lg:sticky lg:top-36 lg:max-w-xl"
            >
              <div className="rounded-[28px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-2xl sm:p-8">
                <p className="text-sm uppercase tracking-[0.25em] text-white/30">Contact Info</p>
                <h3 className="mt-4 text-4xl font-medium leading-[0.95] tracking-[-0.07em] text-white md:text-5xl">
                  Let&apos;s build something.
                </h3>

                <div className="mt-10 space-y-4">
                  <a
                    href="mailto:wtorque@outlook.com"
                    className="group flex items-center justify-between rounded-[24px] border border-white/10 bg-black/30 p-4 transition duration-300 hover:bg-white hover:text-black"
                  >
                    <span className="flex min-w-0 items-center gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 transition group-hover:bg-black group-hover:text-white">
                        <Mail size={18} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-[0.18em] text-white/35 transition group-hover:text-black/40">Email</span>
                        <span className="mt-1 hidden truncate text-sm font-medium sm:block">wtorque@outlook.com</span>
                        <span className="mt-1 block text-sm font-medium sm:hidden">Go to mail</span>
                      </span>
                    </span>
                    <ArrowUpRight size={18} />
                  </a>

                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href !== "#" ? "_blank" : undefined}
                        rel="noreferrer"
                        className="group flex items-center justify-between rounded-[24px] border border-white/10 bg-black/30 p-4 transition duration-300 hover:bg-white hover:text-black"
                      >
                        <span className="flex min-w-0 items-center gap-4">
                          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 transition group-hover:bg-black group-hover:text-white">
                            <Icon size={18} />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-xs uppercase tracking-[0.18em] text-white/35 transition group-hover:text-black/40">{link.label}</span>
                            <span className="mt-1 block truncate text-sm font-medium">{link.value}</span>
                          </span>
                        </span>
                        <ArrowUpRight size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 rounded-4xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm text-white/40 backdrop-blur-2xl md:rounded-full">
                Available for frontend, portfolio, landing page and dashboard work.
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

    </main>
  );
}
