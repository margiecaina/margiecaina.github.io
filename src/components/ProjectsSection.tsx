import { useState, useRef } from "react";
import { ExternalLink, Github, X, ChevronRight, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

type ProjectCategory = "all" | "highlighted" | "automation" | "ai";

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  impact: string;
  technologies: string[];
  category: ProjectCategory[];
  image?: string;
  links?: {
    demo?: string;
    github?: string;
  };
  features: string[];
}

const projects: Project[] = [
  {
    id: "qa-assist",
    title: "QA-Assist",
    shortDescription: "AI-assisted QA solution that reduced document review time from ~1 hour to a one-click pre-review",
    fullDescription: "Designed an AI-assisted QA solution to reduce document review time from ~1 hour to a one-click pre-review, improving accuracy and consistency across the team. The tool leverages machine learning to automatically analyze documents and identify discrepancies before human review.",
    impact: "1 hour → 1 click",
    technologies: ["Python", "AI/ML", "Automation", "Data Processing"],
    category: ["highlighted", "automation", "ai"],
    features: [
      "AI-powered document pre-review",
      "Automated accuracy and consistency checks",
      "One-click comprehensive analysis",
      "Significant time savings for the team",
      "Improved document quality standards"
    ],
  },
  {
    id: "email-automation",
    title: "Email Automation Initiative",
    shortDescription: "Automated daily templated emails eliminating missed communications with 100% on-time delivery",
    fullDescription: "Designed a scalable email automation system that automated daily templated emails to eliminate missed communications. The initiative removed manual dependency and ensured 100% on-time delivery, driving operational efficiency and innovation.",
    impact: "100% on-time",
    technologies: ["Python", "Automation", "Excel & VBA", "Process Design"],
    category: ["highlighted", "automation"],
    features: [
      "Automated daily templated emails",
      "Eliminated manual dependency",
      "Zero missed communications",
      "Scalable design for future growth",
      "100% on-time delivery achieved"
    ],
  },
  {
    id: "reconciliation-report",
    title: "Automated Reconciliation Report",
    shortDescription: "Automated reconciliation of ~2,000 tickets, uncovering ~200 hidden errors undetected for over a decade",
    fullDescription: "Built an automated reconciliation workflow that processed ~2,000 tickets across multiple systems. The system uncovered ~200 uncreated records that had gone undetected for over 10 years, driving accuracy and operational efficiency.",
    impact: "200+ errors found",
    technologies: ["Python", "SQL", "Alteryx", "Data Reconciliation"],
    category: ["highlighted", "automation"],
    features: [
      "Cross-system ticket reconciliation",
      "Automated discrepancy detection",
      "Historical error discovery",
      "~2,000 tickets processed",
      "Decade-old issues uncovered"
    ],
  },
  {
    id: "herbitech",
    title: "Herbitech",
    shortDescription: "YOLOv8-powered mobile app for real-time herbal plant identification and disease monitoring",
    fullDescription: "Academic research project developed at the University of Makati: a YOLOv8-powered mobile app for real-time herbal plant identification and disease monitoring. The app uses computer vision to identify plants and detect potential diseases in real-time.",
    impact: "AI-Powered",
    technologies: ["YOLOv8", "Python", "Mobile Development", "Computer Vision"],
    category: ["highlighted", "ai"],
    features: [
      "Real-time plant identification",
      "Disease monitoring capabilities",
      "YOLOv8 computer vision model",
      "Mobile-first design",
      "Academic research application"
    ],
  },
];

const categories: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "highlighted", label: "Highlighted" },
  { value: "automation", label: "Automation" },
  { value: "ai", label: "AI / ML" },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const filteredProjects = projects.filter(
    (p) => activeCategory === "all" || p.category.includes(activeCategory)
  );

  return (
    <section id="projects" className="py-24 md:py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div ref={ref} className={cn("stagger-children", isVisible && "visible")}>
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">
              Featured Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Projects That <span className="gradient-text">Made an Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each project represents a real problem solved, with measurable outcomes 
              that improved team efficiency and product quality.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === cat.value
                    ? "gradient-bg text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative cursor-pointer perspective-1000"
      style={{
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <div className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
        {/* Impact Badge */}
        <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full gradient-bg text-xs font-bold text-primary-foreground flex items-center gap-1 shadow-lg">
          <Sparkles className="w-3 h-3" />
          {project.impact}
        </div>

        {/* Content */}
        <div className="mb-4">
          <h3 className="font-display text-xl font-bold mb-2 group-hover:gradient-text transition-all">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* View More */}
        <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
          View Details
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-border p-6 md:p-8 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Impact Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full gradient-bg text-sm font-bold text-primary-foreground mb-4">
          <Sparkles className="w-4 h-4" />
          {project.impact}
        </div>

        {/* Title */}
        <h3 className="font-display text-3xl font-bold mb-4">{project.title}</h3>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-6">
          {project.fullDescription}
        </p>

        {/* Features */}
        <div className="mb-6">
          <h4 className="font-semibold mb-3">Key Features</h4>
          <ul className="space-y-2">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="font-semibold mb-3">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        {project.links && (
          <div className="flex gap-4">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg gradient-bg text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
