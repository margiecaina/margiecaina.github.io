import { useEffect, useState } from "react";
import { ChevronDown, Download } from "lucide-react";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";

const impactMetrics = [
  { value: 1, suffix: " hour → 1 click", label: "Document Review Time" },
  { value: 2000, suffix: "+", label: "Tickets Automated" },
  { value: 200, suffix: "+", label: "Hidden Errors Uncovered" },
  { value: 100, suffix: "%", label: "On-Time Delivery" },
];

const typingTexts = [
  "Architecting automation that saves 1,000+ hours annually",
  "Building AI-powered tools that scale enterprise efficiency",
  "Transforming manual bottlenecks into one-click solutions",
];

export function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const { ref: metricsRef, isVisible: metricsVisible } = useScrollAnimation();

  useEffect(() => {
    const currentText = typingTexts[textIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (typedText.length < currentText.length) {
            setTypedText(currentText.slice(0, typedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (typedText.length > 0) {
            setTypedText(typedText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % typingTexts.length);
          }
        }
      },
      isDeleting ? 30 : 50
    );

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, textIndex]);

  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="text-center max-w-4xl mx-auto z-10">
        {/* Name Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-muted/30 backdrop-blur-sm mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-muted-foreground">Available for Automation Initiatives</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="text-foreground">Hi, I'm </span>
          <span className="gradient-text glow-text">Margie Caina</span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          QA Team Lead & Automation Architect
        </p>

        {/* Typing Effect */}
        <div className="h-16 flex items-center justify-center mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-lg md:text-xl text-foreground/80 font-mono">
            {typedText}
            <span className="animate-typing-cursor">|</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a
            href="/resume.pdf"
            download="Margie_Caina_Resume.pdf"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-primary-foreground font-medium hover:opacity-90 transition-all hover:scale-105"
          >
            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-primary/50 transition-all hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* Impact Metrics */}
        <div
          ref={metricsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12"
        >
          {impactMetrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
              isVisible={metricsVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={handleScrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer group z-10"
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
}

interface MetricCardProps {
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
  delay: number;
}

function MetricCard({ value, suffix, label, isVisible, delay }: MetricCardProps) {
  const count = useCountUp(value, 2000, 0, isVisible);
  const [showValue, setShowValue] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => setShowValue(true), delay);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, delay]);

  return (
    <div
      className={`p-4 md:p-6 rounded-xl gradient-border transition-all duration-500 ${
        showValue ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="relative z-10">
        <div className="font-display text-3xl md:text-4xl font-bold gradient-text">
          {showValue ? count : 0}{suffix}
        </div>
        <p className="text-sm text-muted-foreground mt-2">{label}</p>
      </div>
    </div>
  );
}
