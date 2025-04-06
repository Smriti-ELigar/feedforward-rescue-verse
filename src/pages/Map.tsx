
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Search, Filter, MapPin, MousePointerClick } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Map = () => {
  useEffect(() => {
    // Set page title
    document.title = "Food Map | Feed Forward";
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-3xl font-bold mb-2">Food Flag Map</h1>
            <p className="text-muted-foreground">Find available food donations near you</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-[600px] bg-slate-200 rounded-xl overflow-hidden shadow-md"
              >
                {/* Placeholder for the actual map */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MousePointerClick className="h-10 w-10 text-slate-500 mb-4 mx-auto" />
                    <h3 className="text-lg font-semibold">Interactive Map</h3>
                    <p className="text-muted-foreground">
                      Google Maps integration would be displayed here
                    </p>
                  </div>
                </div>
                
                {/* Map pins placeholders */}
                <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                  <motion.div 
                    className="bg-green-500 h-8 w-8 rounded-full flex items-center justify-center text-white font-bold border-4 border-white shadow-lg"
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    🥦
                  </motion.div>
                  <div className="opacity-0 group-hover:opacity-100 absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded shadow-lg transition-opacity z-10 min-w-[100px]">
                    <p className="text-xs font-semibold">Fresh Produce</p>
                    <p className="text-xs text-muted-foreground">0.8 km away</p>
                  </div>
                </div>
                
                <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                  <motion.div 
                    className="bg-amber-500 h-8 w-8 rounded-full flex items-center justify-center text-white font-bold border-4 border-white shadow-lg"
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{ 
                      duration: 1.5,
                      delay: 0.3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    🍞
                  </motion.div>
                  <div className="opacity-0 group-hover:opacity-100 absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded shadow-lg transition-opacity z-10 min-w-[100px]">
                    <p className="text-xs font-semibold">Bakery Items</p>
                    <p className="text-xs text-muted-foreground">1.2 km away</p>
                  </div>
                </div>
                
                <div className="absolute bottom-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                  <motion.div 
                    className="bg-blue-500 h-8 w-8 rounded-full flex items-center justify-center text-white font-bold border-4 border-white shadow-lg"
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{ 
                      duration: 1.5,
                      delay: 0.6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    🥫
                  </motion.div>
                  <div className="opacity-0 group-hover:opacity-100 absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded shadow-lg transition-opacity z-10 min-w-[100px]">
                    <p className="text-xs font-semibold">Canned Goods</p>
                    <p className="text-xs text-muted-foreground">3.5 km away</p>
                  </div>
                </div>
                
                {/* Map controls */}
                <div className="absolute top-4 left-4 right-4">
                  <Card className="shadow-lg">
                    <CardContent className="p-3">
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input 
                            placeholder="Search location..." 
                            className="pl-9 h-10"
                          />
                        </div>
                        <Button variant="outline">
                          <Filter className="h-4 w-4" />
                        </Button>
                        <Button className="bg-feedforward-500 hover:bg-feedforward-600">
                          <MapPin className="mr-2 h-4 w-4" />
                          Near Me
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 md:left-auto md:w-60">
                  <Card>
                    <CardContent className="p-3 space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-medium">Map Legend</div>
                        <Badge variant="outline" className="text-xs">
                          12 flags nearby
                        </Badge>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <div className="bg-green-500 h-3 w-3 rounded-full"></div>
                          <span className="text-xs">Produce</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="bg-amber-500 h-3 w-3 rounded-full"></div>
                          <span className="text-xs">Bakery</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="bg-blue-500 h-3 w-3 rounded-full"></div>
                          <span className="text-xs">Canned/Packaged</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="bg-purple-500 h-3 w-3 rounded-full"></div>
                          <span className="text-xs">Prepared Meals</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Nearby Food Flags</h2>
                  
                  <div className="space-y-6">
                    <div className="border-b pb-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium">Fresh Produce Box</h3>
                          <p className="text-sm text-muted-foreground">Farmers Market</p>
                        </div>
                        <Badge className="bg-green-500">0.8 km</Badge>
                      </div>
                      <p className="text-sm mt-2">Mixed vegetables and fruits, approximately 10kg.</p>
                      <Button className="w-full mt-3 bg-feedforward-500 hover:bg-feedforward-600 text-white">View Details</Button>
                    </div>
                    
                    <div className="border-b pb-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium">Surplus Bread & Pastries</h3>
                          <p className="text-sm text-muted-foreground">Downtown Bakery</p>
                        </div>
                        <Badge className="bg-amber-500">1.2 km</Badge>
                      </div>
                      <p className="text-sm mt-2">15 loaves of bread, 20 pastries assorted.</p>
                      <Button className="w-full mt-3 bg-feedforward-500 hover:bg-feedforward-600 text-white">View Details</Button>
                    </div>
                    
                    <div className="border-b pb-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium">Canned Food Surplus</h3>
                          <p className="text-sm text-muted-foreground">Community Center</p>
                        </div>
                        <Badge className="bg-blue-500">3.5 km</Badge>
                      </div>
                      <p className="text-sm mt-2">50 assorted canned goods.</p>
                      <Button className="w-full mt-3 bg-feedforward-500 hover:bg-feedforward-600 text-white">View Details</Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button variant="ghost">View All Results</Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Map;
