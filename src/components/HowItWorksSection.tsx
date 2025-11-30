import { LogIn, Upload, Copy, CheckCircle, Zap, RefreshCw } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: LogIn,
      title: "Faça Login",
      description: "Crie sua conta em 30 segundos. Sem cartão de crédito necessário.",
    },
    {
      number: "02",
      icon: Upload,
      title: "Upload de Documentos",
      description: "Arraste seus PDFs, FAQs e manuais. Nossa IA processa tudo automaticamente.",
    },
    {
      number: "03",
      icon: Copy,
      title: "Copie o Iframe",
      description: "Um clique para copiar. Cole no seu HTML. Pronto. Seu chatbot está vivo.",
    },
  ];

  const ragFeatures = [
    {
      icon: CheckCircle,
      title: "100% Factual",
      description: "Respostas extraídas diretamente da sua base de conhecimento",
    },
    {
      icon: Zap,
      title: "Instantâneo",
      description: "Busca e responde em milissegundos, 24/7",
    },
    {
      icon: RefreshCw,
      title: "Sempre Atualizado",
      description: "Atualize documentos e o chatbot aprende automaticamente",
    },
  ];

  return (
    <section id="como-funciona" className="py-24 section-dark relative overflow-hidden">
      {/* Geometric decorations */}
      <div className="geometric-shape w-80 h-80 bg-primary top-10 right-10 opacity-10" />
      <div className="geometric-shape w-40 h-40 bg-secondary bottom-40 left-20 opacity-10" />

      <div className="container mx-auto px-6 relative">
        {/* Steps section */}
        <div className="mb-32">
          <div className="max-w-3xl mb-16">
            <p className="text-primary font-outfit font-medium mb-4 uppercase tracking-wider">
              Como Funciona
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Instalação Mais Simples do Mercado
            </h2>
            <p className="text-xl text-white/70 font-outfit">
              Três passos. Sessenta segundos. Seu chatbot no ar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 backdrop-blur rounded-3xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:bg-white/10"
              >
                <span className="absolute -top-6 left-8 text-7xl font-serif text-primary/20 group-hover:text-primary/40 transition-colors">
                  {step.number}
                </span>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                    <step.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-serif mb-4">{step.title}</h3>
                  <p className="text-white/60 font-outfit leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Code block */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-navy rounded-2xl border border-white/10 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-sm text-white/50 font-mono">index.html</span>
              </div>
              <pre className="p-6 overflow-x-auto">
                <code className="text-sm md:text-base font-mono">
                  <span className="text-blue-400">&lt;iframe</span>{" "}
                  <span className="text-green-400">src</span>
                  <span className="text-white">=</span>
                  <span className="text-primary">"https://seu-chatbot.ai/widget/seu-token"</span>
                  <span className="text-blue-400">&gt;&lt;/iframe&gt;</span>
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* RAG section */}
        <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[3rem] p-12 md:p-16 border border-white/10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Respostas Reais. Nunca Inventadas.
            </h2>
            <p className="text-lg text-white/70 font-outfit">
              Nosso chatbot usa Geração Aumentada por Recuperação (RAG) para garantir que 
              cada resposta seja baseada exclusivamente nos seus documentos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ragFeatures.map((feature, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                  <feature.icon className="text-primary" size={36} />
                </div>
                <h3 className="text-xl font-serif mb-3">{feature.title}</h3>
                <p className="text-white/60 font-outfit">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
