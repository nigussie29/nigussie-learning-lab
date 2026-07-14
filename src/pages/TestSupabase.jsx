import { useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function TestSupabase() {
  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .limit(1);

      console.log("DATA:", data);
      console.log("ERROR:", error);
    }

    testConnection();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        Testing Supabase Connection...
      </h1>

      <p>Open the browser console (F12).</p>
    </div>
  );
}