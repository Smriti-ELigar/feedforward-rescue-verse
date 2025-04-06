
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Flag, History, ChevronRight, Clock, MapPin, Users } from 'lucide-react';

const DonorDashboard = () => {
  useEffect(() => {
    // Set page title
    document.title = "Donor Dashboard | Feed Forward";
    
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
                <h1 className="text-3xl font-bold mb-1">Donor Dashboard</h1>
                <p className="text-muted-foreground">Create and manage your food donations</p>
              </div>
              <Button className="bg-feedforward-500 hover:bg-feedforward-600">
                <Plus className="mr-2 h-4 w-4" />
                Create Food Flag
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Food Flags</CardTitle>
                  <CardDescription className="text-3xl font-bold text-foreground">3</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    <span className="text-green-500 font-medium">↑ 2</span> from last week
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Donations</CardTitle>
                  <CardDescription className="text-3xl font-bold text-foreground">24</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    <span className="text-green-500 font-medium">↑ 8</span> from last month
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">FeedCoins Earned</CardTitle>
                  <CardDescription className="text-3xl font-bold text-foreground">128</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    <span className="text-green-500 font-medium">↑ 42</span> from last month
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="active" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="active">Active Flags</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
                <TabsTrigger value="impact">Impact</TabsTrigger>
              </TabsList>
              <TabsContent value="active" className="space-y-4">
                <Card className="hover-lift cursor-pointer">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Flag className="text-feedforward-600 h-5 w-5" />
                        <CardTitle>Surplus Bread & Pastries</CardTitle>
                      </div>
                      <div className="px-2 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">
                        Pending Pickup
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      15 loaves of bread, 20 pastries assorted. Good condition, baked today.
                    </p>
                    <div className="flex items-center gap-6 mt-4">
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Expires in 8 hours</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Downtown Store</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">2 interested</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="justify-between">
                    <span className="text-xs text-muted-foreground">Posted 2 hours ago</span>
                    <Button variant="ghost" size="sm" className="text-feedforward-600">
                      View Details 
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="hover-lift cursor-pointer">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Flag className="text-feedforward-600 h-5 w-5" />
                        <CardTitle>Fresh Produce Box</CardTitle>
                      </div>
                      <div className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                        Claimed
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Mixed vegetables and fruits, approximately 10kg. Variety of seasonal items.
                    </p>
                    <div className="flex items-center gap-6 mt-4">
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Pickup scheduled today</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Farmers Market</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="justify-between">
                    <span className="text-xs text-muted-foreground">Posted yesterday</span>
                    <Button variant="ghost" size="sm" className="text-feedforward-600">
                      View Details 
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="hover-lift cursor-pointer">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Flag className="text-feedforward-600 h-5 w-5" />
                        <CardTitle>Canned Food Surplus</CardTitle>
                      </div>
                      <div className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                        New
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      50 assorted canned goods: soups, vegetables, and fruits. Expiry dates range from 6-12 months.
                    </p>
                    <div className="flex items-center gap-6 mt-4">
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Long shelf life</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Community Center</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">0 interested</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="justify-between">
                    <span className="text-xs text-muted-foreground">Posted 30 minutes ago</span>
                    <Button variant="ghost" size="sm" className="text-feedforward-600">
                      View Details 
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="history">
                <div className="text-center py-20">
                  <History className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">View Your Donation History</h3>
                  <p className="text-muted-foreground max-w-md mx-auto mb-6">
                    Track all your previous donations, see their impact, and check recipient feedback
                  </p>
                  <Button className="bg-feedforward-500 hover:bg-feedforward-600">
                    Load History
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="impact">
                <div className="text-center py-20">
                  <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Your Impact Dashboard</h3>
                  <p className="text-muted-foreground max-w-md mx-auto mb-6">
                    See detailed statistics about the impact of your food donations
                  </p>
                  <Button className="bg-feedforward-500 hover:bg-feedforward-600">
                    Generate Impact Report
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

export default DonorDashboard;
