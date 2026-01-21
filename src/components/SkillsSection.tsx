import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Zap, Database, Brain } from "lucide-react";

interface SkillCategory {
  name: string;
  icon: typeof Zap;
  skills: string[];
  impactStatement: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Technical",
    icon: Database,
    skills: ["Python", "Excel & VBA", "SQL", "Dashboards"],
    impactStatement: "Building robust data pipelines and analytics solutions",
  },
  {
    name: "Tools",
    icon: Zap,
    skills: ["Alteryx", "Data Automation", "Reporting Tools", "AI/ML Tools"],
    impactStatement: "Leveraging enterprise-grade platforms for scalable automation",
  },
  {
    name: "Expertise",
    icon: Brain,
    skills: ["Process Improvement", "Legal Document Review", "Automation Strategy", "Quality Assurance"],
    impactStatement: "Transforming complex workflows into streamlined operations",
  },
];

const additionalSkills = [
  "Data Analysis", "Workflow Optimization", "Team Leadership",
  "Stakeholder Communication", "Requirements Gathering", "Documentation",
  "AI Integration", "YOLOv8", "Mobile App Development"
];

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
              Battle-tested expertise from building enterprise automation systems 
              at scale.
            </p>
          </div>

          {/* Skills by Category - Clean Lists */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.name}
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease-out ${catIndex * 150}ms, transform 0.5s ease-out ${catIndex * 150}ms`,
                }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">
                    {category.name}
                  </h3>
                </div>

                {/* Skills List */}
                <ul className="space-y-3 mb-4">
                  {category.skills.map((skill, index) => (
                    <li 
                      key={skill}
                      className="flex items-center gap-3 text-foreground"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateX(0)" : "translateX(-10px)",
                        transition: `opacity 0.3s ease-out ${(catIndex * 4 + index) * 50 + 300}ms, transform 0.3s ease-out ${(catIndex * 4 + index) * 50 + 300}ms`,
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full gradient-bg flex-shrink-0" />
                      <span className="font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>

                {/* Impact Statement */}
                <p className="text-sm text-muted-foreground italic border-t border-border/50 pt-4">
                  {category.impactStatement}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <h3 className="font-display text-xl font-semibold mb-6">Also Experienced With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {additionalSkills.map((skill, index) => (
                <span
                  key={skill}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm border transition-all duration-300 hover:scale-105",
                    index % 2 === 0
                      ? "border-primary/30 text-primary hover:bg-primary/10"
                      : "border-secondary/30 text-secondary hover:bg-secondary/10"
                  )}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transition: `opacity 0.3s ease-out ${index * 50 + 500}ms`,
                  }}
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