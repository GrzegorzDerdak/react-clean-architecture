import { BaseProductFragment } from "@/gql/graphql";
import { Product } from "@/entities/Product";
import { DummyJsonProduct } from "./DummyProductRepository";

type ProductParser<I> = {
  (input: I): Product;
};

export const SaleorProductParser: ProductParser<BaseProductFragment> = (
  product,
) => ({
  id: product.id,
  name: product.name,
  slug: product.slug,
  createdAt: product.created,
  description: product.description,
  image: {
    alt: product.thumbnail?.alt ?? "",
    url: product.thumbnail?.url ?? "",
  },
});

export const DummyJsonProductParser: ProductParser<DummyJsonProduct> = (
  product,
) => ({
  id: product.id.toString(),
  name: product.title,
  slug: product.title.toLowerCase().replace(" ", "-"),
  createdAt: "",
  description: product.description,
  image: {
    alt: product.title,
    url: product.thumbnail,
  },
});
