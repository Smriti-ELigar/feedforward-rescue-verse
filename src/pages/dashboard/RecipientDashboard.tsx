
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, MapPin, Clock, ArrowRight, Filter, AlertCircle, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RecipientDashboard = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Set page title
    document.title = "Recipient Dashboard | Feed Forward";
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold mb-1">FoodFlag Catcher Dashboard</h1>
                <p className="text-muted-foreground">Find and claim available food donations near you</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="border-feedforward-200">
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </Button>
                <Button 
                  className="bg-feedforward-500 hover:bg-feedforward-600"
                  onClick={() => navigate('/map')}
                >
                  <Search className="mr-2 h-4 w-4" />
                  Find Food
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Available Flags Near You</CardTitle>
                  <CardDescription className="text-3xl font-bold text-foreground">12</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    <span className="text-green-500 font-medium">↑ 5</span> from yesterday
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Claims This Month</CardTitle>
                  <CardDescription className="text-3xl font-bold text-foreground">7</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    <span className="text-green-500 font-medium">↑ 3</span> from last month
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">FeedCoins Earned</CardTitle>
                  <CardDescription className="text-3xl font-bold text-foreground">35</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    <span className="text-green-500 font-medium">↑ 12</span> from last month
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="available" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="available">Available Food</TabsTrigger>
                <TabsTrigger value="claimed">My Claims</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>
              
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Nearby Food Flags</h2>
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-3 w-3" />
                  Filter Results
                </Button>
              </div>
              
              <TabsContent value="available" className="space-y-4">
                <Card className="hover-lift cursor-pointer">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <CardTitle>Fresh Produce Box</CardTitle>
                      <div className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                        0.8 km away
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Mixed vegetables and fruits, approximately 10kg. Variety of seasonal items.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mt-4">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Farmers Market</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Available until 6 PM</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="justify-between">
                    <span className="text-xs text-muted-foreground">Posted 2 hours ago</span>
                    <Button className="bg-feedforward-500 hover:bg-feedforward-600">
                      Claim Now
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="hover-lift cursor-pointer">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <CardTitle>Surplus Bread & Pastries</CardTitle>
                      <div className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                        1.2 km away
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      15 loaves of bread, 20 pastries assorted. Good condition, baked today.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mt-4">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Downtown Bakery</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Available until 8 PM</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="justify-between">
                    <span className="text-xs text-muted-foreground">Posted 4 hours ago</span>
                    <Button className="bg-feedforward-500 hover:bg-feedforward-600">
                      Claim Now
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="hover-lift cursor-pointer">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <CardTitle>Canned Food Surplus</CardTitle>
                      <div className="px-2 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">
                        3.5 km away
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      50 assorted canned goods: soups, vegetables, and fruits. Expiry dates range from 6-12 months.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mt-4">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Community Center</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Available until tomorrow</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="justify-between">
                    <span className="text-xs text-muted-foreground">Posted yesterday</span>
                    <Button className="bg-feedforward-500 hover:bg-feedforward-600">
                      Claim Now
                    </Button>
                  </CardFooter>
                </Card>
                
                <div className="text-center mt-8">
                  <Button variant="outline" className="mx-auto" onClick={() => navigate('/map')}>
                    View All Available Food
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="claimed">
                <div className="text-center py-20">
                  <AlertCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No Active Claims</h3>
                  <p className="text-muted-foreground max-w-md mx-auto mb-6">
                    You don't have any active food claims at the moment. Browse available food flags to make a claim.
                  </p>
                  <Button className="bg-feedforward-500 hover:bg-feedforward-600" onClick={() => navigate('/map')}>
                    Browse Food Flags
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="history">
                <div className="text-center py-20">
                  <Clock className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Claim History</h3>
                  <p className="text-muted-foreground max-w-md mx-auto mb-6">
                    View your past food claims and the impact you've made
                  </p>
                  <Button className="bg-feedforward-500 hover:bg-feedforward-600">
                    View History
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RecipientDashboard;
