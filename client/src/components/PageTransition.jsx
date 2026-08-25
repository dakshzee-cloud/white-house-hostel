import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

function PageTransition() {
  const transitionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const panel = transitionRef.current;

    if (!panel) return;

    const tl = gsap.timeline();

    /*
      New route reveal.

      Panel starts covering screen,
      then leaves upward.
    */

    gsap.set(panel, {
      yPercent: 0,
    });

    tl.to(panel, {
      yPercent: -100,
      duration: 0.85,
      ease: "power4.inOut",
      delay: 0.05,
    }).set(panel, {
      yPercent: 100,
    });

    return () => {
      tl.kill();
    };
  }, [location.pathname]);

  return (
    <div ref={transitionRef} className="page-transition">
      <div className="page-transition-inner">
        <div className="transition-logo">
          <svg viewBox="0 0 50 60" fill="none">
            <path
              d="M25 2L46 15V44L25 58L4 44V15L25 2Z"
              stroke="currentColor"
              strokeWidth="2"
            />

            <path
              d="M16 42V24L25 16L34 24V42"
              stroke="currentColor"
              strokeWidth="2"
            />

            <path d="M20 42V29H30V42" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        <span>NESTIFY HOSTEL</span>
      </div>
    </div>
  );
}

export default PageTransition;
