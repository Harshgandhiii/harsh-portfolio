import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { CurrentWorkSection } from "@/components/current-work-section"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CurrentWorkSection/>
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

