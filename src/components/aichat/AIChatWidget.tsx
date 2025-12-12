
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { streamResponse, parseMarkdownFormatting } from '@/services/geminiService';

const MotionDiv = motion.div;
const MotionButton = motion.button;

interface Message {
  id: number;
  text: string;
  html?: string;
  isUser: boolean;
}

const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Chào bạn! Tôi là trợ lý AI của Bowlan. Tôi có thể giúp gì cho bạn về VPS, Proxy hay Cloud Server?", isUser: false }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Show greeting popup after 5 seconds on desktop
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowGreeting(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOpenChat = () => {
    setIsOpen(true);
    setShowGreeting(false);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now(), text: input, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const stream = await streamResponse(input);
      
      let botMessageText = "";
      let botMessageHtml = "";
      const botMessageId = Date.now() + 1;
      
      // Add placeholder message for bot
      setMessages(prev => [...prev, { id: botMessageId, text: "", html: "", isUser: false }]);

      for await (const chunk of stream) {
        if (chunk && chunk.text) {
           botMessageText += chunk.text;
           botMessageHtml = parseMarkdownFormatting(botMessageText);
           setMessages(prev => 
             prev.map(msg => msg.id === botMessageId ? { ...msg, text: botMessageText, html: botMessageHtml } : msg)
           );
        }
      }
    } catch {
      setMessages(prev => [...prev, { id: Date.now(), text: "Xin lỗi, hệ thống đang bận. Vui lòng thử lại sau.", isUser: false }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-24 cursor-pointer lg:bottom-6 right-6 z-50 flex flex-col items-end transition-all duration-300">
      
      {/* Attention Grabber Popup (Desktop Only) */}
      <AnimatePresence>
        {!isOpen && showGreeting && (
          <MotionDiv
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
            className="hidden lg:flex absolute bottom-4 right-20 w-72 bg-white text-[#0a0a0a] p-4 rounded-2xl rounded-br-sm shadow-2xl items-start gap-3 cursor-pointer z-40 border border-[#f97316]/20 group"
            onClick={handleOpenChat}
            whileHover={{ y: -5 }}
          >
            <div className="bg-linear-to-br from-[#f97316] to-[#0ea5e9] p-2.5 rounded-full shadow-lg shadow-[#f97316]/30 shrink-0 mt-1">
               <Sparkles className="text-white h-5 w-5" />
            </div>
            <div className="grow">
              <p className="font-bold text-sm text-slate-800 mb-1">👋 Chào bạn!</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bạn đang tìm <strong>Cloud VPS</strong> hay cần tư vấn giải pháp <strong>Anti-DDoS</strong>? Chat với AI ngay!
              </p>
            </div>
            
            {/* Close Greeting Button */}
            <button
              onClick={(e) => {
                  e.stopPropagation();
                  setShowGreeting(false);
              }}
              aria-label="Close Greeting"
              title="Close Greeting"
              className="absolute -top-2 -left-2 cursor-pointer bg-slate-200 text-slate-500 hover:bg-red-500 hover:text-white rounded-full p-1 transition-colors shadow-md"
            >
              <X size={12} />
            </button>

            {/* Arrow pointing to button */}
            <div className="absolute bottom-4 -right-2 w-4 h-4 bg-white transform rotate-45 border-r border-b border-[#f97316]/20"></div>
          </MotionDiv>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl w-80 sm:w-96 h-[500px] flex flex-col mb-4 overflow-hidden origin-bottom-right"
          >
            {/* Header */}
            <div className="bg-linear-to-r from-[#f97316] to-[#0ea5e9] p-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Bot className="text-white h-6 w-6" />
                <div>
                    <h3 className="text-white font-bold text-sm">Bowlan AI Support</h3>
                    <p className="text-white/80 text-[10px] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Online
                    </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-lg transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="grow p-4 overflow-y-auto space-y-4 custom-scrollbar bg-slate-900/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm shadow-md ${
                      msg.isUser
                        ? 'bg-[#f97316] text-white rounded-tr-none'
                        : 'bg-slate-700 text-slate-200 rounded-tl-none'
                    }`}
                  >
                    {msg.html ? (
                      <div dangerouslySetInnerHTML={{ __html: msg.html }} />
                    ) : (
                      msg.text
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-700 p-3 rounded-2xl rounded-tl-none shadow-md">
                    <Loader className="h-4 w-4 animate-spin text-slate-400" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-slate-800 border-t border-slate-700">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Hỏi về VPS, Proxy..."
                  className="grow bg-slate-900 border border-slate-700 text-white text-sm rounded-full px-4 py-2.5 focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316]/50 transition-all"
                />
                <MotionButton
                  whileTap={{ scale: 0.9 }}
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-[#f97316] text-white p-2.5 rounded-full hover:bg-[#ea580c]/90 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#f97316]/20 transition-colors"
                >
                  <Send size={18} />
                </MotionButton>
              </div>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <MotionButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
            if (!isOpen) setShowGreeting(false);
            setIsOpen(!isOpen);
        }}
        aria-label={isOpen ? 'Close AI Chat' : 'Open AI Chat'}
        title={isOpen ? 'Close AI Chat' : 'Open AI Chat'}
        className={`p-4 rounded-full shadow-lg cursor-pointer shadow-[#f97316]/40 transition-all relative ${
            isOpen 
            ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' 
            : 'bg-linear-to-r from-[#f97316] to-[#0ea5e9] text-white hover:shadow-[#f97316]/60'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} fill="currentColor" className="opacity-90" />}
        
        {/* Notification Dot when closed */}
        {!isOpen && (
             <span className="absolute top-0 right-0 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
        )}
      </MotionButton>
    </div>
  );
};

export default AIChatWidget;
