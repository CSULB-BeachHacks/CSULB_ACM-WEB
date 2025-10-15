import { Rocket, Target, Users, Code } from "lucide-react";
import { Button } from "./ui/button";

const Starbound = () => {
  return (
    <section id="starbound" className="py-24 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 animate-shimmer"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12 animate-slide-in">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gradient glow-text">
              Project Starbound
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ACM's flagship initiative that helps students launch real, long-term projects with
              mentorship and clear milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-card/50 rounded-xl border border-border hover:border-primary/50 transition-all hover:scale-105 group animate-float-up scan-effect">
              <Rocket className="h-12 w-12 text-primary mb-4 group-hover:animate-float" />
              <h3 className="text-xl font-bold mb-2 text-gradient">Launch</h3>
              <p className="text-sm text-muted-foreground">
                Turn your ideas into reality with structured guidance
              </p>
            </div>

            <div className="p-6 bg-card/50 rounded-xl border border-border hover:border-primary/50 transition-all hover:scale-105 group animate-float-up scan-effect" style={{ animationDelay: '0.2s' }}>
              <Target className="h-12 w-12 text-primary mb-4 group-hover:animate-float" />
              <h3 className="text-xl font-bold mb-2 text-gradient">Milestones</h3>
              <p className="text-sm text-muted-foreground">
                Clear goals and checkpoints to track progress
              </p>
            </div>

            <div className="p-6 bg-card/50 rounded-xl border border-border hover:border-primary/50 transition-all hover:scale-105 group animate-float-up scan-effect" style={{ animationDelay: '0.4s' }}>
              <Users className="h-12 w-12 text-primary mb-4 group-hover:animate-float" />
              <h3 className="text-xl font-bold mb-2 text-gradient">Mentorship</h3>
              <p className="text-sm text-muted-foreground">
                Experienced mentors to guide your journey
              </p>
            </div>

            <div className="p-6 bg-card/50 rounded-xl border border-border hover:border-primary/50 transition-all hover:scale-105 group animate-float-up scan-effect" style={{ animationDelay: '0.6s' }}>
              <Code className="h-12 w-12 text-primary mb-4 group-hover:animate-float" />
              <h3 className="text-xl font-bold mb-2 text-gradient">Build</h3>
              <p className="text-sm text-muted-foreground">
                Create portfolio-worthy projects that matter
              </p>
            </div>
          </div>

          <div className="text-center pt-8">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-background font-bold px-8 glow-border"
            >
              Learn More About Starbound
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Starbound;
