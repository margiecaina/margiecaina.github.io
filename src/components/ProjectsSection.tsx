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
    title: "QA-Assist Document Review System",
    shortDescription: "Automation tool for legal document reviews that flags issues and reduces manual review time while ensuring high accuracy",
    fullDescription: "QA-Assist is an automation tool designed to streamline the review of legal documents. By pre-checking uploaded documents and flagging potential critical issues, it drastically reduces manual review time while ensuring high accuracy and consistency. I conceptualized and proposed this tool to the LOB, demonstrating initiative and strategic thinking.",
    impact: "1 hour → 1 click",
    technologies: ["Python", "AI/ML", "OCR", "PDF Processing", "DOCX"],
    category: ["highlighted", "automation", "ai"],
    links: {
      demo: "https://margiecaina.github.io/qa-assist.html",
    },
    features: [
      "Upload TXT, secured/unsecured PDF, OCR (images) and DOCX files",
      "Extract text and validate documents against compliance rules",
      "Check consistency across multiple documents",
      "Generate QA Summary Reports for easy review and tracking",
      "Dynamically create checklist of required documents based on user input",
      "Logic to skip previously reviewed or overridden documents"
    ],
  },
  {
    id: "email-automation",
    title: "Email Automation Initiative",
    shortDescription: "Scalable Alteryx workflow automating routine engagement and notification emails with 100% on-time delivery",
    fullDescription: "Designed and implemented an automation workflow using Alteryx to streamline internal team communications and operational tasks. This initiative reduced repetitive administrative work and promoted a culture of innovation and automation within the team. The workflow provides a scalable, reusable automation framework applicable to any team or business unit.",
    impact: "100% on-time",
    technologies: ["Alteryx", "Python", "Excel & VBA", "Process Automation"],
    category: ["highlighted", "automation"],
    links: {
      demo: "https://margiecaina.github.io/email_automation.html",
    },
    features: [
      "Automates generation and sending of internal emails for engagement",
      "Applies dynamic, data-driven validation rules for accurate record handling",
      "Tracks invalid records and summarizes errors for reporting",
      "Easy-to-maintain and extendable for future automation initiatives",
      "Scalable, reusable automation framework for any team"
    ],
  },
  {
    id: "reconciliation-report",
    title: "Automated Reconciliation Report Workflow",
    shortDescription: "Alteryx workflow automating ticket reconciliation between multiple systems, reducing manual effort by over 80%",
    fullDescription: "Built an Alteryx workflow that automates ticket reconciliation between multiple systems and generates daily reports. The system processed ~2,000 tickets and uncovered ~200 uncreated records that had gone undetected for over 10 years, providing quantifiable insights into anomaly counts and error trends.",
    impact: "80%+ effort saved",
    technologies: ["Alteryx", "SQL", "Excel", "Data Reconciliation", "PDF Reports"],
    category: ["highlighted", "automation"],
    links: {
      demo: "https://margiecaina.github.io/automated_reconciliation_system.html",
    },
    features: [
      "Data extraction and transformation from multiple sources",
      "Anomaly and malformation detection across systems",
      "Formatted PDF and Excel report generation",
      "Daily automated reconciliation reports",
      "Uncovered 200+ hidden errors undetected for over a decade"
    ],
  },
  {
    id: "herbitech",
    title: "Herbitech: AI Plant Identification",
    shortDescription: "YOLOv8-powered mobile app detecting 20+ plant species and 15+ diseases with 80-85% accuracy",
    fullDescription: "Herbitech is a research-based application designed to help Filipino herbal growers monitor the health of herbal plants. The app uses AI-powered computer vision (YOLOv8) to detect plants and identify diseases in real time, providing actionable recommendations. This reduces crop loss, minimizes reliance on chemical treatments, and supports sustainable herbal farming. Based on an undergraduate thesis submitted to the University of Makati.",
    impact: "80-85% accuracy",
    technologies: ["YOLOv8", "Python", "Computer Vision", "Mobile Development", "AI/ML"],
    category: ["highlighted", "ai"],
    links: {
      demo: "https://margiecaina.github.io/herbitech.html",
    },
    features: [
      "Detection of 20+ herbal plant species",
      "Disease identification for 15+ plant diseases",
      "YOLOv8-based object detection with ~80-85% accuracy",
      "Prototype mobile and web applications",
      "Supports sustainable and efficient herbal farming"
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
