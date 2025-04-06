
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Globe, Heart } from "lucide-react";

const About = () => {
  useEffect(() => {
    // Set page title
    document.title = "About | Feed Forward";
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-feedforward-600/5 z-0"></div>
          <div className="container relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-feedforward-600">Mission</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Project Feed Forward connects surplus food with those who need it most, 
                creating a sustainable ecosystem of giving and reducing food waste through 
                innovative technology and community engagement.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-background border rounded-xl p-8 shadow-md hover-lift"
              >
                <div className="h-14 w-14 rounded-full bg-feedforward-100 text-feedforward-700 flex items-center justify-center text-xl mb-6 mx-auto">
                  <Globe className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Environmental Impact</h3>
                <p className="text-muted-foreground text-center">
                  By redirecting surplus food, we reduce greenhouse gas emissions from decomposing 
                  food waste and conserve the resources used in food production.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-background border rounded-xl p-8 shadow-md hover-lift"
              >
                <div className="h-14 w-14 rounded-full bg-feedcoin-100 text-feedcoin-700 flex items-center justify-center text-xl mb-6 mx-auto">
                  <Heart className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Social Impact</h3>
                <p className="text-muted-foreground text-center">
                  We bridge the gap between abundance and need, ensuring nutritious food reaches 
                  individuals and communities experiencing food insecurity.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-background border rounded-xl p-8 shadow-md hover-lift"
              >
                <div className="h-14 w-14 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xl mb-6 mx-auto">
                  <Award className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Blockchain Rewards</h3>
                <p className="text-muted-foreground text-center">
                  Our innovative FeedCoin system incentivizes participation, creating a 
                  self-sustaining ecosystem where good deeds are recognized and rewarded.
                </p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-20 text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Join the Food Rescue Revolution</h2>
              <Button className="bg-feedforward-500 hover:bg-feedforward-600 text-white" size="lg">
                Learn How It Works <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-secondary/50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Story</h2>
              <div className="space-y-6 text-lg">
                <p>
                  Feed Forward began with a simple observation: while millions struggle with food insecurity, 
                  an estimated one-third of all food produced globally goes to waste. This paradox inspired 
                  our team to create a solution that leverages technology to connect surplus food with those who need it.
                </p>
                <p>
                  Founded in 2023 by a diverse group of technologists, environmental activists, and community 
                  organizers, Feed Forward has rapidly evolved from concept to reality. Our platform combines 
                  the power of blockchain, artificial intelligence, and community engagement to create a 
                  seamless experience for both food donors and recipients.
                </p>
                <p>
                  Today, we're proud to be making a tangible difference in communities around the world, 
                  one meal at a time. Our vision extends beyond food redistribution—we're building a 
                  new model for tackling systemic issues through decentralized, incentive-aligned solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
