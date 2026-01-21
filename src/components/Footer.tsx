import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border/50 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Margie Caina. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-primary inline animate-pulse" /> and lots of automation
          </p>
        </div>
      </div>
    </footer>
  );
}
