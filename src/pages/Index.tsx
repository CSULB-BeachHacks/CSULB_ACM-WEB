import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Starbound from "@/components/Starbound";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";
import ThemeToggleFab from "@/components/ThemeToggleFab";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Events />
      <Team />
      <Starbound />
      <Sponsors />
      <Footer />
      <ThemeToggleFab />
    </div>
  );
};

export default Index;
