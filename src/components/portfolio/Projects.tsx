import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Bot, Mail, BarChart3, Leaf, ArrowRight, Github, FileText, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "QA-Assist",
    subtitle: "AI-Powered Document Review",
    description: "Designed an AI-assisted QA solution to reduce document review time from ~1 hour to a one-click pre-review, improving accuracy and consistency.",
    icon: Bot,
    tags: ["AI", "Automation", "Python"],
    impact: "60x Faster",
    color: "from-amber-500/20 to-orange-500/20",
    featured: true,
    route: "/projects/qa-assist",
    links: {
      demo: "https://qa-assist.vercel.app/",
      github: "https://github.com/margiecaina/qa-assist",
    },
  },
  {
    id: 2,
    title: "Email Automation Initiative",
    subtitle: "Scalable Operational Efficiency",
    description: "Automated daily templated emails to eliminate missed communications, removing manual dependency and ensuring 100% on-time delivery.",
    icon: Mail,
    tags: ["Automation", "VBA", "Process"],
    impact: "100% Delivery",
    color: "from-blue-500/20 to-cyan-500/20",
    featured: true,
    route: "/projects/email-automation",
    links: {
      caseStudy: true,
      github: "https://github.com/margiecaina/Email-Automation-Scalable",
    },
  },
  {
    id: 3,
    title: "Automated Reconciliation",
    subtitle: "Data Accuracy & Efficiency",
    description: "Automated reconciliation of ~2,000 tickets across systems, uncovering ~200 uncreated records that had gone undetected for over a decade.",
    icon: BarChart3,
    tags: ["SQL", "Alteryx", "Data"],
    impact: "200+ Found",
    color: "from-emerald-500/20 to-teal-500/20",
    featured: true,
    route: "/projects/reconciliation",
    links: {
      caseStudy: true,
      github: "https://github.com/margiecaina/Automated-Reconciliation-Report-Workflow",
    },
  },
  {
    id: 4,
    title: "Herbitech",
    subtitle: "AI Mobile Application",
    description: "Academic research project: a YOLOv8-powered mobile app for real-time herbal plant identification and disease monitoring.",
    icon: Leaf,
    tags: ["YOLOv8", "Mobile", "AI/ML"],
    impact: "Real-time",
    color: "from-green-500/20 to-lime-500/20",
    featured: false,
    route: "/projects/herbitech",
    links: {
      demo: "https://herbitech.vercel.app/",
      github: "https://github.com/margiecaina/Herbitech",
    },
  },
];

type Filter = "all" | "ai" | "automation";

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<Filter>("all");

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "ai") return p.tags.some((t) => t.toLowerCase().includes("ai") || t.toLowerCase().includes("ml"));
    if (filter === "automation") return p.tags.some((t) => t.toLowerCase().includes("automation"));
    return true;
  });

  return (
    <section id="projects" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider text-sm uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Automation solutions that drive measurable impact
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-3 mb-12"
        >
          {[
            { key: "all", label: "Show All" },
            { key: "ai", label: "AI" },
            { key: "automation", label: "Automation" },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setFilter(item.key as Filter)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === item.key
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(217,166,68,0.3)]"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group glass-card-hover p-8 relative overflow-hidden"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="px-3 py-1 glass-card text-xs font-bold text-primary">
                    {project.impact}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold mb-1 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-sm text-primary/80 mb-4">{project.subtitle}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.links.demo && (
                    <Button asChild size="sm" variant="default" className="gap-1.5 text-xs">
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.links.caseStudy && (
                    <Button asChild size="sm" variant="default" className="gap-1.5 text-xs">
                      <Link to={project.route}>
                        <FileText className="w-3.5 h-3.5" />
                        Case Study
                      </Link>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button asChild size="sm" variant="outline" className="gap-1.5 text-xs">
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3.5 h-3.5" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  <Link to={project.route} className="ml-auto">
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-primary cursor-pointer flex items-center gap-1 text-sm"
                    >
                      Details
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};