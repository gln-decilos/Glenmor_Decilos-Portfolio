import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import HeroSection from "./sections/hero-section";
import AboutSection from "./sections/about-section";
import SkillsSection from "./sections/skills-section";
import ProjectsSection from "./sections/projects-section";
import ContactSection from "./sections/contact-section";
import LogoDesignSection from "./sections/logo-design-section";
import LenisScroll from "./components/lenis";
import ProjectDetailPage from "./pages/project-detail-page";

function HomePage() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <LogoDesignSection />
            <ProjectsSection />
            <ContactSection />
        </>
    );
}

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            </Routes>
            <Footer />
        </>
    );
}
