import { Code2, Lightbulb, Users, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const highlights = [
  {
    icon: Zap,
    title: "Automation First",
    description: "I believe in eliminating repetitive tasks through intelligent automation",
  },
  {
    icon: Users,
    title: "Team Leader",
    description: "Managing QA teams at JP Morgan to deliver flawless products",
  },
  {
    icon: Code2,
    title: "Full-Stack Thinker",
    description: "From Python scripts to cloud architecture, I build end-to-end solutions",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Uncovering hidden issues that went unnoticed for over a decade",
  },
];

const skills = [
  "Python", "Selenium", "Playwright", "SQL", "JavaScript",
  "React", "AWS", "CI/CD", "Agile", "Test Automation"
];

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div ref={ref} className={cn("stagger-children", isVisible && "visible")}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Turning Quality Into a{" "}
              <span className="gradient-text">Competitive Advantage</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              As a QA Team Lead at JP Morgan, I've transformed how teams approach quality—
              building tools that don't just find bugs, but prevent them entirely.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover-lift"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                My journey in tech started with a curiosity about how things work—and quickly 
                evolved into a passion for making them work <span className="text-foreground font-medium">better</span>. 
                At JP Morgan, I lead QA initiatives that have fundamentally changed how my team 
                approaches quality assurance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My flagship project, <span className="text-primary font-medium">QA-Assist</span>, 
                reduced document review time from over an hour to a single click. But beyond the 
                metrics, I'm proud of building tools that my colleagues genuinely enjoy using—
                because the best automation is the kind people adopt without being asked.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not automating workflows, you'll find me exploring new technologies, 
                contributing to team knowledge sharing, and mentoring junior engineers on 
                writing maintainable test code.
              </p>
            </div>

            {/* Skills Cloud */}
            <div className="relative">
              <div className="absolute inset-0 gradient-bg opacity-10 blur-3xl rounded-full" />
              <div className="relative flex flex-wrap gap-3 justify-center p-8">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 cursor-default",
                      index % 3 === 0
                        ? "bg-primary/10 border-primary/30 text-primary hover:bg-primary/20"
                        : index % 3 === 1
                        ? "bg-secondary/10 border-secondary/30 text-secondary hover:bg-secondary/20"
                        : "bg-muted border-border text-foreground hover:border-primary/50"
                    )}
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
