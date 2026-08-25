import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import BookStay from "./pages/BookStay";

import Dashboard from "./admin/Dashboard";

import PageTransition from "./components/PageTransition";

import "./styles/PageTransition.css";

function App() {
  return (
    <BrowserRouter>
      <PageTransition />

      <Routes>
        {/* ===============================
            WEBSITE
        =============================== */}

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/about" element={<About />} />


          <Route path="/BookStay" element={<BookStay />} />
        </Route>

        {/* ===============================
            ADMIN
        =============================== */}

        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
