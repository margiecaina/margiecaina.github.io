import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Play, CheckCircle, Zap, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import qaAssistImg from "@/assets/projects/qa-assist.png";

const features = [
  "Upload TXT, secured/unsecured PDF, OCR (images), DOCX",
  "Extract text and validate against compliance rules",
  "Check consistency across document sections",
  "Generate comprehensive QA Summary Reports",
  "Dynamically create checklists based on document type",
  "Skip previously reviewed documents for efficiency",
];

const impacts = [
  { icon: Zap, label: "60x Faster", description: "Reduced review time from ~1 hour to one-click pre-review" },
  { icon: Target, label: "Improved Accuracy", description: "Consistent rule-based validation eliminates human error" },
  { icon: Award, label: "Innovation Leadership", description: "Pioneered AI-assisted document review in the team" },
];

export const QAAssist = () => {
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
              AI / Automation / Python
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              QA-Assist <span className="text-gradient">Document Review</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              An AI-powered automation tool designed to streamline the review of legal documents by 
              pre-checking and flagging potential critical issues, dramatically reducing manual review time.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <a href="https://qa-assist.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="https://github.com/margiecaina/qa-assist" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  GitHub Repository
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="gap-2">
                <a href="https://youtu.be/noajtgavT1A" target="_blank" rel="noopener noreferrer">
                  <Play className="w-4 h-4" />
                  Demo Video
                </a>
              </Button>
            </div>
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
              src={qaAssistImg}
              alt="QA-Assist Document Review System Interface"
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
          <div className="grid md:grid-cols-3 gap-6">
            {impacts.map((impact, index) => (
              <motion.div
                key={impact.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-hover p-8 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <impact.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gradient mb-2">{impact.label}</h3>
                <p className="text-muted-foreground">{impact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/30">
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

      {/* Technical Details */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-display font-bold mb-8"
            >
              Technical <span className="text-gradient">Approach</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-invert max-w-none"
            >
              <div className="glass-card p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-display font-semibold text-primary mb-3">Problem</h3>
                  <p className="text-muted-foreground">
                    Document review for compliance was taking approximately 1 hour per document, with inconsistent 
                    quality and high reviewer fatigue. Critical issues were sometimes missed due to human error.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-primary mb-3">Solution</h3>
                  <p className="text-muted-foreground">
                    Built an AI-assisted pre-review system that automatically extracts text from various document 
                    formats (PDF, DOCX, images via OCR), validates against compliance rules, and generates 
                    comprehensive QA reports with flagged issues.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-primary mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "OCR", "NLP", "PDF Processing", "React", "Vercel"].map((tech) => (
                      <span key={tech} className="px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-display font-bold mb-6">
              Interested in this project?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <a href="https://qa-assist.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Try Live Demo
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/#contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QAAssist;
