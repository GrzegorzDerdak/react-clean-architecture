import { Product } from "@/entities/Product";
import { Repository } from "@/repository/types";
import { SaleorProductRepository } from "@/repository/product/SaleorProductRepository";
// import { DummyProductRepository } from "@/repository/product/DummyProductRepository";

type Repositories = {
  PRODUCT: Repository<Product>;
  // TODO: Add these in the future
  // ORDER: Repository<Order>;
  // CONTENT: Repository<Content>;
};

export const repositories: Repositories = {
  PRODUCT: SaleorProductRepository,
};
