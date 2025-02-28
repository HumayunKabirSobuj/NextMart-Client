import { Button } from "@/components/ui/button";
import styles from "./HeroSection.module.css";
import Image from "next/image";
import cupImage from "../../../../assets/cup-with-headphone.png";
import NMContainer from "@/components/ui/core/NMContainer";
const HeroSection = () => {
  return (
    <NMContainer>
      <div
        className={`${styles.banner}  border-2 border-white rounded-2xl my-10`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center ">
          <div className="pl-12">
            <h1 className="text-2xl lg:text-4xl font-bold leading-relaxed">
              Don&apos;t Miss Out on <br />
              These Unbeatable Black <br /> Friday Deals!
            </h1>
            <p className="my-3">
              Save big this Black Friday with unbeatable deals on tech, home
              essentials, fashion, and more! Limited stock.
            </p>

            <Button className="mr-5 rounded-full">Buy Now</Button>
            <Button variant={"outline"} className="rounded-full">
              All Products
            </Button>
          </div>
          <div>
            <Image src={cupImage} alt="cup image" />
          </div>
        </div>
      </div>
    </NMContainer>
  );
};

export default HeroSection;
