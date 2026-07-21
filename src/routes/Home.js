import Footer from "../components/Footer";
import Trip from "../components/Trip";
import Places from "../components/Places";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        HeroImg="https://plus.unsplash.com/premium_photo-1673971706769-13a9499e3794?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Places />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
