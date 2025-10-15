import { Button } from "./ui/button";
import { Mail } from "lucide-react";

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-24 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
      <div className="absolute inset-0 scan-effect opacity-30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-in">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gradient glow-text">
            Sponsor Us
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Support ACM's mission by sponsoring workshops, hackathons, and student resources. 
            We'd love to partner with you to empower the next generation of tech leaders.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="p-6 bg-card/50 rounded-xl border border-border hover:border-primary/50 transition-all hover:scale-105 animate-float-up">
              <h3 className="text-2xl font-bold text-gradient mb-2">Workshops</h3>
              <p className="text-sm text-muted-foreground">
                Fund technical workshops and hands-on learning experiences
              </p>
            </div>
            <div className="p-6 bg-card/50 rounded-xl border border-border hover:border-primary/50 transition-all hover:scale-105 animate-float-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-bold text-gradient mb-2">BeachHacks</h3>
              <p className="text-sm text-muted-foreground">
                Support our annual hackathon with 200+ participants
              </p>
            </div>
            <div className="p-6 bg-card/50 rounded-xl border border-border hover:border-primary/50 transition-all hover:scale-105 animate-float-up" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-2xl font-bold text-gradient mb-2">Resources</h3>
              <p className="text-sm text-muted-foreground">
                Help provide tools and resources for student projects
              </p>
            </div>
          </div>

          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-background font-bold px-8 glow-border mt-8"
            asChild
          >
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=acm.csulb@gmail.com&su=ACM%20Sponsorship&body=Hello%20ACM%20team,%0D%0A%0D%0AI'm%20interested%20in%20sponsorship.%20Let's%20connect!" target="_blank" rel="noopener noreferrer">
              <Mail className="mr-2 h-5 w-5" />
              Contact Us About Sponsorship
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
