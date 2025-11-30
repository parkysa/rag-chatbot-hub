import { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode: "login" | "register";
}

const AuthModal = ({ isOpen, onClose, initialMode }: AuthModalProps) => {
  const [mode, setMode] = useState<"login" | "register">(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: "",
  });
  const { toast } = useToast();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    if (mode === "register" && !formData.companyName) {
      toast({
        title: "Erro",
        description: "Por favor, informe o nome da empresa.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: mode === "register" ? "Conta criada!" : "Login realizado!",
      description: mode === "register" 
        ? "Bem-vindo ao Chatbot IA! Seu chatbot está pronto para ser configurado."
        : "Bem-vindo de volta!",
    });
    
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-navy/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-background rounded-3xl shadow-2xl w-full max-w-md p-8 animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif mb-2">
            {mode === "register" ? "Criar Conta" : "Acesso ao Portal RAG"}
          </h2>
          <p className="text-muted-foreground font-outfit">
            {mode === "register" 
              ? "Comece a usar seu chatbot em 60 segundos"
              : "Entre na sua conta para gerenciar seu chatbot"
            }
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {mode === "register" && (
            <div>
              <label className="block text-sm font-outfit font-medium mb-2">
                Nome da Empresa
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background font-outfit focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="Sua empresa"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-outfit font-medium mb-2">
              E-mail {mode === "register" && "(Login)"}
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background font-outfit focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-outfit font-medium mb-2">
              Senha
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background font-outfit focus:outline-none focus:ring-2 focus:ring-primary transition-all pr-12"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full btn-primary justify-center text-lg"
          >
            {mode === "register" ? "Cadastrar e Acessar" : "Entrar"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-muted-foreground font-outfit">
            {mode === "register" ? "Já tem uma conta?" : "Não tem uma conta?"}
            <button
              onClick={() => setMode(mode === "register" ? "login" : "register")}
              className="ml-2 text-primary hover:underline font-medium"
            >
              {mode === "register" ? "Fazer login" : "Criar conta"}
            </button>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AuthModal;
