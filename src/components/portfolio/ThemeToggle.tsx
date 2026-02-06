import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2.5 rounded-full glass-card hover:border-primary/50 transition-colors"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="w-4 h-4 text-primary" />
      ) : (
        <Moon className="w-4 h-4 text-primary" />
      )}
    </motion.button>
  );
};
