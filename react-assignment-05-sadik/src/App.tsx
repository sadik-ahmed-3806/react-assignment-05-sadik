import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />


      <main>
        {/* Temporary content for testing the sticky navbar */}
        <section
          id="home"
          className="flex min-h-[1200px] items-center justify-center px-6"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">
              Dev Stack
            </h1>

            <p className="mt-4 text-gray-500">
              Navbar preview area
            </p>
          </div>
        </section>

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