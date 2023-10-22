import "reflect-metadata";
import { Container } from "inversify";
import { Product } from "@/entities/Product";
import { Repository } from "@/repository/types";
import { SaleorProductRepository } from "@/repository/product/SaleorProductRepository";

export const TYPES = {
  PRODUCT_REPOSITORY: Symbol.for("PRODUCT_REPOSITORY"),
};

const container = new Container();
container
  .bind<Repository<Product>>(TYPES.PRODUCT_REPOSITORY)
  .to(SaleorProductRepository)
  // .to(DummyProductRepository)
  .inSingletonScope();

export { container };
