import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import BookStay from "./pages/BookStay";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          {/* HOME */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* ABOUT */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* BOOK YOUR STAY */}
          <Route
            path="/book"
            element={<BookStay />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;