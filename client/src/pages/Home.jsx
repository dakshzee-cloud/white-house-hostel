import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ShieldCheck,
  Users,
  Wifi,
  Utensils,
  Sparkles,
  MapPin,
  BedDouble,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "../styles/Home.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Home() {
  const pageRef = useRef(null);

  useGSAP(
    () => {
      /* =====================================
         HERO ANIMATION
      ===================================== */

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      heroTimeline
        .from(".home-hero-image", {
          scale: 1.12,
          duration: 1.5,
          ease: "power3.out",
        })
        .from(
          ".hero-overlay-content",
          {
            opacity: 0,
            y: 50,
            duration: 1,
          },
          "-=0.9"
        )
        .from(
          ".hero-title-line",
          {
            opacity: 0,
            y: 45,
            duration: 0.8,
            stagger: 0.12,
          },
          "-=0.6"
        )
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
          },
          "-=0.45"
        )
        .from(
          ".hero-button",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.4"
        );

      /* =====================================
         GENERIC SCROLL REVEALS
      ===================================== */

      gsap.utils.toArray(".home-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      /* =====================================
         IMAGE REVEALS
      ===================================== */

      gsap.utils.toArray(".image-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            scale: 0.94,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      /* =====================================
         FEATURE CARDS
      ===================================== */

      gsap.from(".amenity-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".amenities-grid",
          start: "top 80%",
          once: true,
        },
      });

      /* =====================================
         STATS
      ===================================== */

      gsap.from(".stat-item", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stats-row",
          start: "top 85%",
          once: true,
        },
      });

      /* =====================================
         PARALLAX
      ===================================== */

      gsap.to(".story-image img", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: ".story-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    {
      scope: pageRef,
    }
  );

  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={pageRef} className="home-page">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="home-hero">

        <div className="home-hero-image">
          <img
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=2200&q=85"
            alt="Premium hostel room"
          />
        </div>

        <div className="home-hero-overlay"></div>

        <div className="hero-overlay-content">

          <div className="hero-small-label">
            <span></span>
            WELCOME TO NESTIFY HOSTEL
          </div>

          <h1>
            <span className="hero-title-line">
              Your place.
            </span>

            <span className="hero-title-line">
              Your people.
            </span>

            <span className="hero-title-line">
              Your story.
            </span>
          </h1>

          <p className="hero-description">
            A safe, comfortable and vibrant hostel
            designed for students, young professionals
            and travelers.
          </p>

          <Link
            to="/contact"
            className="hero-button"
          >
            <span>Book Your Stay</span>
            <ArrowUpRight size={18} />
          </Link>

        </div>

        <div className="hero-bottom-info">

          <span>
            <MapPin size={14} />
            Mumbai, India
          </span>

          <span>
            EST. 2026
          </span>

        </div>

      </section>


      {/* =================================================
          WELCOME / INTRO
      ================================================= */}

      <section className="welcome-section">

        <div className="welcome-left home-reveal">

          <p className="section-label">
            WELCOME TO NESTIFY
          </p>

          <h2>
            More than just
            <br />
            <span>a place to stay.</span>
          </h2>

        </div>

        <div className="welcome-right home-reveal">

          <p>
            At Nestify Hostel, we believe that a hostel
            should feel like more than just a bed for
            the night.
          </p>

          <p>
            It should be a place where you feel safe,
            meet interesting people, focus on your goals
            and create memories that stay with you.
          </p>

          <Link
            to="/about"
            className="underlined-link"
          >
            Discover Our Story
            <ArrowRight size={17} />
          </Link>

        </div>

      </section>


      {/* =================================================
          STORY IMAGE
      ================================================= */}

      <section className="story-section">

        <div className="story-image image-reveal">

          <img
            src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1600&q=85"
            alt="Hostel common room"
          />

        </div>

        <div className="story-content home-reveal">

          <p className="section-label">
            OUR STORY
          </p>

          <h2>
            Built on comfort.
            <br />
            Driven by community.
          </h2>

          <p>
            Nestify was created with one simple idea —
            to create a place where people can live,
            work, relax and grow together.
          </p>

          <p>
            From thoughtfully designed rooms to welcoming
            common spaces, every detail is created to make
            you feel at home.
          </p>

          <Link
            to="/about"
            className="dark-button"
          >
            About Nestify
            <ArrowUpRight size={17} />
          </Link>

        </div>

      </section>


      {/* =================================================
          STATS
      ================================================= */}

      <section className="stats-section">

        <div className="stats-row">

          <div className="stat-item">
            <strong>5+</strong>
            <span>Years of<br />Hospitality</span>
          </div>

          <div className="stat-item">
            <strong>500+</strong>
            <span>Happy<br />Residents</span>
          </div>

          <div className="stat-item">
            <strong>24/7</strong>
            <span>Support &<br />Assistance</span>
          </div>

          <div className="stat-item">
            <strong>4.9</strong>
            <span>Guest<br />Rating</span>
          </div>

        </div>

      </section>


      {/* =================================================
          MISSION
      ================================================= */}

      <section className="mission-section">

        <div className="mission-heading home-reveal">

          <p className="section-label">
            OUR MISSION
          </p>

          <h2>
            To provide a home
            <br />
            <span>that inspires.</span>
          </h2>

        </div>

        <div className="mission-grid">

          <div className="mission-card home-reveal">

            <div className="mission-icon">
              <ShieldCheck />
            </div>

            <h3>
              Safe & Secure
            </h3>

            <p>
              Your safety comes first with secure
              access and 24/7 support.
            </p>

          </div>

          <div className="mission-card home-reveal">

            <div className="mission-icon">
              <BedDouble />
            </div>

            <h3>
              Comfort First
            </h3>

            <p>
              Comfortable rooms and thoughtful
              amenities for everyday living.
            </p>

          </div>

          <div className="mission-card home-reveal">

            <div className="mission-icon">
              <Users />
            </div>

            <h3>
              Community Living
            </h3>

            <p>
              Meet like-minded people and become
              part of a welcoming community.
            </p>

          </div>

          <div className="mission-card home-reveal">

            <div className="mission-icon">
              <Sparkles />
            </div>

            <h3>
              Focus on Growth
            </h3>

            <p>
              A peaceful environment designed
              for study, work and personal growth.
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          AMENITIES
      ================================================= */}

      <section className="amenities-section">

        <div className="amenities-heading home-reveal">

          <p className="section-label">
            WHAT MAKES US DIFFERENT
          </p>

          <h2>
            Designed for
            <br />
            <span>better living.</span>
          </h2>

        </div>

        <div className="amenities-grid">

          <div className="amenity-card">

            <div className="amenity-icon">
              <MapPin />
            </div>

            <h3>
              Prime Location
            </h3>

            <p>
              Located close to colleges, transport
              and everything you need.
            </p>

          </div>

          <div className="amenity-card">

            <div className="amenity-icon">
              <Wifi />
            </div>

            <h3>
              High-Speed Wi-Fi
            </h3>

            <p>
              Stay connected with reliable high-speed
              internet throughout the hostel.
            </p>

          </div>

          <div className="amenity-card">

            <div className="amenity-icon">
              <Utensils />
            </div>

            <h3>
              Nutritious Food
            </h3>

            <p>
              Fresh, hygienic and healthy meals
              that feel like home.
            </p>

          </div>

          <div className="amenity-card">

            <div className="amenity-icon">
              <Sparkles />
            </div>

            <h3>
              Clean & Hygienic
            </h3>

            <p>
              Well-maintained spaces with regular
              housekeeping and care.
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          LARGE IMAGE
      ================================================= */}

      <section className="home-large-image">

        <img
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2200&q=85"
          alt="Nestify community space"
        />

        <div className="large-image-overlay"></div>

        <div className="large-image-content home-reveal">

          <p>
            THE NESTIFY EXPERIENCE
          </p>

          <h2>
            Come as you are.
            <br />
            Leave with stories.
          </h2>

        </div>

      </section>


      {/* =================================================
          GALLERY PREVIEW
      ================================================= */}

      <section className="gallery-preview">

        <div className="gallery-preview-heading home-reveal">

          <div>

            <p className="section-label">
              EXPLORE NESTIFY
            </p>

            <h2>
              See where
              <br />
              <span>you'll stay.</span>
            </h2>

          </div>

          <Link
            to="/gallery"
            className="outline-button"
          >
            View Full Gallery
            <ArrowUpRight size={17} />
          </Link>

        </div>

        <div className="preview-grid">

          <div className="preview-card preview-one">
            <img
              src="https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1200&q=85"
              alt="Hostel bedroom"
            />

            <span>
              ROOMS
            </span>
          </div>

          <div className="preview-card preview-two">
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85"
              alt="Study area"
            />

            <span>
              COMMON AREAS
            </span>
          </div>

          <div className="preview-card preview-three">
            <img
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85"
              alt="Dining area"
            />

            <span>
              DINING
            </span>
          </div>

        </div>

      </section>


      {/* =================================================
          CTA
      ================================================= */}

      <section className="home-cta">

        <div className="cta-decoration"></div>

        <div className="home-cta-content home-reveal">

          <p className="section-label">
            YOUR NEXT CHAPTER
          </p>

          <h2>
            Ready to be a part
            <br />
            of the <span>Nestify</span> family?
          </h2>

          <p>
            Come, stay and experience a place
            that truly feels like home.
          </p>

          <Link
            to="/contact"
            className="cta-button"
          >
            <CalendarDays size={18} />
            Book Your Stay Now
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;