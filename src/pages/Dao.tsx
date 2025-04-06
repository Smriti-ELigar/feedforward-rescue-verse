
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { GitMerge, Clock, CheckCircle2, XCircle, AlertCircle, BarChart2, HelpCircle, Users, ChevronRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const Dao = () => {
  useEffect(() => {
    // Set page title
    document.title = "DAO | Feed Forward";
    
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
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                <GitMerge className="h-8 w-8 text-purple-600" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Feed Forward DAO</h1>
              <p className="text-muted-foreground">
                Participate in collective decision-making that shapes the future of Feed Forward.
                Stake your FeedCoin to vote on proposals and contribute to platform governance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Your Voting Power</CardTitle>
                  <CardDescription className="text-3xl font-bold text-foreground">
                    50 <span className="text-sm text-muted-foreground">Votes</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    Based on 50 FC staked
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Proposals</CardTitle>
                  <CardDescription className="text-3xl font-bold text-foreground">3</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    <span className="text-green-500 font-medium">↑ 2</span> from last month
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Proposals Voted</CardTitle>
                  <CardDescription className="text-3xl font-bold text-foreground">7</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    Your lifetime participation
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Staked</CardTitle>
                  <CardDescription className="text-3xl font-bold text-foreground">
                    5,430 <span className="text-sm text-muted-foreground">FC</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    Across all platform members
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mb-6">Active Proposals</h2>
            <div className="space-y-6 mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="hover-lift">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge className="mb-2 bg-amber-500">Open for Voting</Badge>
                        <CardTitle>
                          Add Community Fridges to the Platform
                        </CardTitle>
                        <CardDescription className="mt-2">
                          Proposal to integrate physical community fridge locations into the Food Flag Map
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground mb-1">Time Remaining</div>
                        <div className="flex items-center gap-1 text-sm font-medium text-amber-600">
                          <Clock className="h-4 w-4" />
                          3 days
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span className="text-sm font-medium">For</span>
                          </div>
                          <span className="text-sm font-medium">72%</span>
                        </div>
                        <Progress value={72} className="h-2 bg-muted" />
                        <div className="text-xs mt-1 text-muted-foreground">3,280 FC</div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <XCircle className="h-4 w-4 text-red-500" />
                            <span className="text-sm font-medium">Against</span>
                          </div>
                          <span className="text-sm font-medium">28%</span>
                        </div>
                        <Progress value={28} className="h-2 bg-muted" />
                        <div className="text-xs mt-1 text-muted-foreground">1,275 FC</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">87 voters</span>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                      Cast Vote
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="hover-lift">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge className="mb-2 bg-amber-500">Open for Voting</Badge>
                        <CardTitle>
                          Increase Reward for First-Time Donors
                        </CardTitle>
                        <CardDescription className="mt-2">
                          Proposal to double the FeedCoin reward for first-time food donors
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground mb-1">Time Remaining</div>
                        <div className="flex items-center gap-1 text-sm font-medium text-amber-600">
                          <Clock className="h-4 w-4" />
                          5 days
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span className="text-sm font-medium">For</span>
                          </div>
                          <span className="text-sm font-medium">89%</span>
                        </div>
                        <Progress value={89} className="h-2 bg-muted" />
                        <div className="text-xs mt-1 text-muted-foreground">4,120 FC</div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <XCircle className="h-4 w-4 text-red-500" />
                            <span className="text-sm font-medium">Against</span>
                          </div>
                          <span className="text-sm font-medium">11%</span>
                        </div>
                        <Progress value={11} className="h-2 bg-muted" />
                        <div className="text-xs mt-1 text-muted-foreground">510 FC</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">142 voters</span>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                      Cast Vote
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="hover-lift">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge className="mb-2 bg-green-500">Recently Passed</Badge>
                        <CardTitle>
                          Partnership with Local Food Banks
                        </CardTitle>
                        <CardDescription className="mt-2">
                          Proposal to establish formal partnerships with local food banks to expand the platform reach
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground mb-1">Ended</div>
                        <div className="flex items-center gap-1 text-sm font-medium text-green-600">
                          <AlertCircle className="h-4 w-4" />
                          2 days ago
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span className="text-sm font-medium">Approved</span>
                          </div>
                          <span className="text-sm font-medium">94%</span>
                        </div>
                        <Progress value={94} className="h-2 bg-muted" />
                        <div className="text-xs mt-1 text-muted-foreground">4,780 FC</div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <XCircle className="h-4 w-4 text-red-500" />
                            <span className="text-sm font-medium">Against</span>
                          </div>
                          <span className="text-sm font-medium">6%</span>
                        </div>
                        <Progress value={6} className="h-2 bg-muted" />
                        <div className="text-xs mt-1 text-muted-foreground">305 FC</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">203 voters</span>
                    </div>
                    <Button variant="outline">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5" />
                    How to Participate
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-medium">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Stake Your FeedCoin</h3>
                      <p className="text-sm text-muted-foreground">
                        Stake FC to gain voting power. One FC equals one vote.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-medium">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Review Proposals</h3>
                      <p className="text-sm text-muted-foreground">
                        Read proposals carefully and their potential impact on the ecosystem.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-medium">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Cast Your Vote</h3>
                      <p className="text-sm text-muted-foreground">
                        Vote for or against proposals that matter to you.
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <BarChart2 className="mr-2 h-4 w-4" />
                    Stake Your FeedCoin
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Submit a Proposal</CardTitle>
                  <CardDescription>
                    Have ideas to improve Feed Forward? Submit a proposal for the community to vote on.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/50">
                    <div>
                      <h3 className="font-medium">Eligibility</h3>
                      <p className="text-sm text-muted-foreground">
                        Need 100+ FC staked to submit
                      </p>
                    </div>
                    <Badge variant="outline" className="text-amber-600 border-amber-300 bg-amber-50">
                      Need 50 more FC
                    </Badge>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Popular Proposal Topics</h3>
                    <ul className="space-y-2">
                      {['Platform Features', 'Reward Distribution', 'Community Programs', 'Partnerships'].map(topic => (
                        <li key={topic} className="text-sm flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More About Proposals
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dao;
