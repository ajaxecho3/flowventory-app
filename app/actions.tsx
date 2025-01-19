import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getUser() {
  const supabase = await createClient();
  const { data: user } = await supabase.auth.getUser();
  if (!user) {
    revalidatePath("/", "layout");
    redirect("/login");
  }
  return user;
}
