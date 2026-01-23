const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML5', level: 85 },
      { name: 'CSS3', level: 80 },
      { name: 'JavaScript', level: 70 },
      { name: 'React', level: 60 },
    ],
  },
  {
    category: 'Styling',
    items: [
      { name: 'Tailwind CSS', level: 75 },
      { name: 'Responsive Design', level: 80 },
      { name: 'Flexbox & Grid', level: 85 },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git & GitHub', level: 65 },
      { name: 'VS Code', level: 90 },
      { name: 'Figma Basics', level: 50 },
    ],
  },
  {
    category: 'Learning',
    items: [
      { name: 'TypeScript', level: 40 },
      { name: 'Node.js', level: 30 },
      { name: 'Next.js', level: 25 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies I'm working with and currently learning
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((category) => (
              <div
                key={category.category}
                className="bg-card rounded-2xl p-6 border border-border card-hover"
              >
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category.category}
                </h3>
                <div className="space-y-5">
                  {category.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full gradient-bg transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional note */}
          <p className="text-center text-muted-foreground mt-10 text-sm">
            💡 These percentages reflect my current comfort level with each technology. 
            I'm always learning and improving!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
