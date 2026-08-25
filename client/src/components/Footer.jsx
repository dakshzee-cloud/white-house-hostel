import { Link } from "react-router-dom";

import {
  Mail,
  Phone,
  MapPin,
  Wifi,
  ShieldCheck,
  BedDouble,
  WashingMachine,
  CircleParking,
  ArrowRight,
} from "lucide-react";

import "../styles/Footer.css";

/* =====================================================
   SOCIAL SVG ICONS
===================================================== */

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    />

    <circle
      cx="12"
      cy="12"
      r="4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    />

    <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M14.5 8H17V4.4c-.5-.1-1.7-.2-3.2-.2-3.2 0-5.3 1.9-5.3 5.5V12H5v4h3.5v8h4.2v-8h3.5l.6-4h-4.1V10c0-1.2.3-2 1.8-2Z"
      fill="currentColor"
    />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M5 4l5.5 7.3L5.4 20H8l3.8-6.5L16.6 20H20l-5.8-7.8L19 4h-2.6l-3.5 6-4.5-6H5Z"
      fill="currentColor"
    />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M5 9h3v10H5V9Zm1.5-5A1.75 1.75 0 1 1 6.5 7.5 1.75 1.75 0 0 1 6.5 4ZM10 9h3v1.4c.7-1 1.8-1.7 3.5-1.7 3 0 4.5 1.9 4.5 5.3v5h-3v-4.6c0-1.7-.6-2.8-2-2.8-1.5 0-3 1-3 3.3V19h-3V9Z"
      fill="currentColor"
    />
  </svg>
);

/* =====================================================
   AMENITY COMPONENT
===================================================== */

function FooterAmenity({ icon, text }) {
  return (
    <div className="footer-amenity">
      <span className="footer-amenity-icon">{icon}</span>

      <p>{text}</p>
    </div>
  );
}

/* =====================================================
   FOOTER
===================================================== */

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="site-footer">
      {/* =================================================
          GREEN NEWSLETTER SECTION
      ================================================= */}

      <section className="footer-newsletter-section">
        <div className="footer-newsletter-container">
          {/* DECORATION */}

          <div className="footer-decoration">
            <svg
              viewBox="0 0 260 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 88H250" />

                <path d="M35 87V55H57V87" />
                <path d="M39 55V45H53V55" />

                <path d="M76 87V61H104V87" />
                <path d="M82 61V51H98V61" />

                <path d="M124 87V57H149V87" />
                <path d="M130 57V48H143V57" />

                <path d="M171 87V52H194V87" />
                <path d="M177 52V42H188V52" />

                <path d="M215 87V62H235V87" />

                <path d="M25 54C18 45 21 34 29 27" />
                <path d="M25 53C35 48 39 38 36 28" />
                <path d="M25 53C14 51 9 43 12 33" />

                <path d="M206 52C201 42 205 31 214 25" />
                <path d="M207 52C218 47 222 36 219 26" />
                <path d="M207 51C196 49 191 40 194 30" />
              </g>
            </svg>
          </div>

          {/* TEXT */}

          <div className="footer-newsletter-copy">
            <span className="footer-small-label">STAY CONNECTED</span>

            <h2>Want to see more?</h2>

            <p>
              Visit us or book a stay to experience
              <br className="desktop-break" />
              the warmth in person.
            </p>
          </div>

          {/* FORM */}

          <form className="footer-newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Enter your email"
              required
            />

            <button type="submit">
              <span>Subscribe</span>

              <ArrowRight size={15} />
            </button>
          </form>
        </div>
      </section>

      {/* =================================================
          MAIN FOOTER
      ================================================= */}

      <section className="footer-main">
        <div className="footer-main-container">
          {/* =============================================
              BRAND
          ============================================= */}

          <div className="footer-brand-column">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">
                <svg
                  viewBox="0 0 50 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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

                  <path
                    d="M20 42V29H30V42"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <path d="M25 16V11" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>

              <div className="footer-logo-text">
                <strong>NESTIFY</strong>

                <span>HOSTEL</span>
              </div>
            </Link>

            <p className="footer-description">
              A safe, comfortable and friendly hostel for students and young
              professionals.
            </p>

            {/* SOCIAL */}

            <div className="footer-socials">
              <a href="#instagram" aria-label="Instagram">
                <InstagramIcon />
              </a>

              <a href="#facebook" aria-label="Facebook">
                <FacebookIcon />
              </a>

              <a href="#twitter" aria-label="Twitter">
                <TwitterIcon />
              </a>

              <a href="#linkedin" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* =============================================
              QUICK LINKS
          ============================================= */}

          <div className="footer-column">
            <h3>Quick Links</h3>

            <nav className="footer-links">
              <Link to="/">Home</Link>

              <Link to="/gallery">Gallery</Link>

              <Link to="/about">About</Link>

              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          {/* =============================================
              AMENITIES
          ============================================= */}

          <div className="footer-column">
            <h3>Amenities</h3>

            <div className="footer-amenities">
              <FooterAmenity icon={<Wifi />} text="High Speed Wi-Fi" />

              <FooterAmenity icon={<ShieldCheck />} text="24/7 Security" />

              <FooterAmenity icon={<BedDouble />} text="Clean Rooms" />

              <FooterAmenity icon={<WashingMachine />} text="Laundry" />

              <FooterAmenity icon={<CircleParking />} text="Parking" />
            </div>
          </div>

          {/* =============================================
              CONTACT
          ============================================= */}

          <div className="footer-column footer-contact">
            <h3>Contact Us</h3>

            <a href="tel:+919876543210" className="footer-contact-item">
              <Phone />

              <span>+91 98765 43210</span>
            </a>

            <a
              href="mailto:hello@nestifyhostel.com"
              className="footer-contact-item"
            >
              <Mail />

              <span>hello@nestifyhostel.com</span>
            </a>

            <div className="footer-contact-item">
              <MapPin />

              <span>
                123, Green Street,
                <br />
                Mumbai, India
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          COPYRIGHT
      ================================================= */}

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© 2026 Nestify Hostel. All Rights Reserved.</p>

          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>

            <a href="#terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
