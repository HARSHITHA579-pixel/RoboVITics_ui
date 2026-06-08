import Hero from "@/components/sections/Hero";
import PinnedVideo from "@/components/sections/PinnedVideo";
import AboutVit from "@/components/sections/AboutVit";
import AboutUs from "@/components/sections/AboutUs";
import Events from "@/components/sections/Events";
import WhoWeAreMarquee from "@/components/sections/WhoWeAreMarquee";
import Domains from "@/components/sections/Domains";
import Projects from "@/components/sections/Projects";
import Teams from "@/components/sections/Teams";
import { BackgroundPaths } from "@/components/ui/background-paths";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <BackgroundPaths global={true} />
      <Hero />
      <PinnedVideo />
      <AboutVit />
      <AboutUs />
      <Events />
      <WhoWeAreMarquee />
      <Domains />
      <Projects />
      <Teams />
    </main>
  );
}
