
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-feedforward-600/10 z-0"></div>
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join The Food Rescue Revolution
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Whether you're a restaurant with surplus food, a community organization, 
            or an individual looking to make a difference, Feed Forward has a place for you.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-background border rounded-xl p-6 shadow-md hover-lift">
              <div className="h-12 w-12 rounded-full bg-feedforward-100 text-feedforward-700 flex items-center justify-center text-xl mx-auto mb-4">
                🍽️
              </div>
              <h3 className="text-xl font-bold mb-2">I Want To Donate Food</h3>
              <p className="text-muted-foreground mb-6">
                Flag your surplus food and connect with those who need it while
                earning rewards and reducing waste.
              </p>
              <Link to="/dashboard/donor">
                <Button className="w-full bg-feedforward-500 hover:bg-feedforward-600 text-white">
                  Join as Donor
                </Button>
              </Link>
            </div>
            
            <div className="bg-background border rounded-xl p-6 shadow-md hover-lift">
              <div className="h-12 w-12 rounded-full bg-feedcoin-100 text-feedcoin-700 flex items-center justify-center text-xl mx-auto mb-4">
                🔎
              </div>
              <h3 className="text-xl font-bold mb-2">I Need Food Resources</h3>
              <p className="text-muted-foreground mb-6">
                Find available food near you, get real-time notifications, and
                help prevent food waste in your community.
              </p>
              <Link to="/dashboard/recipient">
                <Button className="w-full bg-feedcoin-500 hover:bg-feedcoin-600 text-white">
                  Join as Recipient
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
