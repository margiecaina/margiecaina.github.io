import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, ArrowUpRight, Sparkles } from "lucide-react";

const socialLinks = [
  {
    name: "Email",
    href: "mailto:cainamargie.m@gmail.com",
    icon: Mail,
    label: "cainamargie.m@gmail.com",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/margiecaina",
    icon: Linkedin,
    label: "linkedin.com/in/margiecaina",
  },
  {
    name: "GitHub",
    href: "https://github.com/margiecaina",
    icon: Github,
    label: "github.com/margiecaina",
  },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 hero-gradient opacity-50" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8"
          >
            <Sparkles className="w-10 h-10 text-primary" />
          </motion.div>

          <span className="text-primary font-medium tracking-wider text-sm uppercase mb-4 block">
            Get in Touch
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Let's Build Something{" "}
            <span className="text-gradient">Amazing</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
            Interested in automation, AI solutions, or just want to connect? 
            I'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -3 }}
                className="group glass-card-hover px-6 py-4 flex items-center gap-3 w-full sm:w-auto"
              >
                <link.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
