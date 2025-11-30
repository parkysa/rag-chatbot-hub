import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

interface HeaderProps {
  onOpenAuth: (mode: "login" | "register") => void;
}

const Header = ({ onOpenAuth }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Recursos", href: "#recursos" },
    { label: "Segurança", href: "#seguranca" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Chatbot IA" className="h-12 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-outfit font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => onOpenAuth("register")}
              className="btn-primary text-sm"
            >
              Começar Agora
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-outfit font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  onOpenAuth("register");
                  setMobileMenuOpen(false);
                }}
                className="btn-primary text-sm mt-4 justify-center"
              >
                Começar Agora
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
