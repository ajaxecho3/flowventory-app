export type transaction = {
  id: string;
  action: "in" | "out";
  quantity: number;
  createdAt: Date;
  transactBy: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
  supplier: string;
  createdAt: Date;
  transactions: transaction[];
  createdBy: string;
};
