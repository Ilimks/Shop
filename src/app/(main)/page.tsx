import { Loader } from "@/shared/ui/Loader";
import { AboutSection } from "@/features/home/ui/AboutSection/AboutSection";
import { HeroSection } from "@/features/home/ui/HeroSection/HeroSection";
import { CategorySection } from "@/features/home/ui/СategorySection/СategorySection";
import { NewSection } from "@/features/home/ui/NewSection/NewSection";
import { BestsellersSection } from "@/features/home/ui/BestsellersSection/BestsellersSection";
import { getNewProducts } from "@/features/home/api/newProducts";
import { InputSection } from "@/features/home/ui/InputSection/InputSection";

export const revalidate = 3600;

export default async function Home() {
  const products = await getNewProducts();

  return (
      <main>
        <HeroSection/>
        <InputSection/>
        <NewSection initialProducts={products} />
        <CategorySection/>
        <BestsellersSection initialProducts={products}/>
        <AboutSection/>
      </main>
  );
}
