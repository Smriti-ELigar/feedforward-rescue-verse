
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Wallet as WalletIcon, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Clock, 
  BarChart2, 
  Award, 
  Gift, 
  Hexagon 
} from 'lucide-react';

const Wallet = () => {
  useEffect(() => {
    // Set page title
    document.title = "FeedCoin Wallet | Feed Forward";
    
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
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h1 className="text-3xl font-bold mb-4">FeedCoin Wallet</h1>
              <p className="text-muted-foreground">
                Manage your FeedCoin balance, view your NFT badges, and participate in governance
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <Card className="lg:col-span-2">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <WalletIcon className="h-5 w-5 text-feedcoin-600" /> 
                    Your FeedCoin Balance
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="relative bg-gradient-to-br from-feedcoin-500/20 to-feedcoin-300/20 rounded-xl p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Available Balance</p>
                        <motion.h2 
                          className="text-4xl font-bold"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          128 <span className="text-feedcoin-600">FC</span>
                        </motion.h2>
                      </div>
                      <motion.div 
                        className="h-16 w-16 bg-feedcoin-100 rounded-full flex items-center justify-center"
                        animate={{ 
                          rotate: 360,
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                          scale: { duration: 2, repeat: Infinity, repeatType: "reverse" } 
                        }}
                      >
                        <span className="text-2xl">🪙</span>
                      </motion.div>
                    </div>
                    
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button className="bg-feedcoin-500 hover:bg-feedcoin-600 text-white">
                        <ArrowUpRight className="mr-2 h-4 w-4" />
                        Send
                      </Button>
                      <Button variant="outline" className="border-feedcoin-300 text-feedcoin-700 hover:bg-feedcoin-100">
                        <ArrowDownLeft className="mr-2 h-4 w-4" />
                        Receive
                      </Button>
                      <Button variant="outline" className="border-feedcoin-300 text-feedcoin-700 hover:bg-feedcoin-100">
                        <BarChart2 className="mr-2 h-4 w-4" />
                        Stake
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-purple-600" />
                    NFT Badges
                  </CardTitle>
                  <CardDescription>
                    Your earned achievements
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex flex-wrap gap-3 justify-center">
                    <motion.div 
                      className="w-16 h-16 rounded-lg bg-purple-100 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-2xl">🌱</span>
                    </motion.div>
                    <motion.div 
                      className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-2xl">🍎</span>
                    </motion.div>
                    <motion.div 
                      className="w-16 h-16 rounded-lg bg-amber-100 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-2xl">⭐</span>
                    </motion.div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" className="w-full">
                    View All Badges
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <Tabs defaultValue="transactions" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="transactions">Transaction History</TabsTrigger>
                <TabsTrigger value="badges">NFT Badges</TabsTrigger>
                <TabsTrigger value="governance">Governance</TabsTrigger>
              </TabsList>
              
              <TabsContent value="transactions" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>Your FeedCoin activity history</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between border-b pb-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-green-100 p-2 rounded-full">
                            <ArrowDownLeft className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <div className="font-medium">Donation Reward</div>
                            <div className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" /> 2 days ago
                            </div>
                          </div>
                        </div>
                        <div className="text-green-600 font-medium">+15 FC</div>
                      </div>
                      
                      <div className="flex items-center justify-between border-b pb-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-amber-100 p-2 rounded-full">
                            <Gift className="h-5 w-5 text-amber-600" />
                          </div>
                          <div>
                            <div className="font-medium">Achievement Reward</div>
                            <div className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" /> 1 week ago
                            </div>
                          </div>
                        </div>
                        <div className="text-green-600 font-medium">+20 FC</div>
                      </div>
                      
                      <div className="flex items-center justify-between border-b pb-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-100 p-2 rounded-full">
                            <ArrowUpRight className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium">Staked for Voting</div>
                            <div className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" /> 2 weeks ago
                            </div>
                          </div>
                        </div>
                        <div className="text-amber-600 font-medium">-50 FC</div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-start gap-3">
                          <div className="bg-green-100 p-2 rounded-full">
                            <ArrowDownLeft className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <div className="font-medium">First Donation</div>
                            <div className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" /> 3 weeks ago
                            </div>
                          </div>
                        </div>
                        <div className="text-green-600 font-medium">+10 FC</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">View All Transactions</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="badges">
                <Card>
                  <CardHeader>
                    <CardTitle>Your NFT Badge Collection</CardTitle>
                    <CardDescription>Badges earned through participation and achievements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {['🌱', '🍎', '⭐'].map((emoji, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                          whileHover={{ scale: 1.05, rotate: 5 }}
                          className="bg-white rounded-xl overflow-hidden border shadow-md"
                        >
                          <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                            <span className="text-4xl">{emoji}</span>
                          </div>
                          <div className="p-3">
                            <h3 className="font-medium text-sm">
                              {i === 0 ? 'First Steps' : i === 1 ? 'Produce Hero' : 'Star Contributor'}
                            </h3>
                            <p className="text-xs text-muted-foreground mt-1">
                              {i === 0 ? 'Made first donation' : i === 1 ? '5 produce donations' : '10 total donations'}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="bg-white rounded-xl overflow-hidden border border-dashed flex flex-col items-center justify-center p-4"
                      >
                        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-2">
                          <Hexagon className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <p className="text-xs text-muted-foreground text-center">
                          More badges to unlock
                        </p>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="governance">
                <Card>
                  <CardHeader>
                    <CardTitle>DAO Governance</CardTitle>
                    <CardDescription>Stake your FeedCoin to participate in governance decisions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="text-center py-8">
                      <div className="w-16 h-16 rounded-full bg-feedcoin-100 flex items-center justify-center mx-auto mb-4">
                        <BarChart2 className="h-8 w-8 text-feedcoin-600" />
                      </div>
                      <h3 className="font-medium mb-2">Stake FeedCoin to Vote</h3>
                      <p className="text-muted-foreground max-w-md mx-auto mb-6">
                        Staking your FeedCoin gives you voting power in platform governance decisions
                      </p>
                      <Button className="bg-feedcoin-500 hover:bg-feedcoin-600 text-white">
                        Go to DAO Page
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Wallet;
