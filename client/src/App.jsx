import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Membership from "./components/Membership";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-500">
      <Navbar />
      <Hero />
      <About />
      <Membership />
      <Events />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
