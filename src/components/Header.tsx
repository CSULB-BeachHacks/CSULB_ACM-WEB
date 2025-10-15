import { Github, Linkedin, Instagram } from "lucide-react";
import { useHalloweenTheme } from "@/hooks/useHalloweenTheme";

const Header = () => {
  const { theme, toggleTheme } = useHalloweenTheme();
  
  return (
    <header className="relative z-50 border-b border-border bg-card/50 backdrop-blur-md">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-4 group">
            <img 
              src={theme === "halloween" ? "/images/halo-acm.png" : "/images/acm.png"}
              alt="CSULB ACM" 
              className="h-14 w-14 object-contain transition-transform group-hover:scale-110"
            />
            <span className="text-3xl font-extrabold tracking-tight text-gradient glow-text">
              CSULB ACM
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a 
              href="#about" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              About Us
            </a>
            <a 
              href="#events" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Events
            </a>
            <a 
              href="#team" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Meet Us
            </a>
            <a 
              href="#starbound" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Starbound
            </a>
            <a 
              href="#sponsors" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Sponsor Us
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/csulbacm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/company/acm-at-csulb/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://instagram.com/csulbacm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
