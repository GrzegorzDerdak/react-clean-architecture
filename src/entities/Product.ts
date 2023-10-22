export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  createdAt: string;
  image?: {
    alt?: string;
    url: string;
  };
};
