import logo from "@/assets/logo.png";

const Footer = () => {
  const footerLinks = [
    {
      title: "Navegação",
      links: [
        { label: "Como Funciona", href: "#como-funciona" },
        { label: "Recursos", href: "#recursos" },
        { label: "Segurança", href: "#seguranca" },
      ],
    },
  ];

  return (
    <footer className="bg-navy text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & description */}
          <div className="md:col-span-2">
            <img src={logo} alt="Chatbot IA" className="h-14 mb-6 brightness-0 invert" />
            <p className="text-white/60 font-outfit max-w-md leading-relaxed">
              Suporte automatizado inteligente para PMEs e e-commerces. 
              Transforme seus documentos em um assistente virtual 24/7.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-serif text-lg mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-primary font-outfit transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 font-outfit text-sm">
            © 2025 ChatbotIA. Todos os direitos reservados.
          </p>
          <p className="text-white/40 font-outfit text-sm">
            Suporte automatizado inteligente para PMEs e e-commerces.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
