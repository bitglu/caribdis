import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/supabase/models/supabase";
import CompaniesPageComponent from "./companies";

export default async function CompaniesPage() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data: companies } = await supabase.from("companies").select("email, id, name, phone, status, administrator, created_at");

  const payload: any = companies;
  

  return <CompaniesPageComponent companies={payload} />;
  
}
