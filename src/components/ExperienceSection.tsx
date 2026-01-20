import { Briefcase, GraduationCap, Award, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface TimelineItem {
  type: "work" | "education";
  title: string;
  company: string;
  period: string;
  description: string;
  highlights?: string[];
}

const timeline: TimelineItem[] = [
  {
    type: "work",
    title: "Quant Analytics Analyst (Apprenticeship)",
    company: "JP Morgan Chase & Co. – CCB Home Lending",
    period: "Nov 2024 - Feb 2025",
    description: "Participated in AI and reporting initiatives in Home Lending, with focus on automation and data-driven efficiency.",
    highlights: [
      "Worked on AI-driven reporting solutions",
      "Focused on automation and process optimization",
      "Collaborated on data-driven efficiency improvements",
    ],
  },
  {
    type: "work",
    title: "QA Team Lead",
    company: "JP Morgan Chase & Co. – Asset & Wealth Management",
    period: "Present",
    description: "Reviewing legal document preparation and building automation tools that transform team productivity.",
    highlights: [
      "Designed QA-Assist: AI-assisted solution reducing document review from ~1 hour to 1 click",
      "Automated reconciliation of ~2,000 tickets across systems",
      "Uncovered ~200 hidden errors that went undetected for over a decade",
      "Built email automation achieving 100% on-time delivery",
    ],
  },
  {
    type: "education",
    title: "University of Makati",
    company: "Academic Research – Herbitech Project",
    period: "Academic",
    description: "Developed Herbitech: a YOLOv8-powered mobile app for real-time herbal plant identification and disease monitoring.",
  },
];

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credlyUrl?: string;
}

const certifications: Certification[] = [
  {
    name: "Google Data AI Specialization",
    issuer: "Google / Coursera",
    date: "Completed",
    credlyUrl: "https://coursera.org/share/5344f626f6a8f2a9c1332c1e1b3f721a",
  },
  {
    name: "Alteryx Designer Advanced",
    issuer: "Alteryx",
    date: "Certified",
    credlyUrl: "https://www.credly.com/badges/0633dcaa-0d96-4957-9312-8f74c9424540",
  },
  {
    name: "Alteryx Designer Core",
    issuer: "Alteryx",
    date: "Certified",
    credlyUrl: "https://www.credly.com/badges/1ca77978-68f9-4728-9ba6-4b8299c1ee86",
  },
];

export function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 md:py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div ref={ref} className={cn("stagger-children", isVisible && "visible")}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">
              Career Journey
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Experience & <span className="gradient-text">Credentials</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A track record of delivering excellence at one of the world's 
              leading financial institutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Timeline */}
            <div className="lg:col-span-2">
              <h3 className="font-display text-2xl font-semibold mb-8">Experience</h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20" />

                {/* Timeline items */}
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <TimelineCard key={index} item={item} index={index} isVisible={isVisible} />
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="font-display text-2xl font-semibold mb-8">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <CertificationCard key={cert.name} cert={cert} index={index} isVisible={isVisible} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineCardProps {
  item: TimelineItem;
  index: number;
  isVisible: boolean;
}

function TimelineCard({ item, index, isVisible }: TimelineCardProps) {
  const Icon = item.type === "work" ? Briefcase : GraduationCap;

  return (
    <div
      className="relative pl-16"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(-30px)",
        transition: `opacity 0.5s ease-out ${index * 150}ms, transform 0.5s ease-out ${index * 150}ms`,
      }}
    >
      {/* Icon */}
      <div className="absolute left-0 w-12 h-12 rounded-full gradient-bg flex items-center justify-center shadow-lg z-10">
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>

      {/* Content */}
      <div className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-sm text-primary font-mono">{item.period}</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-sm text-muted-foreground">{item.company}</span>
        </div>
        <h4 className="font-display text-xl font-semibold mb-2">{item.title}</h4>
        <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
        
        {item.highlights && (
          <ul className="space-y-2">
            {item.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full gradient-bg mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">{highlight}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

interface CertificationCardProps {
  cert: Certification;
  index: number;
  isVisible: boolean;
}

function CertificationCard({ cert, index, isVisible }: CertificationCardProps) {
  return (
    <div
      className="group p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease-out ${(index + 3) * 150}ms, transform 0.5s ease-out ${(index + 3) * 150}ms`,
      }}
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
          <Award className="w-5 h-5 text-primary-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm leading-tight mb-1 group-hover:gradient-text transition-all">
            {cert.name}
          </h4>
          <p className="text-xs text-muted-foreground">{cert.issuer}</p>
          <p className="text-xs text-muted-foreground/70">{cert.date}</p>
        </div>
        {cert.credlyUrl && (
          <a
            href={cert.credlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-muted-foreground" />
          </a>
        )}
      </div>
    </div>
  );
}
