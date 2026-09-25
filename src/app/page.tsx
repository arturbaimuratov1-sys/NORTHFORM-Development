import CinematicHero from "@/components/CinematicHero";
import ScrollManifesto from "@/components/ScrollManifesto";
import FeaturedProject from "@/components/FeaturedProject";
import HorizontalProjectRail from "@/components/HorizontalProjectRail";
import MaterialPhilosophy from "@/components/MaterialPhilosophy";
import StickyProcess from "@/components/StickyProcess";
import FeaturedDevelopment from "@/components/FeaturedDevelopment";
import Numbers from "@/components/Numbers";
import FinalContact from "@/components/FinalContact";

export default function Home() {
  return (
    <main className="bg-[#0c0c0b]">
      <CinematicHero />
      <ScrollManifesto />
      <FeaturedProject />
      <HorizontalProjectRail />
      <MaterialPhilosophy />
      <StickyProcess />
      <FeaturedDevelopment />
      <Numbers />
      <FinalContact />
    </main>
  );
}
