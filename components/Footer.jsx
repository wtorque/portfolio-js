export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-white/40">
      © {new Date().getFullYear()} wtorque. Built with Next.js, Tailwind &amp;
      Framer Motion.
    </footer>
  );
}
