"use client";

import { ColumnDef } from "@tanstack/react-table";
import type { Database } from "@/lib/database.types";

export const columns: ColumnDef<Database>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
];
