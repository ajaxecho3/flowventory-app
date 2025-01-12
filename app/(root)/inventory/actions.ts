import { Product } from "@/app/types";
import { createClient } from "@/utils/supabase/client";

export async function getProducts() {
  const supabase = createClient();
  const { data: products } = await supabase.from("products").select("*");
  return products;
}

export async function addProduct(product: Product) {
  const supabase = createClient();
  const { data: products, error } = await supabase
    .from("products")
    .insert([product]);
  if (error) {
    console.log(error);
  }

  return products;
}
