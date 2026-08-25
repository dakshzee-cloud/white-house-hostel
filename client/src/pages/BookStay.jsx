import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Users,
  User,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  BedDouble,
} from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "../styles/BookStay.css";

function BookStay() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
    roomType: "",
    checkIn: "",
    checkOut: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    tl.from(".booking-header", {
      opacity: 0,
      y: 40,
      duration: 0.8,
    }).from(
      ".booking-card",
      {
        opacity: 0,
        y: 50,
        duration: 0.9,
      },
      "-=0.4"
    );
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch(
        "http://localhost:5000/api/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Something went wrong."
        );
      }

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        guests: "1",
        roomType: "",
        checkIn: "",
        checkOut: "",
        message: "",
      });

    } catch (err) {
      setError(
        err.message ||
        "Unable to submit your booking."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="book-stay-page">

      {/* =====================================
          HEADER
      ===================================== */}

      <section className="booking-header">

        <div className="booking-header-inner">

          <p className="booking-label">
            NESTIFY HOSTEL
          </p>

          <h1>
            Book Your
            <br />
            <span>Stay.</span>
          </h1>

          <p className="booking-intro">
            Tell us when you'd like to stay and
            we'll take care of the rest.
          </p>

        </div>

      </section>


      {/* =====================================
          BOOKING AREA
      ===================================== */}

      <section className="booking-section">

        <div className="booking-layout">

          {/* LEFT INFO */}

          <aside className="booking-info">

            <p className="booking-label">
              RESERVATION
            </p>

            <h2>
              Make yourself
              <br />
              at home.
            </h2>

            <p>
              Complete the form and our team will
              contact you to confirm availability
              and your booking details.
            </p>

            <div className="booking-details">

              <div>
                <CalendarDays size={19} />

                <span>
                  Flexible check-in
                  <small>
                    Based on availability
                  </small>
                </span>
              </div>

              <div>
                <BedDouble size={19} />

                <span>
                  Comfortable rooms
                  <small>
                    Multiple room options
                  </small>
                </span>
              </div>

              <div>
                <MapPin size={19} />

                <span>
                  Mumbai, India
                  <small>
                    Prime location
                  </small>
                </span>
              </div>

            </div>

          </aside>


          {/* FORM */}

          <div className="booking-card">

            {success ? (

              <div className="booking-success">

                <div className="success-icon">
                  <CheckCircle2 size={40} />
                </div>

                <h2>
                  Booking Request
                  <br />
                  Received!
                </h2>

                <p>
                  Thank you for choosing Nestify.
                  Our team will contact you shortly
                  to confirm your stay.
                </p>

                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="booking-again"
                >
                  Make Another Booking
                  <ArrowRight size={17} />
                </button>

              </div>

            ) : (

              <form
                className="booking-form"
                onSubmit={handleSubmit}
              >

                <div className="form-heading">

                  <span>
                    01
                  </span>

                  <h2>
                    Your Details
                  </h2>

                </div>


                {/* NAME */}

                <div className="form-group">

                  <label>
                    Full Name
                  </label>

                  <div className="input-wrapper">

                    <User size={17} />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />

                  </div>

                </div>


                {/* EMAIL + PHONE */}

                <div className="form-row">

                  <div className="form-group">

                    <label>
                      Email Address
                    </label>

                    <div className="input-wrapper">

                      <Mail size={17} />

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />

                    </div>

                  </div>


                  <div className="form-group">

                    <label>
                      Phone Number
                    </label>

                    <div className="input-wrapper">

                      <Phone size={17} />

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91"
                        required
                      />

                    </div>

                  </div>

                </div>


                {/* STAY DETAILS */}

                <div className="form-heading form-heading-space">

                  <span>
                    02
                  </span>

                  <h2>
                    Stay Details
                  </h2>

                </div>


                <div className="form-row">

                  <div className="form-group">

                    <label>
                      Check-in
                    </label>

                    <div className="input-wrapper">

                      <CalendarDays size={17} />

                      <input
                        type="date"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        required
                      />

                    </div>

                  </div>


                  <div className="form-group">

                    <label>
                      Check-out
                    </label>

                    <div className="input-wrapper">

                      <CalendarDays size={17} />

                      <input
                        type="date"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        required
                      />

                    </div>

                  </div>

                </div>


                <div className="form-row">

                  <div className="form-group">

                    <label>
                      Guests
                    </label>

                    <div className="input-wrapper">

                      <Users size={17} />

                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                      >
                        <option value="1">
                          1 Guest
                        </option>

                        <option value="2">
                          2 Guests
                        </option>

                        <option value="3">
                          3 Guests
                        </option>

                        <option value="4">
                          4 Guests
                        </option>

                        <option value="5">
                          5+ Guests
                        </option>

                      </select>

                    </div>

                  </div>


                  <div className="form-group">

                    <label>
                      Room Type
                    </label>

                    <div className="input-wrapper">

                      <BedDouble size={17} />

                      <select
                        name="roomType"
                        value={formData.roomType}
                        onChange={handleChange}
                        required
                      >

                        <option value="">
                          Select room
                        </option>

                        <option value="4-bed-dorm">
                          4 Bed Dorm
                        </option>

                        <option value="6-bed-dorm">
                          6 Bed Dorm
                        </option>

                        <option value="private-room">
                          Private Room
                        </option>

                      </select>

                    </div>

                  </div>

                </div>


                {/* MESSAGE */}

                <div className="form-group">

                  <label>
                    Additional Message
                    <span>
                      Optional
                    </span>
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Anything you'd like us to know?"
                    rows="4"
                  />

                </div>


                {error && (

                  <div className="booking-error">
                    {error}
                  </div>

                )}


                <button
                  type="submit"
                  className="submit-booking"
                  disabled={loading}
                >

                  {loading ? (
                    <>
                      Sending Request...
                    </>
                  ) : (
                    <>
                      Request Booking
                      <ArrowRight size={18} />
                    </>
                  )}

                </button>

                <p className="booking-note">
                  By submitting this form, you agree
                  to be contacted by our team regarding
                  your booking request.
                </p>

              </form>

            )}

          </div>

        </div>

      </section>

    </div>
  );
}

export default BookStay;