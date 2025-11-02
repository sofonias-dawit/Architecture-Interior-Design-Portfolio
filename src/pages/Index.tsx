import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import FullPortfolio from "@/components/FullPortfolio";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <FullPortfolio />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
