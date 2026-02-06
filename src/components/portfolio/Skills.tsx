import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Cpu, Wrench, Lightbulb, TrendingUp } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Scripting",
    icon: Code,
    skills: ["Python", "VBA", "SQL", "JavaScript"],
    description: "Building automation solutions and data pipelines"
  },
  {
    title: "Data & Analytics",
    icon: Database,
    skills: ["Alteryx", "Excel", "Power BI", "Tableau"],
    description: "Transforming raw data into actionable insights"
  },
  {
    title: "AI & Machine Learning",
    icon: Cpu,
    skills: ["YOLOv8", "TensorFlow", "Computer Vision", "NLP"],
    description: "Developing intelligent automation systems"
  },
  {
    title: "Process Automation",
    icon: Wrench,
    skills: ["RPA", "Workflow Design", "ETL", "API Integration"],
    description: "Streamlining operations at scale"
  },
  {
    title: "Problem Solving",
    icon: Lightbulb,
    skills: ["Root Cause Analysis", "Process Mapping", "Requirements Gathering"],
    description: "Identifying opportunities for improvement"
  },
  {
    title: "Business Impact",
    icon: TrendingUp,
    skills: ["Cost Reduction", "Efficiency Gains", "Stakeholder Management"],
    description: "Delivering measurable results"
  },
];

const certifications = [
  {
    name: "Alteryx Designer Advanced",
    issuer: "Alteryx",
    image: "https://images.credly.com/images/de878f56-515d-40e5-b102-e667192c6f08/Certification_Designer_Advanced.png",
  },
  {
    name: "Alteryx Designer Core",
    issuer: "Alteryx",
    image: "https://images.credly.com/images/14744318-8d6a-49c3-971d-6a4a0f524925/Certification_Designer_Core.png",
  },
  {
    name: "Google Data AI Specialization",
    issuer: "Google / Coursera",
    image: "https://images.credly.com/size/340x340/images/d41de2b7-cbc2-47ec-bcf1-ebecbe83872f/GCC_badge_DA_1000x1000.png",
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider text-sm uppercase mb-4 block">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Skills & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through enterprise-level projects and continuous learning
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="glass-card-hover p-6 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <category.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary/50 rounded-full text-foreground/80 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-xl font-display font-semibold mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="glass-card-hover p-5 flex items-center gap-4 min-w-[280px]"
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-sm">{cert.name}</h4>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};