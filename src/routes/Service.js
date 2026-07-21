import Footer from "../components/Footer";
import Trip from "../components/Trip";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        HeroImg="https://images.unsplash.com/photo-1760648149145-560e619098ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600"
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
