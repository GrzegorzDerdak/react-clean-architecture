import { Product } from "@/entities/Product";
import { Button } from "@/ui/components/button";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={"card bg-neutral-100 p-4 flex flex-col gap-4 text-center"}>
      <div className={"flex-1"}>
        <img src={product.image?.url} alt={product.image?.alt} />
      </div>

      <h2>{product.name}</h2>

      <p className={"font-bold text-red-700"}>
        {product.price.amount} {product.price.currency}
      </p>

      <Button variant={"outline"}>Add to cart</Button>
    </div>
  );
};
