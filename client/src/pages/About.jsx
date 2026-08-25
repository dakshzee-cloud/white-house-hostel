import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "locomotive-scroll/dist/locomotive-scroll.css";
import "../styles/About.css";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   SVG ICONS
========================================================= */

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M7 3v4M17 3v4M3 10h18" />
    <path d="M8 14h3M8 17h5" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="9" cy="8" r="3" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M3 20c0-4 2.5-6 6-6s6 2 6 6" />
    <path d="M15 14c3.5 0 6 2 6 6" />
  </svg>
);

const BadgeIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2l2 2 3-.5 1.5 2.5L21 7l-.5 3 1.5 2-1.5 2 .5 3-2.5 1-1.5 2.5-3-.5-2 2-2-2-3 .5L5.5 18 3 17l.5-3L2 12l1.5-2L3 7l2.5-1L7 3.5l3 .5 2-2Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 3 20 6v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const SofaIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M5 12V9a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3" />
    <path d="M3 12a2 2 0 0 1 2-2h1v6h12v-6h1a2 2 0 0 1 2 2v6H3v-6Z" />
    <path d="M5 18v2M19 18v2" />
  </svg>
);

const CommunityIcon = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="7" r="3" />
    <circle cx="5" cy="10" r="2" />
    <circle cx="19" cy="10" r="2" />
    <path d="M7 20v-1c0-3 2-5 5-5s5 2 5 5v1" />
    <path d="M2 19c0-2.5 1.5-4 4-4M22 19c0-2.5-1.5-4-4-4" />
  </svg>
);

const TargetIcon = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" />
    <path d="M15 9 21 3M17 3h4v4" />
  </svg>
);

const BuildingIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M5 21V4h10v17M15 9h4v12M8 7h2M8 11h2M8 15h2M12 7h1M12 11h1M12 15h1M3 21h18" />
  </svg>
);

const BedIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M3 7v13M21 12v8M3 17h18M6 12V9h5v3M11 12V9h5c3 0 5 2 5 5v3" />
  </svg>
);

const FoodIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M6 3v8M9 3v8M6 7h3M7.5 11v10M16 3v18M16 3c3 2 4 5 4 8h-4" />
  </svg>
);

const CleaningIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M9 3h6l1 4H8l1-4ZM12 7v5" />
    <path d="m7 12-3 8h16l-3-8H7Z" />
    <path d="M8 16h8" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M20 5.5c-2-2-5.2-1.8-7 .3L12 7l-1-1.2C9.2 3.7 6 3.5 4 5.5c-2.2 2.2-2 5.5.1 7.6L12 21l7.9-7.9c2.1-2.1 2.3-5.4.1-7.6Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M5 9h3v10H5V9Zm1.5-5A1.75 1.75 0 1 1 6.5 7.5 1.75 1.75 0 0 1 6.5 4ZM10 9h3v1.4c.7-1 1.8-1.7 3.5-1.7 3 0 4.5 1.9 4.5 5.3v5h-3v-4.6c0-1.7-.6-2.8-2-2.8-1.5 0-3 1-3 3.3V19h-3V9Z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

/* =========================================================
   DATA
========================================================= */

const missionCards = [
  {
    icon: <ShieldIcon />,
    title: "Safe & Secure",
    text: "Your safety is our top priority with 24/7 security, CCTV surveillance and secure access.",
  },
  {
    icon: <SofaIcon />,
    title: "Comfort First",
    text: "From cozy rooms to modern amenities, we ensure a comfortable living experience.",
  },
  {
    icon: <CommunityIcon />,
    title: "Community Living",
    text: "We bring like-minded people together and create a friendly and positive environment.",
  },
  {
    icon: <TargetIcon />,
    title: "Focus on Growth",
    text: "A peaceful space that helps you focus on your studies, work and personal growth.",
  },
];

const differenceCards = [
  {
    icon: <BuildingIcon />,
    title: "Prime Location",
    text: "Located close to colleges, transport and all essentials.",
  },
  {
    icon: <BedIcon />,
    title: "Modern Amenities",
    text: "High-speed Wi-Fi, study areas, RO water, laundry and more.",
  },
  {
    icon: <FoodIcon />,
    title: "Nutritious Food",
    text: "Hygienic and healthy meals that feel like home.",
  },
  {
    icon: <CleaningIcon />,
    title: "Clean & Hygienic",
    text: "Well-maintained rooms and regular housekeeping.",
  },
  {
    icon: <HeartIcon />,
    title: "Care That Counts",
    text: "We're always here to make your stay better.",
  },
];

const team = [
  {
    name: "Arjun Mehta",
    role: "Founder & Director",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=85",
  },
  {
    name: "Priya Sharma",
    role: "Operations Manager",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=85",
  },
  {
    name: "Rahul Verma",
    role: "Community Manager",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=85",
  },
  {
    name: "Sneha Iyer",
    role: "Guest Relations",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=85",
  },
];

/* =========================================================
   ABOUT
========================================================= */

function About() {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================================
       HERO INTRO
    ========================================= */

      const heroTl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      heroTl
        .fromTo(
          ".about-hero-image",
          {
            scale: 1.15,
          },
          {
            scale: 1,
            duration: 1.5,
          },
        )
        .from(
          ".about-hero-label",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.9",
        )
        .from(
          ".about-title-mask > span",
          {
            yPercent: 110,
            duration: 0.9,
            stagger: 0.1,
          },
          "-=0.65",
        )
        .from(
          ".about-hero-description",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
          },
          "-=0.45",
        );

      /* =========================================
       HERO PARALLAX
    ========================================= */

      gsap.to(".about-hero-image", {
        yPercent: 10,
        scale: 1.05,
        ease: "none",

        scrollTrigger: {
          trigger: ".about-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      /* =========================================
       STORY IMAGE
    ========================================= */

      gsap.fromTo(
        ".about-story-image-wrap",
        {
          opacity: 0,
          x: -60,
          clipPath: "inset(8% 8% 8% 8%)",
        },
        {
          opacity: 1,
          x: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ".about-story",
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      );

      /* =========================================
       STORY COPY
    ========================================= */

      gsap.fromTo(
        ".about-story-copy",
        {
          opacity: 0,
          x: 60,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ".about-story",
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      );

      /* =========================================
       STORY IMAGE PARALLAX
    ========================================= */

      gsap.fromTo(
        ".about-story-image",
        {
          yPercent: -5,
          scale: 1.1,
        },
        {
          yPercent: 6,
          scale: 1.03,
          ease: "none",

          scrollTrigger: {
            trigger: ".about-story-image-wrap",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );

      /* =========================================
       STATS
    ========================================= */

      gsap.fromTo(
        ".about-stat",
        {
          opacity: 0,
          y: 35,
          scale: 0.94,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: "back.out(1.4)",

          scrollTrigger: {
            trigger: ".about-stats",
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        },
      );

      /* =========================================
       MISSION
    ========================================= */

      gsap.fromTo(
        ".mission-card",
        {
          opacity: 0,
          y: 45,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ".mission-grid",
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        },
      );

      /* =========================================
       DIFFERENCE CARDS
    ========================================= */

      gsap.fromTo(
        ".difference-card",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ".difference-grid",
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        },
      );

      /* =========================================
       TEAM
    ========================================= */

      gsap.fromTo(
        ".team-card",
        {
          opacity: 0,
          y: 40,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ".team-grid",
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        },
      );

      /* =========================================
       CTA
    ========================================= */

      gsap.fromTo(
        ".about-bottom-cta-content",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ".about-bottom-cta",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );

      /* =========================================
       ICON POP
    ========================================= */

      gsap.utils
        .toArray(
          ".mission-icon svg, .difference-icon svg, .about-stat-icon svg",
        )
        .forEach((icon) => {
          gsap.fromTo(
            icon,
            {
              scale: 0,
              rotation: -20,
            },
            {
              scale: 1,
              rotation: 0,
              duration: 0.6,
              ease: "back.out(1.8)",

              scrollTrigger: {
                trigger: icon,
                start: "top 92%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });
    }, pageRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <main ref={pageRef} className="about-page" data-scroll-container>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-hero" data-scroll-section>
        <img
          className="about-hero-image"
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=90"
          alt="Nestify Hostel"
        />

        <div className="about-hero-overlay" />

        <div className="about-container about-hero-content">
          <p className="about-hero-label">About Us</p>

          <h1 className="about-hero-title">
            <span className="about-title-mask">
              <span>More Than Just</span>
            </span>

            <span className="about-title-mask">
              <span>a Place to Stay</span>
            </span>
          </h1>

          <p className="about-hero-description">
            At Nestify Hostel, we believe a hostel is more
            <br />
            than just a roof over your head — it's a community,
            <br />a home, and an experience.
          </p>
        </div>
      </section>

      {/* =====================================================
          STORY
      ===================================================== */}

      <section className="about-story" data-scroll-section>
        <div className="about-container about-story-layout">
          <div className="about-story-image-wrap">
            <img
              className="about-story-image"
              src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1500&q=90"
              alt="Nestify Hostel Building"
            />
          </div>

          <div className="about-story-copy">
            <span className="about-label">OUR STORY</span>

            <h2>
              Built on Comfort.
              <br />
              Driven by Community.
            </h2>

            <p>
              Nestify Hostel was founded with a simple idea — to create a safe,
              comfortable and inspiring place where students and young
              professionals can live, learn and grow together.
            </p>

            <p>
              We know how important it is to have a space that feels like home,
              where you can focus on your goals while enjoying great company,
              modern amenities and complete peace of mind.
            </p>

            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-icon">
                  <CalendarIcon />
                </div>

                <strong>5+</strong>

                <span>
                  Years of
                  <br />
                  Hospitality
                </span>
              </div>

              <div className="about-stat">
                <div className="about-stat-icon">
                  <UsersIcon />
                </div>

                <strong>500+</strong>

                <span>
                  Happy
                  <br />
                  Residents
                </span>
              </div>

              <div className="about-stat">
                <div className="about-stat-icon">
                  <BadgeIcon />
                </div>

                <strong>24/7</strong>

                <span>
                  Support &
                  <br />
                  Assistance
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION
      ===================================================== */}

      <section className="about-mission" data-scroll-section>
        <div className="about-container">
          <div className="about-heading about-reveal">
            <span className="about-label">OUR MISSION</span>

            <h2>To Provide a Home That Inspires</h2>
          </div>

          <div className="mission-grid">
            {missionCards.map((item) => (
              <article className="mission-card" key={item.title}>
                <div className="mission-icon">{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          DIFFERENCE
      ===================================================== */}

      <section className="about-difference" data-scroll-section>
        <div className="about-container">
          <div className="difference-heading about-reveal">
            <span className="about-label">WHAT MAKES US DIFFERENT</span>
          </div>

          <div className="difference-grid">
            {differenceCards.map((item) => (
              <article key={item.title} className="difference-card">
                <div className="difference-icon">{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TEAM
      ===================================================== */}

      <section className="about-team" data-scroll-section>
        <div className="about-container">
          <div className="team-heading about-reveal">
            <span className="about-label">MEET THE TEAM</span>
          </div>

          <div className="team-grid">
            {team.map((member) => (
              <article key={member.name} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>

                <h3>{member.name}</h3>

                <p>{member.role}</p>

                <div className="team-socials">
                  <button type="button" aria-label={`${member.name} LinkedIn`}>
                    <LinkedinIcon />
                  </button>

                  <button type="button" aria-label={`Email ${member.name}`}>
                    <MailIcon />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA — NOT FOOTER
      ===================================================== */}

     
    </main>
  );
}

export default About;
