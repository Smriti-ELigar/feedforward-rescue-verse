
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChatbot } from './ChatbotProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: 1,
    content: "👋 Hello! I'm your Feed Forward assistant. How can I help you today?",
    sender: 'bot',
    timestamp: new Date()
  },
  {
    id: 2,
    content: "I can help with creating food flags, finding donations, explaining how FeedCoin works, and much more!",
    sender: 'bot',
    timestamp: new Date()
  }
];

const suggestionChips = [
  "How do I donate food?",
  "How does FeedCoin work?",
  "Where can I find food near me?",
  "What is a Food Flag?",
];

const ChatbotWidget = () => {
  const { isOpen, toggleChatbot } = useChatbot();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = (content: string = inputValue) => {
    if (!content.trim()) return;
    
    // Add user message
    const newUserMessage: Message = {
      id: messages.length + 1,
      content: content,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Simulate AI response (would be replaced with actual AI in production)
    setTimeout(() => {
      let botResponse = '';
      
      if (content.toLowerCase().includes('donate') || content.toLowerCase().includes('flag')) {
        botResponse = "To donate food, go to your donor dashboard and create a new Food Flag. You'll need to specify the type of food, quantity, pickup location, and available time window. Once submitted, recipients in your area will be notified!";
      } else if (content.toLowerCase().includes('feedcoin') || content.toLowerCase().includes('token')) {
        botResponse = "FeedCoin is our blockchain-based reward token. You earn FeedCoin by donating or collecting food. These tokens can be used for governance voting in our DAO, exchanged for rewards, or traded on supported platforms.";
      } else if (content.toLowerCase().includes('find') || content.toLowerCase().includes('near me')) {
        botResponse = "To find food donations near you, visit the Food Map page or open your recipient dashboard. You can filter by food type, distance, and pickup time. Once you find something suitable, you can claim it and arrange pickup.";
      } else if (content.toLowerCase().includes('food flag')) {
        botResponse = "A Food Flag is how donors signal available food. It includes details about the type of food, quantity, location, and pickup window. Recipients can browse these flags on the map or get notifications for flags that match their preferences.";
      } else {
        botResponse = "Thanks for your question! I'm still learning about Feed Forward. You can ask me about donating food, finding donations, how FeedCoin works, or what Food Flags are. Is there something specific you'd like to know?";
      }
      
      const newBotMessage: Message = {
        id: messages.length + 2,
        content: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newBotMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleChipClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-4 sm:right-8 z-50 w-[350px] sm:w-[400px] shadow-2xl"
          >
            <Card className="border-feedforward-200">
              <CardHeader className="bg-feedforward-500 text-white rounded-t-lg flex flex-row justify-between items-center">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9 bg-white text-feedforward-600">
                    <Bot className="h-5 w-5" />
                  </Avatar>
                  <CardTitle className="text-lg font-medium">FeedForward Assistant</CardTitle>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={toggleChatbot}
                  className="text-white hover:bg-feedforward-600 rounded-full h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[400px] p-4">
                  <div className="flex flex-col gap-3">
                    {messages.map((message) => (
                      <div 
                        key={message.id} 
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className={`max-w-[80%] rounded-xl p-3 ${
                            message.sender === 'user' 
                              ? 'bg-feedforward-500 text-white rounded-tr-none' 
                              : 'bg-secondary rounded-tl-none'
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'}`}>
                            {formatTime(message.timestamp)}
                          </p>
                        </motion.div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="max-w-[80%] bg-secondary rounded-xl rounded-tl-none p-3">
                          <div className="flex items-center gap-2">
                            <Loader2 className="h-3 w-3 animate-spin" />
                            <span className="text-xs text-muted-foreground">AI is typing...</span>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                  
                  {messages.length <= 2 && (
                    <div className="mt-6">
                      <p className="text-xs text-muted-foreground mb-3">Suggested questions:</p>
                      <div className="flex flex-wrap gap-2">
                        {suggestionChips.map((suggestion, i) => (
                          <motion.button
                            key={suggestion}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            onClick={() => handleChipClick(suggestion)}
                            className="text-xs bg-secondary px-3 py-1.5 rounded-full hover:bg-feedforward-100 transition-colors"
                          >
                            {suggestion}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}
                </ScrollArea>
              </CardContent>
              <CardFooter className="p-3 border-t">
                <form 
                  className="flex w-full gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                >
                  <Input
                    placeholder="Type a message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 focus-visible:ring-feedforward-500"
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-feedforward-500 hover:bg-feedforward-600"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChatbot}
        className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-feedforward-500 text-white shadow-lg hover:bg-feedforward-600 transition-colors"
      >
        <MessageSquare className="h-6 w-6" />
      </motion.button>
    </>
  );
};

export default ChatbotWidget;
