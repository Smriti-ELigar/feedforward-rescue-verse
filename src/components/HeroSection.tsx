
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Gift, Search } from 'lucide-react';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollDown = () => {
    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const parallaxOffset = scrollY * 0.2;

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden">
      {/* Animated background with particles */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-feedforward-50 to-background z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute bg-feedforward-${200 + ((i * 100) % 400)} rounded-full blur-3xl opacity-${10 + ((i * 5) % 30)}`}
              style={{
                width: `${50 + (i * 10) % 100}px`,
                height: `${50 + (i * 10) % 100}px`,
              }}
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%", 
                opacity: 0.1 
              }}
              animate={{ 
                x: [
                  `${Math.random() * 100}%`, 
                  `${Math.random() * 100}%`, 
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`
                ],
                y: [
                  `${Math.random() * 100}%`, 
                  `${Math.random() * 100}%`, 
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`
                ],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
            style={{ transform: `translateY(${-parallaxOffset * 0.5}px)` }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block bg-feedforward-100 text-feedforward-700 px-4 py-1 rounded-full text-sm font-medium"
            >
              Reduce Waste. Feed Communities.
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter"
            >
              Connect <span className="text-feedforward-600">Surplus Food</span> With Those Who Need It
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg text-muted-foreground max-w-xl"
            >
              Project Feed Forward connects food donors with recipients in real-time, 
              reducing waste and earning blockchain rewards while making a social impact.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button 
                size="lg" 
                className="bg-feedforward-500 hover:bg-feedforward-600 text-white feed-button group relative overflow-hidden"
                onClick={() => handleScrollToSection('donors')}
              >
                <Gift className="mr-2 h-4 w-4" />
                <span>Join as FoodFlag Bearer</span>
                <motion.span 
                  className="absolute inset-0 bg-white/20"
                  initial={{ scale: 0, x: "-50%", y: "-50%" }}
                  whileHover={{ scale: 3 }}
                  transition={{ duration: 0.5 }}
                  style={{ originX: 0.5, originY: 0.5, borderRadius: "100%" }}
                />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-feedforward-500 text-feedforward-600 hover:bg-feedforward-100 feed-button group relative overflow-hidden"
                onClick={() => handleScrollToSection('recipients')}
              >
                <Search className="mr-2 h-4 w-4" />
                <span>Join as FoodFlag Catcher</span>
                <motion.span 
                  className="absolute inset-0 bg-feedforward-100/50"
                  initial={{ scale: 0, x: "-50%", y: "-50%" }}
                  whileHover={{ scale: 3 }}
                  transition={{ duration: 0.5 }}
                  style={{ originX: 0.5, originY: 0.5, borderRadius: "100%" }}
                />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          >
            <div className="aspect-square max-w-[500px] mx-auto relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-feedforward-500/20 to-feedcoin-400/20 rounded-full"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 0.5, 0.7]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-4/5 h-4/5 rounded-full overflow-hidden border-8 border-white shadow-xl"
                  initial={{ rotate: -5 }}
                  animate={{ rotate: 5 }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Food sharing community" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute top-5 right-20 glass-panel p-3 shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  delay: 0.8,
                  duration: 0.5,
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-feedforward-100 flex items-center justify-center">
                    <span className="text-feedforward-700 text-xs">🍎</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold">New Food Flag</div>
                    <div className="text-xs text-muted-foreground">2 mins ago</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-10 left-0 glass-panel p-3 shadow-lg"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  delay: 1,
                  duration: 0.5,
                  y: {
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 0.5
                  }
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-feedcoin-100 flex items-center justify-center">
                    <span className="text-feedcoin-700 text-xs">🪙</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold">+5 FeedCoin</div>
                    <div className="text-xs text-muted-foreground">Donation Reward</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full border border-feedforward-200 bg-background/50 hover:bg-feedforward-100/50"
            onClick={handleScrollDown}
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <ArrowDown className="h-5 w-5 text-feedforward-700" />
            </motion.div>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
