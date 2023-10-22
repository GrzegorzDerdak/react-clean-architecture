import { container, TYPES } from "@/services";
import { Repository } from "@/repository/types";
import { Product } from "@/entities/Product";

export const useRepository = (type: keyof typeof TYPES) => {
  switch (type) {
    case "PRODUCT_REPOSITORY":
      return container.get<Repository<Product>>(TYPES.PRODUCT_REPOSITORY);
  }
};
