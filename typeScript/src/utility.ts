//Utility Types
type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  color?: string;
};
type ProductSummary = Pick<Product, "id" | "name" | "price">;

type ProductWithoutStock = Omit<Product, "stock" | "color">;

type ProductRequiredColor = Required<Product>;

type ProductOptional = Partial<Product>;

type ProductReadonly = Readonly<Product>;

const emptyObject: Record<string, unknown> = {};

const product1: ProductReadonly = {
  id: 1,
  name: "Mouse",
  price: 200,
  stock: 5,
  color: "red",
};
