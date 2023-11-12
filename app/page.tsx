import Logo from "../src/components/Logo";
import LandingAboutUs from "./sections/LandingAboutUs";
import LandingHeroSection from "./sections/LandingHeroSection";
import LandingNoRisk from "./sections/LandingNoRisk";
import LandingWhatWeDo from "./sections/LandingWhatWeDo";

export default function Home() {
  return (
    <main className="">
      <LandingHeroSection />
      <LandingAboutUs />
      <LandingWhatWeDo />
      <LandingNoRisk />
    </main>
  )
}
