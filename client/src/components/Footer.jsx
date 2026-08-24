import { Link } from "react-router-dom";
import {
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
  Globe,
} from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* BRAND */}
        <div className="footer-brand">
          <span className="footer-label">
            YOUR NEXT ADVENTURE
          </span>

          <h2>
            NESTIFY
            <br />
            HOSTEL
          </h2>

          <p>
            A comfortable place to stay, connect,
            explore and create unforgettable memories.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="footer-links">
          <span className="footer-label">
            NAVIGATION
          </span>

          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <span className="footer-label">
            GET IN TOUCH
          </span>

          <a href="mailto:hello@nestifyhostel.com">
            <Mail size={16} />
            hello@nestifyhostel.com
          </a>

          <a href="tel:+919999999999">
            <Phone size={16} />
            +91 99999 99999
          </a>

          <div className="footer-location">
            <MapPin size={16} />
            Mumbai, India
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <span>
          © {new Date().getFullYear()} Nestify Hostel
        </span>

        <div className="footer-socials">

          <a
            href="#"
            aria-label="Website"
          >
            <Globe size={18} />
          </a>

        </div>

        <Link to="/contact">
          Book Your Stay
          <ArrowUpRight size={15} />
        </Link>

      </div>

    </footer>
  );
}

export default Footer;