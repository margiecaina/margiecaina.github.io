import { motion } from "framer-motion";
import { ChevronDown, Sparkles, Zap, Target, Download, FileText, Clock, Ticket, Search, CheckCircle } from "lucide-react";
import { useTheme } from "next-themes";
import heroAbstract from "@/assets/hero-abstract.png";
import heroAbstractLight from "@/assets/hero-abstract-light.png";

const impactMetrics = [
  {
    icon: Clock,
    value: "1 hour → 1 click",
    label: "Document Review Time",
  },
  {
    icon: Ticket,
    value: "2000+",
    label: "Tickets Automated",
  },
  {
    icon: Search,
    value: "200+",
    label: "Hidden Errors Uncovered",
  },
  {
    icon: CheckCircle,
    value: "100%",
    label: "On-Time Delivery",
  },
];

export const Hero = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Theme aware */}
      <div
        className="absolute inset-0 opacity-30 dark:opacity-30 transition-opacity duration-500"
        style={{
          backgroundImage: `url(${isDark ? heroAbstract : heroAbstractLight})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 hero-gradient-light dark:hero-gradient" />

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-[15%] w-20 h-20 rounded-2xl glass-card flex items-center justify-center floating"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Sparkles className="w-8 h-8 text-primary" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-[10%] w-16 h-16 rounded-2xl glass-card flex items-center justify-center floating-delayed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <Zap className="w-6 h-6 text-primary" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-[20%] w-14 h-14 rounded-2xl glass-card flex items-center justify-center floating"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <Target className="w-5 h-5 text-primary" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 glass-card text-sm font-medium text-muted-foreground">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Open to Opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-gradient">Margie Caina</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8"
        >
          QA Team Lead & Automation Architect at{" "}
          <span className="text-foreground font-medium">JP Morgan</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Transforming complex processes into elegant, automated solutions in Asset & Wealth Management
        </motion.p>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
        >
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="glass-card p-4 md:p-5 group hover:border-primary/50 transition-all duration-300"
            >
              <metric.icon className="w-5 h-5 text-primary mx-auto mb-2" />
              <div className="text-lg md:text-xl font-display font-bold text-foreground">
                {metric.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => {
              const section = document.getElementById("projects");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:shadow-[0_0_40px_hsl(var(--gold)/0.4)] transition-all duration-300 flex items-center gap-2"
          >
            View My Work
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>

          <a
            href="/resume.pdf"
            download
            className="px-8 py-4 glass-card text-foreground font-medium rounded-full hover:border-primary/50 transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
