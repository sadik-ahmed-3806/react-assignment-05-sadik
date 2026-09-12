import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <main>
       
      

        {/* Temporary anchor targets */}
        <section id="technologies" className="h-20" />
        <section id="projects" className="h-20" />
        <section id="about" className="h-20" />
        <section id="contact" className="h-20" />
      </main>
    </>
  );
}

export default App;