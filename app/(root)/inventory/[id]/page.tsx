import Header from "@/components/header";
import React from "react";
import { getProductById } from "../actions";
import Image from "next/image";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { id } = params;
  const product = await getProductById(id as string);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <Header
        linkTrails={[
          { name: "Inventory", href: "/inventory" },
          { name: product.name, href: "" },
        ]}
      />
      <main className="p-4">
        <Image
          src={product.image!}
          alt={product.image_filename!}
          width={200}
          height={200}
        />
        <h1>{product.name}</h1>
      </main>
    </div>
  );
}
