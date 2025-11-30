import { ArrowRight } from "lucide-react";
import robotWelcome from "@/assets/robot-welcome.png";

interface CTASectionProps {
  onOpenAuth: (mode: "login" | "register") => void;
}

const CTASection = ({ onOpenAuth }: CTASectionProps) => {
  return (
    <section className="py-24 bg-gradient-to-br from-navy via-blue-dark to-navy relative overflow-hidden">
      {/* Geometric decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }} />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
              Pronto Para Automatizar{" "}
              <span className="text-gradient-orange">Seu Suporte?</span>
            </h2>
            <p className="text-xl text-white/70 font-outfit mb-10 max-w-xl mx-auto lg:mx-0">
              Junte-se a centenas de empresas que já economizam horas com nosso chatbot inteligente.
            </p>
            <button
              onClick={() => onOpenAuth("register")}
              className="btn-primary text-lg"
            >
              Criar Meu Chatbot Agora
              <ArrowRight size={24} />
            </button>
          </div>

          <div className="flex-shrink-0">
            <img
              src={robotWelcome}
              alt="Robô Chatbot IA"
              className="w-72 lg:w-96 h-auto animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
