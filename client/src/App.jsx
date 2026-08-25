import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import BookStay from "./pages/BookStay";

import ScrollToTop from "./components/ScrollToTop";

import Dashboard from "../src/admin/Dashboard"


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route element={<MainLayout />}>
          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* GALLERY */}
          <Route path="/gallery" element={<Gallery />} />

          {/* ABOUT */}
          <Route path="/about" element={<About />} />

          {/* BOOK YOUR STAY */}
          <Route path="/BookStay" element={<BookStay />} />
        </Route>

        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;