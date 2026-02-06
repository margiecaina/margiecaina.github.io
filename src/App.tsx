import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import QAAssist from "./pages/projects/QAAssist";
import EmailAutomation from "./pages/projects/EmailAutomation";
import Reconciliation from "./pages/projects/Reconciliation";
import Herbitech from "./pages/projects/Herbitech";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects/qa-assist" element={<QAAssist />} />
            <Route path="/projects/email-automation" element={<EmailAutomation />} />
            <Route path="/projects/reconciliation" element={<Reconciliation />} />
            <Route path="/projects/herbitech" element={<Herbitech />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
