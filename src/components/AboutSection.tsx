import { Code2, Lightbulb, Users, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const highlights = [
  {
    icon: Zap,
    title: "Automation Architect",
    description: "Engineering solutions that eliminate hours of manual work with a single click",
  },
  {
    icon: Users,
    title: "QA Team Lead",
    description: "Leading quality initiatives at JP Morgan for Asset & Wealth Management",
  },
  {
    icon: Code2,
    title: "Impact-Driven",
    description: "Building tools that deliver measurable ROI: 2,000+ tickets automated, 200+ errors uncovered",
  },
  {
    icon: Lightbulb,
    title: "Strategic Thinker",
    description: "Identifying bottlenecks and architecting scalable solutions that multiply team productivity",
  },
];

const skills = [
  "Python", "Excel & VBA", "SQL", "Alteryx",
  "Dashboards", "Automation", "Legal Document Review", "Process Improvement"
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
              Engineering{" "}
              <span className="gradient-text">Enterprise Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              QA Team Lead at JP Morgan, transforming complex legal document workflows 
              into streamlined, automated systems. I don't just find problems—I architect 
              solutions that scale.
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
                At JP Morgan, I lead QA initiatives that go beyond testing—I identify 
                operational bottlenecks and build automation systems that deliver 
                <span className="text-foreground font-medium"> measurable, lasting impact</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My flagship project, <span className="text-primary font-medium">QA-Assist</span>, 
                exemplifies my approach: an AI-powered solution I conceptualized and proposed that 
                slashed document review from ~1 hour to a single click—eliminating manual effort 
                while dramatically improving accuracy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe the best automation isn't just efficient—it's invisible. The tools 
                I build let teams focus on high-value work while the system handles the rest.
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
