// "use client";

import Category from "@/components/modules/home/Category";
import FeatureProducts from "@/components/modules/home/FeatureProducts";
import HeroSection from "@/components/modules/home/HeroSection";
import TopBrands from "@/components/modules/home/TopBrands";
// import { useUser } from "@/context/UserContext";

const HomePage = () => {
  // const user = useUser();
 
  return (
    <div>
      <HeroSection/>
      <Category/>
      <FeatureProducts/>
      <TopBrands/>
    </div>
  );
};

export default HomePage;
