import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Trusted from "@/components/sections/Trusted";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <Services />
      <WhyChooseUs />
      <Process />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default App;