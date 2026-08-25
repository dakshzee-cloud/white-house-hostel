import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { useEffect } from "react";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import BookStay from "./pages/BookStay";
import Dashboard from "./admin/Dashboard";

/* =========================================
   SCROLL TO TOP
========================================= */

function ScrollToTop() {
  const { pathname } = useLocation();

  // Disable browser automatic scroll restoration
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Go to top whenever route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return null;
}

/* =========================================
   APP
========================================= */

function App() {
  return (
    <BrowserRouter>
      {/* Automatically scroll to top */}
      <ScrollToTop />

      <Routes>
        {/* ==============================
            WEBSITE
        ============================== */}

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/about" element={<About />} />

          <Route path="/BookStay" element={<BookStay />} />
        </Route>

        {/* ==============================
            ADMIN
        ============================== */}

        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
