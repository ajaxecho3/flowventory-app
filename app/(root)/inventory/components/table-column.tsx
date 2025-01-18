"use client";

import { ColumnDef } from "@tanstack/react-table";
import type { Database } from "@/lib/database.types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const columns: ColumnDef<
  Database["public"]["Tables"]["products"]["Row"]
>[] = [
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
