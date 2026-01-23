import { Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and copyright */}
          <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
            <span className="font-bold gradient-text">Ahrorbek Atojonov</span>
            <span className="hidden md:inline text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ahror987"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:atajonov9940@gmail.com"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Made with love */}
        <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mt-6">
          <span>Made with</span>
          <Heart size={14} className="text-primary fill-primary" />
          <span>and lots of learning</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
