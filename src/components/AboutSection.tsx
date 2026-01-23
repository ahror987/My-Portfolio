import { Code, Gamepad2, Trophy, GraduationCap } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Student',
    description: 'Currently in school, balancing education and coding',
  },
  {
    icon: Code,
    title: 'Self-taught',
    description: 'Learning through online resources and practice',
  },
  {
    icon: Gamepad2,
    title: 'Gamer',
    description: 'Mobile games help me relax and inspire creativity',
  },
  {
    icon: Trophy,
    title: 'Football Fan',
    description: 'Love playing and watching football matches',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-surface-elevated">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get to know the person behind the code
            </p>
          </div>

          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
            {/* Text content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hey there! I'm <span className="text-foreground font-medium">Ahrorbek Atojonov</span>, 
                a 16-year-old from Uzbekistan who discovered a love for web development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My coding journey started when I was curious about how websites work. 
                I began learning HTML and CSS, and soon fell in love with the creative 
                process of building things for the web. Every day, I try to learn 
                something new and improve my skills.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me playing mobile games or kicking 
                a football around. I believe these hobbies teach me about strategy, 
                teamwork, and persistence – skills that also help in programming!
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm excited about the future and eager to contribute to meaningful 
                projects while continuing to grow as a developer.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="bg-card p-5 rounded-xl border border-border card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick facts */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">16</div>
              <div className="text-sm text-muted-foreground">Years Old</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">1+</div>
              <div className="text-sm text-muted-foreground">Year Learning</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">∞</div>
              <div className="text-sm text-muted-foreground">Curiosity</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">100%</div>
              <div className="text-sm text-muted-foreground">Dedication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
