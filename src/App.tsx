
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import ChatbotProvider from "./components/chatbot/ChatbotProvider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ChatbotProvider>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard/donor" element={<DonorDashboard />} />
              <Route path="/dashboard/recipient" element={<RecipientDashboard />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/map" element={<Map />} />
              <Route path="/dao" element={<Dao />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </ChatbotProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
