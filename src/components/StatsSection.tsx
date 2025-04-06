
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface StatProps {
  icon: string;
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

const StatCard = ({ icon, value, label, suffix = '', delay = 0 }: StatProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const duration = 2000; // 2 seconds animation
    
    const timer = setTimeout(() => {
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        setCount(Math.floor(progress * value));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [isVisible, value, delay]);

  return (
    <Card ref={ref} className={`overflow-hidden transition-all duration-1000 hover-lift ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="text-3xl mb-2">{icon}</div>
          <div className="text-3xl md:text-4xl font-bold mb-2">
            {count}{suffix}
          </div>
          <p className="text-muted-foreground">{label}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container">
        <h2 className="text-center text-3xl font-bold mb-12">Our Impact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            icon="🥗" 
            value={25000} 
            label="Meals Rescued"
            delay={0}
          />
          <StatCard 
            icon="🏙️" 
            value={120} 
            label="Active Communities"
            delay={200}
          />
          <StatCard 
            icon="🌱" 
            value={4500} 
            label="CO₂ Saved (kg)"
            delay={400}
          />
          <StatCard 
            icon="🪙" 
            value={15000} 
            label="FeedCoin Rewarded"
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
