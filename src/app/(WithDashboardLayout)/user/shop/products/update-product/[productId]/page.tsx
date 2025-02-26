import UpdateProductForm from "@/components/modules/shop/product/UpdateProductFrom";
import { getSingleProduct } from "@/services/Product";

const UpdateProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  //   console.log(productId);
  const { data: product } = await getSingleProduct(productId);
  //   console.log(product);
  return (
    <div className="flex items-center justify-center">
      <UpdateProductForm product={product} />
    </div>
  );
};

export default UpdateProductPage;
