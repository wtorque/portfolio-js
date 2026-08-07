"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

export default function ClientProviders({ children }) {
  useEffect(() => {
    let lenis;
    let rafId;

    function initLenis() {
      const isSmallScreen = window.innerWidth < 640;

      if (isSmallScreen) {
        if (lenis) {
          lenis.destroy();
          lenis = null;
        }
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
        return;
      }

      if (lenis) return;

      lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.4,
      });

      function raf(time) {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    }

    initLenis();
    window.addEventListener("resize", initLenis);

    return () => {
      window.removeEventListener("resize", initLenis);
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-black font-[Poppins]">
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  );
}
