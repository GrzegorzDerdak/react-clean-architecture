import { getClient } from "@/graphql/client";
import { injectable } from "inversify";

import {
  ProductsDocument,
  ProductsQuery,
  ProductsQueryVariables,
} from "@/gql/graphql";
import { Product } from "@/entities/Product";

import { SaleorProductParser } from "./parsers";
import { Repository } from "../types";

@injectable()
export class SaleorProductRepository implements Repository<Product> {
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
  }
}
