
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Turnos from "./pages/Turnos";
import Tratamiento from "./pages/Tratamiento";
import NotFound from "./pages/NotFound";
import SectionRedirect from "./components/SectionRedirect";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/turnos" element={<Turnos />} />
          <Route path="/sobre" element={<SectionRedirect sectionId="sobre" />} />
          <Route path="/tratamientos" element={<SectionRedirect sectionId="tratamientos" />} />
          <Route path="/tratamientos/:slug" element={<Tratamiento />} />
          <Route path="/consultorios" element={<SectionRedirect sectionId="consultorios" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
