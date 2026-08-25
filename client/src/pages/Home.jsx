import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Home.css";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   SVG ICONS
========================================================= */

const BedIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M3 6v12M21 11v7M3 15h18M6 11V8.5C6 7.67 6.67 7 7.5 7h3C11.33 7 12 7.67 12 8.5V11M12 11V9.5c0-.83.67-1.5 1.5-1.5H18c1.66 0 3 1.34 3 3v4" />
  </svg>
);

const WifiIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M3 8.5C8.2 4.1 15.8 4.1 21 8.5M6.5 12c3.2-2.7 7.8-2.7 11 0M10 15.5c1.2-1 2.8-1 4 0" />
    <circle cx="12" cy="19" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const FoodIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M6 3v7M9 3v7M6 7h3M7.5 10v11M16 3v18M16 3c3 2 4 5 4 8h-4" />
  </svg>
);

const ShowerIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M5 10h14M8 10V8a4 4 0 0 1 8 0v2" />
    <path d="M8 14v1M12 14v1M16 14v1M8 18v1M12 18v1M16 18v1" />
  </svg>
);

const ParkingIcon = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" />
    <path d="M10 17V7h4a3 3 0 0 1 0 6h-4M10 13h4" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="9" cy="8" r="3" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M3 20v-1c0-3.3 2.7-6 6-6s6 2.7 6 6v1M15 14c3.3 0 6 2.7 6 6" />
  </svg>
);

const BookIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M4 5c3-1 5-.3 8 2v13c-3-2.3-5-3-8-2V5ZM20 5c-3-1-5-.3-8 2v13c3-2.3 5-3 8-2V5Z" />
  </svg>
);

const CupIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M5 8h11v6a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V8ZM16 10h2a2 2 0 0 1 0 4h-2M8 3c0 1 1 1.5 1 2.5M12 3c0 1 1 1.5 1 2.5" />
  </svg>
);

const DumbbellIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M4 9v6M7 7v10M17 7v10M20 9v6M7 12h10M2 10v4M22 10v4" />
  </svg>
);

const TreeIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="m12 3-5 7h3l-4 6h5v5h2v-5h5l-4-6h3l-5-7Z" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 21s6-6 6-11a6 6 0 1 0-12 0c0 5 6 11 6 11Z" />
    <circle cx="12" cy="10" r="2" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M5 12h14M14 7l5 5-5 5" />
  </svg>
);

/* =========================================================
   DATA
========================================================= */

const features = [
  {
    icon: <BedIcon />,
    title: "Comfortable Rooms",
    text: "Spacious, cozy and fully furnished rooms.",
  },
  {
    icon: <WifiIcon />,
    title: "High-Speed Wi-Fi",
    text: "Stay connected with blazing fast internet.",
  },
  {
    icon: <ShieldIcon />,
    title: "24/7 Security",
    text: "CCTV surveillance and secure environment.",
  },
  {
    icon: <FoodIcon />,
    title: "Dining Area",
    text: "Hygienic and nutritious food available.",
  },
  {
    icon: <ShowerIcon />,
    title: "Clean Facilities",
    text: "Daily housekeeping and clean washrooms.",
  },
  {
    icon: <ParkingIcon />,
    title: "Parking Space",
    text: "Safe parking for bikes and cars.",
  },
];

const rooms = [
  {
    title: "Single Room",
    text: "Perfect for those who value privacy and personal space.",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Double Sharing",
    text: "Share with a friend and enjoy more, together.",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Triple Sharing",
    text: "Affordable and comfortable for best friendships.",
    image:
      "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Dormitory",
    text: "Great for groups and budget-friendly stays.",
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=900&q=85",
  },
];

const facilities = [
  {
    icon: <UsersIcon />,
    title: "Common Area",
    text: "Relax, connect and make memories.",
  },
  {
    icon: <BookIcon />,
    title: "Study Room",
    text: "Peaceful space to focus and grow.",
  },
  {
    icon: <CupIcon />,
    title: "Kitchen",
    text: "Fully equipped kitchen for your convenience.",
  },
  {
    icon: <DumbbellIcon />,
    title: "Fitness Corner",
    text: "Stay fit with our basic fitness equipment.",
  },
  {
    icon: <TreeIcon />,
    title: "Outdoor Space",
    text: "Fresh air, greenery and a calm environment.",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
];

function Home() {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* =====================================================
         HERO INTRO
      ===================================================== */

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      heroTimeline
        .fromTo(
          ".hostel-hero-bg",
          {
            scale: 1.22,
            filter: "brightness(0.65)",
          },
          {
            scale: 1,
            filter: "brightness(1)",
            duration: 1.8,
          },
        )
        .from(
          ".hostel-hero h1",
          {
            opacity: 0,
            y: 75,
            duration: 1,
          },
          "-=1.1",
        )
        .from(
          ".hostel-hero-content > p",
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
          },
          "-=0.65",
        )
        .from(
          ".hero-actions a",
          {
            opacity: 0,
            y: 25,
            stagger: 0.12,
            duration: 0.6,
          },
          "-=0.45",
        )
        .from(
          ".hero-scroll",
          {
            opacity: 0,
            y: 15,
            duration: 0.5,
          },
          "-=0.3",
        );

      /* =====================================================
         HERO SCROLL PARALLAX
      ===================================================== */

      gsap.to(".hostel-hero-bg", {
        yPercent: 14,
        scale: 1.05,
        ease: "none",

        scrollTrigger: {
          trigger: ".hostel-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(".hostel-hero-content", {
        y: 90,
        opacity: 0.15,
        ease: "none",

        scrollTrigger: {
          trigger: ".hostel-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      /* =====================================================
         SCROLL INDICATOR
      ===================================================== */

      gsap.to(".scroll-circle", {
        y: 5,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =====================================================
         FEATURES
      ===================================================== */

      gsap.fromTo(
        ".feature-item",
        {
          opacity: 0,
          y: 50,
          scale: 0.94,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.09,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ".features-strip",
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".feature-icon svg",
        {
          scale: 0,
          rotation: -25,
        },
        {
          scale: 1,
          rotation: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: "back.out(1.8)",

          scrollTrigger: {
            trigger: ".features-strip",
            start: "top 86%",
            toggleActions: "play none none reverse",
          },
        },
      );

      /* =====================================================
         ABOUT TEXT
      ===================================================== */

      gsap.fromTo(
        ".about-copy",
        {
          opacity: 0,
          x: -65,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ".about-section",
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      );

      /* =====================================================
         ABOUT IMAGE
      ===================================================== */

      gsap.fromTo(
        ".about-image",
        {
          opacity: 0,
          x: 80,
          scale: 0.92,
          clipPath: "inset(7% 7% 7% 7%)",
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.1,
          ease: "power4.out",

          scrollTrigger: {
            trigger: ".about-section",
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".about-image img",
        {
          yPercent: -6,
          scale: 1.12,
        },
        {
          yPercent: 8,
          scale: 1.04,
          ease: "none",

          scrollTrigger: {
            trigger: ".about-image",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );

      /* =====================================================
         ROOM HEADING
      ===================================================== */

      gsap.fromTo(
        ".rooms-section .center-heading",
        {
          opacity: 0,
          y: 45,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,

          scrollTrigger: {
            trigger: ".rooms-section",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      /* =====================================================
         ROOM CARDS
      ===================================================== */

      gsap.fromTo(
        ".room-card",
        {
          opacity: 0,
          y: 70,
          scale: 0.93,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.11,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ".rooms-grid",
            start: "top 86%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.utils.toArray(".room-card").forEach((card) => {
        const image = card.querySelector("img");

        if (!image) return;

        gsap.fromTo(
          image,
          {
            scale: 1.12,
          },
          {
            scale: 1,
            ease: "none",

            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      });

      /* =====================================================
         FACILITIES
      ===================================================== */

      gsap.fromTo(
        ".facility-card",
        {
          opacity: 0,
          y: 60,
          scale: 0.92,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ".facility-grid",
            start: "top 87%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".facility-icon svg",
        {
          scale: 0,
          rotation: 25,
        },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.09,
          ease: "back.out(1.8)",

          scrollTrigger: {
            trigger: ".facility-grid",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.utils.toArray(".facility-bg").forEach((image) => {
        gsap.fromTo(
          image,
          {
            scale: 1.18,
          },
          {
            scale: 1,
            ease: "none",

            scrollTrigger: {
              trigger: image.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      });

      /* =====================================================
         GALLERY HEADING
      ===================================================== */

      gsap.fromTo(
        ".home-gallery .center-heading",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,

          scrollTrigger: {
            trigger: ".home-gallery",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      /* =====================================================
         GALLERY CARDS
      ===================================================== */

      gsap.fromTo(
        ".gallery-card",
        {
          opacity: 0,
          y: 55,
          scale: 0.93,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ".home-gallery-grid",
            start: "top 87%",
            toggleActions: "play none none reverse",
          },
        },
      );

      /* =====================================================
         GALLERY BUTTON
      ===================================================== */

      gsap.fromTo(
        ".gallery-button-wrap",
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,

          scrollTrigger: {
            trigger: ".gallery-button-wrap",
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        },
      );

      /* =====================================================
         LOCATION COPY
      ===================================================== */

      gsap.fromTo(
        ".location-copy",
        {
          opacity: 0,
          x: -60,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ".location-section",
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      );

      /* =====================================================
         LOCATION ITEMS
      ===================================================== */

      gsap.fromTo(
        ".location-item",
        {
          opacity: 0,
          x: -25,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.55,
          stagger: 0.09,

          scrollTrigger: {
            trigger: ".location-list",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );

      /* =====================================================
         MAP
      ===================================================== */

      gsap.fromTo(
        ".map-box",
        {
          opacity: 0,
          x: 70,
          scale: 0.94,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ".location-section",
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".map-pin",
        {
          opacity: 0,
          y: -55,
          scale: 0.25,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "bounce.out",

          scrollTrigger: {
            trigger: ".map-box",
            start: "top 84%",
            toggleActions: "play none none reverse",
          },
        },
      );

      /* =====================================================
         CTA
      ===================================================== */

      gsap.fromTo(
        ".bottom-cta-copy",
        {
          opacity: 0,
          y: 45,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,

          scrollTrigger: {
            trigger: ".bottom-cta",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".cream-book-btn",
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,

          scrollTrigger: {
            trigger: ".bottom-cta",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );

      /* =====================================================
         HOUSE SVG DRAW
      ===================================================== */

      const svgElements = gsap.utils.toArray(
        ".cta-sketch svg path, .cta-sketch svg circle",
      );

      svgElements.forEach((element) => {
        if (!element.getTotalLength) return;

        const length = element.getTotalLength();

        gsap.set(element, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(element, {
          strokeDashoffset: 0,
          duration: 1.6,
          ease: "power2.out",

          scrollTrigger: {
            trigger: ".bottom-cta",
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });

      /* =====================================================
         MAGNETIC BUTTONS
      ===================================================== */

      const buttons = gsap.utils.toArray(
        ".green-btn, .outline-btn-light, .cream-book-btn",
      );

      buttons.forEach((button) => {
        const move = (event) => {
          const rect = button.getBoundingClientRect();

          const x = event.clientX - rect.left - rect.width / 2;

          const y = event.clientY - rect.top - rect.height / 2;

          gsap.to(button, {
            x: x * 0.13,
            y: y * 0.16,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const leave = () => {
          gsap.to(button, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.45)",
          });
        };

        button.addEventListener("mousemove", move);
        button.addEventListener("mouseleave", leave);

        button._moveHandler = move;
        button._leaveHandler = leave;
      });

      /* =====================================================
         CARD HOVER
      ===================================================== */

      const cards = gsap.utils.toArray(
        ".room-card, .gallery-card, .facility-card",
      );

      cards.forEach((card) => {
        const enter = () => {
          gsap.to(card, {
            y: -7,
            duration: 0.35,
            ease: "power2.out",
          });
        };

        const leave = () => {
          gsap.to(card, {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);

        card._enterHandler = enter;
        card._leaveHandler = leave;
      });
    }, pageRef);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      clearTimeout(refreshTimer);

      const buttons = pageRef.current?.querySelectorAll(
        ".green-btn, .outline-btn-light, .cream-book-btn",
      );

      buttons?.forEach((button) => {
        if (button._moveHandler) {
          button.removeEventListener("mousemove", button._moveHandler);
        }

        if (button._leaveHandler) {
          button.removeEventListener("mouseleave", button._leaveHandler);
        }
      });

      const cards = pageRef.current?.querySelectorAll(
        ".room-card, .gallery-card, .facility-card",
      );

      cards?.forEach((card) => {
        if (card._enterHandler) {
          card.removeEventListener("mouseenter", card._enterHandler);
        }

        if (card._leaveHandler) {
          card.removeEventListener("mouseleave", card._leaveHandler);
        }
      });

      ctx.revert();
    };
  }, []);

  return (
    <main className="hostel-home" ref={pageRef}>
      {/* HERO */}

      <section className="hostel-hero">
        <img
          className="hostel-hero-bg"
          src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2200&q=90"
          alt="Nestify Hostel"
        />

        <div className="hostel-hero-dark" />

        <div className="hostel-container hostel-hero-content">
          <h1>
            Your Space.
            <br />
            Your People.
            <br />
            Your Stay.
          </h1>

          <p>
            A comfortable and safe place to live,
            <br />
            study and grow with like-minded people.
          </p>

          <div className="hero-actions">
            <a className="green-btn" href="#rooms">
              EXPLORE HOSTEL
              <ArrowIcon />
            </a>

            <a className="outline-btn-light" href="#booking">
              BOOK YOUR STAY
            </a>
          </div>
        </div>

        <div className="hero-scroll">
          <span className="scroll-circle">↓</span>
          Scroll Down
        </div>
      </section>

      {/* FEATURES */}

      <section className="features-strip">
        <div className="hostel-container features-grid">
          {features.map((item, index) => (
            <div className="feature-item" key={index}>
              <div className="feature-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}

      <section className="about-section">
        <div className="hostel-container about-layout">
          <div className="about-copy">
            <span className="small-label">ABOUT US</span>

            <h2>
              More Than Just
              <br />a Place to Stay
            </h2>

            <p>
              Nestify Hostel is designed for students and young professionals
              who are looking for a comfortable, secure and friendly
              environment.
            </p>

            <p>
              We believe in creating a home away from home where you can focus
              on your goals and enjoy every moment of your journey.
            </p>

            <a className="green-btn about-btn" href="#rooms">
              DISCOVER MORE
              <ArrowIcon />
            </a>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=90"
              alt="Hostel common room"
            />
          </div>
        </div>
      </section>

      {/* ROOMS */}

      <section className="rooms-section" id="rooms">
        <div className="hostel-container">
          <div className="center-heading">
            <span className="small-label">ROOMS</span>

            <h2>Choose Your Perfect Room</h2>
          </div>

          <div className="rooms-grid">
            {rooms.map((room, index) => (
              <article className="room-card" key={index}>
                <div className="room-image">
                  <img src={room.image} alt={room.title} />
                </div>

                <div className="room-card-copy">
                  <h3>{room.title}</h3>
                  <p>{room.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}

      <section className="facility-section">
        <div className="hostel-container facility-grid">
          {facilities.map((item, index) => (
            <div className="facility-card" key={index}>
              <div className="facility-bg" />

              <div className="facility-overlay" />

              <div className="facility-content">
                <div className="facility-icon">{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}

      <section className="home-gallery">
        <div className="hostel-container">
          <div className="center-heading">
            <span className="small-label">GALLERY</span>

            <h2>Moments That Feel Like Home</h2>
          </div>

          <div className="home-gallery-grid">
            {galleryImages.map((image, index) => (
              <div className="gallery-card" key={index}>
                <img src={image} alt={`Nestify gallery ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className="gallery-button-wrap">
            <a className="green-btn" href="/gallery">
              VIEW FULL GALLERY
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* LOCATION */}

      <section className="location-section">
        <div className="hostel-container location-layout">
          <div className="location-copy">
            <span className="small-label">LOCATION</span>

            <h2>
              Easy to Reach,
              <br />
              Close to Everything
            </h2>

            <div className="location-list">
              <LocationItem title="City College" distance="1.2 km" />

              <LocationItem title="Metro Station" distance="1.5 km" />

              <LocationItem title="Railway Station" distance="2.8 km" />

              <LocationItem title="Market" distance="1.0 km" />

              <LocationItem title="Restaurant" distance="0.8 km" />
            </div>
          </div>

          <div className="map-box">
            <div className="map-pin">
              <PinIcon />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

     
    </main>
  );
}

function LocationItem({ title, distance }) {
  return (
    <div className="location-item">
      <span className="location-pin-small">
        <PinIcon />
      </span>

      <span>{title}</span>

      <strong>{distance}</strong>
    </div>
  );
}

export default Home;
