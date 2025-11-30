import { Shield, Zap, Database, Lock, BarChart3, Palette } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Multi-Tenant Seguro",
      description: "Cada cliente tem seu próprio espaço isolado. Seus dados nunca se misturam.",
      color: "primary",
    },
    {
      icon: Zap,
      title: "FastAPI Backend",
      description: "Construído com Python e FastAPI para performance máxima e escalabilidade.",
      color: "secondary",
    },
    {
      icon: Database,
      title: "PostgreSQL Robusto",
      description: "Banco de dados enterprise-grade para garantir confiabilidade total.",
      color: "primary",
    },
    {
      icon: Lock,
      title: "Autenticação JWT",
      description: "Tokens únicos e seguros para cada chatbot. Proteção de nível bancário.",
      color: "secondary",
    },
    {
      icon: BarChart3,
      title: "Analytics Integrado",
      description: "Veja quais perguntas seus clientes fazem e melhore continuamente.",
      color: "primary",
    },
    {
      icon: Palette,
      title: "Personalizável",
      description: "Cores, logo e mensagens customizadas para combinar com sua marca.",
      color: "secondary",
    },
  ];

  return (
    <section id="recursos" className="py-24 section-light relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif text-foreground/[0.02] whitespace-nowrap pointer-events-none select-none">
        Recursos
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mb-16">
          <p className="text-primary font-outfit font-medium mb-4 uppercase tracking-wider">
            Recursos
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Tudo que Você Precisa.{" "}
            <span className="text-gradient-blue">Nada que Você Não Precisa.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group card-feature hover:bg-card"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                  feature.color === "primary"
                    ? "bg-primary/10 text-primary"
                    : "bg-secondary/10 text-secondary"
                }`}
              >
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-serif mb-3">{feature.title}</h3>
              <p className="text-muted-foreground font-outfit leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-primary rounded-full opacity-60" />
        <div className="absolute bottom-40 left-10 w-6 h-6 bg-secondary rounded-full opacity-40" />
        <div className="absolute top-1/2 right-10 w-3 h-3 bg-primary rounded-full opacity-50" />
      </div>
    </section>
  );
};

export default FeaturesSection;
