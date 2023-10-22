import { Product } from "@/entities/Product";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={"card bg-neutral-100 p-4 grid items-center"}>
      <img src={product.image?.url} alt={product.image?.alt} />
      <h2 className={"text-center"}>{product.name}</h2>
    </div>
  );
};
