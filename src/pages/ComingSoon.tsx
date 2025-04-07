
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageTransition from '@/components/PageTransition';

const ComingSoon = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.slice(1); // Remove leading slash
  const pageTitle = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');

  useEffect(() => {
    // Set page title based on the route
    document.title = `${pageTitle} | Coming Soon | Feed Forward`;
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [pageTitle]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageTransition>
        <main className="flex-1 flex items-center justify-center">
          <div className="container py-20 px-4">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                className="w-24 h-24 bg-feedforward-100 rounded-full flex items-center justify-center mx-auto mb-8"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Clock className="h-12 w-12 text-feedforward-800" />
              </motion.div>
              
              <h1 className="text-4xl font-bold mb-4">
                {pageTitle} Page Coming Soon
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                We're working hard to bring you this exciting new feature.
                Check back soon for updates!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={goBack}
                  className="bg-feedforward-500 hover:bg-feedforward-600 text-white"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Go Back
                </Button>
                
                <Link to="/">
                  <Button variant="outline">
                    Return to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
};

export default ComingSoon;
