import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <img 
              src="/images/acm.png" 
              alt="ACM Logo" 
              className="h-8 w-8 object-contain"
            />
            <span className="text-muted-foreground">© 2025 CSULB ACM</span>
          </div>

          {/* Contact */}
          <div className="text-center space-y-2">
            <p className="font-semibold text-primary">Contact Us</p>
            <a 
              href="mailto:acm.csulb@gmail.com" 
              className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              acm.csulb@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 justify-center md:justify-end">
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
    </footer>
  );
};

export default Footer;
