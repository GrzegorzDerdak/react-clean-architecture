import { ProductRepository } from "~/repositories/ProductRepository";
import { Product } from "~/entities/Product";

type SearchProductsUseCaseReturnType = Promise<
  | { isSuccess: true; products: Product[] | null }
  | { isSuccess: false; products: null }
>;

export const searchProductsUseCase = async (
  data: { query: string; accessToken: string },
  ctx: { productRepository: ProductRepository },
): SearchProductsUseCaseReturnType => {
  const { products } = await ctx.productRepository.search({
    query: data.query,
    accessToken: data.accessToken,
  });

  if (products?.length) {
    return {
      products,
      isSuccess: true,
    };
  }

  return { products: null, isSuccess: false };
};

export type SearchProductsUseCase = typeof searchProductsUseCase;
