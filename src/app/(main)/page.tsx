import { Loader } from "@/shared/ui/Loader";
import { AboutSection } from "@/widgets/home/AboutSection/AboutSection";
import { HeroSection } from "@/widgets/home/HeroSection/HeroSection";
import { PajamasSection } from "@/widgets/home/PajamasSection/PajamasSection";
import { RobesSection } from "@/widgets/home/RobesSection/RobesSection";
import { SuitsSection } from "@/widgets/home/SuitsSection/SuitsSection";
import { CategorySection } from "@/widgets/home/СategorySection/СategorySection";

export default function Home() {
  return (
      <main>
        <HeroSection/>
        <CategorySection/>
        <PajamasSection/>
        <RobesSection/>
        <SuitsSection/>
        <AboutSection/>
      </main>
  );
}
