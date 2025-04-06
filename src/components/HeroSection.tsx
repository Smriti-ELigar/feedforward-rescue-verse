
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleScrollDown = () => {
    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden">
      {/* Background with subtle animation */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-feedforward-50 to-background z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute bg-feedforward-${200 + ((i * 100) % 400)} rounded-full blur-3xl opacity-${10 + ((i * 5) % 30)} animate-float`}
              style={{
                width: `${50 + (i * 10) % 100}px`,
                height: `${50 + (i * 10) % 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className={`space-y-6 transition-all duration-1000 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="inline-block bg-feedforward-100 text-feedforward-700 px-4 py-1 rounded-full text-sm font-medium">Reduce Waste. Feed Communities.</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter">
              Connect <span className="text-feedforward-600">Surplus Food</span> With Those Who Need It
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Project Feed Forward connects food donors with recipients in real-time, 
              reducing waste and earning blockchain rewards while making a social impact.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-feedforward-500 hover:bg-feedforward-600 text-white feed-button">
                Join as Donor
              </Button>
              <Button size="lg" variant="outline" className="border-feedforward-500 text-feedforward-600 hover:bg-feedforward-100 feed-button">
                Find Food Near Me
              </Button>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="aspect-square max-w-[500px] mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-feedforward-500/20 to-feedcoin-400/20 rounded-full animate-pulse-glow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 h-4/5 rounded-full overflow-hidden border-8 border-white shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Food sharing community" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-5 right-20 glass-panel p-3 shadow-lg animate-float" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-feedforward-100 flex items-center justify-center">
                    <span className="text-feedforward-700 text-xs">🍎</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold">New Food Flag</div>
                    <div className="text-xs text-muted-foreground">2 mins ago</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-10 left-0 glass-panel p-3 shadow-lg animate-float" style={{ animationDelay: '0.7s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-feedcoin-100 flex items-center justify-center">
                    <span className="text-feedcoin-700 text-xs">🪙</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold">+5 FeedCoin</div>
                    <div className="text-xs text-muted-foreground">Donation Reward</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full border border-feedforward-200 bg-background/50"
            onClick={handleScrollDown}
          >
            <ArrowDown className="h-5 w-5 text-feedforward-700" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
