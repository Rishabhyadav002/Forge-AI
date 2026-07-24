import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import DashboardPreview from "../components/landing/DashboardPreview";
import AICoach from "../components/landing/AICoach";
import Features from "../components/landing/Features";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DashboardPreview />
      <AICoach />
      <Features />
      <CTA />
      <Footer />

    </>
  );
}

export default Home;