import { createClient } from "@/utils/supabase/client";
import type { Database } from "@/lib/database.types";

export async function getProducts() {
  const supabase = createClient();
  const { data: products } = await supabase.from("products").select("*");
  return products;
}

export async function addProduct(
  product: Database["public"]["Tables"]["products"]["Insert"],
) {
  const supabase = createClient();
  const { data: products, error } = await supabase
    .from("products")
    .insert([product]);
  if (error) {
    console.log(error);
  }

  return products;
}

export async function getCategories() {
  const supabase = createClient();
  const { data: categories } = await supabase.from("categories").select("*");
  if (!categories) {
    return [];
  }
  return categories;
}

export async function getSuppliers() {
  const supabase = createClient();
  const { data: suppliers } = await supabase.from("suppliers").select("*");
  if (!suppliers) {
    return [];
  }
  return suppliers;
}
