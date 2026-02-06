import { motion } from "framer-motion";
import { ArrowLeft, FileText, Github, CheckCircle, Zap, Target, Award, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import reconciliationImg from "@/assets/projects/reconciliation.png";
import reconciliationWorkflowImg from "@/assets/projects/reconciliation-workflow.png";

const features = [
  "Automates data extraction from multiple source systems",
  "Intelligent transformation and normalization of records",
  "Cross-system reconciliation with anomaly detection",
  "Generates formatted reports (PDF/Excel) for management",
  "Scalable logic adaptable to other reconciliation needs",
  "Historical tracking for audit and compliance",
];

const impacts = [
  { icon: Zap, label: "80%+ Reduction", description: "Reduced manual reconciliation effort dramatically" },
  { icon: Search, label: "200+ Found", description: "Discovered uncreated records missed for over a decade" },
  { icon: Target, label: "Higher Accuracy", description: "Eliminated reconciliation errors through automation" },
  { icon: Award, label: "Process Architect", description: "Demonstrated advanced workflow design expertise" },
];

export const Reconciliation = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/#projects">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </motion.div>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl"
          >
            <span className="text-primary font-medium tracking-wider text-sm uppercase mb-4 block">
              Alteryx / SQL / Data Engineering
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Automated <span className="text-gradient">Reconciliation</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              An Alteryx workflow automating ticket reconciliation across multiple systems, detecting anomalies, 
              and generating daily reports. Uncovered 200+ records that had gone undetected for over a decade.
            </p>

            {/* Action Buttons - Case Study focused */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="gap-2"
                onClick={() => {
                  const section = document.getElementById("case-study");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <FileText className="w-4 h-4" />
                View Case Study
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="https://github.com/margiecaina/Automated-Reconciliation-Report-Workflow" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  Workflow Logic
                </a>
              </Button>
            </div>

            {/* Enterprise Notice */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 p-4 glass-card border-l-4 border-primary"
            >
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> This project handles sensitive operational data. 
                Architecture and methodology are documented while maintaining data confidentiality.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-4 rounded-2xl overflow-hidden"
          >
            <img
              src={reconciliationImg}
              alt="Automated Reconciliation System Diagram"
              className="w-full rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold mb-12 text-center"
          >
            Key <span className="text-gradient">Impact</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impacts.map((impact, index) => (
              <motion.div
                key={impact.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-hover p-6 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <impact.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-display font-bold text-gradient mb-2">{impact.label}</h3>
                <p className="text-sm text-muted-foreground">{impact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="case-study" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-display font-bold mb-12 text-center"
            >
              Case <span className="text-gradient">Study</span>
            </motion.h2>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <h3 className="text-xl font-display font-semibold text-primary mb-4">The Challenge</h3>
                <p className="text-muted-foreground">
                  Manual reconciliation of approximately 2,000 tickets across multiple systems was time-consuming, 
                  error-prone, and had allowed discrepancies to accumulate undetected over many years. The process 
                  lacked systematic anomaly detection and historical tracking.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <h3 className="text-xl font-display font-semibold text-primary mb-4">The Solution</h3>
                <p className="text-muted-foreground mb-6">
                  Developed a comprehensive Alteryx workflow that automates data extraction, performs intelligent 
                  transformation and normalization, executes cross-system reconciliation with anomaly detection, 
                  and generates formatted management reports.
                </p>
                <img
                  src={reconciliationWorkflowImg}
                  alt="Reconciliation Workflow Diagram"
                  className="w-full rounded-xl border border-border"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <h3 className="text-xl font-display font-semibold text-primary mb-4">The Discovery</h3>
                <p className="text-muted-foreground">
                  Upon initial execution, the automated workflow uncovered approximately 200 records that had 
                  never been created in the system—discrepancies that had gone undetected for over a decade. 
                  This discovery alone justified the entire automation initiative.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <h3 className="text-xl font-display font-semibold text-primary mb-4">The Outcome</h3>
                <ul className="space-y-3">
                  {[
                    "80%+ reduction in manual reconciliation effort",
                    "Discovery and remediation of 200+ historical discrepancies",
                    "Daily automated reports for management visibility",
                    "Scalable framework applicable to other reconciliation processes",
                    "Established new standard for data integrity monitoring",
                  ].map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold mb-12 text-center"
          >
            Key <span className="text-gradient">Features</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 glass-card p-4"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-display font-bold mb-8"
            >
              Technologies <span className="text-gradient">Used</span>
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-3">
              {["Alteryx", "SQL", "Excel", "PDF Generation", "Data Transformation", "ETL"].map((tech) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-display font-bold mb-6">
              Want to learn more about this project?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/#contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/#projects">View Other Projects</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Reconciliation;
