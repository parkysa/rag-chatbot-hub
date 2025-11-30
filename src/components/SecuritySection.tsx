import { ShieldCheck, Key, Cloud, Server, Lock } from "lucide-react";
import { useEffect, useState } from "react";

const SecuritySection = () => {
  const [activeOrbit, setActiveOrbit] = useState(0);

  const securityItems = [
    { icon: Lock, text: "Criptografia end-to-end" },
    { icon: Key, text: "Tokens JWT únicos por cliente" },
    { icon: Cloud, text: "Backup automático diário" },
    { icon: Server, text: "Hospedagem segura e confiável" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOrbit((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="seguranca" className="py-24 section-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <p className="text-primary font-outfit font-medium mb-4 uppercase tracking-wider">
              Segurança
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Seus Dados São Seus.{" "}
              <span className="text-gradient-orange">E Apenas Seus.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-outfit mb-12 leading-relaxed">
              Arquitetura multi-tenant com isolamento completo. Cliente A nunca acessa 
              dados do Cliente B. Garantido.
            </p>

            <div className="space-y-4">
              {securityItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-4 p-5 rounded-2xl transition-all duration-500 ${
                    idx === activeOrbit
                      ? "bg-primary/10 border-l-4 border-primary"
                      : "bg-muted/50 hover:bg-muted"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      idx === activeOrbit
                        ? "bg-primary text-primary-foreground"
                        : "bg-background text-muted-foreground"
                    }`}
                  >
                    <item.icon size={24} />
                  </div>
                  <span className="font-outfit font-medium text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Security animation */}
          <div className="relative flex items-center justify-center min-h-[500px]">
            {/* Central shield */}
            <div className="relative z-10 w-40 h-40 bg-gradient-to-br from-primary to-orange-dark rounded-3xl flex items-center justify-center shadow-2xl">
              <ShieldCheck className="text-white" size={80} />
            </div>

            {/* Orbiting elements */}
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  width: `${200 + i * 60}px`,
                  height: `${200 + i * 60}px`,
                  animation: `spin ${10 + i * 5}s linear infinite${i % 2 === 0 ? " reverse" : ""}`,
                }}
              >
                <div
                  className={`absolute w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    i === activeOrbit
                      ? "bg-primary shadow-lg scale-125"
                      : "bg-secondary/20"
                  }`}
                  style={{
                    top: "0%",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                {(() => {
                    const Icon = securityItems[i]?.icon;
                    return Icon ? (
                      <Icon
                        size={20}
                        className={i === activeOrbit ? "text-white" : "text-secondary"}
                      />
                    ) : null;
                  })()}
                </div>
              </div>
            ))}

            {/* Circular rings */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={`ring-${i}`}
                className="absolute border border-border/30 rounded-full"
                style={{
                  width: `${140 + i * 60}px`,
                  height: `${140 + i * 60}px`,
                }}
              />
            ))}

            {/* Glow effect */}
            <div className="absolute w-60 h-60 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default SecuritySection;
