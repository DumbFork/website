import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import ParticlesComponent from "./components/Particals";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchivementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mt-24 mx-auto px-10 py-4">
        <HeroSection /> 
        <AchievementsSection/>
        <AboutSection />
        <ParticlesComponent id="particles"/>
        <ProjectSection />
        <EmailSection/>
      </div>
      <Footer/>
      </main>
    );
}
