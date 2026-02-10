import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, FileText, CheckCircle, Leaf, Target, Award, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import herbitechImg from "@/assets/projects/herbitech.png";
import herbitechTeamImg from "@/assets/projects/herbitech-team.jpg";

const features = [
  "Detection of 20+ herbal plant species with high accuracy",
  "Disease identification for 15+ common plant diseases",
  "YOLOv8-based object detection (~80–85% accuracy)",
  "Prototype mobile and web applications",
  "Real-time inference for field use",
  "Supports sustainable farming practices",
];

const impacts = [
  { icon: Cpu, label: "Real-time AI", description: "YOLOv8 inference for instant plant identification" },
  { icon: Leaf, label: "20+ Species", description: "Accurate detection of diverse herbal plants" },
  { icon: Target, label: "85% Accuracy", description: "High precision in plant and disease classification" },
  { icon: Award, label: "Academic Research", description: "Published thesis with practical applications" },
];

export const Herbitech = () => {
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
              YOLOv8 / Mobile / AI/ML / Computer Vision
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Herbitech: <span className="text-gradient">AI Plant Scanner</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              A research-based mobile application using AI (YOLOv8) to help Filipino herbal growers 
              monitor plant health, detect species, and identify diseases in real time.
            </p>

            {/* Action Buttons - Full showcase */}
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <a href="https://herbitech.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Web Demo
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="https://github.com/margiecaina/Herbitech" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  GitHub Repository
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="gap-2">
                <a href="https://github.com/user-attachments/files/24546104/herbitech_thesis.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4" />
                  Research Paper (PDF)
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
              src={herbitechImg}
              alt="Herbitech AI Plant Identification App"
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

      {/* Research Context */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-display font-bold mb-12 text-center"
            >
              Research <span className="text-gradient">Context</span>
            </motion.h2>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <h3 className="text-xl font-display font-semibold text-primary mb-4">The Problem</h3>
                <p className="text-muted-foreground">
                  Filipino herbal growers lack accessible tools for accurate plant identification and disease 
                  detection. Traditional methods are time-consuming, require expert knowledge, and often lead 
                  to misidentification, resulting in improper treatment and crop losses.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <h3 className="text-xl font-display font-semibold text-primary mb-4">The Research Goal</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Enable accurate detection and classification of herbal plant species</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Identify common plant diseases in real-time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Provide a reliable, accessible monitoring tool for farmers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Translate academic research into practical, deployable solutions</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <h3 className="text-xl font-display font-semibold text-primary mb-4">The Approach</h3>
                <p className="text-muted-foreground">
                  Trained a YOLOv8 object detection model on a curated dataset of Philippine herbal plants 
                  and common diseases. Developed both mobile and web application prototypes to demonstrate 
                  real-time inference capabilities in field conditions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold mb-12 text-center"
          >
            Research <span className="text-gradient">Team</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto glass-card p-4 rounded-2xl overflow-hidden"
          >
            <img
              src={herbitechTeamImg}
              alt="Herbitech Research Team"
              className="w-full rounded-xl"
            />
            <p className="text-center text-muted-foreground mt-4 text-sm">
              The Herbitech research team presenting the thesis project
            </p>
          </motion.div>
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

      {/* Technical Stack */}
      <section className="py-16">
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
              {["YOLOv8", "Python", "PyTorch", "Computer Vision", "Mobile Development", "React", "TensorFlow"].map((tech) => (
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
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-display font-bold mb-6">
              Interested in this research?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <a href="https://margiecaina.github.io/web_herbitech_thesis/FINALGROUP4THESISACSSC_TOPRINT_.docx.html" target="_blank" rel="noopener noreferrer">
                  Read Full Paper
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

export default Herbitech;
