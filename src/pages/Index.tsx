
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import HowItWorks from "@/components/HowItWorks";
import FoodFlagDemo from "@/components/FoodFlagDemo";
import FeedcoinSection from "@/components/FeedcoinSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "Feed Forward | Connecting Surplus Food With Those Who Need It";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <HowItWorks />
        <FoodFlagDemo />
        <FeedcoinSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
