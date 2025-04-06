
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Search, User, BarChart2, Wallet, Map, GitMerge } from 'lucide-react';
import { useMediaQuery } from '@/hooks/use-media-query';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // In a real implementation, this would toggle dark mode classes on root element
    // document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { name: 'About', path: '/about', icon: User },
    { name: 'Food Map', path: '/map', icon: Map },
    { name: 'Impact', path: '/impact', icon: BarChart2 },
    { name: 'Wallet', path: '/wallet', icon: Wallet },
    { name: 'DAO', path: '/dao', icon: GitMerge },
  ];

  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 z-20">
          <motion.div 
            className="w-10 h-10 rounded-full bg-feedforward-500 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            // Fix: Replace multi-keyframe boxShadow animation with a simpler CSS class
            // that achieves a similar effect without using spring animations
            className="w-10 h-10 rounded-full bg-feedforward-500 flex items-center justify-center pulse-shadow"
          >
            <span className="text-white font-bold text-lg">FF</span>
          </motion.div>
          <motion.span 
            className="font-bold text-xl"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            FeedForward
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              <Link 
                to={item.path} 
                className={`flex items-center gap-1.5 hover:text-feedforward-600 transition-colors ${
                  location.pathname === item.path ? 'text-feedforward-600 font-medium' : ''
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            </motion.div>
          ))}
          
          <motion.div
            custom={navItems.length}
            initial="hidden"
            animate="visible"
            variants={variants}
            className="ml-2 flex items-center gap-3"
          >
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleDarkMode}
              className="rounded-full"
            >
              <AnimatePresence mode="wait">
                {isDarkMode ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>

            <Link to="/auth">
              <Button variant="outline" className="border-feedforward-500 text-feedforward-600 hover:bg-feedforward-100">
                Sign In
              </Button>
            </Link>
            
            <Link to="/auth">
              <Button className="bg-feedforward-500 hover:bg-feedforward-600 text-white">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </nav>

        <div className="md:hidden flex items-center gap-3 z-20">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleDarkMode}
            className="rounded-full"
          >
            <AnimatePresence mode="wait">
              {isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </AnimatePresence>
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus:outline-none"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav 
            className="md:hidden fixed inset-0 pt-20 pb-6 px-4 bg-background/95 backdrop-blur-md shadow-md z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-4 max-h-[calc(100vh-8rem)] overflow-auto">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    to={item.path} 
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-feedforward-100 transition-colors ${
                      location.pathname === item.path ? 'bg-feedforward-100 text-feedforward-700' : ''
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
              
              <div className="mt-auto pt-4 space-y-3">
                <Link to="/auth" className="block" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="border-feedforward-500 text-feedforward-600 hover:bg-feedforward-100 w-full">
                    Sign In
                  </Button>
                </Link>
                
                <Link to="/auth" className="block" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="bg-feedforward-500 hover:bg-feedforward-600 text-white w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
