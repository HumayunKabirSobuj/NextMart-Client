import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/ui/core/CategoryCard";
import { getAllCategories } from "@/services/Category";
import { ICategory } from "@/types";
import Link from "next/link";

const Category = async () => {
  const { data: Categories } = await getAllCategories();
  console.log(Categories);
  return (
    <div className="container mx-auto lg:my-20 my-10">
      <div className="flex justify-between items-center">
        <h1 className="lg:text-2xl text-xl font-bold">Category</h1>
        <Link href={"/products"}>
          <Button variant="outline" className="rounded-full">
            View All
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 my-10">
        {Array(12).fill(Categories?.[0]).map((category: ICategory, idx:number) => (
          <CategoryCard key={idx} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Category;
