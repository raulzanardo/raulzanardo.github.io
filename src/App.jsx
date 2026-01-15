import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <BrowserRouter>
      <div
        className={`min-h-screen ${
          isDark ? "dark bg-background-dark" : "bg-background"
        }`}
      >
        <Header isDark={isDark} setIsDark={setIsDark} />
        <div className="max-w-3xl mx-auto px-5 py-5">
          <Routes>
            <Route path="/" element={<Home isDark={isDark} />} />
            <Route path="/blog" element={<Blog isDark={isDark} />} />
            <Route path="/blog/:slug" element={<BlogPost isDark={isDark} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
