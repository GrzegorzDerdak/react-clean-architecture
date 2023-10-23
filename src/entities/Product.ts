export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  createdAt: string;
  price: {
    amount: number;
    currency: string;
  };
  image?: {
    alt?: string;
    url: string;
  };
};
