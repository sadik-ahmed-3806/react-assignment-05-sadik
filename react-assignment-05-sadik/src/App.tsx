import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      
      <Navbar />

      
      <Hero />


      <main>
        
        <TechnologySection />

        
      </main>

      <Footer />

      
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