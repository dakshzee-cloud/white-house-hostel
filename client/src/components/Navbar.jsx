import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

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

  // -----------------------------------------
  // SCROLL
  // -----------------------------------------

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // -----------------------------------------
  // NAVBAR ENTRANCE ANIMATION
  // -----------------------------------------

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".navbar-brand", {
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".nav-link",
          {
            y: -20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .from(
          ".booking-button",
          {
            x: 35,
            opacity: 0,
            scale: 0.9,
            duration: 0.7,
            ease: "back.out(1.7)",
          },
          "-=0.45"
        )
        .from(
          ".mobile-menu-button",
          {
            scale: 0.7,
            opacity: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.5"
        );
    },
    {
      scope: navbarRef,
    }
  );

  // -----------------------------------------
  // MOBILE MENU ANIMATION
  // -----------------------------------------

  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (menuOpen) {
      gsap.set(mobileMenuRef.current, {
        display: "flex",
      });

      const tl = gsap.timeline();

      tl.fromTo(
        mobileMenuRef.current,
        {
          opacity: 0,
          y: -25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        }
      ).from(
        mobileLinksRef.current.filter(Boolean),
        {
          opacity: 0,
          x: -25,
          duration: 0.4,
          stagger: 0.07,
          ease: "power3.out",
        },
        "-=0.15"
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(mobileMenuRef.current, {
            display: "none",
          });
        },
      });
    }
  }, [menuOpen]);

  // -----------------------------------------
  // CLOSE MENU
  // -----------------------------------------

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      ref={navbarRef}
      className={`site-navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="navbar-container">

        {/* LOGO */}

        <Link
          to="/"
          className="navbar-brand"
          onClick={closeMenu}
        >
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

              <path
                d="M20 42V29H30V42"
                stroke="currentColor"
                strokeWidth="2"
              />

              <path
                d="M25 16V11"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="brand-text">
            <span>NESTIFY</span>
            <small>HOSTEL</small>
          </div>
        </Link>

        {/* DESKTOP NAV */}

        <nav className="desktop-navigation">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Contact
          </NavLink>

        </nav>

        {/* BOOK BUTTON */}

        <Link
          to="/contact"
          className="booking-button"
        >
          <CalendarDays size={17} />

          <span>
            Book Your Stay
          </span>
        </Link>

        {/* MOBILE BUTTON */}

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}

      <div
        ref={mobileMenuRef}
        className="mobile-navigation"
      >

        <NavLink
          to="/"
          onClick={closeMenu}
          ref={(el) => {
            mobileLinksRef.current[0] = el;
          }}
          className={({ isActive }) =>
            isActive
              ? "mobile-nav-link active"
              : "mobile-nav-link"
          }
        >
          <span>01</span>
          Home
        </NavLink>

        <NavLink
          to="/gallery"
          onClick={closeMenu}
          ref={(el) => {
            mobileLinksRef.current[1] = el;
          }}
          className={({ isActive }) =>
            isActive
              ? "mobile-nav-link active"
              : "mobile-nav-link"
          }
        >
          <span>02</span>
          Gallery
        </NavLink>

        <NavLink
          to="/about"
          onClick={closeMenu}
          ref={(el) => {
            mobileLinksRef.current[2] = el;
          }}
          className={({ isActive }) =>
            isActive
              ? "mobile-nav-link active"
              : "mobile-nav-link"
          }
        >
          <span>03</span>
          About
        </NavLink>

        <NavLink
          to="/contact"
          onClick={closeMenu}
          ref={(el) => {
            mobileLinksRef.current[3] = el;
          }}
          className={({ isActive }) =>
            isActive
              ? "mobile-nav-link active"
              : "mobile-nav-link"
          }
        >
          <span>04</span>
          Contact
        </NavLink>

        <Link
          to="/contact"
          className="mobile-booking-button"
          onClick={closeMenu}
          ref={(el) => {
            mobileLinksRef.current[4] = el;
          }}
        >
          Book Your Stay

          <ArrowUpRight size={18} />
        </Link>

      </div>
    </header>
  );
}

export default Navbar;