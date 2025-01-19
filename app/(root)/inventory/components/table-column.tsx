"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  image: string | null;
  image_filename: string | null;
  categories: {
    id: string;
    name: string;
  } | null;
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "image",
    header: "Product Image",
    cell: ({ row }) => {
      return (
        <Link href={`/inventory/${row.original.id}`}>
          <Avatar
            className="rounded-sm"
            onClick={() => console.log(row.original)}
          >
            <AvatarImage
              src={row.original.image!}
              alt={row.original.image_filename!}
            />
            <AvatarFallback>PV</AvatarFallback>
          </Avatar>
        </Link>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },

  {
    header: "Category",
    accessorFn: (info) => info.categories?.name,
  },
];
