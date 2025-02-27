import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/core/ProductCard";
import { getAllProducts } from "@/services/Product";
import { IProduct } from "@/types";
import Link from "next/link";

const FeatureProducts = async () => {
  const { data: products } = await getAllProducts();
  return (
    <div className="bg-white bg-opacity-50 py-10">
      <div className="container mx-auto lg:my-20 py-10">
        <div className="flex justify-between items-center">
          <h1 className="lg:text-2xl text-xl font-bold">Featured Products</h1>
          <Link href={"/"}>
            <Button variant="outline" className="rounded-full">
              All Collection
            </Button>
          </Link>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4 my-5">
            {
             Array(5).fill(products?.[0]).map((prodcut:IProduct, idx:number)=><ProductCard product={prodcut} key={idx}/>)
            }
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
