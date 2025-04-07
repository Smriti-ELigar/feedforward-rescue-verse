
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import About from "./pages/About";
import Auth from "./pages/Auth";
import DonorDashboard from "./pages/dashboard/DonorDashboard";
import RecipientDashboard from "./pages/dashboard/RecipientDashboard";
import Impact from "./pages/Impact";
import Wallet from "./pages/Wallet";
import Map from "./pages/Map";
import Dao from "./pages/Dao";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";
import ChatbotProvider from "./components/chatbot/ChatbotProvider";

const queryClient = new QueryClient();

// AnimatePresence wrapper component to capture route changes
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard/donor" element={<DonorDashboard />} />
        <Route path="/dashboard/recipient" element={<RecipientDashboard />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/map" element={<Map />} />
        <Route path="/dao" element={<Dao />} />
        
        {/* Placeholder routes for footer links */}
        <Route path="/how-it-works" element={<ComingSoon />} />
        <Route path="/feed-coin" element={<ComingSoon />} />
        <Route path="/faq" element={<ComingSoon />} />
        <Route path="/blog" element={<ComingSoon />} />
        <Route path="/partners" element={<ComingSoon />} />
        <Route path="/contact" element={<ComingSoon />} />
        <Route path="/terms" element={<ComingSoon />} />
        <Route path="/privacy" element={<ComingSoon />} />
        <Route path="/cookies" element={<ComingSoon />} />
        
        {/* Not Found route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ChatbotProvider>
          <AnimatedRoutes />
        </ChatbotProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
