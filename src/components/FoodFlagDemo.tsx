
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";
import { MapPin, Clock, ArrowRight } from 'lucide-react';

interface FoodFlag {
  id: number;
  type: string;
  name: string;
  distance: string;
  timeLeft: string;
  location: string;
  image: string;
}

const foodFlags: FoodFlag[] = [
  {
    id: 1,
    type: "Restaurant",
    name: "Freshly Baked Bread",
    distance: "0.8 miles away",
    timeLeft: "50 mins left",
    location: "Sunny Bakery",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 2,
    type: "Grocery",
    name: "Fresh Produce Bundle",
    distance: "1.2 miles away",
    timeLeft: "1.5 hours left",
    location: "Green Market",
    image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 3,
    type: "Cafe",
    name: "Assorted Pastries",
    distance: "0.5 miles away",
    timeLeft: "30 mins left",
    location: "Morning Brew Cafe",
    image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
  }
];

const FoodFlagDemo = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('food-flag-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentCard((prev) => (prev + 1) % foodFlags.length);
      setIsAnimating(false);
    }, 300);
  };

  const handleClaim = () => {
    toast({
      title: "Food Flag Claimed!",
      description: `You've successfully claimed ${foodFlags[currentCard].name}. Check your notifications for details.`,
      duration: 5000,
    });
  };

  return (
    <section 
      id="food-flag-section" 
      className="py-24 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <h2 className="text-3xl font-bold">Discover Available Food Flags</h2>
            <p className="text-lg text-muted-foreground">
              Browse and claim available food in real-time from various donors
              in your community. Get notified instantly when new food flags are posted.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-start gap-3">
                <div className="bg-feedforward-100 p-2 rounded-full text-feedforward-700 mt-1">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Location-based Matching</h4>
                  <p className="text-muted-foreground">Find food flags closest to your location, reducing travel time and emissions.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-feedforward-100 p-2 rounded-full text-feedforward-700 mt-1">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Real-time Updates</h4>
                  <p className="text-muted-foreground">Get push notifications when new food becomes available nearby.</p>
                </div>
              </div>
            </div>
            
            <Button className="mt-4 bg-feedforward-500 hover:bg-feedforward-600 text-white">
              Find Food Near Me
            </Button>
          </div>
          
          <div className={`relative h-[500px] transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="absolute inset-0 grid place-items-center">
              <div className="relative w-full max-w-md">
                {foodFlags.map((flag, index) => (
                  <Card
                    key={flag.id}
                    className={`absolute top-0 left-0 w-full transition-all duration-300 overflow-hidden shadow-xl rounded-xl ${
                      index === currentCard 
                        ? 'opacity-100 translate-y-0 scale-100 z-30' 
                        : index === (currentCard + 1) % foodFlags.length
                          ? 'opacity-80 translate-y-4 scale-[0.97] z-20'
                          : 'opacity-60 translate-y-8 scale-[0.94] z-10'
                    } ${isAnimating ? 'transform-gpu' : ''}`}
                  >
                    <div className="relative">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={flag.image} 
                          alt={flag.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        {flag.type}
                      </div>
                      <div className="absolute top-4 right-4 bg-feedforward-500/90 text-white backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        {flag.timeLeft}
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{flag.name}</h3>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <MapPin size={16} className="mr-1" />
                        <span className="text-sm">{flag.location} • {flag.distance}</span>
                      </div>
                      
                      <div className="flex justify-between gap-4">
                        <Button 
                          className="flex-1 bg-feedforward-500 hover:bg-feedforward-600 text-white"
                          onClick={handleClaim}
                        >
                          Claim Now
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="border-feedforward-200"
                          onClick={handleNext}
                        >
                          <ArrowRight size={18} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodFlagDemo;
