
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';

interface FeatureStep {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const steps: FeatureStep[] = [
  {
    icon: "🚩",
    title: "Create Food Flags",
    description: "Businesses and individuals flag surplus food with details like quantity, type, and pickup time.",
    color: "bg-feedforward-100 text-feedforward-700"
  },
  {
    icon: "🔔",
    title: "Real-time Notifications",
    description: "Recipients get alerts about available food flags in their area based on preferences.",
    color: "bg-feedcoin-100 text-feedcoin-700"
  },
  {
    icon: "🤝",
    title: "Claim & Collect",
    description: "Recipients claim flags and arrange pickup or delivery for the available food.",
    color: "bg-blue-100 text-blue-700"
  },
  {
    icon: "🪙",
    title: "Earn FeedCoin",
    description: "Both donors and recipients earn blockchain rewards for participating and reducing waste.",
    color: "bg-purple-100 text-purple-700"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24" id="how-it-works">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">How Feed Forward Works</h2>
          <p className="text-lg text-muted-foreground">
            Our platform connects food donors with recipients through an intuitive
            and rewarding process, powered by blockchain technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <FeatureCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ step, index }: { step: FeatureStep; index: number }) => {
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

  return (
    <Card 
      ref={ref} 
      className={`transition-all duration-1000 delay-${index * 200} hover-lift ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
    >
      <CardContent className="p-6">
        <div className="mb-4">
          <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center text-2xl`}>
            {step.icon}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
        <p className="text-muted-foreground">{step.description}</p>
      </CardContent>
    </Card>
  );
};

export default HowItWorks;
