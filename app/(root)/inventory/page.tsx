import { DataTable } from "@/components/dataTable";
import Header from "@/components/header";
import React from "react";
import { columns } from "./components/table-column";
import { getProducts } from "./actions";
import AddProduct from "./components/add-product";

export const revalidate = 60;
async function InventoryPage() {
  const data = await getProducts();
  return (
    <div>
      <Header linkTrails={[{ name: "Inventory", href: "/inventory" }]} />
      <main className="p-4">
        <DataTable
          columns={columns}
          data={data ?? []}
          searchKey="name"
          extraActions={<AddProduct />}
        />
      </main>
    </div>
  );
}

export default InventoryPage;
