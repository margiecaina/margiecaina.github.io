import { motion } from "framer-motion";
import { ArrowLeft, FileText, Github, CheckCircle, Zap, Target, Award, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import emailAutomationImg from "@/assets/projects/email-automation.png";
import emailDiagramImg from "@/assets/projects/email-automation-diagram.png";

const features = [
  "Automates internal email generation for routine communications",
  "Dynamic, data-driven validation ensures accuracy",
  "Tracks and reports invalid records for follow-up",
  "Easy-to-maintain and extendable workflow architecture",
  "Integrates seamlessly with existing systems",
  "Zero missed communications with 100% on-time delivery",
];

const impacts = [
  { icon: Zap, label: "100% Delivery", description: "Eliminated missed communications entirely" },
  { icon: Target, label: "Scalable Framework", description: "Designed for easy extension to other use cases" },
  { icon: Award, label: "Process Innovation", description: "Demonstrated design thinking in enterprise automation" },
  { icon: Shield, label: "Risk Reduction", description: "Removed manual dependency and human error" },
];

export const EmailAutomation = () => {
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
              Automation / Alteryx / VBA / Process Design
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Email Automation <span className="text-gradient">Initiative</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              An enterprise automation workflow using Alteryx to streamline internal team communications
              and operational tasks, eliminating repetitive administrative work and ensuring 100% on-time delivery.
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
                <a href="https://github.com/margiecaina/Email-Automation-Scalable" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  Workflow Architecture
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
                <strong className="text-foreground">Note:</strong> This is an enterprise solution.
                Live demos are not available due to data sensitivity. The architecture and approach
                are documented for reference.
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
              src={emailAutomationImg}
              alt="Email Automation Workflow Interface"
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
                  Daily templated emails were being sent manually, leading to occasional missed communications,
                  inconsistent timing, and significant time spent on repetitive tasks. The process was
                  dependent on individual availability and prone to human error.
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
                  Designed and implemented an Alteryx workflow that automatically generates and sends
                  templated emails based on dynamic data validation. The system tracks invalid records,
                  ensures data accuracy, and operates independently of manual intervention.
                </p>
                <img
                  src={emailDiagramImg}
                  alt="Email Automation Workflow Diagram"
                  className="w-full rounded-xl border border-border"
                />
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
                    "100% on-time email delivery with zero missed communications",
                    "Freed up significant analyst time for higher-value work",
                    "Created a scalable framework applicable to other automation needs",
                    "Encouraged automation adoption across the broader team",
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
              {["Alteryx", "Python", "VBA", "Excel", "Outlook Integration", "SQL"].map((tech) => (
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

export default EmailAutomation;
