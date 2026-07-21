import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        HeroImg="https://images.unsplash.com/photo-1531776691428-a0096d20137c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhbXBzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
