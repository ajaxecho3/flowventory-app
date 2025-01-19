import { createClient } from "@/utils/supabase/client";
import type { Database } from "@/lib/database.types";
import { v4 as uuidv4 } from "uuid";
import { QueryData } from "@supabase/supabase-js";

export async function getProducts() {
  const supabase = createClient();
  const products = await supabase.from("products").select(`
     id,
     name,
     quantity,
     image,
     image_filename,
     categories(id,name)
  
`);
  const { data, error } = products;
  if (error) {
    throw new Error(error.message);
  }
  return data as QueryData<typeof products>;
}

// In  Database Database["public"]["Tables"]["products"]["Insert"] Override the image

interface AddProductProps {
  image?: File[];
  name: string;
  description?: string;
  price: number;
  quantity?: number;
  category?: string;
}

export async function addProduct(product: AddProductProps) {
  const { image, category, ...rest } = product;
  const supabase = createClient();
  let fileName = "";
  let url = "";
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("Not authenticated");
  }
  const file = image?.[0];
  if (file) {
    const { fileName: fn, url: PublicUrl } = await uploadImage(file);
    fileName = fn;
    url = PublicUrl;
  }
  const new_product: Database["public"]["Tables"]["products"]["Insert"] = {
    image: url,
    image_filename: fileName,
    created_by: user?.id,
    category_id: category,
    ...rest,
  };

  console.log(new_product);
  const products = await supabase.from("products").insert([new_product]);
  if (products.error) {
    console.log(products.error);
  }

  return products.status;
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

export async function uploadImage(file: File): Promise<{
  id: string;
  fileName: string;
  url: string;
}> {
  const supabase = createClient();

  const fileName = `${uuidv4()}-${file.name}`;
  const { data: image, error } = await supabase.storage
    .from("product_image")
    .upload(fileName, file);
  if (error) {
    throw error;
  }

  const { data: url } = supabase.storage
    .from("product_image")
    .getPublicUrl(fileName);

  if (error) {
    throw error;
  }

  console.log(url);

  return {
    id: image.id,
    fileName,
    url: url.publicUrl,
  };
}

export async function deleteImage(fileName: string) {
  const supabase = createClient();
  const { error } = await supabase.storage
    .from("product_image")
    .remove([fileName]);
  if (error) {
    console.log(error);
  }
}
