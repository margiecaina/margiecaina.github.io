import { useState } from "react";
import { Mail, Linkedin, Github, Send, Check, Copy } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/margiecaina",
    color: "hover:text-[#0A66C2]",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/margiecaina",
    color: "hover:text-foreground",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:cainamargie.m@gmail.com",
    color: "hover:text-primary",
  },
];

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText("cainamargie.m@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 gradient-bg opacity-5 blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative">
        <div ref={ref} className={cn("stagger-children", isVisible && "visible")}>
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Let's Build Something{" "}
              <span className="gradient-text">Amazing Together</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you have a project in mind, a question about automation, or 
              just want to connect—I'd love to hear from you.
            </p>
          </div>

          {/* CTA Card */}
          <div className="relative p-8 md:p-12 rounded-2xl gradient-border text-center mb-12">
            <div className="relative z-10">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Ready to transform your QA process?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                I'm currently open to new opportunities and interesting projects. 
                Let's discuss how I can help your team achieve quality at scale.
              </p>

              {/* Email Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:cainamargie.m@gmail.com"
                  className="group flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-primary-foreground font-medium hover:opacity-90 transition-all hover:scale-105"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Me an Email
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-primary/50 transition-all hover:scale-105"
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-green-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover-lift",
                  link.color
                )}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease-out ${(index + 3) * 100}ms, transform 0.5s ease-out ${(index + 3) * 100}ms`,
                }}
              >
                <link.icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                <span className="sr-only">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
