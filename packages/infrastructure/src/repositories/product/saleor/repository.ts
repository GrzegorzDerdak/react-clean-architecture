import { ProductRepository } from "@ca/domain/src/repositories";

export const SaleorProductRepository: ProductRepository = {
  search: async (_params) => {
    console.log(_params.accessToken);

    return {
      products: [{ name: "Product 1", id: "1" }],
      isSuccess: true,
    };
  },
};
