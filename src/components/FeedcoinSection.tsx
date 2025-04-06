
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FeedcoinSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-24 relative overflow-hidden bg-gradient-to-b from-feedcoin-50/30 to-background"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-feedcoin-200/30 animate-float"
            style={{
              width: `${100 + (i * 50) % 200}px`,
              height: `${100 + (i * 50) % 200}px`,
              top: `${(Math.random() * 80) + 10}%`,
              left: `${(Math.random() * 80) + 10}%`,
              animationDelay: `${i * 0.7}s`,
            }}
          ></div>
        ))}
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="relative">
              <div className="absolute -top-20 -left-20 w-60 h-60 bg-feedcoin-400/20 rounded-full blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-feedcoin-100 to-feedcoin-50 p-1 rounded-2xl shadow-xl">
                <Card className="border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-feedcoin-500 text-white py-6 px-8">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl font-bold">FeedCoin Wallet</h3>
                        <div className="bg-white/20 p-2 rounded-full">
                          <span className="text-lg">🪙</span>
                        </div>
                      </div>
                      <div className="text-sm opacity-80 mb-2">Available Balance</div>
                      <div className="text-3xl font-bold">250 FeedCoin</div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="font-medium mb-4">Recent Transactions</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-3 border-b">
                          <div>
                            <div className="font-medium">Donation Reward</div>
                            <div className="text-sm text-muted-foreground">Yesterday at 2:30 PM</div>
                          </div>
                          <div className="text-feedcoin-600 font-medium">+50 FC</div>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b">
                          <div>
                            <div className="font-medium">Community Boost</div>
                            <div className="text-sm text-muted-foreground">Apr 3 at 10:15 AM</div>
                          </div>
                          <div className="text-feedcoin-600 font-medium">+25 FC</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">Marketplace Purchase</div>
                            <div className="text-sm text-muted-foreground">Mar 28 at 9:45 AM</div>
                          </div>
                          <div className="text-destructive font-medium">-30 FC</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="inline-block bg-feedcoin-100 text-feedcoin-700 px-4 py-1 rounded-full text-sm font-medium">
              Blockchain Rewards
            </div>
            <h2 className="text-3xl font-bold">Earn FeedCoin For Every Contribution</h2>
            <p className="text-lg text-muted-foreground">
              FeedCoin is our blockchain-based token that rewards users for reducing food waste
              and participating in the Feed Forward ecosystem.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-background rounded-lg p-4 border shadow-sm hover-lift">
                <div className="text-xl mb-2">🎁</div>
                <h4 className="text-lg font-medium mb-1">Donor Rewards</h4>
                <p className="text-sm text-muted-foreground">
                  Earn tokens each time you donate surplus food through our platform.
                </p>
              </div>
              <div className="bg-background rounded-lg p-4 border shadow-sm hover-lift">
                <div className="text-xl mb-2">🛒</div>
                <h4 className="text-lg font-medium mb-1">Marketplace</h4>
                <p className="text-sm text-muted-foreground">
                  Redeem FeedCoin for discounts, products, or convert to carbon credits.
                </p>
              </div>
              <div className="bg-background rounded-lg p-4 border shadow-sm hover-lift">
                <div className="text-xl mb-2">🏆</div>
                <h4 className="text-lg font-medium mb-1">Achievement Badges</h4>
                <p className="text-sm text-muted-foreground">
                  Earn limited NFT badges for reaching impact milestones.
                </p>
              </div>
              <div className="bg-background rounded-lg p-4 border shadow-sm hover-lift">
                <div className="text-xl mb-2">🗳️</div>
                <h4 className="text-lg font-medium mb-1">DAO Governance</h4>
                <p className="text-sm text-muted-foreground">
                  Use your tokens to vote on platform improvements and initiatives.
                </p>
              </div>
            </div>
            
            <Button className="mt-4 bg-feedcoin-500 hover:bg-feedcoin-600 text-white">
              Learn More About FeedCoin
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedcoinSection;
