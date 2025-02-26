"use client";

import HeroSection from "@/components/modules/home/HeroSection";
import { useUser } from "@/context/UserContext";

const HomePage = () => {
  const user = useUser();
 
  return (
    <div>
      <HeroSection/>
    </div>
  );
};

export default HomePage;
