import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        HeroImg="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRvdXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
