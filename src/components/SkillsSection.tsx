import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  // Programming
  { name: "Python", level: 95, category: "Programming" },
  { name: "JavaScript/TypeScript", level: 85, category: "Programming" },
  { name: "SQL", level: 90, category: "Programming" },
  { name: "HTML/CSS", level: 80, category: "Programming" },
  
  // Tools & Frameworks
  { name: "Selenium", level: 95, category: "Tools" },
  { name: "Playwright", level: 90, category: "Tools" },
  { name: "Pytest", level: 90, category: "Tools" },
  { name: "Git/GitHub", level: 88, category: "Tools" },
  
  // Expertise
  { name: "Test Automation", level: 95, category: "Expertise" },
  { name: "CI/CD Pipelines", level: 85, category: "Expertise" },
  { name: "API Testing", level: 90, category: "Expertise" },
  { name: "Agile/Scrum", level: 88, category: "Expertise" },
];

const categories = ["Programming", "Tools", "Expertise"];

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="skills" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-bg opacity-5 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative">
        <div ref={ref} className={cn("stagger-children", isVisible && "visible")}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">
              Technical Skills
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              My <span className="gradient-text">Technical Arsenal</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Years of hands-on experience building robust automation systems and 
              leading quality initiatives at enterprise scale.
            </p>
          </div>

          {/* Skills by Category */}
          <div className="grid lg:grid-cols-3 gap-8">
            {categories.map((category, catIndex) => (
              <div
                key={category}
                className="space-y-6"
                style={{ transitionDelay: `${catIndex * 150}ms` }}
              >
                <h3 className="font-display text-xl font-semibold text-center lg:text-left">
                  {category}
                </h3>
                <div className="space-y-4">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill, index) => (
                      <SkillBar
                        key={skill.name}
                        skill={skill}
                        isVisible={isVisible}
                        delay={(catIndex * 4 + index) * 100}
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <h3 className="font-display text-xl font-semibold mb-6">Also Experienced With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "AWS", "Docker", "Jenkins", "Jira", "Confluence",
                "React", "REST APIs", "MongoDB", "Machine Learning",
                "Data Analysis", "Performance Testing", "Security Testing"
              ].map((skill, index) => (
                <span
                  key={skill}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm border transition-all duration-300 hover:scale-105",
                    index % 2 === 0
                      ? "border-primary/30 text-primary hover:bg-primary/10"
                      : "border-secondary/30 text-secondary hover:bg-secondary/10"
                  )}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface SkillBarProps {
  skill: Skill;
  isVisible: boolean;
  delay: number;
}

function SkillBar({ skill, isVisible, delay }: SkillBarProps) {
  const count = useCountUp(skill.level, 1500, 0, isVisible);

  return (
    <div
      className="space-y-2"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(-20px)",
        transition: `opacity 0.5s ease-out ${delay}ms, transform 0.5s ease-out ${delay}ms`,
      }}
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground font-mono">{count}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full gradient-bg transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}
