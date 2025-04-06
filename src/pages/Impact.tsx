
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample data for charts
const monthlyData = [
  { name: 'Jan', donations: 18, rescues: 24, emissions: 12 },
  { name: 'Feb', donations: 25, rescues: 32, emissions: 18 },
  { name: 'Mar', donations: 30, rescues: 37, emissions: 22 },
  { name: 'Apr', donations: 27, rescues: 30, emissions: 19 },
  { name: 'May', donations: 36, rescues: 42, emissions: 27 },
  { name: 'Jun', donations: 42, rescues: 48, emissions: 30 }
];

const foodTypeData = [
  { name: 'Produce', value: 40, color: '#4ade80' },
  { name: 'Bakery', value: 25, color: '#facc15' },
  { name: 'Packaged', value: 20, color: '#60a5fa' },
  { name: 'Prepared', value: 15, color: '#c084fc' }
];

const Impact = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // Set page title
    document.title = "Impact | Feed Forward";
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-24">
        <motion.div 
          className="container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Collective Impact</h1>
            <p className="text-muted-foreground">
              Track the difference we're making together through food rescue. 
              Every meal saved is a step towards a more sustainable and equitable food system.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Meals Rescued</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">25,430</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    <span className="text-green-500">↑ 12%</span> from last month
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">CO₂ Emissions Saved</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">4,582 kg</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    <span className="text-green-500">↑ 8%</span> from last month
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Donors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">327</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    <span className="text-green-500">↑ 15%</span> from last month
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Communities Served</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">42</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    <span className="text-green-500">↑ 5%</span> from last month
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Tabs defaultValue="monthly" className="w-full mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Impact Over Time</h2>
                <TabsList>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="yearly">Yearly</TabsTrigger>
                  <TabsTrigger value="all">All Time</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="monthly" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Food Rescue Trends</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="h-[350px]">
                      {mounted && (
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart
                            data={monthlyData}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                          >
                            <defs>
                              <linearGradient id="colorDonations" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#4ade80" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#4ade80" stopOpacity={0}/>
                              </linearGradient>
                              <linearGradient id="colorRescues" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#60a5fa" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="donations" stroke="#4ade80" fillOpacity={1} fill="url(#colorDonations)" />
                            <Area type="monotone" dataKey="rescues" stroke="#60a5fa" fillOpacity={1} fill="url(#colorRescues)" />
                          </AreaChart>
                        </ResponsiveContainer>
                      )}
                    </div>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>CO₂ Emissions Saved (kg)</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="h-[250px]">
                        {mounted && (
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={monthlyData}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip />
                              <Bar dataKey="emissions" fill="#facc15" radius={[4, 4, 0, 0]} />
                            </BarChart>
                          </ResponsiveContainer>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Food Types Rescued</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="h-[250px]">
                        {mounted && (
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={foodTypeData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                              >
                                {foodTypeData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                              </Pie>
                              <Tooltip />
                              <Legend />
                            </PieChart>
                          </ResponsiveContainer>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="yearly">
                <div className="flex items-center justify-center py-12">
                  <Card className="max-w-md w-full text-center p-8">
                    <div className="text-4xl mb-4">📊</div>
                    <h3 className="text-xl font-semibold mb-2">Yearly Data</h3>
                    <p className="text-muted-foreground mb-6">
                      Yearly impact statistics will be available after our first full year of operation.
                    </p>
                    <Button variant="outline">Get Notified</Button>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="all">
                <div className="flex items-center justify-center py-12">
                  <Card className="max-w-md w-full text-center p-8">
                    <div className="text-4xl mb-4">📈</div>
                    <h3 className="text-xl font-semibold mb-2">All-Time Impact</h3>
                    <p className="text-muted-foreground mb-6">
                      Comprehensive all-time impact metrics are being compiled and will be available soon.
                    </p>
                    <Button variant="outline">Get Notified</Button>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Your Personal Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Sign In to View Your Impact</h3>
                  <p className="text-muted-foreground max-w-md mx-auto mb-6">
                    Track your personal contribution to food rescue and environmental impact.
                    Sign in to see your statistics.
                  </p>
                  <Button className="bg-feedforward-500 hover:bg-feedforward-600">
                    Sign In to View
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={itemVariants} className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Community Stories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Community food distribution" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4 bg-muted/30">
                      <h3 className="font-semibold mb-2">Downtown Community Center</h3>
                      <p className="text-sm text-muted-foreground">
                        "Feed Forward has helped us serve 50% more people in our community with fresh, quality food 
                        that would otherwise go to waste. The platform's ease of use and reliability has been a game-changer for us."
                      </p>
                      <div className="mt-2 text-sm font-medium">- Maria G., Center Director</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Read More Stories</Button>
                </CardFooter>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Environmental Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground">Water Saved</div>
                      <div className="font-medium">24,500 gallons</div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      💧
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground">Land Usage Reduced</div>
                      <div className="font-medium">12.5 acres</div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      🌱
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground">Energy Conserved</div>
                      <div className="font-medium">35,200 kWh</div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                      ⚡
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Learn How We Calculate</Button>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Impact;
