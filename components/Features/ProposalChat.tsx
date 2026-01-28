import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Loader2, Bot, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../../services/geminiService';
import { ChatMessage } from '../../types';

export const ProposalChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Bem-vindo ao canal direto da Eagle Digital House. Sou o assistente de estratégia da VELLO. Como posso ajudar com os detalhes técnicos do Ecossistema para a AMPEI?',
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const responseText = await sendMessageToGemini(userMsg.text, history);

      if (responseText) {
          const aiMsg: ChatMessage = {
            id: (Date.now() + 1).toString(),
            role: 'model',
            text: responseText,
            timestamp: Date.now()
          };
          setMessages(prev => [...prev, aiMsg]);
      }
    } catch (error) {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: 'Desculpe, tive um problema técnico de conexão. Por favor, tente novamente.',
        timestamp: Date.now()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="glass border-white/10 rounded-3xl w-[380px] h-[550px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col mb-6 overflow-hidden animate-fade-in-up origin-bottom-right">
          {/* Header */}
          <div className="bg-white/[0.03] p-6 border-b border-white/5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="bg-primary/20 p-2 rounded-xl border border-primary/30">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-slate-900 animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-white font-display font-bold text-sm tracking-wide">Estrategista VELLO</h3>
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">AI Agent // Online</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-500 hover:text-white transition-colors p-2"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed font-light ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white shadow-lg shadow-primary/10 rounded-tr-none' 
                      : 'glass-card text-slate-200 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="glass-card p-4 rounded-2xl rounded-tl-none">
                  <Loader2 className="w-4 h-4 text-primary animate-spin" />
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white/[0.02] border-t border-white/5">
            <div className="flex gap-3 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Dúvidas sobre o escopo ou tecnologia?"
                className="flex-1 bg-dark-950/80 border border-white/5 rounded-2xl px-5 py-3 text-[13px] text-white focus:outline-none focus:border-primary/50 placeholder-slate-600 transition-all font-light"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-primary hover:bg-primaryDark disabled:bg-slate-800 disabled:text-slate-600 text-white w-12 h-12 flex items-center justify-center rounded-2xl transition-all shadow-lg shadow-primary/10"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="mt-3 flex items-center justify-center gap-1.5 text-[9px] font-mono text-slate-600 uppercase tracking-widest">
              <Sparkles size={8} />
              Powered by Google Gemini Enterprise
            </div>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-[2rem] shadow-2xl transition-all duration-500 flex items-center justify-center group relative overflow-hidden ${
          isOpen ? 'bg-slate-800 rotate-90 scale-90' : 'bg-primary hover:bg-primaryDark'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        {isOpen ? (
          <X size={28} className="text-white" />
        ) : (
          <MessageSquare size={28} className="text-white group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
};