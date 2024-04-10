import { Product } from "~/entities/Product";

export type ProductRepository = {
  search: (params: {
    accessToken: string;
    query: string;
  }) => Promise<
    | { isSuccess: true; products: Array<Product> }
    | { isSuccess: false; products: null }
  >;
};
