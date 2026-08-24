import { Outlet } from "react-router-dom";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/MainLayout.css";

gsap.registerPlugin(ScrollTrigger);


/* =====================================================
   LENIS + GSAP SCROLLTRIGGER SYNC
===================================================== */

function LenisGSAPSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // Update ScrollTrigger whenever Lenis scrolls
    const handleScroll = () => {
      ScrollTrigger.update();
    };

    lenis.on("scroll", handleScroll);

    // Connect Lenis to GSAP's ticker
    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);

    // Prevent GSAP from lag smoothing
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after everything loads
    const refresh = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", refresh);

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      lenis.off("scroll", handleScroll);

      gsap.ticker.remove(update);

      window.removeEventListener("load", refresh);
    };
  }, [lenis]);

  return null;
}


/* =====================================================
   MAIN LAYOUT
===================================================== */

function MainLayout() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        smoothTouch: false,
        autoRaf: false,
      }}
    >
      <LenisGSAPSync />

      <div className="site-wrapper">

        <Navbar />

        <main>
          <Outlet />
        </main>

        <Footer />

      </div>
    </ReactLenis>
  );
}

export default MainLayout;