import { ArrowRight, Play, Clock, Code, Database } from "lucide-react";
import { useEffect, useState } from "react";
import chatbotAvatar from "@/assets/chatbot-avatar.jpeg";
import robotMascot from "@/assets/robot-mascot.png";

interface HeroSectionProps {
  onOpenAuth: (mode: "login" | "register") => void;
}

const HeroSection = ({ onOpenAuth }: HeroSectionProps) => {
  const [messageIndex, setMessageIndex] = useState(0);
  
  const chatMessages = [
    { type: "user", text: "Qual o prazo de entrega?" },
    { type: "bot", text: "O prazo de entrega é de 3 a 5 dias úteis para sua região, conforme nossa política de envios." },
    { type: "user", text: "Vocês aceitam troca?" },
    { type: "bot", text: "Sim! Aceitamos trocas em até 30 dias após a compra, desde que o produto esteja em perfeitas condições." },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % chatMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden section-light">
      {/* Geometric decorations */}
      <div className="geometric-shape w-96 h-96 bg-primary -top-20 -right-20" />
      <div className="geometric-shape w-64 h-64 bg-secondary bottom-20 -left-20" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
              Seu Chatbot de IA,{" "}
              <span className="text-gradient-orange">Treinado com Seus Documentos</span>,
              Instalado em 60 Segundos
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 font-outfit leading-relaxed max-w-xl">
              Transforme FAQs, manuais e PDFs em respostas instantâneas e precisas. 
              Zero código. Zero complicação. 100% baseado na sua base de conhecimento.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <button 
                onClick={() => onOpenAuth("register")}
                className="btn-primary"
              >
                Criar Meu Chatbot Grátis
                <ArrowRight size={20} />
              </button>
              <a href="#como-funciona" className="btn-outline">
                <Play size={20} />
                Ver Como Funciona
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-2xl bg-background/50 backdrop-blur">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="text-primary" size={24} />
                  <span className="text-3xl font-serif text-primary">60s</span>
                </div>
                <p className="text-sm font-outfit text-muted-foreground">para instalar</p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-background/50 backdrop-blur">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Code className="text-secondary" size={24} />
                  <span className="text-3xl font-serif text-secondary">1</span>
                </div>
                <p className="text-sm font-outfit text-muted-foreground">linha de código</p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-background/50 backdrop-blur">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Database className="text-primary" size={24} />
                  <span className="text-3xl font-serif text-primary">100%</span>
                </div>
                <p className="text-sm font-outfit text-muted-foreground">seus dados</p>
              </div>
            </div>
          </div>

          {/* Right content - Chat mockup */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {/* Robot mascot */}
            <img 
              src={robotMascot} 
              alt="Robô Chatbot IA" 
              className="absolute -top-16 -right-8 w-32 h-auto animate-float z-10"
            />
            
            <div className="bg-background rounded-3xl shadow-2xl p-6 max-w-md mx-auto">
              {/* Chat header */}
              <div className="flex items-center gap-4 pb-4 border-b border-border mb-4">
                <img 
                  src={chatbotAvatar} 
                  alt="Avatar Chatbot" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-serif text-lg">Assistente IA</h4>
                  <span className="text-sm text-green-500 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Online
                  </span>
                </div>
              </div>

              {/* Chat messages */}
              <div className="space-y-4 min-h-[280px]">
                {chatMessages.slice(0, messageIndex + 1).map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-2xl ${
                        msg.type === "user"
                          ? "bg-primary text-primary-foreground rounded-br-sm"
                          : "bg-muted text-foreground rounded-bl-sm"
                      }`}
                    >
                      <p className="text-sm font-outfit">{msg.text}</p>
                    </div>
                  </div>
                ))}
                
                {/* Typing indicator */}
                <div className="flex justify-start">
                  <div className="bg-muted p-4 rounded-2xl rounded-bl-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat input */}
              <div className="mt-4 flex gap-2">
                <input
                  type="text"
                  placeholder="Digite sua pergunta..."
                  className="flex-1 bg-muted rounded-full px-4 py-3 text-sm font-outfit outline-none focus:ring-2 focus:ring-primary"
                  readOnly
                />
                <button className="bg-primary text-primary-foreground p-3 rounded-full">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
