import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react"; // For hamburger and close icons

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false); // Close mobile menu on click
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-card border-b py-4" : "py-6"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between relative">
        {/* Logo */}
        <motion.div
          onClick={() => handleScrollTo("home")}
          className="text-xl font-display font-bold text-gradient cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          MC
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => handleScrollTo(item.href.replace("#", ""))}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Desktop Theme Toggle + Connect */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <motion.button
            onClick={() => handleScrollTo("contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:shadow-[0_0_30px_hsl(var(--gold)/0.3)] transition-shadow duration-300"
          >
            Let's Connect
          </motion.button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background shadow-lg flex flex-col items-center py-6 md:hidden gap-4"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleScrollTo(item.href.replace("#", ""))}
                className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};
