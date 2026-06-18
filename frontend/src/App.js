import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import Algorithm from "./pages/Algorithm";

function App() {
  const [loading, setLoading] = useState(true);


  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }

  return (
      <Router>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/MadeBy" element={<Contact />} />
            <Route path="/algorithm" element={<Algorithm />} />
          </Routes>
        </AnimatePresence>
      </Router>

  );
}

export default App;





