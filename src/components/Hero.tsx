import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useHalloweenTheme } from "@/hooks/useHalloweenTheme";

const Hero = () => {
  const { theme } = useHalloweenTheme();
  
  const backgroundImage = theme === "halloween" 
    ? "linear-gradient(rgba(11, 16, 32, 0.3), rgba(11, 16, 32, 0.5)), url('/images/halo-hero.jpeg')"
    : "linear-gradient(rgba(11, 16, 32, 0.3), rgba(11, 16, 32, 0.5)), url('/images/hero.png')";
    
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 transition-all duration-1000"
        style={{
          backgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 animate-pulse-slow" />
      
      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 py-20 text-center animate-fade-in">
        <div className="mx-auto max-w-4xl space-y-8">
          <p className="text-primary text-lg font-bold uppercase tracking-widest animate-slide-in">
            Association for Computing Machinery
          </p>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            <span className="text-gradient glow-text">
              Build. Connect. Lead.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed max-w-3xl mx-auto">
            CSULB ACM is the largest Computer Science student organization at
            California State University, Long Beach. Join a community of builders,
            learners, and leaders pushing technology forward.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-background font-bold px-8 py-6 text-lg glow-border"
              asChild
            >
              <a href="#events">
                See Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="ghost"
              className="text-primary px-8 py-6 text-lg"
              asChild
            >
              <a href="#team">Meet Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
