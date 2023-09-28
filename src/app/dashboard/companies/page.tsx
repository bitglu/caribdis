import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/supabase/models/supabase";
import CompaniesPageComponent from "./companies";

export default async function CompaniesPage() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data: companies } = await supabase.from("companies").select(
    `
    *,
    companies (id, name, email, phone, status),
    drivers (id, name, email, phone),
    vehicles (id, model, brand, year)
  `
  );

  const payload: any = companies;

  return <CompaniesPageComponent companies={payload} />;
  
}
