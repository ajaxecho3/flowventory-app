"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Product = {
  id: string;
  name: string;
  quantity: number;
  image: string;
  image_filename: string;
  categories: {
    id: string;
    name: string;
  };
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "image",
    header: "Product Image",
    cell: ({ row }) => {
      return (
        <Avatar className="rounded-sm">
          <AvatarImage
            src={row.original.image!}
            alt={row.original.image_filename!}
          />
          <AvatarFallback>PV</AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "categories.name",
    header: "Category",
  },
];
