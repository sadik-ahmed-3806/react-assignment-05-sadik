import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main>
        {/* Technology Section */}
        <TechnologySection />

        {/* More sections can be added here later */}
        {/* Projects */}
        {/* About */}
        {/* Contact */}
      </main>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        theme="light"
        aria-label="Notifications"
      />
    </>
  );
}

export default App;