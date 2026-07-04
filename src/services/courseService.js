import { supabase } from "../lib/supabaseClient";

export async function getCourses() {
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) throw error;

  return data;
}