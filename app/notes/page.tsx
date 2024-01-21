"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function Page() {
  const [notes, setNotes] = useState<any[] | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("notes").select();
      console.log(data);
      setNotes(data);
    };
    getData();
  }, []);

  return <pre>{JSON.stringify(notes)}</pre>;
}
