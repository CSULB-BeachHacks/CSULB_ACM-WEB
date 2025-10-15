import { useEffect, useRef, useState } from "react";

const About = () => {
  const [members, setMembers] = useState(0);
  const [workshops, setWorkshops] = useState(0);
  const [sponsors, setSponsors] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounter(setMembers, 200, 2000);
          animateCounter(setWorkshops, 30, 1800);
          animateCounter(setSponsors, 10, 1600);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounter = (setter: (val: number) => void, target: number, duration: number) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setter(target);
        clearInterval(timer);
      } else {
        setter(Math.floor(current));
      }
    }, 16);
  };

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 scan-effect opacity-30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-in">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gradient glow-text">
            About Us
          </h2>
          
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              <span className="text-gradient font-bold text-xl">CSULB ACM</span> is the largest
              computer science student organization at California State
              University, Long Beach. Our mission is to empower students to
              <strong className="text-primary"> Learn</strong>,{" "}
              <strong className="text-primary">Build</strong>, and{" "}
              <strong className="text-primary">Connect</strong> through workshops, hackathons, and
              networking events.
            </p>
            
            <p>
              We host weekly workshops, industry panels, and our annual
              hackathon{" "}
              <a 
                href="https://beachhacks.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-semibold underline transition-colors"
              >
                BeachHacks
              </a>
              . Whether you're new to coding or an experienced developer, ACM
              offers opportunities to grow, collaborate, and prepare for your
              career.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-xl border border-primary/20 glow-border hover:scale-105 transition-transform animate-float-up">
              <div className="text-5xl font-extrabold text-gradient mb-2">{members}+</div>
              <div className="text-muted-foreground">Active Members</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-xl border border-primary/20 glow-border hover:scale-105 transition-transform animate-float-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl font-extrabold text-gradient mb-2">{workshops}+</div>
              <div className="text-muted-foreground">Workshops Annually</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-xl border border-primary/20 glow-border hover:scale-105 transition-transform animate-float-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-5xl font-extrabold text-gradient mb-2">{sponsors}+</div>
              <div className="text-muted-foreground">Industry Sponsors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
