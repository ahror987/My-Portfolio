import { Mail, Github, Send, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              I'm always excited to connect with fellow developers, mentors, and anyone 
              interested in collaborating or offering guidance.
            </p>
          </div>

          {/* Contact card */}
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-soft-lg">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent mb-4">
                <Send className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
              <p className="text-muted-foreground text-sm">
                Feel free to reach out. I'd love to hear from you!
              </p>
            </div>

            {/* Contact methods */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <a
                href="mailto:atajonov9940@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-accent transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-card flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">atajonov9940@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/ahror987"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-accent transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-card flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-muted-foreground">@ahror987</p>
                </div>
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
              <MapPin size={16} />
              <span className="text-sm">Uzbekistan</span>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:atajonov9940@gmail.com">
                  <Mail className="w-5 h-5" />
                  Send me an Email
                </a>
              </Button>
            </div>
          </div>

          {/* Availability note */}
          <p className="text-center text-muted-foreground mt-8 text-sm">
            🌟 Currently open to internships, mentorship, and collaboration opportunities!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
