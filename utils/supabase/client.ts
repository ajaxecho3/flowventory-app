import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/lib/database.types";
import { SupabaseClient } from "@supabase/supabase-js";

export function createClient(): SupabaseClient<Database> {
  // Create a supabase client on the browser with project's credentials
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
