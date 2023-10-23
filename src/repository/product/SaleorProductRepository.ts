import { getClient } from "@/graphql/client";

import {
  ProductsDocument,
  ProductsQuery,
  ProductsQueryVariables,
} from "@/gql/graphql";
import { Product } from "@/entities/Product";

import { SaleorProductParser } from "./parsers";
import { Repository } from "../types";

export const SaleorProductRepository: Repository<Product> = {
  async getAll(params: ProductsQueryVariables): Promise<Product[] | null> {
    const client = getClient();
    const { data } = await client.query<ProductsQuery, ProductsQueryVariables>(
      ProductsDocument,
      params,
    );

    if (!data?.products?.edges.length) {
      return null;
    }

    return data.products.edges.map(({ node }) => SaleorProductParser(node));
  },
};
