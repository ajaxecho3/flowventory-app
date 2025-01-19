import Header from "@/components/header";
import React from "react";
import { getProductById } from "../actions";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DataTable } from "@/components/dataTable";
import { TransactionsColumns } from "./columns";
import QRCode from "@/components/QRCodeScanner/QRCode";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(id as string);

  if (!product) {
    return notFound();
  }
  return (
    <div>
      <Header
        linkTrails={[
          { name: "Inventory", href: "/inventory" },
          { name: product.name, href: "" },
        ]}
      />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.image_filename || "Product Image"}
                    width={300}
                    height={300}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
                <div className="flex-1">
                  <p className="mb-2">
                    <strong>Current Stock:</strong> 10000002312
                  </p>
                  <p className="mb-4">
                    <strong>Product ID:</strong> {product.id}
                  </p>
                  <p className="mb-4">
                    <strong>Category:</strong> {product.categories?.name}
                  </p>
                  <p className="mb-4">
                    <strong>Description:</strong> {product.description}
                  </p>
                  {/* <AddStockForm productId={product.id} /> */}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Product QR Code</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <QRCode text={product.id} />
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable
              data={[]}
              columns={TransactionsColumns}
              searchKey="created_at"
            />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
