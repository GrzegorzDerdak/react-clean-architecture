import { injectable } from "inversify";
import { Product } from "@/entities/Product";
import { Repository } from "@/repository/types";
import { DummyJsonProductParser } from "@/repository/product/parsers";

export type DummyJsonProduct = {
  id: number;
  title: string;
  description: string;
  price: string;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: [];
};

export type DummyJsonResponse = {
  products?: DummyJsonProduct[];
};

@injectable()
export class DummyProductRepository implements Repository<Product> {
  async getAll(): Promise<Product[] | null> {
    const response = await fetch("https://dummyjson.com/products");
    const body = (await response.json()) as DummyJsonResponse;

    if (!body.products?.length) {
      return null;
    }

    return body.products.map(DummyJsonProductParser);
  }
}
