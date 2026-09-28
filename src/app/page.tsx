import { About } from "@/components/About";
import { CompetitiveProgramming } from "@/components/CompetitiveProgramming";
import { Contact } from "@/components/Contact";
import { CurrentInterest } from "@/components/CurrentInterest";
import { EngineeringSystems } from "@/components/EngineeringSystems";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { Navbar } from "@/components/Navbar";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { Skills } from "@/components/Skills";
import { ThingsILikeBuilding } from "@/components/ThingsILikeBuilding";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Metrics />
        <ExperienceTimeline />
        <EngineeringSystems />
        <ProjectShowcase />
        <Skills />
        <ThingsILikeBuilding />
        <CompetitiveProgramming />
        <CurrentInterest />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
