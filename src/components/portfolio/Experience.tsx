import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "JP Morgan Chase & Co",
    role: "QA Team Lead / Quality Analyst",
    period: "Current",
    type: "Full-time",
    description: "Leading quality assurance for legal document preparation in Asset & Wealth Management. Building automation tools and AI solutions to improve team efficiency.",
    highlights: ["Team Leadership", "Process Automation", "AI Integration"],
  },
  {
    company: "JP Morgan Chase & Co",
    role: "Quant Analytics Analyst",
    period: "Nov 2024 - Feb 2025",
    type: "Apprenticeship",
    description: "Participated in AI and reporting initiatives in Home Lending, focusing on automation and data-driven efficiency improvements.",
    highlights: ["AI/ML", "Data Analytics", "Home Lending"],
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider text-sm uppercase mb-4 block">
            Career
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary animate-pulse-glow hidden md:block" />

                <div className="glass-card-hover p-8 md:ml-16">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="w-5 h-5 text-primary" />
                        <span className="text-primary font-medium">{exp.company}</span>
                      </div>
                      <h3 className="text-xl font-display font-bold">{exp.role}</h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4" />
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
