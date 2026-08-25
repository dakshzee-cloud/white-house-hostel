import { useEffect, useState } from "react";
import {
  CalendarDays,
  BedDouble,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";

import "../styles/Dashboard.css";

function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [bookings, setBookings] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  /* =====================================================
     GET BOOKINGS FROM BACKEND
  ===================================================== */

  useEffect(() => {
    const getBookings = async () => {
      try {
        setLoading(true);

        const response = await fetch("http://localhost:5000/api/bookings");

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Unable to load bookings.");
        }

        /*
          Works with:
          [ ...bookings ]

          OR

          {
            bookings: [...]
          }
        */

        const bookingArray = Array.isArray(data) ? data : data.bookings || [];

        setBookings(bookingArray);
      } catch (err) {
        setError(err.message || "Unable to connect to server.");
      } finally {
        setLoading(false);
      }
    };

    getBookings();
  }, []);

  /* =====================================================
     DASHBOARD COUNTS
  ===================================================== */

  const totalBookings = bookings.length;

  const pendingBookings = bookings.filter(
    (booking) => !booking.status || booking.status.toLowerCase() === "pending",
  ).length;

  const confirmedBookings = bookings.filter(
    (booking) => booking.status?.toLowerCase() === "confirmed",
  ).length;

  const recentBookings = bookings.slice(0, 6);

  return (
    <div className="admin-dashboard">
      {/* =================================================
          SIDEBAR
      ================================================= */}

      <aside className={`admin-sidebar ${menuOpen ? "sidebar-open" : ""}`}>
        {/* LOGO */}

        <div className="admin-logo">
          <div className="admin-logo-mark">
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

          <div>
            <strong>NESTIFY</strong>

            <span>ADMIN</span>
          </div>
        </div>

        {/* NAV */}

        <nav className="admin-nav">
          <button className="admin-nav-item active">
            <DashboardIcon />

            <span>Overview</span>
          </button>

        </nav>

        {/* BOTTOM */}

        <div className="sidebar-bottom">
          <div className="admin-profile">
            <div className="admin-avatar">A</div>

            <div>
              <strong>Admin</strong>

              <span>Nestify Hostel</span>
            </div>
          </div>
        </div>
      </aside>

      {/* MOBILE OVERLAY */}

      {menuOpen && (
        <button
          type="button"
          className="admin-sidebar-overlay"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        />
      )}

      {/* =================================================
          MAIN
      ================================================= */}

      <main className="admin-main">
        {/* =================================================
            HEADER
        ================================================= */}

        <header className="admin-topbar">
          <div className="admin-header-left">
            <button
              type="button"
              className="admin-menu-button"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>

            <div>
              <span className="admin-eyebrow">NESTIFY HOSTEL</span>

              <h1>Dashboard</h1>
            </div>
          </div>

          <div className="dashboard-date">
            <CalendarDays size={16} />

            <span>Admin Panel</span>
          </div>
        </header>

        {/* =================================================
            ERROR
        ================================================= */}

        {error && <div className="dashboard-error">{error}</div>}

        {/* =================================================
            STATS
        ================================================= */}

        <section className="dashboard-stats">
          <StatCard
            number={totalBookings}
            title="Total Bookings"
            text="All booking requests"
            icon={<CalendarDays />}
          />

          <StatCard
            number={pendingBookings}
            title="Pending"
            text="Waiting for confirmation"
            icon={<PendingIcon />}
          />

          <StatCard
            number={confirmedBookings}
            title="Confirmed"
            text="Confirmed reservations"
            icon={<CheckCircle2 />}
          />

          <StatCard
            number="12"
            title="Available Rooms"
            text="Ready for booking"
            icon={<BedDouble />}
          />
        </section>

        {/* =================================================
            GRID
        ================================================= */}

        <section className="dashboard-main-grid">
          {/* =============================================
              BOOKINGS
          ============================================= */}

          <div className="dashboard-panel booking-panel">
            <div className="panel-heading">
              <div>
                <span>RESERVATIONS</span>

                <h2>Recent Bookings</h2>
              </div>

              <button type="button">View All</button>
            </div>

            {loading ? (
              <div className="dashboard-loading">Loading bookings...</div>
            ) : recentBookings.length === 0 ? (
              <div className="empty-bookings">
                <CalendarDays size={32} />

                <h3>No bookings yet</h3>

                <p>New booking requests will appear here.</p>
              </div>
            ) : (
              <div className="booking-table-wrapper">
                <table className="booking-table">
                  <thead>
                    <tr>
                      <th>Guest</th>
                      <th>Stay</th>
                      <th>Room</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {recentBookings.map((booking, index) => (
                      <tr key={booking._id || booking.id || index}>
                        <td>
                          <div className="guest-cell">
                            <div className="guest-avatar">
                              {booking.name?.charAt(0)?.toUpperCase() || "G"}
                            </div>

                            <div>
                              <strong>{booking.name || "Guest"}</strong>

                              <span>
                                {booking.phone || booking.email || "No contact"}
                              </span>
                            </div>
                          </div>
                        </td>

                        <td>
                          <strong className="date-main">
                            {formatDate(booking.checkIn)}
                          </strong>

                          <span className="date-sub">
                            to {formatDate(booking.checkOut)}
                          </span>
                        </td>

                        <td>
                          <span className="room-badge">
                            {formatRoom(booking.roomType)}
                          </span>
                        </td>

                        <td>
                          <BookingStatus status={booking.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* =============================================
              RIGHT SIDE
          ============================================= */}

          <div className="dashboard-side-column">
            {/* OCCUPANCY */}

            <div className="dashboard-panel">
              <div className="panel-heading compact">
                <div>
                  <span>TODAY</span>

                  <h2>Occupancy</h2>
                </div>

                <BedDouble size={21} />
              </div>

              <div className="occupancy-value">
                <strong>68%</strong>

                <span>17 / 25 rooms occupied</span>
              </div>

              <div className="occupancy-bar">
                <div
                  style={{
                    width: "68%",
                  }}
                />
              </div>

              <div className="occupancy-info">
                <div>
                  <span>Available</span>

                  <strong>8</strong>
                </div>

                <div>
                  <span>Occupied</span>

                  <strong>17</strong>
                </div>
              </div>
            </div>

            {/* QUICK DETAILS */}

            <div className="dashboard-panel">
              <div className="panel-heading compact">
                <div>
                  <span>PROPERTY</span>

                  <h2>Hostel Details</h2>
                </div>
              </div>

              <div className="hostel-info-list">
                <div>
                  <MapPin />

                  <span>
                    <strong>Location</strong>
                    Mumbai, India
                  </span>
                </div>

                <div>
                  <Phone />

                  <span>
                    <strong>Phone</strong>
                    +91 98765 43210
                  </span>
                </div>

                <div>
                  <Mail />

                  <span>
                    <strong>Email</strong>
                    hello@nestifyhostel.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            ROOM OVERVIEW
        ================================================= */}

        <section className="dashboard-panel room-overview">
          <div className="panel-heading">
            <div>
              <span>ROOM STATUS</span>

              <h2>Availability Overview</h2>
            </div>
          </div>

          <div className="room-status-grid">
            <RoomStatus number="101" type="Private" status="occupied" />

            <RoomStatus number="102" type="Private" status="available" />

            <RoomStatus number="103" type="4 Bed Dorm" status="available" />

            <RoomStatus number="104" type="6 Bed Dorm" status="occupied" />

            <RoomStatus number="105" type="Private" status="cleaning" />

            <RoomStatus number="106" type="4 Bed Dorm" status="available" />
          </div>
        </section>
      </main>
    </div>
  );
}

/* =========================================================
   COMPONENTS
========================================================= */

function StatCard({ number, title, text, icon }) {
  return (
    <article className="dashboard-stat-card">
      <div className="stat-top">
        <div className="stat-icon">{icon}</div>

        <span>LIVE</span>
      </div>

      <strong className="stat-number">{number}</strong>

      <h3>{title}</h3>

      <p>{text}</p>
    </article>
  );
}

function BookingStatus({ status }) {
  const value = status?.toLowerCase() || "pending";

  return <span className={`booking-status status-${value}`}>{value}</span>;
}

function RoomStatus({ number, type, status }) {
  return (
    <div className="room-status-card">
      <div>
        <span>ROOM</span>

        <strong>{number}</strong>
      </div>

      <p>{type}</p>

      <span className={`room-state room-${status}`}>{status}</span>
    </div>
  );
}

function formatDate(value) {
  if (!value) return "-";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatRoom(value) {
  if (!value) return "Not selected";

  return value
    .replaceAll("-", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

/* =========================================================
   INLINE SVG ICONS
========================================================= */

function DashboardIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <rect x="3" y="3" width="7" height="7" rx="1" />

      <rect x="14" y="3" width="7" height="7" rx="1" />

      <rect x="3" y="14" width="7" height="7" rx="1" />

      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function PendingIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />

      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export default Dashboard;
