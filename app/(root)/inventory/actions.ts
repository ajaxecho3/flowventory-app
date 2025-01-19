import { createClient } from "@/utils/supabase/client";
import type { Database } from "@/lib/database.types";
import { v4 as uuidv4 } from "uuid";

const supabase = createClient();
export async function getProducts() {
  const products = await supabase.from("products").select(`
     id,
     name,
     image,
     image_filename,
     categories(id,name)
  
`);
  const { data, error } = products;
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function getProductById(id: string) {
  const products = await supabase
    .from("products")
    .select(
      `
     id,
     name,
     image,
     description,
     image_filename,
     categories(id,name)
  
`,
    )
    .eq("id", id)
    .single();
  const { data, error } = products;
  if (error) {
    return null;
  }
  return data;
}

// In  Database Database["public"]["Tables"]["products"]["Insert"] Override the image

interface AddProductProps {
  image?: File[];
  name: string;
  description?: string;
  category?: string;
}

export async function addProduct(product: AddProductProps) {
  const { image, category, ...rest } = product;
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
  const { data: categories } = await supabase.from("categories").select("*");
  if (!categories) {
    return [];
  }
  return categories;
}

export async function getSuppliers() {
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
  const { error } = await supabase.storage
    .from("product_image")
    .remove([fileName]);
  if (error) {
    console.log(error);
  }
}

// Get product with transations history
