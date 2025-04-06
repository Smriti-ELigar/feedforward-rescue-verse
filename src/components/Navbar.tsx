
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-feedforward-500 flex items-center justify-center animate-pulse-glow">
            <span className="text-white font-bold text-lg">FF</span>
          </div>
          <span className="font-bold text-xl">FeedForward</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/about" className="hover:text-feedforward-600 transition-colors">About</Link>
          <Link to="/how-it-works" className="hover:text-feedforward-600 transition-colors">How it Works</Link>
          <Link to="/impact" className="hover:text-feedforward-600 transition-colors">Impact</Link>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-feedforward-500 text-feedforward-600 hover:bg-feedforward-100">
              Sign In
            </Button>
            <Button className="bg-feedforward-500 hover:bg-feedforward-600 text-white">
              Get Started
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md p-4 flex flex-col gap-4 animate-fade-in">
          <Link 
            to="/about" 
            className="px-4 py-2 hover:bg-feedforward-100 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/how-it-works" 
            className="px-4 py-2 hover:bg-feedforward-100 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            How it Works
          </Link>
          <Link 
            to="/impact" 
            className="px-4 py-2 hover:bg-feedforward-100 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Impact
          </Link>
          <hr className="my-2 border-feedforward-200" />
          <Button 
            variant="outline"
            className="border-feedforward-500 text-feedforward-600 hover:bg-feedforward-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sign In
          </Button>
          <Button 
            className="bg-feedforward-500 hover:bg-feedforward-600 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
