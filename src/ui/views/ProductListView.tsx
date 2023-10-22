import { ProductCard } from "@/ui/components/ProductCard";
import { useRepository } from "@/repository/useRepository";

export const ProductListView = async () => {
  const { getAll } = useRepository("PRODUCT_REPOSITORY");
  const products = await getAll({ channel: "ch-chf" });

  return (
    <div className={"grid grid-cols-3 gap-4"}>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
