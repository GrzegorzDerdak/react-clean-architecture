import { SaleorProductRepository } from "@ca/infrastructure/src/repositories/product";
import { searchProductsUseCase } from "@ca/domain/src/use-cases";
import { cookies } from "next/headers";

export default async function Page() {
  const accessToken = cookies().get("accessToken")!.value;

  const { products } = await searchProductsUseCase(
    { query: "test", accessToken: accessToken },
    { productRepository: SaleorProductRepository },
  );

  return (
    <main>
      <h2>Test</h2>
      {products?.map((product) => <h2 key={product.id}>{product.name}</h2>)}
    </main>
  );
}
