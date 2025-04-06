
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Github, Mail, AtSign, Lock, Wallet, User } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [authMode, setAuthMode] = useState<'email' | 'metamask' | 'github'>('email');
  const navigate = useNavigate();

  useEffect(() => {
    // Set page title
    document.title = "Sign In | Feed Forward";
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      if (authMode === 'email') {
        // Navigate to appropriate dashboard based on user type (hardcoded for demo)
        navigate('/dashboard/donor');
      } else if (authMode === 'metamask') {
        // For demo purposes, simulate a MetaMask login
        navigate('/dashboard/recipient');
      } else {
        // GitHub OAuth login
        navigate('/dashboard/donor');
      }
    }, 1500);
  };

  const handleMetaMaskLogin = () => {
    setAuthMode('metamask');
    setIsLoading(true);
    
    // Simulate MetaMask connection
    setTimeout(() => {
      setIsLoading(false);
      navigate('/wallet');
    }, 2000);
  };

  const handleGithubLogin = () => {
    setAuthMode('github');
    setIsLoading(true);
    
    // Simulate GitHub OAuth
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard/donor');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-24">
        <div className="container max-w-md mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold">Welcome to Feed Forward</h1>
            <p className="text-muted-foreground mt-2">Sign in to start your food rescue journey</p>
          </motion.div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={authMode}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-2 border-feedforward-100">
                <CardHeader>
                  <CardTitle className="text-center">
                    {authMode === 'email' ? 'Sign In with Email' : 
                     authMode === 'metamask' ? 'Connect Wallet' : 'GitHub Authentication'}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {authMode === 'email' ? 'Enter your credentials to access your account' : 
                     authMode === 'metamask' ? 'Connect your Ethereum wallet to access Web3 features' : 
                     'Authenticating with GitHub...'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {authMode === 'email' && (
                    <Tabs defaultValue="login" className="w-full">
                      <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="register">Register</TabsTrigger>
                      </TabsList>
                      <TabsContent value="login">
                        <form onSubmit={handleAuth} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <div className="relative">
                              <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                              <Input 
                                id="email" 
                                type="email" 
                                placeholder="you@example.com"
                                className="pl-10"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <Label htmlFor="password">Password</Label>
                              <a href="#" className="text-xs text-feedforward-600 hover:underline">
                                Forgot password?
                              </a>
                            </div>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                              <Input 
                                id="password" 
                                type="password"
                                className="pl-10"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required
                              />
                            </div>
                          </div>
                          <Button 
                            type="submit" 
                            className="w-full bg-feedforward-500 hover:bg-feedforward-600"
                            disabled={isLoading}
                          >
                            {isLoading ? 'Signing in...' : 'Sign In'}
                            {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                          </Button>
                        </form>
                      </TabsContent>
                      <TabsContent value="register">
                        <form onSubmit={handleAuth} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                              <Input 
                                id="name" 
                                type="text" 
                                placeholder="John Doe"
                                className="pl-10"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="reg-email">Email</Label>
                            <div className="relative">
                              <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                              <Input 
                                id="reg-email" 
                                type="email" 
                                placeholder="you@example.com"
                                className="pl-10"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="reg-password">Password</Label>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                              <Input 
                                id="reg-password" 
                                type="password"
                                className="pl-10"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required
                              />
                            </div>
                          </div>
                          <Button 
                            type="submit" 
                            className="w-full bg-feedforward-500 hover:bg-feedforward-600"
                            disabled={isLoading}
                          >
                            {isLoading ? 'Creating Account...' : 'Create Account'}
                            {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                          </Button>
                        </form>
                      </TabsContent>
                    </Tabs>
                  )}
                  
                  {authMode === 'metamask' && (
                    <div className="space-y-6 py-4">
                      <div className="flex justify-center">
                        <motion.div 
                          className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center"
                          animate={{ 
                            scale: [1, 1.05, 1],
                            rotate: [0, 5, 0, -5, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <Wallet className="h-10 w-10 text-amber-600" />
                        </motion.div>
                      </div>
                      <p className="text-center text-muted-foreground">
                        {isLoading ? 'Connecting to your wallet...' : 'Click connect to link your Ethereum wallet and access Web3 features'}
                      </p>
                      <Button 
                        onClick={handleAuth}
                        className="w-full bg-amber-500 hover:bg-amber-600 text-white"
                        disabled={isLoading}
                      >
                        {isLoading ? 'Connecting...' : 'Connect MetaMask'}
                      </Button>
                    </div>
                  )}
                  
                  {authMode === 'github' && (
                    <div className="space-y-6 py-4">
                      <div className="flex justify-center">
                        <motion.div 
                          className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        >
                          <Github className="h-10 w-10 text-gray-800" />
                        </motion.div>
                      </div>
                      <p className="text-center text-muted-foreground">
                        {isLoading ? 'Authenticating with GitHub...' : 'Redirecting to GitHub for authentication'}
                      </p>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  {authMode === 'email' && (
                    <>
                      <div className="relative w-full">
                        <div className="absolute inset-0 flex items-center">
                          <span className="w-full border-t"></span>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 w-full">
                        <Button 
                          type="button" 
                          variant="outline"
                          className="w-full"
                          onClick={handleMetaMaskLogin}
                        >
                          <Wallet className="mr-2 h-4 w-4" />
                          MetaMask
                        </Button>
                        <Button 
                          type="button" 
                          variant="outline"
                          className="w-full"
                          onClick={handleGithubLogin}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </Button>
                      </div>
                    </>
                  )}
                  
                  {(authMode === 'metamask' || authMode === 'github') && (
                    <Button
                      type="button"
                      variant="ghost"
                      className="w-full"
                      onClick={() => setAuthMode('email')}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Back to Email Login
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
