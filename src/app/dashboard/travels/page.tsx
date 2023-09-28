import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import TravelsPageComponent from "./travels";
import { Database } from "@/supabase/models/supabase";

export default async function TravelsPage() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data: travels } = await supabase.from("travels").select(
    `
    *,
    companies (id, name),
    drivers (id, name, email, phone),
    vehicles (id, model, brand, year)
  `
  );

  const payload: any = travels;

  return <TravelsPageComponent travels={payload} />;
}
