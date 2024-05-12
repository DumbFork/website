import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import ParticlesComponent from "./components/Particals";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mt-24 mx-auto px-10 py-4">
        <HeroSection /> 
        <AboutSection />
        <ParticlesComponent id="particles"/>
        <ProjectSection />
        <EmailSection/>
      </div>
      </main>
    );
}
