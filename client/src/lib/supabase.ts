import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);

// Lazy-init: only create the client when credentials are present.
// Previously, createClient was called with empty strings at module-evaluation
// time, which throws "supabaseUrl is required" and prevents the app from
// rendering in demo / CI / preview-branch scenarios.
let _client: SupabaseClient | null = null;

function getClient(): SupabaseClient {
  if (!_client) {
    if (!isSupabaseConfigured) {
      throw new Error(
        "Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.",
      );
    }
    _client = createClient(supabaseUrl, supabaseAnonKey);
  }
  return _client;
}

// Export a proxy that lazily initializes. Code that checks
// `isSupabaseConfigured` before calling supabase methods will never hit the
// throw. Code that doesn't check will get a clear error instead of a cryptic
// SDK crash at import time.
export const supabase = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    return Reflect.get(getClient(), prop);
  },
});
