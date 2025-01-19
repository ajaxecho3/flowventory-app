import { DataTable } from "@/components/dataTable";
import Header from "@/components/header";
import React from "react";
import { columns } from "./components/table-column";
import { getProducts } from "./actions";
import AddProduct from "./components/add-product";

export const revalidate = 60;
async function InventoryPage() {
  const data = await getProducts();
  console.log(data);
  return (
    <div>
      <Header linkTrails={[{ name: "Inventory", href: "/inventory" }]} />
      <main className="container mx-auto p-4">
        <DataTable
          data={data}
          columns={columns}
          searchKey="name"
          extraActions={<AddProduct />}
        />
      </main>
    </div>
  );
}

export default InventoryPage;
