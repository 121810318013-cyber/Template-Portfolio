import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-800 py-8 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2026 Praneet Kandregula's Portfolio.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
