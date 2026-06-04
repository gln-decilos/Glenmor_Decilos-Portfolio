import Footer from "./components/footer";
import Navbar from "./components/navbar";
import HeroSection from "./sections/hero-section";
import AboutSection from "./sections/about-section";
import SkillsSection from "./sections/skills-section";
import ProjectsSection from "./sections/projects-section";
import LogoDesignSection from "./sections/logo-design-section";
import FeaturesSection from "./sections/features-section";
import TeamSection from "./sections/team-section";
import PricingSection from "./sections/pricing-section";
import CTASection from "./sections/cta-section";
import LenisScroll from "./components/lenis";

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <LogoDesignSection />
            <FeaturesSection />
            <TeamSection />
            <PricingSection />
            <CTASection />
            <Footer />
        </>
    )
}
