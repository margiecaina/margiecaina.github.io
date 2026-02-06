import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, TrendingUp, Clock, Award } from "lucide-react";

const stats = [
  { icon: Clock, value: "1hr → 1min", label: "Document Review Time" },
  { icon: TrendingUp, value: "200+", label: "Hidden Records Found" },
  { icon: Award, value: "100%", label: "Email Delivery Rate" },
  { icon: Sparkles, value: "AI-Powered", label: "QA Solutions" },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left column - Text */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium tracking-wider text-sm uppercase mb-4 block"
            >
              About Me
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              Bringing{" "}
              <span className="text-gradient">elegance</span> to
              <br />functional solutions
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg leading-relaxed mb-6"
            >
              I am a Quality Analyst / Team Lead at JP Morgan, reviewing legal document preparation 
              for asset and wealth management. I combine curiosity and creativity to build tools 
              that improve efficiency, accuracy, and workflows.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Outside work, I love design aesthetics, minimalism, and exploring ways to bring 
              elegance into functional solutions. My passion lies at the intersection of 
              automation, AI, and process improvement.
            </motion.p>
          </div>

          {/* Right column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="glass-card-hover p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-2xl md:text-3xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
