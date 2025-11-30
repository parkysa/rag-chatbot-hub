import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import SecuritySection from "@/components/SecuritySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";

const Index = () => {
  const [authModal, setAuthModal] = useState<{
    isOpen: boolean;
    mode: "login" | "register";
  }>({ isOpen: false, mode: "register" });

  const openAuth = (mode: "login" | "register") => {
    setAuthModal({ isOpen: true, mode });
  };

  const closeAuth = () => {
    setAuthModal({ ...authModal, isOpen: false });
  };

  return (
    <div className="min-h-screen">
      <Header onOpenAuth={openAuth} />
      
      <main>
        <HeroSection onOpenAuth={openAuth} />
        <HowItWorksSection />
        <FeaturesSection />
        <SecuritySection />
        <CTASection onOpenAuth={openAuth} />
      </main>

      <Footer />

      <AuthModal
        isOpen={authModal.isOpen}
        onClose={closeAuth}
        initialMode={authModal.mode}
      />
    </div>
  );
};

export default Index;
