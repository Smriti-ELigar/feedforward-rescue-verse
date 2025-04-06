
import { createContext, useState, useContext, useCallback, ReactNode } from 'react';
import ChatbotWidget from './ChatbotWidget';

interface ChatbotContextType {
  isOpen: boolean;
  toggleChatbot: () => void;
  openChatbot: () => void;
  closeChatbot: () => void;
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export const useChatbot = () => {
  const context = useContext(ChatbotContext);
  if (!context) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
};

interface ChatbotProviderProps {
  children: ReactNode;
}

const ChatbotProvider = ({ children }: ChatbotProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const openChatbot = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeChatbot = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = {
    isOpen,
    toggleChatbot,
    openChatbot,
    closeChatbot,
  };

  return (
    <ChatbotContext.Provider value={value}>
      {children}
      <ChatbotWidget />
    </ChatbotContext.Provider>
  );
};

export default ChatbotProvider;
