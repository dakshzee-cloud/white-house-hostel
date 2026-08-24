import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Users,
  Heart,
  Target,
  Wifi,
  Sparkles,
  Utensils,
  MapPin,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "../styles/About.css";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const pageRef = useRef(null);

  useGSAP(
    () => {
      /* =========================================
         HERO
      ========================================= */

      const heroTl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      heroTl
        .from(".about-hero-image img", {
          scale: 1.12,
          duration: 1.5,
        })
        .from(
          ".about-hero-label",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
          },
          "-=0.8"
        )
        .from(
          ".about-hero-title",
          {
            opacity: 0,
            y: 60,
            duration: 1,
          },
          "-=0.5"
        )
        .from(
          ".about-hero-description",
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
          },
          "-=0.5"
        );

      /* =========================================
         SCROLL REVEALS
      ========================================= */

      gsap.utils.toArray(".about-reveal").forEach((element) => {
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

      /* =========================================
         IMAGE REVEALS
      ========================================= */

      gsap.utils.toArray(".about-image-reveal").forEach((element) => {
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

      /* =========================================
         VALUES CARDS
      ========================================= */

      gsap.from(".value-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".values-grid",
          start: "top 80%",
          once: true,
        },
      });

      /* =========================================
         DIFFERENCE CARDS
      ========================================= */

      gsap.from(".difference-card", {
        opacity: 0,
        y: 45,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".difference-grid",
          start: "top 82%",
          once: true,
        },
      });

      /* =========================================
         TEAM
      ========================================= */

      gsap.from(".team-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 82%",
          once: true,
        },
      });

      /* =========================================
         PARALLAX
      ========================================= */

      gsap.to(".about-story-image img", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-story-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      /* =========================================
         CTA
      ========================================= */

      gsap.from(".about-cta-content", {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-cta",
          start: "top 80%",
          once: true,
        },
      });
    },
    {
      scope: pageRef,
    }
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={pageRef}
      className="about-page"
    >

      {/* =================================================
          HERO
      ================================================= */}

      <section className="about-hero">

        <div className="about-hero-image">
          <img
            src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=2200&q=85"
            alt="Nestify Hostel common area"
          />
        </div>

        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">

          <p className="about-hero-label">
            ABOUT NESTIFY
          </p>

          <h1 className="about-hero-title">
            More Than Just
            <br />
            a Place to Stay
          </h1>

          <p className="about-hero-description">
            At Nestify Hostel, we believe a hostel is
            more than a roof over your head — it's a
            community, a home, and an experience.
          </p>

        </div>

      </section>


      {/* =================================================
          OUR STORY
      ================================================= */}

      <section className="about-story-section">

        <div className="about-story-image about-image-reveal">

          <img
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=85"
            alt="Nestify hostel room"
          />

        </div>

        <div className="about-story-content about-reveal">

          <p className="section-label">
            OUR STORY
          </p>

          <h2>
            Built on Comfort.
            <br />
            Driven by Community.
          </h2>

          <p>
            Nestify Hostel was founded with a simple
            idea — to create a safe, comfortable and
            inspiring place where students and young
            professionals can live, learn and grow
            together.
          </p>

          <p>
            We understand how important it is to have
            a space that feels like home, where you can
            focus on your goals while enjoying great
            company, modern amenities and a welcoming
            atmosphere.
          </p>

          <Link
            to="/gallery"
            className="about-dark-button"
          >
            Explore Our Spaces
            <ArrowUpRight size={17} />
          </Link>

        </div>

      </section>


      {/* =================================================
          STATS
      ================================================= */}

      <section className="about-stats">

        <div className="about-stats-inner">

          <div className="about-stat about-reveal">

            <div className="about-stat-icon">
              <Heart />
            </div>

            <strong>5+</strong>

            <span>
              Years of
              <br />
              Hospitality
            </span>

          </div>

          <div className="about-stat about-reveal">

            <div className="about-stat-icon">
              <Users />
            </div>

            <strong>500+</strong>

            <span>
              Happy
              <br />
              Residents
            </span>

          </div>

          <div className="about-stat about-reveal">

            <div className="about-stat-icon">
              <ShieldCheck />
            </div>

            <strong>24/7</strong>

            <span>
              Support &
              <br />
              Assistance
            </span>

          </div>

        </div>

      </section>


      {/* =================================================
          MISSION
      ================================================= */}

      <section className="about-mission">

        <div className="about-mission-heading about-reveal">

          <p className="section-label">
            OUR MISSION
          </p>

          <h2>
            To Provide a Home
            <br />
            <span>That Inspires.</span>
          </h2>

        </div>

        <div className="values-grid">

          <div className="value-card">

            <div className="value-icon">
              <ShieldCheck />
            </div>

            <h3>
              Safe & Secure
            </h3>

            <p>
              Your safety is our top priority with
              24/7 security, CCTV surveillance and
              secure access.
            </p>

          </div>

          <div className="value-card">

            <div className="value-icon">
              <Heart />
            </div>

            <h3>
              Comfort First
            </h3>

            <p>
              From cozy rooms to modern amenities,
              we make everyday living comfortable.
            </p>

          </div>

          <div className="value-card">

            <div className="value-icon">
              <Users />
            </div>

            <h3>
              Community Living
            </h3>

            <p>
              We bring like-minded people together
              and create a friendly environment.
            </p>

          </div>

          <div className="value-card">

            <div className="value-icon">
              <Target />
            </div>

            <h3>
              Focus on Growth
            </h3>

            <p>
              A peaceful environment that helps you
              focus on studies, work and personal growth.
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          WHAT MAKES US DIFFERENT
      ================================================= */}

      <section className="difference-section">

        <div className="difference-heading about-reveal">

          <p className="section-label">
            WHAT MAKES US DIFFERENT
          </p>

          <h2>
            The little things
            <br />
            <span>matter.</span>
          </h2>

        </div>

        <div className="difference-grid">

          <div className="difference-card">

            <div className="difference-icon">
              <MapPin />
            </div>

            <h3>
              Prime Location
            </h3>

            <p>
              Close to colleges, transport,
              restaurants and everything you need.
            </p>

          </div>

          <div className="difference-card">

            <div className="difference-icon">
              <Wifi />
            </div>

            <h3>
              Modern Amenities
            </h3>

            <p>
              High-speed Wi-Fi, study areas,
              laundry, RO water and more.
            </p>

          </div>

          <div className="difference-card">

            <div className="difference-icon">
              <Utensils />
            </div>

            <h3>
              Nutritious Food
            </h3>

            <p>
              Hygienic and healthy meals
              that feel like home.
            </p>

          </div>

          <div className="difference-card">

            <div className="difference-icon">
              <Sparkles />
            </div>

            <h3>
              Clean & Hygienic
            </h3>

            <p>
              Well-maintained rooms and
              regular housekeeping.
            </p>

          </div>

          <div className="difference-card">

            <div className="difference-icon">
              <Heart />
            </div>

            <h3>
              Care That Counts
            </h3>

            <p>
              We're always here to make
              your stay better.
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          TEAM
      ================================================= */}

      <section className="team-section">

        <div className="team-heading about-reveal">

          <p className="section-label">
            MEET THE TEAM
          </p>

          <h2>
            The people
            <br />
            <span>behind Nestify.</span>
          </h2>

        </div>

        <div className="team-grid">

          <div className="team-card">

            <div className="team-image">

              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Arjun Mehta"
              />

            </div>

            <h3>
              Arjun Mehta
            </h3>

            <p>
              Founder & Director
            </p>

            <div className="team-links">
              <span>in</span>
              <span>✉</span>
            </div>

          </div>


          <div className="team-card">

            <div className="team-image">

              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Priya Sharma"
              />

            </div>

            <h3>
              Priya Sharma
            </h3>

            <p>
              Operations Manager
            </p>

            <div className="team-links">
              <span>in</span>
              <span>✉</span>
            </div>

          </div>


          <div className="team-card">

            <div className="team-image">

              <img
                src="https://randomuser.me/api/portraits/men/46.jpg"
                alt="Rahul Verma"
              />

            </div>

            <h3>
              Rahul Verma
            </h3>

            <p>
              Community Manager
            </p>

            <div className="team-links">
              <span>in</span>
              <span>✉</span>
            </div>

          </div>


          <div className="team-card">

            <div className="team-image">

              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="Sneha Iyer"
              />

            </div>

            <h3>
              Sneha Iyer
            </h3>

            <p>
              Guest Relations
            </p>

            <div className="team-links">
              <span>in</span>
              <span>✉</span>
            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          CTA
      ================================================= */}

      <section className="about-cta">

        <div className="about-cta-image">

          <img
            src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=2200&q=85"
            alt="Comfortable Nestify room"
          />

        </div>

        <div className="about-cta-overlay"></div>

        <div className="about-cta-content">

          <p className="section-label">
            YOUR NEXT CHAPTER
          </p>

          <h2>
            Ready to Be a Part of
            <br />
            the <span>Nestify Family?</span>
          </h2>

          <p>
            Come, stay and experience a place
            that truly feels like home.
          </p>

          <Link
            to="/contact"
            className="about-cta-button"
          >
            Book Your Stay Now
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default About;