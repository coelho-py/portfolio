import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import RevealSection from "@/components/portfolio/RevealSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import { useScrollReveal } from "@/hooks/use-portfolio";

const Index = () => {
  const visibleSections = useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />

      <RevealSection id="sobre" visible={visibleSections.has("sobre")}>
        <AboutSection visible={visibleSections.has("sobre")} />
      </RevealSection>

      <RevealSection id="habilidades" visible={visibleSections.has("habilidades")} className="bg-card/50">
        <SkillsSection visible={visibleSections.has("habilidades")} />
      </RevealSection>

      <RevealSection id="projetos" visible={visibleSections.has("projetos")}>
        <ProjectsSection visible={visibleSections.has("projetos")} />
      </RevealSection>

      <RevealSection id="experiencia" visible={visibleSections.has("experiencia")} className="bg-card/50">
        <ExperienceSection visible={visibleSections.has("experiencia")} />
      </RevealSection>

      <RevealSection id="contato" visible={visibleSections.has("contato")}>
        <ContactSection visible={visibleSections.has("contato")} />
      </RevealSection>

      <Footer />
    </div>
  );
};

export default Index;
