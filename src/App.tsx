import Footer from "./components/footer";
import Navbar from "./components/navbar";
import HeroSection from "./sections/hero-section";
import AboutSection from "./sections/about-section";
import SkillsSection from "./sections/skills-section";
import ProjectsSection from "./sections/projects-section";
import ContactSection from "./sections/contact-section";
import LogoDesignSection from "./sections/logo-design-section";
import LenisScroll from "./components/lenis";

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <LogoDesignSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </>
    )
}
