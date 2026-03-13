import { ExternalLink, Github, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Medical-asisstent',
    technologies: ['HTML', 'CSS'],
    github: 'https://github.com/ahror987/medical-assistent',
  },
  {
    title: 'Stream-line',
    technologies: ['HTML', 'CSS',],
    github: 'https://github.com/ahror987/steam-line',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-surface-elevated">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Practice projects that helped me learn and grow as a developer
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="bg-card rounded-2xl p-6 border border-border card-hover group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <Folder className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github size={20} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View live site"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* What I learned */}
                <div className="mb-4 p-3 rounded-lg bg-accent/50 border border-border">
                  <p className="text-xs font-medium text-accent-foreground mb-1">What I learned:</p>
                  <p className="text-sm text-muted-foreground">{project.learned}</p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://github.com/ahror987" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                See More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
