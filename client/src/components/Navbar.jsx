import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, CalendarDays, ArrowUpRight } from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "../styles/Navbar.css";

gsap.registerPlugin(useGSAP);

function Navbar() {
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileLinksRef = useRef([]);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* =====================================================
     SCROLL DETECTION
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     NAVBAR ENTRANCE
  ===================================================== */

useGSAP(
  () => {
    if (!navbarRef.current) return;

    // Make sure everything starts visible in case React StrictMode reruns
    gsap.set(".navbar-brand, .nav-link, .booking-button", {
      autoAlpha: 1,
    });

    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    tl.fromTo(
      ".navbar-brand",
      {
        x: -35,
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 1,
        duration: 0.8,
        clearProps: "transform,opacity,visibility",
      },
    )

      .fromTo(
        ".nav-link",
        {
          y: -20,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",

          // VERY IMPORTANT
          clearProps: "transform,opacity,visibility",
        },
        "-=0.45",
      )

      .fromTo(
        ".booking-button",
        {
          x: 30,
          scale: 0.92,
          autoAlpha: 0,
        },
        {
          x: 0,
          scale: 1,
          autoAlpha: 1,
          duration: 0.65,
          ease: "back.out(1.7)",
          clearProps: "transform,opacity,visibility",
        },
        "-=0.45",
      );
  },
  {
    scope: navbarRef,
  },
);

  /* =====================================================
     NAVBAR SCROLL ANIMATION
  ===================================================== */

  useEffect(() => {
    const nav = navbarRef.current;

    if (!nav) return;

    if (scrolled) {
      gsap.to(nav, {
        backgroundColor: "rgba(247, 244, 236, 0.90)",
        boxShadow: "0 12px 35px rgba(12, 40, 26, 0.10)",
        duration: 0.45,
        ease: "power2.out",
      });

      gsap.to(".navbar-container", {
        height: 68,
        duration: 0.45,
        ease: "power2.out",
      });

      gsap.to(".navbar-brand", {
        scale: 0.95,
        duration: 0.45,
        ease: "power2.out",
      });
    } else {
      gsap.to(nav, {
        backgroundColor: "rgba(255,255,255,0)",
        boxShadow: "0 0 0 rgba(0,0,0,0)",
        duration: 0.45,
        ease: "power2.out",
      });

      gsap.to(".navbar-container", {
        height: 78,
        duration: 0.45,
        ease: "power2.out",
      });

      gsap.to(".navbar-brand", {
        scale: 1,
        duration: 0.45,
        ease: "power2.out",
      });
    }
  }, [scrolled]);

  /* =====================================================
     MOBILE MENU
  ===================================================== */

  useEffect(() => {
    const menu = mobileMenuRef.current;

    if (!menu) return;

    if (menuOpen) {
      document.body.style.overflow = "hidden";

      gsap.set(menu, {
        display: "flex",
        pointerEvents: "auto",
      });

      const tl = gsap.timeline();

      tl.fromTo(
        menu,
        {
          opacity: 0,
          clipPath: "inset(0 0 100% 0)",
        },
        {
          opacity: 1,
          clipPath: "inset(0 0 0% 0)",
          duration: 0.55,
          ease: "power3.out",
        },
      ).fromTo(
        mobileLinksRef.current.filter(Boolean),
        {
          opacity: 0,
          x: -35,
        },
        {
          opacity: 1,
          x: 0,
          stagger: 0.08,
          duration: 0.45,
          ease: "power3.out",
        },
        "-=0.25",
      );
    } else {
      document.body.style.overflow = "";

      gsap.to(menu, {
        opacity: 0,
        clipPath: "inset(0 0 100% 0)",
        duration: 0.35,
        ease: "power2.inOut",

        onComplete: () => {
          gsap.set(menu, {
            display: "none",
            pointerEvents: "none",
          });
        },
      });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* =====================================================
     MOBILE ICON ANIMATION
  ===================================================== */

  useEffect(() => {
    if (!navbarRef.current) return;

    gsap.fromTo(
      ".mobile-menu-button svg",
      {
        rotation: -45,
        opacity: 0,
        scale: 0.7,
      },
      {
        rotation: 0,
        opacity: 1,
        scale: 1,
        duration: 0.35,
        ease: "back.out(1.8)",
      },
    );
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      ref={navbarRef}
      className={`site-navbar ${
        scrolled ? "navbar-scrolled" : ""
      } ${menuOpen ? "menu-is-open" : ""}`}
    >
      <div className="navbar-container">
        {/* =========================
            BRAND
        ========================== */}

        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <div className="brand-mark">
            <svg
              viewBox="0 0 50 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 2L46 15V44L25 58L4 44V15L25 2Z"
                stroke="currentColor"
                strokeWidth="2.2"
              />

              <path
                d="M16 42V24L25 16L34 24V42"
                stroke="currentColor"
                strokeWidth="2"
              />

              <path d="M20 42V29H30V42" stroke="currentColor" strokeWidth="2" />

              <path d="M25 16V11" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          <div className="brand-text">
            <span>NESTIFY</span>
            <small>HOSTEL</small>
          </div>
        </Link>

        {/* =========================
            DESKTOP NAV
        ========================== */}

        <nav className="desktop-navigation">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/BookStay"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            BookStay
          </NavLink>
        </nav>

        {/* =========================
            DESKTOP BOOK
        ========================== */}

        <Link to="/BookStay" className="booking-button">
          <CalendarDays size={16} />

          <span>Book Your Stay</span>
        </Link>

        {/* =========================
            MOBILE BUTTON
        ========================== */}

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* =========================
          MOBILE MENU
      ========================== */}

      <div ref={mobileMenuRef} className="mobile-navigation">
        <div className="mobile-menu-top">
          <span>NAVIGATION</span>

          <span>NESTIFY HOSTEL</span>
        </div>

        <NavLink
          to="/"
          onClick={closeMenu}
          ref={(el) => {
            mobileLinksRef.current[0] = el;
          }}
          className={({ isActive }) =>
            isActive ? "mobile-nav-link active" : "mobile-nav-link"
          }
        >
          <span>01</span>

          <strong>Home</strong>

          <ArrowUpRight />
        </NavLink>

        <NavLink
          to="/gallery"
          onClick={closeMenu}
          ref={(el) => {
            mobileLinksRef.current[1] = el;
          }}
          className={({ isActive }) =>
            isActive ? "mobile-nav-link active" : "mobile-nav-link"
          }
        >
          <span>02</span>

          <strong>Gallery</strong>

          <ArrowUpRight />
        </NavLink>

        <NavLink
          to="/about"
          onClick={closeMenu}
          ref={(el) => {
            mobileLinksRef.current[2] = el;
          }}
          className={({ isActive }) =>
            isActive ? "mobile-nav-link active" : "mobile-nav-link"
          }
        >
          <span>03</span>

          <strong>About</strong>

          <ArrowUpRight />
        </NavLink>

        <NavLink
          to="/contact"
          onClick={closeMenu}
          ref={(el) => {
            mobileLinksRef.current[3] = el;
          }}
          className={({ isActive }) =>
            isActive ? "mobile-nav-link active" : "mobile-nav-link"
          }
        >
          <span>04</span>

          <strong>Contact</strong>

          <ArrowUpRight />
        </NavLink>

        <Link
          to="/book"
          className="mobile-booking-button"
          onClick={closeMenu}
          ref={(el) => {
            mobileLinksRef.current[4] = el;
          }}
        >
          <div>
            <small>READY TO STAY?</small>

            <span>Book Your Stay</span>
          </div>

          <ArrowUpRight size={20} />
        </Link>

        <div className="mobile-menu-bottom">
          <span>Mumbai, India</span>

          <span>EST. 2026</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
